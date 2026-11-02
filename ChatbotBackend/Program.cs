using Microsoft.EntityFrameworkCore;
using ChatbotBackend.Data;
using ChatbotBackend.Services;
using ChatbotBackend.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer; // NOVO: Para o JWT
using Microsoft.IdentityModel.Tokens; // NOVO: Para as chaves do JWT
using Microsoft.OpenApi.Models; // NOVO: Para o Swagger
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();

// 1. SUBSTITUÍDO: Configuração do Swagger com suporte a Token (Cadeado) e XML
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Chatbot API", Version = "v1" });

    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
{
    Name = "Authorization",
    Type = SecuritySchemeType.ApiKey,
    Scheme = "Bearer",
    BearerFormat = "JWT",
    In = ParameterLocation.Header,
    Description = "Insira o token JWT gerado no login. Exemplo: Bearer {seu_token}"
});

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme { Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" } },
            Array.Empty<string>()
        }
    });
    
    // Suporte aos comentários XML nas rotas
    var xmlFile = $"{System.Reflection.Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = System.IO.Path.Combine(AppContext.BaseDirectory, xmlFile);
    if (System.IO.File.Exists(xmlPath)) c.IncludeXmlComments(xmlPath);
});

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler =
            System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
    });

builder.Services.AddHttpClient<GeminiService>();
builder.Services.AddScoped<IClienteService, ClienteService>();
builder.Services.AddScoped<ISessaoService, SessaoService>();

// Registo dos Repositórios 
builder.Services.AddScoped<IClienteRepository, ClienteRepository>();
builder.Services.AddScoped<ISessaoRepository, SessaoRepository>();
builder.Services.AddScoped<IMensagemRepository, MensagemRepository>();
builder.Services.AddScoped<IAdministradorRepository, AdministradorRepository>();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// 2. ADICIONADO: Configuração de Autenticação JWT
var chaveSecreta = "UmaChaveSuperSecretaParaOChatbotDaSprint4QueDeveTerMaisDe32Caracteres";
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(chaveSecreta)),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });
builder.Services.AddAuthorization();

builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirFrontend", policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("PermitirFrontend");

// 3. ADICIONADO: Middleware de Autenticação e Autorização (Tem de ser antes do Swagger e Controllers)
app.UseAuthentication();
app.UseAuthorization();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger(c =>
    {
        c.SerializeAsV2 = true; // Voltamos a ativar a compatibilidade
    });
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/", () => "API do Chatbot do Personal Trainer rodando com sucesso! 🚀");

app.MapControllers();

// Bloco para executar as migrações e os seeds automaticamente ao iniciar a aplicação
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<AppDbContext>();

    try
    {
        // Aplica as migrações pendentes no PostgreSQL automaticamente
        context.Database.Migrate();

        // 1. Inicializa o Administrador padrão com hash seguro
        DbInitializer.Initialize(context);

        // 2. Inicializa os clientes e dados de teste
        SeedData.Initialize(context);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Erro ao inicializar o banco de dados: {ex.Message}");
    }
}

app.Run();
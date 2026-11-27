using Microsoft.EntityFrameworkCore;
using ChatbotBackend.Data;
using ChatbotBackend.Services;
using ChatbotBackend.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();

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
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });

    var xmlFile = $"{System.Reflection.Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = System.IO.Path.Combine(AppContext.BaseDirectory, xmlFile);
    if (System.IO.File.Exists(xmlPath))
    {
        c.IncludeXmlComments(xmlPath);
    }
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

// Configuração de Autenticação JWT
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

app.UseAuthentication();
app.UseAuthorization();

// Swagger habilitado em qualquer ambiente (incluindo Produção no Render)
app.UseSwagger(c =>
{
    c.SerializeAsV2 = true;
});
app.UseSwaggerUI();

app.MapGet("/", () => "API do Chatbot do Personal Trainer rodando com sucesso! 🚀");

app.MapControllers();

// Bloco para executar as migrações e os seeds automaticamente ao iniciar a aplicação
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<AppDbContext>();

    try
    {
        // Aplica as migrações pendentes no PostgreSQL (Supabase) automaticamente
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

// Configura a porta dinâmica exigida pelo ambiente de deploy (Render/Docker)
var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
app.Run($"http://0.0.0.0:{port}");
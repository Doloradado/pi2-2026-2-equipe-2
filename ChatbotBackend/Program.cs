using Microsoft.EntityFrameworkCore;
using ChatbotBackend.Data;
using ChatbotBackend.Services;
using ChatbotBackend.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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

if (app.Environment.IsDevelopment())
{
    app.UseSwagger(c =>
    {
        c.SerializeAsV2 = true;
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
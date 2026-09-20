using Microsoft.EntityFrameworkCore;
using ChatbotBackend.Data;

var builder = WebApplication.CreateBuilder(args);

// Adiciona os serviços essenciais para a API e o Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configura o Entity Framework para usar o PostgreSQL com a string de conexão do appsettings.json
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configuração do pipeline HTTP e Swagger para desenvolvimento
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Rota raiz simples para testar se a API está online
app.MapGet("/", () => "API do Chatbot do Personal Trainer rodando com sucesso! 🚀");

app.Run();
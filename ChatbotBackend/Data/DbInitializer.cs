using Microsoft.AspNetCore.Identity;
using ChatbotBackend.Models;

namespace ChatbotBackend.Data
{
    public static class DbInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            // Verifica se já existe algum administrador cadastrado no banco
            if (context.Administradores.Any())
            {
                return; // O banco já foi populado anteriormente
            }

            var passwordHasher = new PasswordHasher<Administrador>();

            var adminMaster = new Administrador
            {
                Nome = "Administrador Master",
                Email = "admin@personal.com"
            };

            // Gera o hash seguro da senha padrão (nunca em texto puro!)
            adminMaster.SenhaHash = passwordHasher.HashPassword(adminMaster, "Admin123@Seguro");

            context.Administradores.Add(adminMaster);
            
            // Salva as alterações no PostgreSQL
            context.SaveChanges();
        }
    }
}
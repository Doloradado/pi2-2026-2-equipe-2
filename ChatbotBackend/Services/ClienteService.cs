using ChatbotBackend.Data;
using ChatbotBackend.Models;
using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace ChatbotBackend.Services
{
    public class ClienteService : IClienteService
    {
        private readonly AppDbContext _context;

        public ClienteService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Cliente>> ObterTodosAsync()
        {
            return await _context.Clientes
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<Cliente?> ObterPorIdAsync(Guid id)
        {
            return await _context.Clientes
                .AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<Cliente?> ObterPorTelefoneAsync(string telefone)
        {
            return await _context.Clientes
                .AsNoTracking()
                .FirstOrDefaultAsync(c => c.TelefoneWhatsapp == telefone);
        }

        public async Task<Cliente> CriarAsync(Cliente cliente)
        {
            try
            {
                _context.Clientes.Add(cliente);
                await _context.SaveChangesAsync();
                return cliente;
            }
            catch (DbUpdateException ex) when (ex.InnerException is PostgresException pgEx)
            {
                // Código 23505: Unique Violation (ex: telefone_whatsapp duplicado)
                if (pgEx.SqlState == "23505")
                {
                    throw new InvalidOperationException("Já existe um cliente cadastrado com este telefone.");
                }
                
                // Código 23503: Foreign Key Violation (ex: ID relacional inexistente)
                if (pgEx.SqlState == "23503")
                {
                    throw new InvalidOperationException("Referência a um registro inexistente (Chave Estrangeira inválida).");
                }

                throw;
            }
        }
    }
}
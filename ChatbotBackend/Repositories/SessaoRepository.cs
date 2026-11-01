using ChatbotBackend.Data;
using ChatbotBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace ChatbotBackend.Repositories
{
    public class SessaoRepository : ISessaoRepository
    {
        private readonly AppDbContext _context;

        public SessaoRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<SessaoAtendimento>> GetAllAsync()
        {
            return await _context.SessoesAtendimento.ToListAsync();
        }

        public async Task<SessaoAtendimento?> GetByIdAsync(Guid id)
        {
            return await _context.SessoesAtendimento.FindAsync(id);
        }

        public async Task<SessaoAtendimento?> GetByClienteIdAsync(Guid clienteId)
        {
            return await _context.SessoesAtendimento
                .FirstOrDefaultAsync(s => s.ClienteId == clienteId);
        }

        public async Task AddAsync(SessaoAtendimento sessao)
        {
            await _context.SessoesAtendimento.AddAsync(sessao);
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
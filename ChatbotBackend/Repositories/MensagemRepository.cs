using ChatbotBackend.Data;
using ChatbotBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace ChatbotBackend.Repositories
{
    public class MensagemRepository : IMensagemRepository
    {
        private readonly AppDbContext _context;

        public MensagemRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<HistoricoMensagem>> GetAllAsync()
        {
            return await _context.HistoricoMensagens.ToListAsync();
        }

        public async Task<HistoricoMensagem?> GetByIdAsync(Guid id)
        {
            return await _context.HistoricoMensagens.FindAsync(id);
        }

        public async Task<IEnumerable<HistoricoMensagem>> GetBySessaoIdAsync(Guid sessaoId)
        {
            return await _context.HistoricoMensagens
                .Where(m => m.SessaoId == sessaoId)
                .ToListAsync();
        }

        public async Task AddAsync(HistoricoMensagem mensagem)
        {
            await _context.HistoricoMensagens.AddAsync(mensagem);
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
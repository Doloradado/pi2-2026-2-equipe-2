using ChatbotBackend.Models;

namespace ChatbotBackend.Repositories
{
    public interface IMensagemRepository
    {
        Task<IEnumerable<HistoricoMensagem>> GetAllAsync();
        Task<HistoricoMensagem?> GetByIdAsync(Guid id);
        Task<IEnumerable<HistoricoMensagem>> GetBySessaoIdAsync(Guid sessaoId);
        Task AddAsync(HistoricoMensagem mensagem);
        Task SaveChangesAsync();
    }
}
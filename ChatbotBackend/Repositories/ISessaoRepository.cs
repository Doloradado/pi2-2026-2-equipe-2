using ChatbotBackend.Models;

namespace ChatbotBackend.Repositories
{
    public interface ISessaoRepository
    {
        Task<IEnumerable<SessaoAtendimento>> GetAllAsync();
        Task<SessaoAtendimento?> GetByIdAsync(Guid id);
        Task AddAsync(SessaoAtendimento sessao);
        Task SaveChangesAsync();
    }
}
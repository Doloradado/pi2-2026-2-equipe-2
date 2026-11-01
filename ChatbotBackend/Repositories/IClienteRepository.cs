using ChatbotBackend.Models;

namespace ChatbotBackend.Repositories
{
    public interface IClienteRepository
    {
        Task<IEnumerable<Cliente>> GetAllAsync();
        Task<Cliente?> GetByIdAsync(Guid id);
        Task AddAsync(Cliente cliente);
        Task SaveChangesAsync();
    }
}
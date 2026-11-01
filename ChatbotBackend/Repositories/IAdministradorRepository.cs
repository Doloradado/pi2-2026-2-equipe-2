using ChatbotBackend.Models;

namespace ChatbotBackend.Repositories
{
    public interface IAdministradorRepository
    {
        Task<IEnumerable<Administrador>> GetAllAsync();
        Task<Administrador?> GetByIdAsync(Guid id);
        Task<Administrador?> GetByEmailAsync(string email);
        Task AddAsync(Administrador administrador);
        Task SaveChangesAsync();
    }
}
using ChatbotBackend.Models;

namespace ChatbotBackend.Services
{
    public interface IClienteService
    {
        Task<IEnumerable<Cliente>> ObterTodosAsync();
        Task<Cliente?> ObterPorIdAsync(Guid id);
        Task<Cliente?> ObterPorTelefoneAsync(string telefone);
        Task<Cliente> CriarAsync(Cliente cliente);
    }
}
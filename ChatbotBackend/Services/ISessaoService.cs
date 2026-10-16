using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ChatbotBackend.DTOs;

namespace ChatbotBackend.Services
{
    public interface ISessaoService
    {
        Task<IEnumerable<SessaoResponseDTO>> GetSessoesAsync();
        Task<IEnumerable<MensagemResponseDTO>> GetMensagensDaSessaoAsync(Guid idSessao);
    }
}
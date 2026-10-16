using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ChatbotBackend.DTOs;
using ChatbotBackend.Models;

namespace ChatbotBackend.Services
{
    public interface ISessaoService
    {
        Task<IEnumerable<SessaoResponseDTO>> GetSessoesAsync();
        Task<IEnumerable<MensagemResponseDTO>> GetMensagensDaSessaoAsync(Guid idSessao);
        Task<HistoricoMensagem> RegistrarMensagemAsync(HistoricoMensagem mensagem);
    }
}
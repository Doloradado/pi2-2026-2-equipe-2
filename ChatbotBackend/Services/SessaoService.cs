using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ChatbotBackend.Data;
using ChatbotBackend.DTOs;

namespace ChatbotBackend.Services
{
    public class SessaoService : ISessaoService
    {
        private readonly AppDbContext _context;

        public SessaoService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<SessaoResponseDTO>> GetSessoesAsync()
        {
            return await _context.SessoesAtendimento
                .Select(s => new SessaoResponseDTO
                {
                    Id = s.Id,
                    ClienteId = s.ClienteId,
                    Status = s.Status,
                    DataInicio = s.DataInicio,
                    DataFim = s.DataFim,
                    ResumoTags = s.ResumoTags
                })
                .ToListAsync();
        }

        public async Task<IEnumerable<MensagemResponseDTO>> GetMensagensDaSessaoAsync(Guid idSessao)
        {
            var mensagens = await _context.HistoricoMensagens
                .Where(m => m.SessaoId == idSessao)
                .OrderBy(m => m.DataEnvio)
                .Select(m => new MensagemResponseDTO
                {
                    Id = m.Id,
                    IdMensagemWhatsapp = m.IdMensagemWhatsapp,
                    Remetente = m.Remetente,
                    TipoMidia = m.TipoMidia,
                    DataEnvio = m.DataEnvio
                })
                .ToListAsync();

            return mensagens;
        }
    }
}
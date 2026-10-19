
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ChatbotBackend.Data;
using ChatbotBackend.DTOs;
using ChatbotBackend.Models;

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
                    Conteudo = m.Conteudo,
                    TipoMidia = m.TipoMidia,
                    DataEnvio = m.DataEnvio
                })
                .ToListAsync();

            return mensagens;
        }

        // ====================================================================
        // NOVO MÉTODO - Implementação das Regras de Negócio (Issue #79)
        // ====================================================================
        public async Task<HistoricoMensagem> RegistrarMensagemAsync(HistoricoMensagem mensagem)
        {
            // Aplica RN-01: Validação de Existência da Sessão
            var sessaoExiste = await _context.SessoesAtendimento
                .AnyAsync(s => s.Id == mensagem.SessaoId);

            if (!sessaoExiste)
            {
                throw new InvalidOperationException("Sessão de atendimento não encontrada.");
            }

            // Aplica RN-02: Bloqueio de Mensagem Vazia
            if (string.IsNullOrWhiteSpace(mensagem.Conteudo))
            {
                throw new ArgumentException("O conteúdo da mensagem não pode estar vazio.");
            }

            // Aplica RN-03: Formatação de Identificação do WhatsApp
            if (string.IsNullOrEmpty(mensagem.IdMensagemWhatsapp))
            {
                mensagem.IdMensagemWhatsapp = $"wamid.HBgL_{Guid.NewGuid().ToString().Substring(0, 8)}";
            }

            _context.HistoricoMensagens.Add(mensagem);
            await _context.SaveChangesAsync();

            return mensagem;
        }
    }
}

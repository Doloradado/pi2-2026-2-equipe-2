
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

        public async Task<HistoricoMensagem> RegistrarMensagemAsync(HistoricoMensagem mensagem)
        {
            var sessaoExiste = await _context.SessoesAtendimento
                .AnyAsync(s => s.Id == mensagem.SessaoId);

            if (!sessaoExiste)
            {
                throw new InvalidOperationException("Sessão de atendimento não encontrada.");
            }

            if (string.IsNullOrWhiteSpace(mensagem.Conteudo))
            {
                throw new ArgumentException("O conteúdo da mensagem não pode estar vazio.");
            }

            if (string.IsNullOrEmpty(mensagem.IdMensagemWhatsapp))
            {
                mensagem.IdMensagemWhatsapp = $"wamid.HBgL_{Guid.NewGuid().ToString().Substring(0, 8)}";
            }

            _context.HistoricoMensagens.Add(mensagem);
            await _context.SaveChangesAsync();

            return mensagem;
        }

        // ====================================================================
        // NOVOS MÉTODOS - Complemento do CRUD de Sessões e Histórico
        // ====================================================================

        public async Task<SessaoResponseDTO> GetSessaoPorIdAsync(Guid id)
        {
            var sessao = await _context.SessoesAtendimento.FindAsync(id);
            if (sessao == null) return null;

            return new SessaoResponseDTO
            {
                Id = sessao.Id,
                ClienteId = sessao.ClienteId,
                Status = sessao.Status,
                DataInicio = sessao.DataInicio,
                DataFim = sessao.DataFim,
                ResumoTags = sessao.ResumoTags
            };
        }

        public async Task<bool> AtualizarStatusSessaoAsync(Guid id, string novoStatus)
        {
            var sessao = await _context.SessoesAtendimento.FindAsync(id);
            if (sessao == null) return false;

            sessao.Status = novoStatus;
            
            if (novoStatus.ToUpper() == "FINALIZADA")
            {
                sessao.DataFim = DateTime.UtcNow;
            }

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeletarSessaoAsync(Guid id)
        {
            var sessao = await _context.SessoesAtendimento.FindAsync(id);
            if (sessao == null) return false;

            _context.SessoesAtendimento.Remove(sessao);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeletarMensagemAsync(Guid id)
        {
            var mensagem = await _context.HistoricoMensagens.FindAsync(id);
            if (mensagem == null) return false;

            _context.HistoricoMensagens.Remove(mensagem);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}

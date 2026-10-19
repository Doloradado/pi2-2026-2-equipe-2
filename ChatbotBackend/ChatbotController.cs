using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChatbotBackend.Data;
using ChatbotBackend.Models;
using System;
using System.Threading.Tasks;
using System.Linq;

namespace ChatbotBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatbotController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ChatbotController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("clientes")]
        public async Task<IActionResult> GetClientes()
        {
            var clientes = await _context.Clientes.ToListAsync();
            return Ok(clientes);
        }

        [HttpGet("clientes/{id}")]
        public async Task<IActionResult> GetClientePorId(Guid id)
        {
            var cliente = await _context.Clientes
                .Include(c => c.Sessoes)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (cliente == null)
                return NotFound(new { mensagem = "Cliente não encontrado." });

            return Ok(cliente);
        }

        [HttpGet("sessoes/{sessaoId}/mensagens")]
        public async Task<IActionResult> GetMensagensPorSessao(Guid sessaoId)
        {
            var mensagens = await _context.HistoricoMensagens
                .Where(m => m.SessaoId == sessaoId)
                .OrderBy(m => m.DataEnvio)
                .ToListAsync();

            return Ok(mensagens);
        }

        [HttpPost("sessao")]
        public async Task<IActionResult> CriarSessao([FromBody] Guid clienteId)
        {
            var clienteExiste = await _context.Clientes.AnyAsync(c => c.Id == clienteId);
            if (!clienteExiste)
                return NotFound(new { mensagem = "Cliente não encontrado." });

            var novaSessao = new SessaoAtendimento
            {
                ClienteId = clienteId,
                Status = "EM_ANDAMENTO"
            };

            _context.SessoesAtendimento.Add(novaSessao);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetClientePorId), new { id = clienteId }, novaSessao);
        }

        [HttpPost("mensagem")]
        public async Task<IActionResult> RegistrarMensagem([FromBody] HistoricoMensagem mensagem)
        {
            var sessaoExiste = await _context.SessoesAtendimento.AnyAsync(s => s.Id == mensagem.SessaoId);
            if (!sessaoExiste)
                return NotFound(new { mensagem = "Sessão de atendimento não encontrada." });

            if (string.IsNullOrEmpty(mensagem.IdMensagemWhatsapp))
            {
                mensagem.IdMensagemWhatsapp = $"wamid.HBgL_{Guid.NewGuid().ToString().Substring(0, 8)}";
            }

            _context.HistoricoMensagens.Add(mensagem);
            await _context.SaveChangesAsync();

            return Ok(mensagem);
        }
    }
}
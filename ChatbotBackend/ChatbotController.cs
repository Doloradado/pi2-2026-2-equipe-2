using Microsoft.EntityFrameworkCore;
using ChatbotBackend.Data;
using ChatbotBackend.Services;
using Microsoft.AspNetCore.Mvc;
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
        private readonly GeminiService _geminiService;

        public ChatbotController(
            AppDbContext context,
            GeminiService geminiService)
        {
            _context = context;
            _geminiService = geminiService;
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
            var sessaoExiste = await _context.SessoesAtendimento
                .AnyAsync(s => s.Id == mensagem.SessaoId);

            if (!sessaoExiste)
                return NotFound(new { mensagem = "Sessão de atendimento não encontrada." });

            if (string.IsNullOrWhiteSpace(mensagem.Conteudo))
                return BadRequest(new { mensagem = "O conteúdo da mensagem não pode estar vazio." });

            if (string.IsNullOrEmpty(mensagem.IdMensagemWhatsapp))
            {
                mensagem.IdMensagemWhatsapp = $"wamid.HBgL_{Guid.NewGuid().ToString().Substring(0, 8)}";
            }

            _context.HistoricoMensagens.Add(mensagem);
            await _context.SaveChangesAsync();

            return Ok(mensagem);
        }

        [HttpPost("enviar")]
        public async Task<IActionResult> EnviarMensagem(
            [FromBody] EnviarMensagemGeminiRequest? request)
        {
            if (request == null ||
                string.IsNullOrWhiteSpace(request.Mensagem))
            {
                return BadRequest(new
                {
                    Codigo = 400,
                    Erro = "Mensagem inválida",
                    Detalhe = "O campo 'mensagem' é obrigatório e não pode estar vazio."
                });
            }

            try
            {
                var respostaIa =
                    await _geminiService.EnviarMensagemAsync(
                        request.Mensagem);

                return Ok(new
                {
                    status = "sucesso",
                    resposta = respostaIa,
                    intencao_identificada = "atendimento_geral",
                    dataHora = DateTime.UtcNow
                });
            }
            catch (Exception)
            {
                return StatusCode(500, new
                {
                    Codigo = 500,
                    Erro = "Erro ao processar a mensagem",
                    Detalhe = "Não foi possível comunicar com o serviço Gemini."
                });
            }
        }

    }

    public class EnviarMensagemGeminiRequest
    {
        public string Mensagem { get; set; } = string.Empty;
    }
}
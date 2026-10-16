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
        private readonly IClienteService _clienteService;
        private readonly ISessaoService _sessaoService;

        public ChatbotController(
            AppDbContext context,
            GeminiService geminiService,
            IClienteService clienteService, // CORREÇÃO: Vírgula adicionada aqui
            ISessaoService sessaoService)
        {
            _context = context;
            _geminiService = geminiService;
            _clienteService = clienteService;
            _sessaoService = sessaoService;
        }

        // --- ROTAS DE CLIENTES ---

        [HttpGet("clientes")]
        public async Task<IActionResult> GetClientes()
        {
            var clientes = await _clienteService.ObterTodosAsync();
            return Ok(clientes);
        }

        [HttpGet("clientes/{id}")]
        public async Task<IActionResult> GetClientePorId(Guid id)
        {
            var cliente = await _clienteService.ObterPorIdAsync(id);

            if (cliente == null)
                return NotFound(new { mensagem = "Cliente não encontrado." });

            return Ok(cliente);
        }

        [HttpPost("clientes")]
        public async Task<IActionResult> CriarCliente([FromBody] Cliente cliente)
        {
            try
            {
                var novoCliente = await _clienteService.CriarAsync(cliente);
                return CreatedAtAction(nameof(GetClientePorId), new { id = novoCliente.Id }, novoCliente);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        // =================================================================
        // --- ROTAS DE SESSÕES E HISTÓRICO (Implementação da Issue #78) ---
        // =================================================================

        [HttpGet("sessoes")]
        public async Task<IActionResult> GetSessoes()
        {
            var sessoes = await _sessaoService.GetSessoesAsync();
            return Ok(sessoes);
        }

        [HttpGet("sessoes/{sessaoId}/mensagens")]
        public async Task<IActionResult> GetMensagensPorSessao(Guid sessaoId)
        {
            // Agora a rota consome o serviço e os DTOs em vez de acessar o _context diretamente
            var mensagens = await _sessaoService.GetMensagensDaSessaoAsync(sessaoId);
            return Ok(mensagens);
        }

        // =================================================================
        // --- OUTRAS ROTAS EXISTENTES MANTIDAS ---
        // =================================================================

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

            if (string.IsNullOrWhiteSpace(mensagem.Conteudo)) // Supondo que 'Conteudo' exista na sua Model
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
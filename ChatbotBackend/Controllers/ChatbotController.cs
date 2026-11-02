using Microsoft.EntityFrameworkCore;
using ChatbotBackend.Data;
using ChatbotBackend.Services;
using Microsoft.AspNetCore.Mvc;
using ChatbotBackend.Models;
using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Authorization; // Adicionado para suportar Autenticação/Autorização

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
            IClienteService clienteService,
            ISessaoService sessaoService)
        {
            _context = context;
            _geminiService = geminiService;
            _clienteService = clienteService;
            _sessaoService = sessaoService;
        }

        // =================================================================
        // --- ROTAS DE CLIENTES ---
        // =================================================================

        /// <summary>
        /// Lista todos os clientes registados na base de dados.
        /// </summary>
        /// <response code="200">Retorna a lista de clientes.</response>
        /// <response code="401">Se não estiver autenticado.</response>
        [HttpGet("clientes")]
        [Authorize] // Rota protegida: Qualquer utilizador logado (Admin ou Atendente) pode ver
        public async Task<IActionResult> GetClientes()
        {
            var clientes = await _clienteService.ObterTodosAsync();
            return Ok(clientes);
        }

        /// <summary>
        /// Obtém os detalhes de um cliente específico pelo seu ID.
        /// </summary>
        /// <param name="id">ID do cliente.</param>
        /// <response code="200">Retorna o cliente encontrado.</response>
        /// <response code="404">Se o cliente não for encontrado.</response>
        [HttpGet("clientes/{id}")]
        [Authorize]
        public async Task<IActionResult> GetClientePorId(Guid id)
        {
            var cliente = await _clienteService.ObterPorIdAsync(id);
            if (cliente == null) return NotFound(new { mensagem = "Cliente não encontrado." });
            return Ok(cliente);
        }

        /// <summary>
        /// Regista um novo cliente no sistema.
        /// </summary>
        /// <response code="201">Retorna o cliente recém-criado.</response>
        /// <response code="400">Se houver algum erro de validação.</response>
        [HttpPost("clientes")]
        [Authorize] // Nota: Apenas utilizadores logados podem criar clientes
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
        // --- ROTAS DE SESSÕES E HISTÓRICO ---
        // =================================================================

        /// <summary>
        /// Lista todas as sessões de atendimento.
        /// </summary>
        [HttpGet("sessoes")]
        [Authorize]
        public async Task<IActionResult> GetSessoes()
        {
            var sessoes = await _sessaoService.GetSessoesAsync();
            return Ok(sessoes);
        }

        /// <summary>
        /// Obtém o histórico completo de mensagens de uma sessão específica.
        /// </summary>
        [HttpGet("sessoes/{sessaoId}/mensagens")]
        [Authorize]
        public async Task<IActionResult> GetMensagensPorSessao(Guid sessaoId)
        {
            var mensagens = await _sessaoService.GetMensagensDaSessaoAsync(sessaoId);
            return Ok(mensagens);
        }

        /// <summary>
        /// Obtém os detalhes de uma sessão de atendimento pelo seu ID.
        /// </summary>
        [HttpGet("sessoes/{id}")]
        [Authorize]
        public async Task<IActionResult> GetSessaoPorId(Guid id)
        {
            var sessao = await _sessaoService.GetSessaoPorIdAsync(id);
            if (sessao == null) return NotFound(new { mensagem = "Sessão não encontrada." });
            return Ok(sessao);
        }

        /// <summary>
        /// Atualiza o status de uma sessão (ex: FINALIZADA).
        /// </summary>
        [HttpPut("sessoes/{id}/status")]
        [Authorize]
        public async Task<IActionResult> AtualizarStatusSessao(Guid id, [FromBody] AtualizarStatusRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Status)) 
                return BadRequest(new { mensagem = "O campo Status é obrigatório." });

            var sucesso = await _sessaoService.AtualizarStatusSessaoAsync(id, request.Status);
            if (!sucesso) return NotFound(new { mensagem = "Sessão não encontrada." });
            
            return Ok(new { mensagem = "Status da sessão atualizado com sucesso." });
        }

        /// <summary>
        /// Remove permanentemente uma sessão do sistema. Apenas Administradores podem executar.
        /// </summary>
        [HttpDelete("sessoes/{id}")]
        [Authorize(Roles = "ADMIN")] // PERFIL DE AUTORIZAÇÃO RIGOROSA: Apenas o Administrador pode apagar
        public async Task<IActionResult> DeletarSessao(Guid id)
        {
            var sucesso = await _sessaoService.DeletarSessaoAsync(id);
            if (!sucesso) return NotFound(new { mensagem = "Sessão não encontrada." });
            
            return Ok(new { mensagem = "Sessão removida com sucesso." });
        }

        /// <summary>
        /// Remove permanentemente uma mensagem do histórico. Apenas Administradores podem executar.
        /// </summary>
        [HttpDelete("mensagens/{id}")]
        [Authorize(Roles = "ADMIN")] // PERFIL DE AUTORIZAÇÃO RIGOROSA
        public async Task<IActionResult> DeletarMensagem(Guid id)
        {
            var sucesso = await _sessaoService.DeletarMensagemAsync(id);
            if (!sucesso) return NotFound(new { mensagem = "Mensagem não encontrada." });
            
            return Ok(new { mensagem = "Mensagem removida com sucesso." });
        }

        // =================================================================
        // --- OUTRAS ROTAS ---
        // =================================================================

        /// <summary>
        /// Inicia uma nova sessão de atendimento para um cliente.
        /// </summary>
        [HttpPost("sessao")]
        [Authorize]
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

        /// <summary>
        /// Regista uma nova mensagem no histórico, aplicando as regras de negócio de sessão.
        /// </summary>
        [HttpPost("mensagem")]
        [Authorize]
        public async Task<IActionResult> RegistrarMensagem([FromBody] HistoricoMensagem mensagem)
        {
            try
            {
                var novaMensagem = await _sessaoService.RegistrarMensagemAsync(mensagem);
                return Ok(novaMensagem);
            }
            catch (InvalidOperationException ex)
            {
                return NotFound(new { mensagem = ex.Message });
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        /// <summary>
        /// Envia uma mensagem para o modelo de Inteligência Artificial (Gemini) e obtém a resposta.
        /// </summary>
        [HttpPost("enviar")]
        [Authorize]
        public async Task<IActionResult> EnviarMensagem([FromBody] EnviarMensagemGeminiRequest? request)
        {
            if (request == null || string.IsNullOrWhiteSpace(request.Mensagem))
            {
                return BadRequest(new { Codigo = 400, Erro = "Mensagem inválida", Detalhe = "O campo 'mensagem' é obrigatório e não pode estar vazio." });
            }

            try
            {
                var respostaIa = await _geminiService.EnviarMensagemAsync(request.Mensagem);
                return Ok(new { status = "sucesso", resposta = respostaIa, intencao_identificada = "atendimento_geral", dataHora = DateTime.UtcNow });
            }
            catch (Exception)
            {
                return StatusCode(500, new { Codigo = 500, Erro = "Erro ao processar a mensagem", Detalhe = "Não foi possível comunicar com o serviço Gemini." });
            }
        }
    }

    // =================================================================
    // CLASSES DE CONTRATO (DTOs)
    // =================================================================

    /// <summary>
    /// Modelo de contrato para envio de mensagens à IA.
    /// </summary>
    public class EnviarMensagemGeminiRequest
    {
        public string Mensagem { get; set; } = string.Empty;
    }

    /// <summary>
    /// Modelo de contrato para atualizar o status de uma sessão.
    /// </summary>
    public class AtualizarStatusRequest
    {
        public string Status { get; set; } = string.Empty;
    }
}
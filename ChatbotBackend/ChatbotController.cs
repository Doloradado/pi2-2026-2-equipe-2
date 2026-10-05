using Microsoft.AspNetCore.Mvc;
using ChatbotBackend.Services;

namespace ChatbotBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChatbotController : ControllerBase
{
    private readonly GeminiService _geminiService;

    public ChatbotController(GeminiService geminiService)
    {
        _geminiService = geminiService;
    }

    [HttpPost("enviar")]
    public async Task<IActionResult> EnviarMensagem([FromBody] EnviarMensagemRequest request)
    {
        if (request == null || string.IsNullOrWhiteSpace(request.Mensagem))
        {
            return BadRequest(new ErrorResponse
            {
                Codigo = 400,
                Erro = "Mensagem inválida",
                Detalhe = "O campo 'mensagem' é obrigatório e não pode estar vazio."
            });
        }

        try
        {
            var respostaIa = await _geminiService.EnviarMensagemAsync(request.Mensagem);
            
            return Ok(new
            {
                status = "sucesso",
                resposta = respostaIa,
                intencao_identificada = "atendimento_geral",
                dataHora = DateTime.UtcNow
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new ErrorResponse
            {
                Codigo = 500,
                Erro = "Erro interno ao processar a mensagem",
                Detalhe = $"Falha ao comunicar com o serviço Gemini: {ex.Message}"
            });
        }
    }

    [HttpGet("sessoes/{sessaoId:int}/historico")]
    public IActionResult ObterHistoricoSessao(int sessaoId)
    {
        if (sessaoId <= 0)
        {
            return BadRequest(new ErrorResponse
            {
                Codigo = 400,
                Erro = "Parâmetro inválido",
                Detalhe = "O ID da sessão deve ser um número inteiro maior que zero."
            });
        }

        if (sessaoId != 1)
        {
            return NotFound(new ErrorResponse
            {
                Codigo = 404,
                Erro = "Sessão não encontrada",
                Detalhe = $"Nenhuma sessão de atendimento encontrada com o ID {sessaoId}."
            });
        }

        var historicoMock = new[]
        {
            new { id = 1, remetente = "usuario", texto = "Olá, gostaria de informações sobre os serviços.", dataHora = DateTime.UtcNow.AddMinutes(-5) },
            new { id = 2, remetente = "bot", texto = "Olá! Como posso ajudar você hoje?", dataHora = DateTime.UtcNow.AddMinutes(-4) }
        };

        return Ok(new
        {
            sessaoId = sessaoId,
            totalMensagens = historicoMock.Length,
            mensagens = historicoMock
        });
    }

    [HttpPost("sessoes")]
    public IActionResult IniciarSessao([FromBody] IniciarSessaoRequest request)
    {
        if (request == null || string.IsNullOrWhiteSpace(request.Telefone))
        {
            return BadRequest(new ErrorResponse
            {
                Codigo = 400,
                Erro = "Dados de sessão inválidos",
                Detalhe = "O campo 'telefone' é obrigatório para iniciar uma sessão de atendimento."
            });
        }

        var sessaoCriada = new
        {
            sessaoId = 101,
            clienteTelefone = request.Telefone,
            status = "Ativa",
            dataInicio = DateTime.UtcNow,
            mensagem = "Sessão de atendimento iniciada com sucesso."
        };

        return Created($"/api/Chatbot/sessoes/101", sessaoCriada);
    }

    [HttpGet("sessoes/{sessaoId:int}")]
    public IActionResult ObterSessao(int sessaoId)
    {
        if (sessaoId != 101 && sessaoId != 1)
        {
            return NotFound(new ErrorResponse
            {
                Codigo = 404,
                Erro = "Sessão não encontrada",
                Detalhe = $"A sessão {sessaoId} não existe ou já foi encerrada."
            });
        }

        return Ok(new
        {
            sessaoId = sessaoId,
            status = "Ativa",
            cliente = new { id = 1, nome = "Cliente Teste", telefone = "+5588999998888" },
            dataInicio = DateTime.UtcNow.AddHours(-1)
        });
    }

    [HttpGet("clientes/{telefone}")]
    public IActionResult ObterClientePorTelefone(string telefone)
    {
        if (string.IsNullOrWhiteSpace(telefone) || telefone.Length < 8)
        {
            return BadRequest(new ErrorResponse
            {
                Codigo = 400,
                Erro = "Telefone inválido",
                Detalhe = "Forneça um número de telefone válido para realizar a busca."
            });
        }

        if (telefone != "5588999998888" && telefone != "+5588999998888")
        {
            return NotFound(new ErrorResponse
            {
                Codigo = 404,
                Erro = "Cliente não cadastrado",
                Detalhe = $"Nenhum cliente cadastrado no sistema com o telefone {telefone}."
            });
        }

        return Ok(new
        {
            clienteId = 1,
            nome = "Maria Oliveira",
            telefone = telefone,
            dataCadastro = DateTime.UtcNow.AddDays(-30)
        });
    }
}

public class EnviarMensagemRequest
{
    public string Mensagem { get; set; } = string.Empty;
}

public class IniciarSessaoRequest
{
    public string Telefone { get; set; } = string.Empty;
}

public class ErrorResponse
{
    public int Codigo { get; set; }
    public string Erro { get; set; } = string.Empty;
    public string Detalhe { get; set; } = string.Empty;
}
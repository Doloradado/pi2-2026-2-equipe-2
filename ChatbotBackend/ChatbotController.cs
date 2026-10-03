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
    public async Task<IActionResult> EnviarMensagem([FromBody] string mensagem)
    {
        if (string.IsNullOrWhiteSpace(mensagem))
        {
            return BadRequest("A mensagem não pode estar vazia.");
        }

        try
        {
            var respostaIa = await _geminiService.EnviarMensagemAsync(mensagem);
            return Ok(new { resposta = respostaIa });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { erro = $"Erro ao comunicar com o Gemini: {ex.Message}" });
        }
    }
}
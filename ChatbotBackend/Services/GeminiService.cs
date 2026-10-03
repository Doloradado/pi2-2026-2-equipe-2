using System.Text;
using System.Text.Json;
using Microsoft.Extensions.Configuration;

namespace ChatbotBackend.Services;

public class GeminiService
{
    private readonly string _apiKey;
    private readonly HttpClient _httpClient;

    public GeminiService(IConfiguration configuration)
    {
        _apiKey = configuration["Gemini:ApiKey"] ?? throw new ArgumentNullException("A API Key não foi encontrada.");
        _httpClient = new HttpClient();
    }

    public async Task<string> EnviarMensagemAsync(string mensagem)
    {
        // URL direta para a versão V1 estável da Google usando o modelo gemini-1.5-flash
        var url = $"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key={_apiKey}";
        var requestBody = new
        {
            contents = new[]
            {
                new { parts = new[] { new { text = mensagem } } }
            }
        };

        var content = new StringContent(JsonSerializer.Serialize(requestBody), Encoding.UTF8, "application/json");
        var response = await _httpClient.PostAsync(url, content);
        var responseString = await response.Content.ReadAsStringAsync();

        if (!response.IsSuccessStatusCode)
        {
            throw new Exception($"Erro da Google API: {responseString}");
        }

        // Navega no JSON de resposta para extrair apenas o texto da IA
        using var jsonDocument = JsonDocument.Parse(responseString);
        var textoResposta = jsonDocument.RootElement
            .GetProperty("candidates")[0]
            .GetProperty("content")
            .GetProperty("parts")[0]
            .GetProperty("text").GetString();

        return textoResposta ?? "A IA não retornou nenhuma resposta.";
    }
}
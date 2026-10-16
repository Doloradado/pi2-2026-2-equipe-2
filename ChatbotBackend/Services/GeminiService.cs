using System.Net;
using System.Text;
using System.Text.Json;
using Microsoft.Extensions.Configuration;

namespace ChatbotBackend.Services;

public class GeminiService
{
    private readonly string _apiKey;
    private readonly HttpClient _httpClient;

    public GeminiService(IConfiguration configuration, HttpClient httpClient)
    {
        var rawKey = configuration["Gemini:ApiKey"];
        
        _apiKey = rawKey?.Trim() 
            ?? throw new ArgumentNullException("A API Key do Gemini não foi configurada.");
            
        _httpClient = httpClient;
        
        _httpClient.DefaultRequestHeaders.Authorization = null;
    }

    public async Task<string> EnviarMensagemAsync(string mensagem)
    {
       var url = $"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key={_apiKey}";

        var requestBody = new
        {
            contents = new[]
            {
                new { parts = new[] { new { text = mensagem } } }
            }
        };

        var jsonContent = JsonSerializer.Serialize(requestBody);
        var content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync(url, content);
        var responseString = await response.Content.ReadAsStringAsync();

        if (!response.IsSuccessStatusCode)
        {
            if (response.StatusCode == HttpStatusCode.ServiceUnavailable)
            {
                return "O nosso assistente virtual está a experienciar um pico de acessos neste momento. Por favor, aguarde uns instantes e tente novamente.";
            }

            if (response.StatusCode == HttpStatusCode.TooManyRequests)
            {
                return "Atingimos o limite de mensagens permitidas por minuto. Por favor, aguarde um pouco antes de enviar nova mensagem.";
            }

            throw new Exception($"Erro na API do Google ({response.StatusCode}): {responseString}");
        }

        using var jsonDocument = JsonDocument.Parse(responseString);
        var root = jsonDocument.RootElement;

        if (root.TryGetProperty("candidates", out var candidates) && candidates.GetArrayLength() > 0)
        {
            var candidate = candidates[0];
            if (candidate.TryGetProperty("content", out var contentElem) &&
                contentElem.TryGetProperty("parts", out var parts) &&
                parts.GetArrayLength() > 0)
            {
                var text = parts[0].GetProperty("text").GetString();
                return text ?? "A IA não retornou nenhum texto.";
            }
        }

        return "Não foi possível extrair uma resposta válida da IA.";
    }
}
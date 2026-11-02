using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChatbotBackend.Data;
using ChatbotBackend.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity; // Adicionado para suportar o verificador de senha da sua equipa

namespace ChatbotBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Autentica um administrador e gera um Token JWT.
        /// </summary>
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto request)
        {
            // 1. Busca o administrador pelo email
            var admin = await _context.Set<Administrador>()
                .FirstOrDefaultAsync(a => a.Email == request.Email);

            if (admin == null)
            {
                return Unauthorized(new { mensagem = "Usuário ou senha inválidos." });
            }

            // 2. Valida a senha usando o mesmo PasswordHasher do DbInitializer
            var passwordHasher = new PasswordHasher<Administrador>();
            var resultado = passwordHasher.VerifyHashedPassword(admin, admin.SenhaHash, request.Senha);

            if (resultado == PasswordVerificationResult.Failed)
            {
                return Unauthorized(new { mensagem = "Usuário ou senha inválidos." });
            }

            // 3. Gera o Token JWT usando a chave configurada no Program.cs
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("UmaChaveSuperSecretaParaOChatbotDaSprint4QueDeveTerMaisDe32Caracteres");
            
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, admin.Id.ToString()),
                    new Claim(ClaimTypes.Email, admin.Email),
                    new Claim(ClaimTypes.Role, "ADMIN") // Define o perfil como ADMIN
                }),
                Expires = DateTime.UtcNow.AddHours(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            
            return Ok(new 
            { 
                mensagem = "Login realizado com sucesso!",
                token = tokenHandler.WriteToken(token) 
            });
        }
    }

    public class LoginDto
    {
        public string Email { get; set; } = string.Empty;
        public string Senha { get; set; } = string.Empty;
    }
}
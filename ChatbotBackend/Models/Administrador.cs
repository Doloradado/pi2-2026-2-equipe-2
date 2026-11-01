using System.ComponentModel.DataAnnotations;

namespace ChatbotBackend.Models
{
    public class Administrador
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        [MaxLength(150)]
        public string Nome { get; set; } = string.Empty;

        [Required]
        [MaxLength(150)]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string SenhaHash { get; set; } = string.Empty; // Nunca armazenar texto puro!

        public DateTime DataCriacao { get; set; } = DateTime.UtcNow;
    }
}
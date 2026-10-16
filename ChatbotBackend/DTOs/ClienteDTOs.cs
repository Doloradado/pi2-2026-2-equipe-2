using System;
using System.ComponentModel.DataAnnotations;

namespace ChatbotBackend.DTOs
{
    public class ClienteCreateDTO
    {
        [Required(ErrorMessage = "O telefone do WhatsApp é obrigatório.")]
        [MaxLength(20)]
        public string TelefoneWhatsapp { get; set; } = string.Empty;

        [MaxLength(100)]
        public string? Nome { get; set; }
    }

    public class ClienteResponseDTO
    {
        public Guid Id { get; set; }
        public string TelefoneWhatsapp { get; set; } = string.Empty;
        public string? Nome { get; set; }
        public DateTime DataCadastro { get; set; }
    }
}
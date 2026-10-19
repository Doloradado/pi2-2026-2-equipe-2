using System;
using System.Collections.Generic;

namespace ChatbotBackend.DTOs
{
    public class SessaoResponseDTO
    {
        public Guid Id { get; set; }
        public Guid ClienteId { get; set; }
        public string? Status { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime? DataFim { get; set; }
        public string? ResumoTags { get; set; }
    }


    public class MensagemResponseDTO
    {
        public Guid Id { get; set; }
        public string IdMensagemWhatsapp { get; set; } = string.Empty;
        public string Remetente { get; set; } = string.Empty;
        public string? Conteudo { get; set; }
        public string? TipoMidia { get; set; }
        public DateTime DataEnvio { get; set; }
    }

}
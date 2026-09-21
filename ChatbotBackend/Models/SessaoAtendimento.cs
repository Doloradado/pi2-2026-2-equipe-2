using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatbotBackend.Models
{
    [Table("sessoes_atendimento")]
    public class SessaoAtendimento
    {
        [Key]
        [Column("id")]
        public Guid Id { get; set; }

        [Required]
        [Column("id_cliente")]
        public Guid ClienteId { get; set; }

        [Column("status")]
        public string? Status { get; set; }

        [Column("data_inicio")]
        public DateTime DataInicio { get; set; } = DateTime.UtcNow;

        [Column("data_fim")]
        public DateTime? DataFim { get; set; }

        [Column("resumo_tags")]
        public string? ResumoTags { get; set; }

        [ForeignKey("ClienteId")]
        public virtual Cliente? Cliente { get; set; }

        // Relacionamento (1:N com Historico de Mensagens)
        public virtual ICollection<HistoricoMensagem> Mensagens { get; set; } = new List<HistoricoMensagem>();
    }
}
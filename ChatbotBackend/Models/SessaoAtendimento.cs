using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatbotBackend.Models
{
    [Table("sessoes_atendimento")]
    public class SessaoAtendimento
    {
        [Key]
        [Column("id")]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        [Column("id_cliente")]
        public Guid IdCliente { get; set; }

        [ForeignKey("IdCliente")]
        public Cliente? Cliente { get; set; }

        [Required]
        [MaxLength(30)]
        [Column("status")]
        public string Status { get; set; } = "BOT_ATENDENDO";

        [Column("data_inicio")]
        public DateTime DataInicio { get; set; } = DateTime.UtcNow;

        [Column("data_fim")]
        public DateTime? DataFim { get; set; }

        [MaxLength(255)]
        [Column("resumo_tags")]
        public string? ResumoTags { get; set; }
    }
}
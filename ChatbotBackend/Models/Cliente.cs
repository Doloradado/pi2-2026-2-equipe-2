using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatbotBackend.Models
{
    [Table("clientes")]
    public class Cliente
    {
        [Key]
        [Column("id")]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        [MaxLength(20)]
        [Column("telefone_whatsapp")]
        public string TelefoneWhatsapp { get; set; } = string.Empty;

        [MaxLength(100)]
        [Column("nome")]
        public string? Nome { get; set; }

        [Column("data_cadastro")]
        public DateTime DataCadastro { get; set; } = DateTime.UtcNow;
    }
}
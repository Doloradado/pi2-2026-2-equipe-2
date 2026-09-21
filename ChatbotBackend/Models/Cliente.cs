using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace ChatbotBackend.Models
{
    [Table("clientes")]
    [Index(nameof(TelefoneWhatsapp), IsUnique = true)]
    public class Cliente
    {
        [Key]
        [Column("id")]
        public Guid Id { get; set; }

        [Required]
        [Column("telefone_whatsapp")]
        public string TelefoneWhatsapp { get; set; } = string.Empty;

        [Column("nome")]
        public string? Nome { get; set; }

        [Column("data_cadastro")]
        public DateTime DataCadastro { get; set; } = DateTime.UtcNow;

        public virtual ICollection<SessaoAtendimento> Sessoes { get; set; } = new List<SessaoAtendimento>();
    }
}
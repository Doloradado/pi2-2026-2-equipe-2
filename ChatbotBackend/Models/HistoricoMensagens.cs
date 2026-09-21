using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace ChatbotBackend.Models
{
    [Table("historico_mensagens")]
    [Index(nameof(IdMensagemWhatsapp), IsUnique = true)]
    public class HistoricoMensagem
    {
        [Key]
        [Column("id")]
        public Guid Id { get; set; }

        [Required]
        [Column("id_sessao")]
        public Guid SessaoId { get; set; }

        [Column("id_mensagem_whatsapp")]
        public string? IdMensagemWhatsapp { get; set; }

        [Column("remetente")]
        public string? Remetente { get; set; }

        [Column("conteudo")]
        public string? Conteudo { get; set; }

        [Column("tipo_midia")]
        public string? TipoMidia { get; set; }

        [Column("url_midia")]
        public string? UrlMidia { get; set; }

        [Column("texto_transcrito")]
        public string? TextoTranscrito { get; set; }

        [Column("intencao_identificada")] // Corrigido do MER (agora como string)
        public string? IntencaoIdentificada { get; set; }

        [Column("data_envio")]
        public DateTime DataEnvio { get; set; } = DateTime.UtcNow;

        [ForeignKey("SessaoId")]
        public virtual SessaoAtendimento? Sessao { get; set; }
    }
}
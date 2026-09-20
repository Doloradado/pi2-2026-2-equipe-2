using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatbotBackend.Models
{
    [Table("historico_mensagens")]
    public class HistoricoMensagens
    {
        [Key]
        [Column("id")]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        [Column("id_sessao")]
        public Guid IdSessao { get; set; }

        [ForeignKey("IdSessao")]
        public SessaoAtendimento? SessaoAtendimento { get; set; }

        [MaxLength(100)]
        [Column("id_mensagem_whatsapp")]
        public string? IdMensagemWhatsapp { get; set; }

        [Required]
        [MaxLength(30)]
        [Column("remetente")]
        public string Remetente { get; set; } = "CLIENTE"; // CLIENTE, BOT, ADMINISTRADOR

        [Column("conteudo")]
        public string? Conteudo { get; set; }

        [MaxLength(20)]
        [Column("tipo_midia")]
        public string TipoMidia { get; set; } = "TEXTO";

        [MaxLength(255)]
        [Column("url_midia")]
        public string? UrlMidia { get; set; }

        [Column("texto_transcrito")]
        public string? TextoTranscrito { get; set; }

        [MaxLength(100)]
        [Column("intencao_identificada")]
        public string? IntencaoIdentificada { get; set; }

        [Column("data_envio")]
        public DateTime DataEnvio { get; set; } = DateTime.UtcNow;
    }
}
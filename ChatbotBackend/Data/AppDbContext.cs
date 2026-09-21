using Microsoft.EntityFrameworkCore;
using ChatbotBackend.Models;

namespace ChatbotBackend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<SessaoAtendimento> SessoesAtendimento { get; set; }
        public DbSet<HistoricoMensagem> HistoricoMensagens { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.HasIndex(e => e.TelefoneWhatsapp).IsUnique();
                entity.Property(e => e.TelefoneWhatsapp).IsRequired().HasMaxLength(20);
                entity.Property(e => e.Nome).HasMaxLength(100);
                entity.Property(e => e.DataCadastro).HasDefaultValueSql("CURRENT_TIMESTAMP");
            });

            modelBuilder.Entity<SessaoAtendimento>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Status).IsRequired().HasMaxLength(30);
                entity.Property(e => e.DataInicio).HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.HasOne(s => s.Cliente)
                      .WithMany(c => c.Sessoes)
                      .HasForeignKey(s => s.ClienteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });

            modelBuilder.Entity<HistoricoMensagem>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.HasIndex(e => e.IdMensagemWhatsapp).IsUnique();
                entity.Property(e => e.Remetente).IsRequired().HasMaxLength(30);
                entity.Property(e => e.TipoMidia).HasMaxLength(20).HasDefaultValue("TEXTO");
                entity.Property(e => e.DataEnvio).HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.HasOne(h => h.Sessao)
                      .WithMany(s => s.Mensagens)
                      .HasForeignKey(h => h.SessaoId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
        }
    }
}
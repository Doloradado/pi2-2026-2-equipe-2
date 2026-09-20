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
        public DbSet<HistoricoMensagens> HistoricoMensagens { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configuração da tabela Cliente
            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.HasIndex(e => e.TelefoneWhatsapp).IsUnique();
                entity.Property(e => e.TelefoneWhatsapp).IsRequired().HasMaxLength(20);
                entity.Property(e => e.Nome).HasMaxLength(100);
                entity.Property(e => e.DataCadastro).HasDefaultValueSql("CURRENT_TIMESTAMP");
            });

            // Configuração da tabela SessaoAtendimento
            modelBuilder.Entity<SessaoAtendimento>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Status).IsRequired().HasMaxLength(30);
                entity.Property(e => e.DataInicio).HasDefaultValueSql("CURRENT_TIMESTAMP");

                // Relacionamento com Cliente (1:N)
                entity.HasOne(s => s.Cliente)
                      .WithMany()
                      .HasForeignKey(s => s.IdCliente)
                      .OnDelete(DeleteBehavior.Cascade);
            });

            // Configuração da tabela HistoricoMensagens
            modelBuilder.Entity<HistoricoMensagens>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.HasIndex(e => e.IdMensagemWhatsapp).IsUnique();
                entity.Property(e => e.Remetente).IsRequired().HasMaxLength(30);
                entity.Property(e => e.TipoMidia).HasMaxLength(20).HasDefaultValue("TEXTO");
                entity.Property(e => e.DataEnvio).HasDefaultValueSql("CURRENT_TIMESTAMP");

                // Relacionamento com SessaoAtendimento (1:N)
                entity.HasOne(h => h.SessaoAtendimento)
                      .WithMany()
                      .HasForeignKey(h => h.IdSessao)
                      .OnDelete(DeleteBehavior.Cascade);
            });
        }
    }
}
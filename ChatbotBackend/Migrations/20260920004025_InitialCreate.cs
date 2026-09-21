using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatbotBackend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "clientes",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    telefone_whatsapp = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    nome = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: true),
                    data_cadastro = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_clientes", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "sessoes_atendimento",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    id_cliente = table.Column<Guid>(type: "uuid", nullable: false),
                    status = table.Column<string>(type: "character varying(30)", maxLength: 30, nullable: false),
                    data_inicio = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    data_fim = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    resumo_tags = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_sessoes_atendimento", x => x.id);
                    table.ForeignKey(
                        name: "FK_sessoes_atendimento_clientes_id_cliente",
                        column: x => x.id_cliente,
                        principalTable: "clientes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "historico_mensagens",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    id_sessao = table.Column<Guid>(type: "uuid", nullable: false),
                    id_mensagem_whatsapp = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: true),
                    remetente = table.Column<string>(type: "character varying(30)", maxLength: 30, nullable: false),
                    conteudo = table.Column<string>(type: "text", nullable: true),
                    tipo_midia = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    url_midia = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: true),
                    texto_transcrito = table.Column<string>(type: "text", nullable: true),
                    intencao_identificada = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: true),
                    data_envio = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_historico_mensagens", x => x.id);
                    table.ForeignKey(
                        name: "FK_historico_mensagens_sessoes_atendimento_id_sessao",
                        column: x => x.id_sessao,
                        principalTable: "sessoes_atendimento",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_historico_mensagens_id_sessao",
                table: "historico_mensagens",
                column: "id_sessao");

            migrationBuilder.CreateIndex(
                name: "IX_sessoes_atendimento_id_cliente",
                table: "sessoes_atendimento",
                column: "id_cliente");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "historico_mensagens");

            migrationBuilder.DropTable(
                name: "sessoes_atendimento");

            migrationBuilder.DropTable(
                name: "clientes");
        }
    }
}

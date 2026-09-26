using ChatbotBackend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ChatbotBackend.Data
{
    public static class SeedData
    {
        public static void Initialize(AppDbContext context)
        {
            if (context.Clientes.Any())
            {
                return;   
            }

            var clientes = new List<Cliente>();
            for (int i = 1; i <= 10; i++)
            {
                clientes.Add(new Cliente 
                { 
                    Nome = $"Cliente Teste {i}", 
                    TelefoneWhatsapp = $"55119999900{i:D2}" 
                });
            }
            context.Clientes.AddRange(clientes);
            context.SaveChanges();

            var sessoes = new List<SessaoAtendimento>();
            foreach (var cliente in clientes)
            {
                sessoes.Add(new SessaoAtendimento 
                { 
                    ClienteId = cliente.Id, 
                    Status = "FINALIZADA" 
                });
            }
            context.SessoesAtendimento.AddRange(sessoes);
            context.SaveChanges();
            var mensagens = new List<HistoricoMensagem>();
            for (int i = 0; i < sessoes.Count; i++)
            {
                mensagens.Add(new HistoricoMensagem 
                { 
                    SessaoId = sessoes[i].Id,
                    IdMensagemWhatsapp = $"wamid.HBgL_{Guid.NewGuid().ToString().Substring(0, 8)}",
                    Remetente = "USUARIO",
                    TipoMidia = "TEXTO"
                });
            }
            context.HistoricoMensagens.AddRange(mensagens);
            context.SaveChanges();
        }
    }
}
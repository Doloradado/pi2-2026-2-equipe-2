using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChatbotBackend.Data;
using ChatbotBackend.Models;
using ChatbotBackend.DTOs;

namespace ChatbotBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetClientes()
        {
            var clientes = await _context.Clientes
                .Select(c => new ClienteResponseDTO
                {
                    Id = c.Id,
                    TelefoneWhatsapp = c.TelefoneWhatsapp,
                    Nome = c.Nome,
                    DataCadastro = c.DataCadastro
                })
                .ToListAsync();

            return Ok(clientes);
        }

        [HttpPost]
        public async Task<IActionResult> CreateCliente([FromBody] ClienteCreateDTO dto)
        {
            if (!ModelState.IsValid) 
                return BadRequest(ModelState);

            var clienteExiste = await _context.Clientes.AnyAsync(c => c.TelefoneWhatsapp == dto.TelefoneWhatsapp);
            if (clienteExiste)
                return Conflict(new { Erro = "Este telefone já está cadastrado." });

            var novoCliente = new Cliente 
            { 
                TelefoneWhatsapp = dto.TelefoneWhatsapp, 
                Nome = dto.Nome 
            };

            _context.Clientes.Add(novoCliente);
            await _context.SaveChangesAsync();
            
            return CreatedAtAction(nameof(GetClientes), new { id = novoCliente.Id }, new ClienteResponseDTO 
            {
                Id = novoCliente.Id,
                TelefoneWhatsapp = novoCliente.TelefoneWhatsapp,
                Nome = novoCliente.Nome,
                DataCadastro = novoCliente.DataCadastro
            });
        }
    }
}
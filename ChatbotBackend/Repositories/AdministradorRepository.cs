using ChatbotBackend.Data;
using ChatbotBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace ChatbotBackend.Repositories
{
    public class AdministradorRepository : IAdministradorRepository
    {
        private readonly AppDbContext _context;

        public AdministradorRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Administrador>> GetAllAsync()
        {
            return await _context.Administradores.ToListAsync();
        }

        public async Task<Administrador?> GetByIdAsync(Guid id)
        {
            return await _context.Administradores.FindAsync(id);
        }

        public async Task<Administrador?> GetByEmailAsync(string email)
        {
            return await _context.Administradores
                .FirstOrDefaultAsync(a => a.Email == email);
        }

        public async Task AddAsync(Administrador administrador)
        {
            await _context.Administradores.AddAsync(administrador);
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
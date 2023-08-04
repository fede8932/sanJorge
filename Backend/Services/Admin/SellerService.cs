using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Services.Admin
{
    public class SellerService : ISellerService
    {
        private readonly OfficeDb _dbContext;

        public SellerService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> CreateSellerAsync(Seller seller) // crear vendedor
        {
            try
            {
                var user = await _dbContext.Users.FirstOrDefaultAsync(
                    user => user.id == seller.userId
                );
                if (user == null)
                {
                    throw new ArgumentNullException(nameof(user), "El usuario no puede ser null");
                }
                seller.user = user;
                _dbContext.Sellers.Add(seller);
                await _dbContext.SaveChangesAsync();
                return "Registrado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Seller>> GetSellersAsync() // Listar vendedores
        {
            try
            {
                return await _dbContext.Sellers.Include(seller => seller.user).ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Seller>> GetSellersBydataAsync(string text, string by) // Listar vendedores
        {
            try
            {
                if (by == "cuil")
                {
                    var sellers = await _dbContext.Sellers
                        .Where(s => s.cuil.Contains(text))
                        .Include(s => s.user)
                        .ToListAsync();
                    return sellers;
                }
                else
                {
                    var users = await _dbContext.Users
                        .Where(u => u.name.Contains(text) || u.lastName.Contains(text))
                        .Include(u => u.seller)
                        .ToListAsync();

                    // Cargar los vendedores relacionados después de obtener los usuarios
                    var sellers = users
                        .Where(user => user.seller != null)
                        .Select(user => user.seller)
                        .ToList();
                    return sellers;
                }
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> DeleteSellerAsync(int id) // desactivar vendedores
        {
            try
            {
                var vendedor = await _dbContext.Sellers.SingleOrDefaultAsync(
                    seller => seller.id == id
                );
                if (vendedor == null)
                {
                    throw new ArgumentNullException(
                        nameof(vendedor),
                        "El vendedor no puede ser null"
                    );
                }
                var user = await _dbContext.Users.SingleOrDefaultAsync(
                    user => user.id == vendedor.userId
                );
                if (user == null)
                {
                    throw new ArgumentNullException(nameof(user), "El user no puede ser null");
                }
                user.status = false;
                await _dbContext.SaveChangesAsync();
                return "Vendedor desactivado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<Seller> UpdateSellerAsync(int id, UpdateSellerDto data) // editar vendedores
        {
            try
            {
                var vendedor = await _dbContext.Sellers
                    .Include(s => s.user) // Incluir la relación con User
                    .SingleOrDefaultAsync(s => s.id == id);
                if (vendedor == null)
                {
                    throw new ArgumentNullException(
                        nameof(vendedor),
                        "El vendedor no puede ser null"
                    );
                }
                vendedor.user.email = data.email;
                vendedor.altura = data.altura;
                vendedor.calle = data.calle;
                vendedor.localidad = data.localidad;
                vendedor.codigoPostal = data.codigoPostal;
                vendedor.telefono = data.telefono;
                vendedor.comisionBase= data.comisionBase;
                vendedor.comisionOferta = data.comisionOferta;
                _dbContext.Entry(vendedor).State = EntityState.Modified;
                await _dbContext.SaveChangesAsync();
                return vendedor;
            }
            catch
            {
                throw;
            }
        }
    }

    public interface ISellerService
    {
        Task<string> CreateSellerAsync(Seller seller);
        Task<IEnumerable<Seller>> GetSellersAsync();
        Task<IEnumerable<Seller>> GetSellersBydataAsync(string text, string by);
        Task<Seller> UpdateSellerAsync(int id, UpdateSellerDto data);
        Task<string> DeleteSellerAsync(int id);
    }
}

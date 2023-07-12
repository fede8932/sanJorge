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

        public async Task<string> UpdateSellerAsync(int id, UpdateSellerDto data) // editar vendedores
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
                var dataUpdate = new Dictionary<string, object>();
                foreach (var propiedad in data.GetType().GetProperties())
                {
                    string nombrePropiedad = propiedad.Name;
                    var valorPropiedad = propiedad.GetValue(data);
                    if (valorPropiedad != null)
                    {
                        dataUpdate.Add(nombrePropiedad, valorPropiedad);
                    }
                }
                _dbContext.Entry(vendedor).CurrentValues.SetValues(dataUpdate);
                await _dbContext.SaveChangesAsync();
                return "Datos de vendedor actualizados";
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

        Task<string> UpdateSellerAsync(int id, UpdateSellerDto data);
        Task<string> DeleteSellerAsync(int id);
    }
}

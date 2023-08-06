using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Services.Admin
{
    public class BrandService : IBrandService
    {
        private readonly OfficeDb _dbContext;

        public BrandService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> CreateBrandAsync(int supplierId, Brand brand) // crear marca
        {
            try
            {
                var supplier = await _dbContext.Suppliers.FirstOrDefaultAsync(
                    supplier => supplier.id == supplierId
                );
                if (supplier == null)
                {
                    throw new ArgumentNullException(
                        nameof(supplier),
                        "No es posible registrar marca sin proveedor"
                    );
                }
                var brandSupplier = new BrandSupplier { brand = brand, supplier = supplier };
                _dbContext.Brands.Add(brand);
                _dbContext.BrandSuppliers.Add(brandSupplier);
                await _dbContext.SaveChangesAsync();
                return "Registrado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Brand>> GetBrandsAsync()
        {
            try
            {
                return await _dbContext.Brands.ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> UpdateBrandAsync(int id, UpdateBrandDto data) // editar nombre de marca
        {
            try
            {
                var brand = await _dbContext.Brands.SingleOrDefaultAsync(brand => brand.id == id);
                if (brand == null)
                {
                    throw new ArgumentNullException(
                        nameof(brand),
                        "No existe marca en los registros"
                    );
                }
                _dbContext.Entry(brand).CurrentValues.SetValues(data);
                await _dbContext.SaveChangesAsync();
                return "Marca actualizada";
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> AddBrandSupplierAsync(int brandId, int supplierId) // agregar proveedor a marca
        {
            try
            {
                var brand = await _dbContext.Brands.SingleOrDefaultAsync(
                    brand => brand.id == brandId
                );
                if (brand == null)
                {
                    throw new ArgumentNullException(
                        nameof(brand),
                        "No existe marca en los registros"
                    );
                }
                var supplier = await _dbContext.Suppliers.SingleOrDefaultAsync(
                    supplier => supplier.id == supplierId
                );
                if (supplier == null)
                {
                    throw new ArgumentNullException(nameof(brand), "No proveedor en los registros");
                }
                var brandSupplier = new BrandSupplier { brand = brand, supplier = supplier };
                _dbContext.BrandSuppliers.Add(brandSupplier);
                await _dbContext.SaveChangesAsync();
                return "Marca actualizada";
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Brand>> GetBrandByDataAsync(string data)
        {
            var filteredBrands = await _dbContext.Brands
                .Where(b => b.name.Contains(data) || b.code.Contains(data))
                .ToListAsync();
            return filteredBrands;
        }
    
        public async Task<IEnumerable<Brand>> GetBrandByRazonSocialAsync(string rs)
        {
            var filteredBrands = await _dbContext.Brands
            .Include(b => b.brandSuppliers)
            .ThenInclude(bs => bs.supplier)
            .Where(b => b.brandSuppliers.Any(bs => bs.supplier.razonSocial == rs))
            .ToListAsync();
            return filteredBrands;
        }
    }

    public interface IBrandService
    {
        Task<string> CreateBrandAsync(int supplierId, Brand brand);
        Task<IEnumerable<Brand>> GetBrandsAsync();
        Task<IEnumerable<Brand>> GetBrandByDataAsync(string data);
        Task<string> UpdateBrandAsync(int id, UpdateBrandDto data);
        Task<string> AddBrandSupplierAsync(int brandId, int supplierId);
        Task<IEnumerable<Brand>> GetBrandByRazonSocialAsync(string rs);
    }
}

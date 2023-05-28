using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using Repuestos_San_jorge.Dto.Admin;
using Repuestos_San_Jorge.Utils;

namespace Repuestos_San_jorge.Services.Admin
{
    public class SupplierService : ISupplierService
    {
        private readonly OfficeDb _dbContext;

        public SupplierService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> CreateSupplierAsync(Supplier supplier) // crear proveedor(seguir despues de seller)
        {
            try
            {
                CurrentAcount currentAcount = new CurrentAcount
                {
                    acountNumber = Utils.AcountNumberGen(supplier.cuit.Substring(0, 1)+supplier.cuit.Substring(3, 4)),
                };
                _dbContext.CurrentAcounts.Add(currentAcount);
                supplier.currentAcount = currentAcount;
                _dbContext.Suppliers.Add(supplier);
                await _dbContext.SaveChangesAsync();
                return "Registrado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Supplier>> GetSuppliersAsync() // Listar proveedores
        {
            try
            {
                return await _dbContext.Suppliers.ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> DeleteSupplierAsync(int id) // Eliminar Proveedor
        {
            try
            {
                var supplier = await _dbContext.Suppliers.SingleOrDefaultAsync(
                    supplier => supplier.id == id
                );
                if (supplier == null)
                {
                    throw new ArgumentNullException(
                        nameof(supplier),
                        "El proveedor no puede ser null"
                    );
                }
                supplier.status = false;
                await _dbContext.SaveChangesAsync();
                return "Proveedor desactivado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> UpdateSupplierAsync(int id, UpdateSupplierDto data) // editar proveedor
        {
            try
            {
                var supplier = await _dbContext.Suppliers.SingleOrDefaultAsync(
                    supplier => supplier.id == id
                );
                if (supplier == null)
                {
                    throw new ArgumentNullException(
                        nameof(supplier),
                        "El proveedor no puede ser null"
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
                _dbContext.Entry(supplier).CurrentValues.SetValues(dataUpdate);
                await _dbContext.SaveChangesAsync();
                return "Datos de proveedor actualizados";
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> AddBrandToSupplierAsync(int supplierId, int brandId) // agregar marca a proveedor
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
    }

    public interface ISupplierService
    {
        Task<string> CreateSupplierAsync(Supplier supplier);
        Task<IEnumerable<Supplier>> GetSuppliersAsync();

        Task<string> UpdateSupplierAsync(int id, UpdateSupplierDto data);
        Task<string> DeleteSupplierAsync(int id);
        Task<string> AddBrandToSupplierAsync(int supplierId, int brandId);
    }
}

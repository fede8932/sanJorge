using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using Repuestos_San_jorge.Dto.Admin;

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
                    throw new ArgumentNullException(nameof(supplier), "El proveedor no puede ser null");
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
                    throw new ArgumentNullException(nameof(supplier), "El proveedor no puede ser null");
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
    }

    public interface ISupplierService
    {
        Task<string> CreateSupplierAsync(Supplier supplier);
        Task<IEnumerable<Supplier>> GetSuppliersAsync();

        Task<string> UpdateSupplierAsync(int id, UpdateSupplierDto data);
        Task<string> DeleteSupplierAsync(int id);
    }
}

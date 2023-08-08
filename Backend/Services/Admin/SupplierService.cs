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

        public async Task<int> CreateSupplierAsync(Supplier supplier) // crear proveedor(seguir despues de seller)
        {
            try
            {
                CurrentAcount currentAcount = new CurrentAcount
                {
                    acountNumber = Utils.AcountNumberGen(
                        supplier.cuit.Substring(0, 1) + supplier.cuit.Substring(3, 4)
                    ),
                };
                _dbContext.CurrentAcounts.Add(currentAcount);
                supplier.currentAcount = currentAcount;
                _dbContext.Suppliers.Add(supplier);
                await _dbContext.SaveChangesAsync();
                await _dbContext.Entry(supplier).ReloadAsync(); // Recargar el objeto supplier desde la base de datos
                return supplier.id;
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

        public async Task<IEnumerable<Supplier>> GetSuppliersByDataAsync(string text) // Listar proveedores
        {
            try
            {
                var suppliers = await _dbContext.Suppliers
                    .Where(s => s.cuit.Contains(text) || s.razonSocial.Contains(text))
                    .Include(s => s.currentAcount)
                    .ToListAsync();
                return suppliers;
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

        // public async Task<string> UpdateSupplierAsync(int id, UpdateSupplierDto data) // editar proveedor
        // {
        //     try
        //     {
        //         var supplier = await _dbContext.Suppliers.SingleOrDefaultAsync(
        //             supplier => supplier.id == id
        //         );
        //         if (supplier == null)
        //         {
        //             throw new ArgumentNullException(
        //                 nameof(supplier),
        //                 "El proveedor no puede ser null"
        //             );
        //         }
        //         var dataUpdate = new Dictionary<string, object>();
        //         foreach (var propiedad in data.GetType().GetProperties())
        //         {
        //             string nombrePropiedad = propiedad.Name;
        //             var valorPropiedad = propiedad.GetValue(data);
        //             if (valorPropiedad != null)
        //             {
        //                 dataUpdate.Add(nombrePropiedad, valorPropiedad);
        //             }
        //         }
        //         _dbContext.Entry(supplier).CurrentValues.SetValues(dataUpdate);
        //         await _dbContext.SaveChangesAsync();
        //         return "Datos de proveedor actualizados";
        //     }
        //     catch
        //     {
        //         throw;
        //     }
        // }
                
        public async Task<Supplier> UpdateSupplierAsync(int id, UpdateSupplierDto data) 
        {
            try
            {
                var proveedor = await _dbContext.Suppliers
                    .Include(c => c.currentAcount)
                    .SingleOrDefaultAsync(s => s.id == id);
                if (proveedor == null)
                {
                    throw new ArgumentNullException(
                        nameof(proveedor),
                        "El proveedor no puede ser null"
                    );
                }
                proveedor.email = data.email;
                proveedor.altura = data.altura;
                proveedor.calle = data.calle;
                proveedor.localidad = data.localidad;
                proveedor.codigoPostal = data.codigoPostal;
                proveedor.telefono = data.telefono;
                proveedor.comentarios = data.comentarios;
                _dbContext.Entry(proveedor).State = EntityState.Modified;
                await _dbContext.SaveChangesAsync();
                return proveedor;
            }
            catch
            {
                throw;
            }
        }

        public async Task<Supplier> UpdateStatusSupplierAsync(int id)
        {
            try{
                var supplier = await _dbContext.Suppliers
                .Include(s => s.currentAcount)
                .SingleOrDefaultAsync(
                    supplier => supplier.id == id
                );
                if (supplier == null)
                {
                    throw new ArgumentNullException(
                        nameof(supplier),
                        "El proveedor no puede ser null"
                    );
                }
                supplier.status = !supplier.status;
                _dbContext.Entry(supplier).State = EntityState.Modified;
                await _dbContext.SaveChangesAsync();
                return supplier;
            }
            catch
            {
                throw;
            }
        }

        public async Task<Supplier> SupplierAsync(string razonSocial)
        {
            try
            {
                var supplier = await _dbContext.Suppliers
                    .Include(s => s.currentAcount)
                    .SingleOrDefaultAsync(supplier => supplier.razonSocial == razonSocial);
                if (supplier == null)
                {
                    throw new ArgumentNullException(
                        nameof(supplier),
                        "No existe proveedor en los registros"
                    );
                }
                return supplier;
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
        Task<int> CreateSupplierAsync(Supplier supplier);
        Task<IEnumerable<Supplier>> GetSuppliersAsync();
        Task<Supplier> UpdateSupplierAsync(int id, UpdateSupplierDto data);
        Task<Supplier> UpdateStatusSupplierAsync(int id);
        Task<IEnumerable<Supplier>> GetSuppliersByDataAsync(string text);
        Task<string> DeleteSupplierAsync(int id);
        Task<Supplier> SupplierAsync(string razonSocial);
        Task<string> AddBrandToSupplierAsync(int supplierId, int brandId);
    }
}

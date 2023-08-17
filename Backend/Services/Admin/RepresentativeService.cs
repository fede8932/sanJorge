using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Services.Admin
{
    public class RepresentativeService : IRepresentativeService
    {
        private readonly OfficeDb _dbContext;

        public RepresentativeService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> CreateRepresentativeAsync(Representative representative) // crear representante de proveedor(seguir despues de seller)
        {
            try
            {
                var supplier = _dbContext.Suppliers.FirstOrDefault(
                    supplier => supplier.id == representative.supplierId
                );
                if (supplier == null)
                {
                    throw new ArgumentNullException(
                        nameof(supplier),
                        "El proveedor no puede ser null"
                    );
                }
                representative.supplier = supplier;
                _dbContext.Representatives.Add(representative);
                await _dbContext.SaveChangesAsync();
                return "Registrado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Representative>> GetRepresentativesAsync() // Listar representantes
        {
            try
            {
                return await _dbContext.Representatives.ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Representative>> GetRepresentativesBySupplierAsync(string supplierRazonSocial)
        {
            var supplier = await _dbContext.Suppliers.SingleOrDefaultAsync(
                supplier => supplier.razonSocial == supplierRazonSocial
            );
            if (supplier == null)
            {
                throw new ArgumentNullException(nameof(supplier), "El proveedor no puede ser null");
            }
            return await _dbContext.Representatives
                .Where(r => r.supplierId == supplier.id)
                .ToListAsync();
        }

        public async Task<Representative> DeleteRepresentativeAsync(int id) // Eliminar representante
        {
            try
            {
                var representative = await _dbContext.Representatives.SingleOrDefaultAsync(
                    representative => representative.id == id
                );
                if (representative == null)
                {
                    throw new ArgumentNullException(
                        nameof(representative),
                        "El representante no puede ser null"
                    );
                }
                representative.status = !representative.status;
                await _dbContext.SaveChangesAsync();
                return representative;
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> UpdateRepresentativeAsync(int id, UpdateRepresentativeDto data) // editar representante
        {
            try
            {
                var representative = await _dbContext.Representatives.SingleOrDefaultAsync(
                    representative => representative.id == id
                );
                if (representative == null)
                {
                    throw new ArgumentNullException(
                        nameof(representative),
                        "El representante no puede ser null"
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
                _dbContext.Entry(representative).CurrentValues.SetValues(dataUpdate);
                await _dbContext.SaveChangesAsync();
                return "Datos de representante actualizados";
            }
            catch
            {
                throw;
            }
        }
    }

    public interface IRepresentativeService
    {
        Task<string> CreateRepresentativeAsync(Representative representative);
        Task<IEnumerable<Representative>> GetRepresentativesAsync();
        Task<IEnumerable<Representative>> GetRepresentativesBySupplierAsync(string supplierRazonSocial);
        Task<string> UpdateRepresentativeAsync(int id, UpdateRepresentativeDto data);
        Task<Representative> DeleteRepresentativeAsync(int id);
    }
}

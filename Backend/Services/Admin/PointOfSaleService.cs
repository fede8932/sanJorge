using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using BCrypt.Net;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Services.Admin
{
    public class PointOfSaleService : IPointOfSaleService
    {
        private readonly OfficeDb _dbContext;

        public PointOfSaleService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> CreatePointAsync(PointOfSale pointOfSale) // crear punto de venta
        {
            try
            {
                _dbContext.PointOfSales.Add(pointOfSale);
                await _dbContext.SaveChangesAsync();
                return "Registrado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<PointOfSale>> GetPointsAsync() // Listar puntos de venta
        {
            try
            {
                return await _dbContext.PointOfSales.ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> UpdatePointAsync(int id, UpdatePointDto data) // editar puntos de venta
        {
            try
            {
                var point = await _dbContext.PointOfSales.SingleOrDefaultAsync(
                    point => point.id == id
                );
                if (point == null)
                {
                    throw new ArgumentNullException(
                        nameof(point),
                        "El punto de venta no puede ser null"
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
                _dbContext.Entry(point).CurrentValues.SetValues(dataUpdate);
                await _dbContext.SaveChangesAsync();
                return "Datos del punto de venta actualizados";
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> DeletePointAsync(int id) // eliminar punto de venta
        {
            try
            {
                var point = await _dbContext.PointOfSales.FindAsync(id);
                if (point == null)
                {
                    throw new ArgumentNullException(
                        nameof(point),
                        "El punto de venta no puede ser null"
                    );
                }
                _dbContext.PointOfSales.Remove(point);
                await _dbContext.SaveChangesAsync();
                return "Punto de venta eliminado";
            }
            catch
            {
                throw;
            }
        }
    }

    public interface IPointOfSaleService
    {
        Task<string> CreatePointAsync(PointOfSale pointOfSale);
        Task<IEnumerable<PointOfSale>> GetPointsAsync();
        Task<string> UpdatePointAsync(int id, UpdatePointDto data);
        Task<string> DeletePointAsync(int id);
    }
}

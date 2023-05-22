using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Services.Admin
{
    public class PurchaseOrderService : IPurchaseOrderService
    {
        private readonly OfficeDb _dbContext;

        public PurchaseOrderService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> CreatePurchaseOrderAsync(int supplierId) // crear orden de compra
        {
            try
            {
                var supplier = await _dbContext.Suppliers.SingleOrDefaultAsync(
                    supplier => supplier.id == supplierId
                );
                if (supplier == null)
                {
                    throw new ArgumentNullException(
                        nameof(supplier),
                        "El proveedor no puede ser null"
                    );
                }
                var purchaseOrder = new PurchaseOrder
                {
                    date = DateTime.UtcNow,
                    status = "open",
                    total = 0,
                    supplierId = supplierId
                };
                _dbContext.PurchaseOrders.Add(purchaseOrder);
                await _dbContext.SaveChangesAsync();
                return "Registrado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<PurchaseOrder>> GetOrdersAsync() // Listar ordenes
        {
            try
            {
                return await _dbContext.PurchaseOrders.ToListAsync();
            }
            catch
            {
                throw;
            }
        }


        public async Task<string> DeleteOrdersAsync(int purchaseOrderId) // eliminar orden
        {
            try
            {
                var order = await _dbContext.PurchaseOrders.SingleOrDefaultAsync(
                    order => order.id == purchaseOrderId && order.status == "open"
                );
                if (order == null)
                {
                    throw new ArgumentNullException(
                        nameof(order),
                        "No existe la orden en los registros"
                    );
                }

                _dbContext.PurchaseOrders.Remove(order);
                await _dbContext.SaveChangesAsync();
                return "Orden eliminada";
            }
            catch
            {
                throw;
            }
        }
    }

    public interface IPurchaseOrderService
    {
        Task<string> CreatePurchaseOrderAsync(int supplierId);
        Task<IEnumerable<PurchaseOrder>> GetOrdersAsync();

        Task<string> DeleteOrdersAsync(int purchaseOrderId);
    }
}

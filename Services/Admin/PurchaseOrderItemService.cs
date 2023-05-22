using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;

namespace Repuestos_San_jorge.Services.Admin
{
    public class PurchaseOrderItemService : IPurchaseOrderItemService
    {
        private readonly OfficeDb _dbContext;

        public PurchaseOrderItemService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> AddItemToOrder(
            int purchaseOrderId,
            int productId,
            int brandId,
            int cantidad
        ) // add item a orden de compra
        {
            try
            {
                var order = await _dbContext.PurchaseOrders.SingleOrDefaultAsync(
                    order => order.id == purchaseOrderId
                );
                var brandProduct = _dbContext.BrandProducts
                    .Include(brandProduct => brandProduct.product)
                    .Include(brandProduct => brandProduct.brand)
                    .FirstOrDefault(
                        brandProduct =>
                            brandProduct.brandId == brandId && brandProduct.productId == productId
                    );

                if (order == null || brandProduct == null)
                {
                    throw new ArgumentNullException(
                        nameof(order) + " o " + nameof(brandProduct),
                        "La orden o marca/producto no puede ser null"
                    );
                }
                var purchaseOrderItem = new PurchaseOrderItem
                {
                    amount = cantidad,
                    salePrice =
                        brandProduct.product.listPrice * (1 - brandProduct.product.costPercentage),
                    purchaseOrder = order,
                    product = brandProduct.product,
                };
                _dbContext.PurchaseOrderItems.Add(purchaseOrderItem);
                await _dbContext.SaveChangesAsync();
                return "Registrado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> DeleteItemToOrder(int id) // Eliminar item
        {
            try
            {
                var orderItem = await _dbContext.PurchaseOrderItems.FindAsync(id);
                if (orderItem == null)
                {
                    throw new ArgumentNullException(
                        nameof(orderItem),
                        "El item no puede ser null"
                    );
                }
                _dbContext.PurchaseOrderItems.Remove(orderItem);
                await _dbContext.SaveChangesAsync();
                return "Eliminado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> UpdateCantToOrderItem(int id, int cantidad) // eliminar orden
        {
            try
            {
                var orderItem = await _dbContext.PurchaseOrderItems.SingleOrDefaultAsync(
                    orderItem => orderItem.id == id);
                if (orderItem == null)
                {
                    throw new ArgumentNullException(
                        nameof(orderItem),
                        "No existe el item en los registros"
                    );
                }
                orderItem.amount = cantidad;
                _dbContext.PurchaseOrderItems.Update(orderItem);
                await _dbContext.SaveChangesAsync();
                return "Cantidad actualizada";
            }
            catch
            {
                throw;
            }
        }
    }

    public interface IPurchaseOrderItemService
    {
        Task<string> AddItemToOrder(int purchaseOrderId, int productId, int brandId, int cantidad);
        Task<string> DeleteItemToOrder(int id);
        Task<string> UpdateCantToOrderItem(int id, int cantidad);
    }
}

using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using Repuestos_San_jorge.Dto.Enums;

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
                var brandProduct = await _dbContext.BrandProducts
                    .Include(brandProduct => brandProduct.product)
                    .Include(brandProduct => brandProduct.brand)
                    .FirstOrDefaultAsync(
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
                if (order.status == PurchaseOrderStatusType.Open)
                {
                    var purchaseOrderItem = new PurchaseOrderItem
                    {
                        amount = cantidad,
                        salePrice =
                            brandProduct.product.listPrice
                            * (1 - brandProduct.product.costPercentage),
                        purchaseOrder = order,
                        product = brandProduct.product,
                    };
                    order.total =
                        order.total + (purchaseOrderItem.amount * purchaseOrderItem.salePrice);
                    _dbContext.PurchaseOrderItems.Add(purchaseOrderItem);
                    _dbContext.PurchaseOrders.Update(order);
                    await _dbContext.SaveChangesAsync();
                    return "Registrado";
                }
                else
                {
                    throw new Exception(
                        "No es posible agregar items a la orden"
                    );
                }
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
                var orderItem = await _dbContext.PurchaseOrderItems
                    .Include(PurchaseOrderItems => PurchaseOrderItems.purchaseOrder)
                    .FirstOrDefaultAsync(PurchaseOrderItems => PurchaseOrderItems.id == id);
                if (orderItem == null)
                {
                    throw new ArgumentNullException(
                        nameof(orderItem),
                        "No existe el item en los registros"
                    );
                }
                if (
                    orderItem.purchaseOrder != null
                    && orderItem.purchaseOrder.status != Dto.Enums.PurchaseOrderStatusType.Open
                )
                {
                    throw new ArgumentNullException(
                        nameof(orderItem),
                        "El item pertenece a una orden que no esta abierta"
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

        public async Task<string> UpdateCantToOrderItem(int id, int cantidad)
        {
            try
            {
                var orderItem = await _dbContext.PurchaseOrderItems
                    .Include(PurchaseOrderItems => PurchaseOrderItems.purchaseOrder)
                    .FirstOrDefaultAsync(PurchaseOrderItems => PurchaseOrderItems.id == id);
                if (orderItem == null)
                {
                    throw new ArgumentNullException(
                        nameof(orderItem),
                        "No existe el item en los registros"
                    );
                }
                if (
                    orderItem.purchaseOrder != null
                    && orderItem.purchaseOrder.status != Dto.Enums.PurchaseOrderStatusType.Open
                )
                {
                    throw new ArgumentNullException(
                        nameof(orderItem),
                        "El item pertenece a una orden que no esta abierta"
                    );
                }
                if(orderItem.purchaseOrder?.status == PurchaseOrderStatusType.Open)
                {
                orderItem.amount = cantidad;
                _dbContext.PurchaseOrderItems.Update(orderItem);
                await _dbContext.SaveChangesAsync();
                return "Cantidad actualizada";
                }
                else
                {
                    throw new Exception("No se puede actualizar una orden que no esta abierta");
                }
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

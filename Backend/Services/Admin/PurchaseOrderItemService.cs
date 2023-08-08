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

        public async Task<ICollection<PurchaseOrderItem>> AddItemToOrder(
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
                    .Include(brandProduct => brandProduct.price)
                    .Include(brandProduct => brandProduct.stock)
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
                if (
                    order.status == PurchaseOrderStatusType.Open
                    && brandProduct.stock.stock >= cantidad
                )
                {
                    var purchaseOrderItem = new PurchaseOrderItem
                    {
                        amount = cantidad,
                        buyPrice = brandProduct.price.price,
                        purchaseOrder = order,
                        product = brandProduct.product,
                        brand = brandProduct.brand,
                    };
                    order.total =
                        order.total + (purchaseOrderItem.amount * purchaseOrderItem.buyPrice);
                    _dbContext.PurchaseOrderItems.Add(purchaseOrderItem);
                    _dbContext.PurchaseOrders.Update(order);
                    await _dbContext.SaveChangesAsync();
                    var orderItems = await _dbContext.PurchaseOrderItems
                        .Include(item => item.product)
                        .Include(item => item.brand)
                        .ThenInclude(b => b.brandProducts)
                        .ThenInclude(bp => bp.price)
                        .Include(item => item.brand)
                        .ThenInclude(b => b.brandProducts)
                        .ThenInclude(bp => bp.stock)
                        .Where(i => i.purchaseOrderId == order.id)
                        .ToListAsync();
                    return orderItems;
                }
                else
                {
                    throw new Exception("No es posible agregar items a la orden");
                }
            }
            catch
            {
                throw;
            }
        }

        public async Task<ICollection<PurchaseOrderItem>> DeleteItemToOrder(int id) // Eliminar item
        {
            try
            {
                var orderItem = await _dbContext.PurchaseOrderItems
                    .Include(item => item.purchaseOrder)
                    .FirstOrDefaultAsync(item => item.id == id);
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
                var order = orderItem.purchaseOrder;
                order.total = order.total - orderItem.buyPrice * orderItem.amount;
                _dbContext.PurchaseOrderItems.Remove(orderItem);
                _dbContext.PurchaseOrders.Update(order);
                await _dbContext.SaveChangesAsync();
                var orderItems = await _dbContext.PurchaseOrderItems
                    .Include(item => item.product)
                    .Include(item => item.brand)
                    .ThenInclude(b => b.brandProducts)
                    .ThenInclude(bp => bp.price)
                    .Include(item => item.brand)
                    .ThenInclude(b => b.brandProducts)
                    .ThenInclude(bp => bp.stock)
                    .Where(i => i.purchaseOrderId == order.id)
                    .ToListAsync();
                return orderItems;
            }
            catch
            {
                throw;
            }
        }

        public async Task<ICollection<PurchaseOrderItem>> GetItemByOrder(int id)
        {
            var orderItems = await _dbContext.PurchaseOrderItems
                // .Include(item => item.product)
                // .Include(item => item.brand)
                // .ThenInclude(b => b.brandProducts)
                // .ThenInclude(bp => bp.price)
                // .Include(item => item.brand)
                // .ThenInclude(b => b.brandProducts)
                // .ThenInclude(bp => bp.stock)
                .Where(i => i.purchaseOrderId == id)
                .ToListAsync();
            return orderItems;
        }

        public async Task<PurchaseOrderItem> UpdateCantToOrderItem(int id, int cantidad)
        {
            try
            {
                var orderItem = await _dbContext.PurchaseOrderItems
                    .Include(item => item.purchaseOrder)
                    .Include(item => item.brand)
                    .Include(item => item.product)
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
                if (orderItem.purchaseOrder?.status == PurchaseOrderStatusType.Open)
                {
                    var order = orderItem.purchaseOrder;
                    order.total = order.total + orderItem.buyPrice * (cantidad - orderItem.amount);
                    orderItem.amount = cantidad;
                    _dbContext.PurchaseOrderItems.Update(orderItem);
                    _dbContext.PurchaseOrders.Update(order);
                    await _dbContext.SaveChangesAsync();
                    return orderItem;
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

        public async Task<PurchaseOrderItem> UpdatePriceToOrderItem(int id, float price)
        {
            try
            {
                var orderItem = await _dbContext.PurchaseOrderItems
                    .Include(item => item.purchaseOrder)
                    .Include(item => item.brand)
                    .Include(item => item.product)
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
                if (orderItem.purchaseOrder?.status == PurchaseOrderStatusType.Open)
                {
                    var order = orderItem.purchaseOrder;
                    order.total = order.total + orderItem.amount * (price - orderItem.buyPrice);
                    orderItem.buyPrice = price;
                    _dbContext.PurchaseOrderItems.Update(orderItem);
                    _dbContext.PurchaseOrders.Update(order);
                    await _dbContext.SaveChangesAsync();
                    return orderItem;
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
        Task<ICollection<PurchaseOrderItem>> AddItemToOrder(
            int purchaseOrderId,
            int productId,
            int brandId,
            int cantidad
        );
        Task<ICollection<PurchaseOrderItem>> DeleteItemToOrder(int id);
        Task<ICollection<PurchaseOrderItem>> GetItemByOrder(int id);
        Task<PurchaseOrderItem> UpdateCantToOrderItem(int id, int cantidad);
        Task<PurchaseOrderItem> UpdatePriceToOrderItem(int id, float price);
    }
}

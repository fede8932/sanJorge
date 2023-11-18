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
                if (order.type == PurchaseOrderType.Sell && brandProduct.stock.stock <= 0)
                {
                    throw new ArgumentNullException(
                        nameof(order) + " o " + nameof(brandProduct),
                        "Sin stock"
                    );
                }
                if (
                    order.status == PurchaseOrderStatusType.Open
                )
                {
                    var purchaseOrderItem = new PurchaseOrderItem
                    {
                        amount = cantidad,
                        buyPrice = order.type == PurchaseOrderType.Buy ? brandProduct.price.price : null,
                        sellPrice = order.type == PurchaseOrderType.Sell ? brandProduct.price.price * (1 + brandProduct.price.sellPercentage) : null,
                        purchaseOrder = order,
                        product = brandProduct.product,
                        brand = brandProduct.brand,
                    };
                    float amount = order.type == PurchaseOrderType.Buy ? purchaseOrderItem.amount * (float)(purchaseOrderItem.buyPrice) : purchaseOrderItem.amount * (float)(purchaseOrderItem.sellPrice);
                    order.subTotal = order.subTotal + amount;
                    order.iva = (float)(order.subTotal * 0.21);
                    order.total = (float)(order.subTotal * 1.21);
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
                        .OrderBy(i => i.id)
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
                PurchaseOrder order = orderItem.purchaseOrder;
                float subsAmount = orderItem.purchaseOrder?.type == PurchaseOrderType.Buy ? (float)(orderItem.buyPrice) * orderItem.amount : (float)(orderItem.sellPrice);
                order.subTotal = order.subTotal - subsAmount;
                order.iva = (float)(order.subTotal * 0.21);
                order.total = (float)(order.subTotal * 1.21);
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
                    .OrderBy(i => i.id)
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
                .Include(item => item.product)
                .Include(item => item.brand)
                .ThenInclude(b => b.brandProducts)
                .ThenInclude(bp => bp.price)
                .Include(item => item.brand)
                .ThenInclude(b => b.brandProducts)
                .ThenInclude(bp => bp.stock)
                .Where(i => i.purchaseOrderId == id)
                .OrderBy(i => i.id)
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
                var brandProduct = await _dbContext.BrandProducts
                    .Include(bp => bp.stock)
                    .FirstOrDefaultAsync(bp => bp.productId == orderItem.product.id && bp.brandId == orderItem.brand.id);
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
                    if(orderItem.purchaseOrder?.type == PurchaseOrderType.Sell && cantidad > brandProduct.stock.stock)
                    {
                    throw new ArgumentNullException(
                        nameof(brandProduct),
                        "El pedido supera el stock"
                    );
                    }
                    var order = orderItem.purchaseOrder;
                    float newAmount = orderItem.purchaseOrder?.type == PurchaseOrderType.Buy ? (float)(orderItem.buyPrice) * (cantidad - orderItem.amount) : (float)(orderItem.sellPrice) * (cantidad - orderItem.amount);
                    order.subTotal = order.subTotal + newAmount;
                    order.iva = (float)(order.subTotal * 0.21);
                    order.total = (float)(order.subTotal * 1.21);
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
                    order.total = order.total + orderItem.amount * (price - (float)(orderItem.buyPrice));
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

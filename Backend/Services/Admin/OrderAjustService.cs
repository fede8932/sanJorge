using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using Repuestos_San_jorge.Dto.Admin;
using Repuestos_San_jorge.Dto.Enums;

namespace Repuestos_San_jorge.Services.Admin
{
    public class OrderAjustService : IOrderAjustService
    {
        private readonly OfficeDb _dbContext;

        public OrderAjustService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<OrderAjust> AddOrderAjust(int orderId) // crear representante de proveedor(seguir despues de seller)
        {
            try
            {
                var order = await _dbContext.PurchaseOrders
                    .Include(o => o.purchaseOrderItems)
                    .Where(po => po.id == orderId)
                    .FirstOrDefaultAsync();
                if (order == null)
                {
                    throw new ArgumentNullException(nameof(order), "La orden no puede ser null");
                }
                OrderAjust ajuste = new OrderAjust
                {
                    subTotal = order.subTotal,
                    iva = order.iva,
                    total = order.total,
                    purchaseOrder = order,
                    orderId = order.id,
                };
                _dbContext.OrderAjusts.Add(ajuste);
                await _dbContext.SaveChangesAsync();
                foreach (var orderItem in order.purchaseOrderItems)
                {
                    AjustOrderItem ajustItem = new AjustOrderItem
                    {
                        amount = orderItem.amount,
                        buyPrice = (float)(orderItem.buyPrice),
                        orderAjustId = ajuste.id,
                        brandId = orderItem.brandId,
                        productId = orderItem.productId
                    };
                    _dbContext.AjustOrderItems.Add(ajustItem);
                }
                ;
                await _dbContext.SaveChangesAsync();
                var regAjuste = await _dbContext.OrderAjusts
                    .Include(o => o.ajustOrderItems)
                    .ThenInclude(aoi => aoi.brand)
                    .ThenInclude(b => b.brandProducts)
                    .ThenInclude(bp => bp.price)
                    .Include(o => o.ajustOrderItems)
                    .ThenInclude(aoi => aoi.product)
                    .Where(ao => ao.id == ajuste.id)
                    .FirstOrDefaultAsync();
                return regAjuste;
            }
            catch
            {
                throw;
            }
        }

        public async Task<OrderAjust> GetOrderAjust(int orderId)
        {
            try
            {
                var ajuste = await _dbContext.OrderAjusts
                    .Include(o => o.ajustOrderItems)
                    .ThenInclude(aoi => aoi.brand)
                    .ThenInclude(b => b.brandProducts)
                    .ThenInclude(bp => bp.price)
                    .Include(o => o.ajustOrderItems)
                    .ThenInclude(aoi => aoi.product)
                    .Where(oa => oa.orderId == orderId)
                    .FirstOrDefaultAsync();
                return ajuste;
            }
            catch
            {
                throw;
            }
        }

        public async Task<OrderAjust> GetAjustOrder(int id)
        {
            try
            {
                var ajuste = await _dbContext.OrderAjusts
                    .Include(o => o.ajustOrderItems)
                    .ThenInclude(aoi => aoi.brand)
                    .ThenInclude(b => b.brandProducts)
                    .ThenInclude(bp => bp.price)
                    .Include(o => o.ajustOrderItems)
                    .ThenInclude(aoi => aoi.product)
                    .Where(oa => oa.id == id)
                    .FirstOrDefaultAsync();
                return ajuste;
            }
            catch
            {
                throw;
            }
        }

        public async Task<OrderAjust> UpdateStatusAjustOrder(int id, PurchaseOrderStatusType status)
        {
            try
            {
                var ajuste = await _dbContext.OrderAjusts
                    .Include(o => o.ajustOrderItems)
                    .ThenInclude(aoi => aoi.brand)
                    .ThenInclude(b => b.brandProducts)
                    .ThenInclude(bp => bp.price)
                    .Include(o => o.ajustOrderItems)
                    .ThenInclude(aoi => aoi.product)
                    .Where(oa => oa.id == id)
                    .FirstOrDefaultAsync();
                if (ajuste == null)
                {
                    throw new ArgumentNullException(nameof(ajuste), "El ajuste no puede ser null");
                }
                ajuste.status = PurchaseOrderStatusType.Confirm;
                _dbContext.OrderAjusts.Update(ajuste);
                await _dbContext.SaveChangesAsync();
                return ajuste;
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> DeleteOrderAjust(int orderId)
        {
            try
            {
                var orderAjust = await _dbContext.OrderAjusts.FirstOrDefaultAsync(
                    oa => oa.orderId == orderId
                );
                if (orderAjust == null)
                {
                    throw new ArgumentNullException(
                        nameof(orderAjust),
                        "El ajuste no puede ser null"
                    );
                }
                _dbContext.OrderAjusts.Remove(orderAjust);
                await _dbContext.SaveChangesAsync();
                return "eliminado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<ICollection<AjustOrderItem>> AddOrderAjustItem(
            int ajustOrderId,
            int productId,
            int brandId,
            int cantidad
        ) // add item a orden de compra
        {
            try
            {
                var ajust = await _dbContext.OrderAjusts.SingleOrDefaultAsync(
                    ajust => ajust.id == ajustOrderId
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
                if (ajust == null || brandProduct == null)
                {
                    throw new ArgumentNullException(
                        nameof(ajust) + " o " + nameof(brandProduct),
                        "La orden o marca/producto no puede ser null"
                    );
                }
                if (ajust.status == PurchaseOrderStatusType.Open)
                {
                    var ajustOrderItem = new AjustOrderItem
                    {
                        amount = cantidad,
                        buyPrice = brandProduct.price.price,
                        orderAjust = ajust,
                        product = brandProduct.product,
                        brand = brandProduct.brand,
                    };
                    ajust.subTotal =
                        ajust.subTotal + (ajustOrderItem.amount * ajustOrderItem.buyPrice);
                    ajust.iva = (float)(ajust.subTotal * 0.21);
                    ajust.total = (float)(ajust.subTotal * 1.21);
                    _dbContext.AjustOrderItems.Add(ajustOrderItem);
                    _dbContext.OrderAjusts.Update(ajust);
                    await _dbContext.SaveChangesAsync();
                    var ajustItems = await _dbContext.AjustOrderItems
                        .Include(item => item.product)
                        .Include(item => item.brand)
                        .ThenInclude(b => b.brandProducts)
                        .ThenInclude(bp => bp.price)
                        .Include(item => item.brand)
                        .ThenInclude(b => b.brandProducts)
                        .ThenInclude(bp => bp.stock)
                        .Where(i => i.orderAjustId == ajust.id)
                        .OrderBy(i => i.id)
                        .ToListAsync();
                    return ajustItems;
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
        public async Task<ICollection<AjustOrderItem>> GetItemByAjust(int id)
        {
            var orderItems = await _dbContext.AjustOrderItems
                .Include(item => item.product)
                .Include(item => item.brand)
                .ThenInclude(b => b.brandProducts)
                .ThenInclude(bp => bp.price)
                .Include(item => item.brand)
                .ThenInclude(b => b.brandProducts)
                .ThenInclude(bp => bp.stock)
                .Where(i => i.orderAjustId == id)
                .OrderBy(i => i.id)
                .ToListAsync();
            return orderItems;
        }
        public async Task<ICollection<AjustOrderItem>> deleteOrderAjustItem(int itemId)
        {
            try
            {
                var ajustItem = await _dbContext.AjustOrderItems
                    .Include(item => item.orderAjust)
                    .FirstOrDefaultAsync(item => item.id == itemId);
                if (ajustItem == null)
                {
                    throw new ArgumentNullException(
                        nameof(ajustItem),
                        "No existe el item en los registros"
                    );
                }
                if (
                    ajustItem.orderAjust != null
                    && ajustItem.orderAjust.status != Dto.Enums.PurchaseOrderStatusType.Open
                )
                {
                    throw new ArgumentNullException(
                        nameof(ajustItem),
                        "El item pertenece a una orden que no esta abierta"
                    );
                }
                var ajust = ajustItem.orderAjust;
                ajust.subTotal = ajust.subTotal - ajustItem.buyPrice * ajustItem.amount;
                ajust.iva = (float)(ajust.subTotal * 0.21);
                ajust.total = (float)(ajust.subTotal * 1.21);
                _dbContext.AjustOrderItems.Remove(ajustItem);
                _dbContext.OrderAjusts.Update(ajust);
                await _dbContext.SaveChangesAsync();
                var ajustItems = await _dbContext.AjustOrderItems
                    .Include(item => item.product)
                    .Include(item => item.brand)
                    .ThenInclude(b => b.brandProducts)
                    .ThenInclude(bp => bp.price)
                    .Include(item => item.brand)
                    .ThenInclude(b => b.brandProducts)
                    .ThenInclude(bp => bp.stock)
                    .Where(i => i.orderAjustId == ajust.id)
                    .OrderBy(i => i.id)
                    .ToListAsync();
                return ajustItems;
            }
            catch
            {
                throw;
            }
        }

        public async Task<AjustOrderItem> UpdateCantToAjustItem(int id, int cantidad)
        {
            try
            {
                var ajustItem = await _dbContext.AjustOrderItems
                    .Include(item => item.orderAjust)
                    .Include(item => item.brand)
                    .Include(item => item.product)
                    .FirstOrDefaultAsync(ajustItem => ajustItem.id == id);
                if (ajustItem == null)
                {
                    throw new ArgumentNullException(
                        nameof(ajustItem),
                        "No existe el item en los registros"
                    );
                }
                if (
                    ajustItem.orderAjust != null
                    && ajustItem.orderAjust.status != Dto.Enums.PurchaseOrderStatusType.Open
                )
                {
                    throw new ArgumentNullException(
                        nameof(ajustItem),
                        "El item pertenece a una orden que no esta abierta"
                    );
                }
                if (ajustItem.orderAjust?.status == PurchaseOrderStatusType.Open)
                {
                    var ajust = ajustItem.orderAjust;
                    ajust.subTotal = ajust.subTotal + ajustItem.buyPrice * (cantidad - ajustItem.amount);
                    ajust.iva = (float)(ajust.subTotal * 0.21);
                    ajust.total = (float)(ajust.subTotal * 1.21);
                    ajustItem.amount = cantidad;
                    _dbContext.AjustOrderItems.Update(ajustItem);
                    _dbContext.OrderAjusts.Update(ajust);
                    await _dbContext.SaveChangesAsync();
                    return ajustItem;
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

        public async Task<AjustOrderItem> UpdatePriceToAjustItem(int id, float price)
        {
            try
            {
                var ajustItem = await _dbContext.AjustOrderItems
                    .Include(item => item.orderAjust)
                    .Include(item => item.brand)
                    .Include(item => item.product)
                    .FirstOrDefaultAsync(ajustItem => ajustItem.id == id);
                if (ajustItem == null)
                {
                    throw new ArgumentNullException(
                        nameof(ajustItem),
                        "No existe el item en los registros"
                    );
                }
                if (
                    ajustItem.orderAjust != null
                    && ajustItem.orderAjust.status != Dto.Enums.PurchaseOrderStatusType.Open
                )
                {
                    throw new ArgumentNullException(
                        nameof(ajustItem),
                        "El item pertenece a una orden que no esta abierta"
                    );
                }
                if (ajustItem.orderAjust?.status == PurchaseOrderStatusType.Open)
                {
                    var ajust = ajustItem.orderAjust;
                    ajust.total = ajust.total + ajustItem.amount * (price - ajustItem.buyPrice);
                    ajustItem.buyPrice = price;
                    _dbContext.AjustOrderItems.Update(ajustItem);
                    _dbContext.OrderAjusts.Update(ajust);
                    await _dbContext.SaveChangesAsync();
                    return ajustItem;
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

    public interface IOrderAjustService
    {
        Task<OrderAjust> AddOrderAjust(int orderId);
        Task<OrderAjust> GetOrderAjust(int orderId);
        Task<string> DeleteOrderAjust(int orderId);
        Task<ICollection<AjustOrderItem>> GetItemByAjust(int id);
        Task<OrderAjust> UpdateStatusAjustOrder(int id, PurchaseOrderStatusType status);
        Task<OrderAjust> GetAjustOrder(int id);
        Task<ICollection<AjustOrderItem>> AddOrderAjustItem(
            int ajustOrderId,
            int productId,
            int brandId,
            int cantidad
        );
        Task<ICollection<AjustOrderItem>> deleteOrderAjustItem(int itemId);
        Task<AjustOrderItem> UpdateCantToAjustItem(int id, int cantidad);
        Task<AjustOrderItem> UpdatePriceToAjustItem(int id, float price);
    }
}

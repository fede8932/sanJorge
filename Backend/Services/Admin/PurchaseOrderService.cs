using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using Repuestos_San_jorge.Dto.Admin;
using Repuestos_San_jorge.Dto.Enums;

namespace Repuestos_San_jorge.Services.Admin
{
    public class PurchaseOrderService : IPurchaseOrderService
    {
        private readonly OfficeDb _dbContext;

        public PurchaseOrderService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<PurchaseOrder> CreatePurchaseOrderAsync(string supplierName) // crear orden de compra
        {
            try
            {
                var supplier = await _dbContext.Suppliers.SingleOrDefaultAsync(
                    supplier => supplier.razonSocial == supplierName
                );
                if (supplier == null && supplierName != "nosupplier")
                {
                    throw new ArgumentNullException(
                        nameof(supplier),
                        "El proveedor no puede ser null"
                    );
                }
                var purchaseOrder = new PurchaseOrder
                {
                    date = DateTime.UtcNow,
                    subTotal = 0,
                    iva = 0,
                    total = 0
                };
                if (supplierName != "nosupplier")
                {
                    purchaseOrder.supplierId = supplier.id;
                    purchaseOrder.supplier = supplier;
                    purchaseOrder.type = PurchaseOrderType.Buy;
                    purchaseOrder.efective = true;
                }
                else
                {
                    purchaseOrder.type = PurchaseOrderType.Sell;
                    purchaseOrder.efective = false;
                }
                _dbContext.PurchaseOrders.Add(purchaseOrder);
                await _dbContext.SaveChangesAsync();

                // Generar el número de compra después de guardar
                purchaseOrder.numero = $"OC-{purchaseOrder.id:D6}";

                _dbContext.SaveChanges();
                return purchaseOrder;
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

        public async Task<IEnumerable<PurchaseOrder>?> GetOrdersByTextAsync(
            string text,
            PurchaseOrderType type
        )
        {
            if (type == PurchaseOrderType.Buy)
            {
                var supplier = await _dbContext.Suppliers
                    .Include(s => s.purchaseOrders)
                    .ThenInclude(po => po.controlOrder)
                    .Include(s => s.purchaseOrders)
                    .ThenInclude(po => po.Voucher)
                    .Where(s => s.cuit.Contains(text) || s.razonSocial.Contains(text))
                    .SingleOrDefaultAsync();
                var sortedOrders = supplier.purchaseOrders.OrderByDescending(po => po.id); // Ordenar las órdenes por Id
                return sortedOrders;
            }
            else
            {
                var client = await _dbContext.Clients
                    .Include(s => s.purchaseOrders)
                    .ThenInclude(po => po.controlOrder)
                    .Include(s => s.purchaseOrders)
                    .ThenInclude(po => po.Voucher)
                    .Where(c => c.cuit.Contains(text) || c.razonSocial.Contains(text))
                    .SingleOrDefaultAsync();
                var sortedOrders = client.purchaseOrders.OrderBy(po => po.id); // Ordenar las órdenes por Id
                return sortedOrders;
            }
        }

        public async Task<IEnumerable<PurchaseOrder>?> GetOrdersByNumAsync(
            string num,
            PurchaseOrderType type
        )
        {
            var purchaseOrders = await _dbContext.PurchaseOrders
                .Include(po => po.supplier)
                .Include(po => po.client)
                .Where(po => po.type == type && po.numero.Contains(num))
                .OrderBy(po => po.id)
                .ToListAsync();
            return purchaseOrders;
        }

        public async Task<PurchaseOrder> GetOrderByIdAsync(int purchaseOrderId)
        {
            var order = await _dbContext.PurchaseOrders
                .Include(o => o.supplier)
                .SingleOrDefaultAsync(order => order.id == purchaseOrderId);
            if (order == null)
            {
                throw new ArgumentNullException(
                    nameof(order),
                    "No existe la orden en los registros"
                );
            }
            return order;
        }

        public async Task<int> DeleteOrdersAsync(int purchaseOrderId) // eliminar orden
        {
            try
            {
                var order = await _dbContext.PurchaseOrders.SingleOrDefaultAsync(
                    order =>
                        order.id == purchaseOrderId && order.status == PurchaseOrderStatusType.Open
                );
                if (order == null)
                {
                    throw new ArgumentNullException(
                        nameof(order),
                        "No existe la orden en los registros"
                    );
                }
                if (
                    order.status != PurchaseOrderStatusType.Confirm
                    && order.status != PurchaseOrderStatusType.Recived
                )
                {
                    _dbContext.PurchaseOrders.Remove(order);
                    await _dbContext.SaveChangesAsync();
                    return order.id;
                }
                throw new Exception("No se puede eliminar esta orden");
            }
            catch
            {
                throw;
            }
        }

        public async Task<PurchaseOrder> UpdateStatusOrdersAsync(
            int purchaseOrderId,
            PurchaseOrderStatusType status,
            string? numRemito,
            Voucher? voucher
        ) // cambiar estado
        {
            try
            {
                var order = await _dbContext.PurchaseOrders
                    .Include(po => po.controlOrder)
                    .Include(po => po.Voucher)
                    .Include(po => po.supplier)
                    .Where(po => po.id == purchaseOrderId)
                    .SingleOrDefaultAsync();
                if (order == null)
                {
                    throw new ArgumentNullException(
                        nameof(order),
                        "No existe la orden en los registros"
                    );
                }
                if (
                    order.status == PurchaseOrderStatusType.Cancel
                    || order.status == PurchaseOrderStatusType.Recived
                )
                {
                    throw new ArgumentNullException(
                        nameof(order),
                        "El estado de la orden no se puede modificar"
                    );
                }
                // else if (
                //     order.status == PurchaseOrderStatusType.Confirm && 
                //     status != PurchaseOrderStatusType.Recived
                // )
                // {
                //     throw new ArgumentNullException(
                //         nameof(order),
                //         "Una orden confirmada no puedo reabrirse o cancelarse"
                //     );
                // }
                // order.status = status;
                // _dbContext.PurchaseOrders.Update(order);
                if (numRemito != null && voucher != null)
                {
                    decimal diferencia = (decimal)(order.total - voucher.total);
                    if (Math.Abs((diferencia)) > 0.05m)
                    {
                        throw new Exception(
                            "La diferencia entre el total de la orden y el total del voucher es mayor a 0.05"
                        );
                    }
                    ControlOrder controlOrder = new ControlOrder { numRemito = numRemito, };
                    voucher.numRemito = numRemito;
                    controlOrder.purchaseOrder = order;
                    voucher.purchaseOrder = order;
                    voucher.iva = (float)(voucher.subtotal * 0.21);
                    voucher.total = (float?)(voucher.subtotal * 1.21);
                    _dbContext.ControlOrders.Add(controlOrder);
                    _dbContext.Vouchers.Add(voucher);
                }
                order.status = status;
                _dbContext.PurchaseOrders.Update(order);
                await _dbContext.SaveChangesAsync();
                return order;
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> UpdateClientStatusOrdersAsync(
            int clientId,
            int purchaseOrderId,
            PurchaseOrderStatusType status
        ) // cambiar estado
        {
            try
            {
                var client = await _dbContext.Clients.SingleOrDefaultAsync(
                    client => client.id == clientId
                );
                if (client == null)
                {
                    throw new ArgumentNullException(
                        nameof(client),
                        "No existe el cliente en los registros"
                    );
                }
                var order = await _dbContext.PurchaseOrders.SingleOrDefaultAsync(
                    order => order.id == purchaseOrderId
                );
                if (order == null)
                {
                    throw new ArgumentNullException(
                        nameof(order),
                        "No existe la orden en los registros"
                    );
                }
                if (
                    order.status == PurchaseOrderStatusType.Cancel
                    || order.status == PurchaseOrderStatusType.Recived
                )
                {
                    throw new ArgumentNullException(
                        nameof(order),
                        "El estado de la orden no se puede modificar"
                    );
                }
                else if (
                    order.status == PurchaseOrderStatusType.Confirm
                    && status != PurchaseOrderStatusType.Recived
                )
                {
                    throw new ArgumentNullException(
                        nameof(order),
                        "Una orden confirmada no puedo reabrirse o cancelarse"
                    );
                }
                order.status = status;
                order.client = client;
                _dbContext.PurchaseOrders.Update(order);
                await _dbContext.SaveChangesAsync();
                return "Estado de orden actualizado";
            }
            catch
            {
                throw;
            }
        }
    }

    public interface IPurchaseOrderService
    {
        Task<PurchaseOrder> CreatePurchaseOrderAsync(string supplierName);
        Task<IEnumerable<PurchaseOrder>> GetOrdersAsync();
        Task<IEnumerable<PurchaseOrder>> GetOrdersByTextAsync(string text, PurchaseOrderType type);
        Task<IEnumerable<PurchaseOrder>> GetOrdersByNumAsync(string num, PurchaseOrderType type);
        Task<int> DeleteOrdersAsync(int purchaseOrderId);
        Task<PurchaseOrder> GetOrderByIdAsync(int purchaseOrderId);
        Task<PurchaseOrder> UpdateStatusOrdersAsync(
            int purchaseOrderId,
            PurchaseOrderStatusType status,
            string? numRemito,
            Voucher? voucher
        );
        Task<string> UpdateClientStatusOrdersAsync(
            int clientId,
            int purchaseOrderId,
            PurchaseOrderStatusType status
        );
    }
}

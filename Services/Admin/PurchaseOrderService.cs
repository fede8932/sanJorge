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
                if (order.status != PurchaseOrderStatusType.Confirm && order.status != PurchaseOrderStatusType.Recived)
                {
                    throw new Exception(
                        "No se puede eliminar esta orden"
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

        public async Task<string> UpdateStatusOrdersAsync(
            int purchaseOrderId,
            PurchaseOrderStatusType status,
            string? numRemito,
            Voucher? voucher
        ) // cambiar estado
        {
            try
            {
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
                _dbContext.PurchaseOrders.Update(order);
                if (numRemito != null && voucher != null)
                {
                    ControlOrder controlOrder = new ControlOrder { numRemito = numRemito, };
                    voucher.numRemito = numRemito;
                    controlOrder.purchaseOrder = order;
                    voucher.purchaseOrder = order;
                    _dbContext.ControlOrders.Add(controlOrder);
                    _dbContext.Vouchers.Add(voucher);
                }
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
        Task<string> CreatePurchaseOrderAsync(int supplierId);
        Task<IEnumerable<PurchaseOrder>> GetOrdersAsync();
        Task<string> DeleteOrdersAsync(int purchaseOrderId);
        Task<string> UpdateStatusOrdersAsync(
            int purchaseOrderId,
            PurchaseOrderStatusType status,
            string? numRemito,
            Voucher? voucher
        );
    }
}
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Services.Admin;
using Repuestos_San_jorge.Dto.Admin;
using Repuestos_San_jorge.Dto.Enums;

namespace Repuestos_San_jorge.Controllers.Admin
{
    [ApiController]
    [Route("api/purchase/order/")]
    public class PurchaseOrderController : Controller
    {
        private readonly IPurchaseOrderService _purchaseOrderService;
        private readonly IPurchaseOrderItemService _purchaseOrderItemService;

        public PurchaseOrderController(
            IPurchaseOrderService purchaseOrderService,
            IPurchaseOrderItemService purchaseOrderItemService
        )
        {
            _purchaseOrderService = purchaseOrderService;
            _purchaseOrderItemService = purchaseOrderItemService;
        }

        [HttpPost("{supplierId}")]
        public async Task<IActionResult> CreateOrder(int supplierId)
        {
            try
            {
                var result = await _purchaseOrderService.CreatePurchaseOrderAsync(supplierId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PurchaseOrder>>> GetPurchaseOrders()
        {
            try
            {
                var result = await _purchaseOrderService.GetOrdersAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<IEnumerable<Seller>>> DeleteSeller(int id)
        {
            try
            {
                var result = await _purchaseOrderService.DeleteOrdersAsync(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPost("items/{purchaseOrderId}")]
        public async Task<IActionResult> AddOrderItem(
            [FromQuery] int productId,
            [FromQuery] int brandId,
            [FromQuery] int cantidad,
            int purchaseOrderId
        )
        {
            try
            {
                var result = await _purchaseOrderItemService.AddItemToOrder(
                    purchaseOrderId,
                    productId,
                    brandId,
                    cantidad
                );
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpDelete("items/{purchaseOrderId}")]
        public async Task<IActionResult> AddOrderItem(int purchaseOrderId)
        {
            try
            {
                var result = await _purchaseOrderItemService.DeleteItemToOrder(purchaseOrderId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPut("items/{purchaseOrderItemId}")]
        public async Task<IActionResult> AddOrderItem(
            [FromQuery] int cantidad,
            int purchaseOrderItemId
        )
        {
            try
            {
                var result = await _purchaseOrderItemService.UpdateCantToOrderItem(
                    purchaseOrderItemId,
                    cantidad
                );
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPut("update/status/{purchaseOrderId}")]
        public async Task<IActionResult> UpdateOrderStatus(
            int purchaseOrderId,
            [FromQuery] string numRemito,
            [FromQuery] PurchaseOrderStatusType status,
            [FromBody] Voucher voucher
        )
        {
            try
            {
                var result = await _purchaseOrderService.UpdateStatusOrdersAsync(
                    purchaseOrderId,
                    status,
                    numRemito,
                    voucher
                );
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }
    }
}

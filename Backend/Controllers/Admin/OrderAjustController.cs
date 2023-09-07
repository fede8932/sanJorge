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
    [Route("api/order/ajust")]
    public class OrderAjustController : ControllerBase
    {
        private readonly IOrderAjustService _orderAjustService;

        public OrderAjustController(IOrderAjustService orderAjustService)
        {
            _orderAjustService = orderAjustService;
        }

        [HttpPost("{orderId}")]
        public async Task<IActionResult> AddOrderAjust(
            int orderId
        )
        {
            try
            {
                var result = await _orderAjustService.AddOrderAjust(orderId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet("{orderId}")]
        public async Task<IActionResult> GetOrderAjust(
            int orderId
        )
        {
            try
            {
                var result = await _orderAjustService.GetOrderAjust(orderId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet("id/{id}")]
        public async Task<IActionResult> GetAjustOrder(
            int id
        )
        {
            try
            {
                var result = await _orderAjustService.GetAjustOrder(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpDelete("{orderId}")]
        public async Task<IActionResult> DeleteOrderAjust(
            int orderId
        )
        {
            try
            {
                var result = await _orderAjustService.DeleteOrderAjust(orderId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPost("items/{ajustOrderId}")]
        public async Task<IActionResult> AddOrderAjustItem(
            [FromQuery] int productId,
            [FromQuery] int brandId,
            [FromQuery] int cantidad,
            int ajustOrderId
        )
        {
            try
            {
                var result = await _orderAjustService.AddOrderAjustItem(
                    ajustOrderId,
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

        [HttpGet("items/{orderId}")]
        public async Task<ActionResult<IEnumerable<PurchaseOrder>>> GetItemByAjust(int orderId)
        {
            try
            {
                var result = await _orderAjustService.GetItemByAjust(orderId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpDelete("items/{itemId}")]
        public async Task<IActionResult> DelAjustItem(int itemId)
        {
            try
            {
                var result = await _orderAjustService.deleteOrderAjustItem(itemId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPut("items/{ajustOrderItemId}")]
        public async Task<IActionResult> AddOrderItem(
            [FromQuery] int cantidad,
            int ajustOrderItemId
        )
        {
            try
            {
                var result = await _orderAjustService.UpdateCantToAjustItem(
                    ajustOrderItemId,
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

        [HttpPut("{ajustOrderId}")]
        public async Task<IActionResult> UpdateStatusAjustOrder(
            [FromQuery] PurchaseOrderStatusType status,
            int ajustOrderId
        )
        {
            try
            {
                var result = await _orderAjustService.UpdateStatusAjustOrder(
                    ajustOrderId,
                    status
                );
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPut("items/price/{ajustOrderItemId}")]
        public async Task<IActionResult> AddOrderItem(
            [FromQuery] float price,
            int ajustOrderItemId
        )
        {
            try
            {
                var result = await _orderAjustService.UpdatePriceToAjustItem(
                    ajustOrderItemId,
                    price
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

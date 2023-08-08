using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Services.Admin;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Controllers.Admin
{
    [ApiController]
    [Route("api/supplier")]
    public class SupplierController : ControllerBase
    {
        private readonly ISupplierService _supplierService;

        public SupplierController(ISupplierService supplierService)
        {
            _supplierService = supplierService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateSupplier([FromBody] Supplier supplier)
        {
            try
            {
                var result = await _supplierService.CreateSupplierAsync(supplier);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Seller>>> GetSuppliers()
        {
            try
            {
                var result = await _supplierService.GetSuppliersAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet("data")]
        public async Task<ActionResult<IEnumerable<Seller>>> GetSuppliersByDataAsync([FromQuery] string text)
        {
            try
            {
                var result = await _supplierService.GetSuppliersByDataAsync(text);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet("supplier")]
        public async Task<ActionResult> GetSupplier([FromQuery] string razonSocial)
        {
            try
            {
                var result = await _supplierService.SupplierAsync(razonSocial);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<IEnumerable<Seller>>> DeleteSupplier(int id)
        {
            try
            {
                var result = await _supplierService.DeleteSupplierAsync(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPut("update/{id}")]
        public async Task<ActionResult<Supplier>> UpdateSupplier(
            int id,
            [FromBody] UpdateSupplierDto data
        )
        {
            try
            {
                var result = await _supplierService.UpdateSupplierAsync(id, data);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPut("update/status/{id}")]
        public async Task<ActionResult<Supplier>> UpdateStatusSupplier(int id)
        {
            try
            {
                var result = await _supplierService.UpdateStatusSupplierAsync(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPost("add/marca")]
        public async Task<ActionResult> UpdateSeller(
            int id,
            [FromQuery] int supplierId,
            [FromQuery] int brandId
        )
        {
            try
            {
                var result = await _supplierService.AddBrandToSupplierAsync(supplierId, brandId);
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

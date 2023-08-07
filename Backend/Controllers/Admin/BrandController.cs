using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Services.Admin;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Controllers.Admin
{
    [ApiController]
    [Route("api/brand")]
    public class BrandController : ControllerBase
    {
        private readonly IBrandService _brandService;

        public BrandController(IBrandService brandService)
        {
            _brandService = brandService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateBrand(
            [FromBody] Brand brand,
            [FromQuery] int supplierId
        )
        {
            try
            {
                var result = await _brandService.CreateBrandAsync(supplierId, brand);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Brand>>> GetProducts()
        {
            try
            {
                var result = await _brandService.GetBrandsAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet("search/supplier")]
        public async Task<ActionResult<IEnumerable<Brand>>> GetProductsBySupplier(
            [FromQuery] string razonSocial)
        {
            try
            {
                var result = await _brandService.GetBrandByRazonSocialAsync(razonSocial);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }
                [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<Brand>>> GetProductsByData(
            [FromQuery] string data)
        {
            try
            {
                var result = await _brandService.GetBrandByDataAsync(data);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        // [HttpDelete("delete/{id}")]
        // public async Task<ActionResult<IEnumerable<Seller>>> DeleteSeller(int id)
        // {
        //     try
        //     {
        //         var result = await _supplierService.DeleteSupplierAsync(id);
        //         return Ok(result);
        //     }
        //     catch (Exception ex)
        //     {
        //         Console.WriteLine(ex);
        //         return StatusCode(500, "Ocurrió un error interno en el servidor.");
        //     }
        // }

        [HttpPut("update/{id}")]
        public async Task<ActionResult> UpdateBrand(int id, [FromBody] UpdateBrandDto data)
        {
            try
            {
                var result = await _brandService.UpdateBrandAsync(id, data);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPost("add/proveedor")]
        public async Task<ActionResult> AddSupplier(
            [FromQuery] int brandId,
            [FromQuery] int supplierId
        )
        {
            try
            {
                var result = await _brandService.AddBrandSupplierAsync(brandId, supplierId);
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

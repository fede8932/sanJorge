using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Services.Admin;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Controllers.Admin
{
    [ApiController]
    [Route("api/productos")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct(
            [FromBody] CreateProductRequestDto product,
            [FromQuery] int brandId,
            [FromQuery] int stock,
            [FromQuery] int stockMin
        )
        {
            try
            {
                var result = await _productService.CreateProductAsync(
                    product,
                    brandId,
                    stock,
                    stockMin
                );
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            try
            {
                var result = await _productService.GetProductsAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPut("update/{id}")]
        public async Task<ActionResult> UpdateProduct(int id, [FromBody] UpdateProductDto data)
        {
            try
            {
                var result = await _productService.UpdateProductAsync(id, data);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPost("add/marca")]
        public async Task<ActionResult> AddBrandToProduct(
            [FromQuery] int productId,
            [FromQuery] int brandId
        )
        {
            try
            {
                var result = await _productService.AddBrandToProductAsync(productId, brandId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPut("update/stock")]
        public async Task<ActionResult> AddBrandToProduct(
            [FromQuery] int productId,
            [FromQuery] int brandId,
            [FromBody] UpdateProdStockDto data
        )
        {
            try
            {
                var result = await _productService.UpdateProductStock(productId, brandId, data);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet("search")]
        public async Task<ActionResult> SearchProductByData([FromQuery] string data)
        {
            try
            {
                var result = await _productService.GetProductsByDataAsync(data);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet("search/prod")]
        public async Task<ActionResult> SearchProductByDataPage([FromQuery] string data, [FromQuery] int cant, [FromQuery] int page)
        {
            try
            {
                var result = await _productService.GetProductosByDatosPagesAsync(data, cant, page);
                Console.WriteLine(result);
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

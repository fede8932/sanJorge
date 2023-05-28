using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Services.Admin;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Controllers.Admin
{
    [ApiController]
    [Route("api/points")]
    public class PointOfSaleController : Controller
    {
        private readonly IPointOfSaleService _pointOfSaleService;

        public PointOfSaleController(IPointOfSaleService pointOfSaleService)
        {
            _pointOfSaleService = pointOfSaleService;
        }

        [HttpPost]
        public async Task<IActionResult> CreatePointOfSale([FromBody] PointOfSale pointOfSale)
        {
            try
            {
                var result = await _pointOfSaleService.CreatePointAsync(pointOfSale);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PointOfSale>>> GetPoints()
        {
            try
            {
                var result = await _pointOfSaleService.GetPointsAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<IEnumerable<Seller>>> DeletePoint(int id)
        {
            try
            {
                var result = await _pointOfSaleService.DeletePointAsync(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPut("update/{id}")]
        public async Task<ActionResult<IEnumerable<Seller>>> UpdateSupplier(
            int id,
            [FromBody] UpdatePointDto data
        )
        {
            try
            {
                var result = await _pointOfSaleService.UpdatePointAsync(id, data);
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

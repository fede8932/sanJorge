using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Services.Admin;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Controllers.Admin
{
    [ApiController]
    [Route("api/representative")]
    public class RepresentativeController : ControllerBase
    {
        private readonly IRepresentativeService _representativeService;

        public RepresentativeController(IRepresentativeService representativeService)
        {
            _representativeService = representativeService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateRepresentative(
            [FromBody] Representative representative
        )
        {
            try
            {
                var result = await _representativeService.CreateRepresentativeAsync(representative);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Representative>>> GetRepresentative()
        {
            try
            {
                var result = await _representativeService.GetRepresentativesAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet("{supplierRazonSocial}")]
        public async Task<ActionResult<IEnumerable<Representative>>> GetRepresentativeBySupplier(string supplierRazonSocial)
        {
            try
            {
                var result = await _representativeService.GetRepresentativesBySupplierAsync(supplierRazonSocial);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<IEnumerable<Representative>>> DeleteRepresentative(int id)
        {
            try
            {
                var result = await _representativeService.DeleteRepresentativeAsync(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPut("update/{id}")]
        public async Task<ActionResult<IEnumerable<Representative>>> UpdateRepresentative(
            int id,
            [FromBody] UpdateRepresentativeDto data
        )
        {
            try
            {
                var result = await _representativeService.UpdateRepresentativeAsync(id, data);
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

using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Services.Admin;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Controllers.Admin
{
    [ApiController]
    [Route("api/movement")]
    public class MovementController : Controller
    {
        private readonly IMovementService _movementService;

        public MovementController(IMovementService movementService)
        {
            _movementService = movementService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCreditNote([FromBody] Movement movement)
        {
            try
            {
                var result = await _movementService.CreateCreditNoteAsync(movement);
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

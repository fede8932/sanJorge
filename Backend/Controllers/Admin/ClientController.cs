using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Services.Admin;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Controllers.Admin
{
    [ApiController]
    [Route("api/client")]
    public class ClientController : ControllerBase
    {
        private readonly IClientService _clientService;
        private readonly IScheduleService _scheduleService;

        public ClientController(IClientService clientService, IScheduleService scheduleService)
        {
            _clientService = clientService;
            _scheduleService = scheduleService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateClient([FromBody] CreateClientRequestDto request)
        {
            try
            {
                var result = await _clientService.CreateClientAsync(
                    request.Client,
                    request.CustomerDiscounts
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
        public async Task<ActionResult<IEnumerable<Seller>>> GetSellers()
        {
            try
            {
                var result = await _clientService.GetClientsAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet("data")]
        public async Task<ActionResult<IEnumerable<Seller>>> GetSellersByData([FromQuery] string text)
        {
            try
            {
                var result = await _clientService.GetClientsByDataAsync(text);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<IEnumerable<Seller>>> DeleteClient(int id)
        {
            try
            {
                var result = await _clientService.DeleteClientAsync(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPut("update/{id}")]
        public async Task<ActionResult<IEnumerable<Client>>> UpdateClient(
            int id,
            [FromBody] UpdateClientDto data
        )
        {
            try
            {
                var result = await _clientService.UpdateClientAsync(id, data);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPost("schedule")]
        public async Task<ActionResult<IEnumerable<Schedule>>> SetScheduleClient(
            [FromBody] Schedule schedule
        )
        {
            try
            {
                var result = await _scheduleService.CreateScheduleAsync(schedule);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPut("schedule/{id}")]
        public async Task<ActionResult<IEnumerable<Schedule>>> SetScheduleClient(
            int id,
            [FromBody] UpdateScheduleDto data
        )
        {
            try
            {
                var result = await _scheduleService.UpdateScheduleAsync(id, data);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPost("discount")]
        public async Task<ActionResult> AddClientDiscount(
            [FromBody] CustomerDiscount customerDiscount
        )
        {
            try
            {
                var result = await _clientService.AddClientDiscountAsync(customerDiscount);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet("discount")]
        public async Task<ActionResult> GetClientDiscount(
            [FromQuery] int clientId,
            [FromQuery] int supplierId
        )
        {
            try
            {
                var result = await _clientService.GetClientDiscountAsync(clientId, supplierId);
                return Ok(result);
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine(ex);
                return StatusCode(200, ex.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet("discount/{clientId}")]
        public async Task<ActionResult> GetClientDiscountId([FromRoute] int clientId)
        {
            try
            {
                var result = await _clientService.GetDiscountByClientAsync(clientId);
                return Ok(result);
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine(ex);
                return StatusCode(200, ex.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpPut("discount")]
        public async Task<ActionResult> GetClientDiscount(
            [FromQuery] int clientId,
            [FromQuery] int supplierId,
            [FromBody] UpdateCustomerDiscountDto data
        )
        {
            try
            {
                var result = await _clientService.UpdateClientDiscountAsync(
                    clientId,
                    supplierId,
                    data
                );
                return Ok(result);
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, ex.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Services.Admin;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Controllers.Admin
{
    [ApiController]
    [Route("api/discounts")]
    public class CustomerDiscountController : ControllerBase
    {
        private readonly ICustomerDiscountService _customerDiscountService;

        public CustomerDiscountController(ICustomerDiscountService customerDiscountService)
        {
            _customerDiscountService = customerDiscountService;
        }

        [HttpPost]
        public async Task<IActionResult> AddDiscount(
            [FromBody] CustomerDiscount customerDiscount
        )
        {
            try
            {
                var result = await _customerDiscountService.AddDiscount(customerDiscount);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpDelete("{brandId}/{clientId}")]
        public async Task<IActionResult> CreateRepresentative(
            int brandId,
            int clientId
        )
        {
            try
            {
                var result = await _customerDiscountService.DeleteDiscount(brandId, clientId);
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

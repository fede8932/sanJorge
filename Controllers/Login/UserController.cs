using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Services.Sessions;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Controllers.Login
{
    [ApiController]
    [Route("api/users/login")]
    public class LoginController : Controller
    {
        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateRole([FromBody] UserLoginDto user)
        {
            try
            {
                var result = await _loginService.UserLoginAsync(user);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, ex.Message);
            }
        }
    }
}

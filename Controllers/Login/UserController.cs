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
        public async Task<IActionResult> LoginUser([FromBody] UserLoginDto user)
        {
            try
            {
                string? ip = HttpContext.Connection.RemoteIpAddress?.ToString();
                string? userAgent = Request.Headers.UserAgent;
                if (ip == null || userAgent == null)
                {
                    return StatusCode(
                        500,
                        "Error de conexión, los datos proporcionados no son seguros"
                    );
                }
                var result = await _loginService.UserLoginAsync(user, ip, userAgent);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, ex.Message);
            }
        }

        // [HttpGet]
        // public async Task<IActionResult> RefreshToken([FromQuery] string refresh)
        // {
        //     try
        //     {
        //         string? ip = HttpContext.Connection.RemoteIpAddress?.ToString();
        //         string? userAgent = Request.Headers.UserAgent;
        //         if (ip == null || userAgent == null)
        //         {
        //             return StatusCode(
        //                 500,
        //                 "Error de conexión, los datos proporcionados no son seguros"
        //             );
        //         }
        //         var result = await _loginService.UserRefreshTokenAsync(refresh, ip, userAgent);
        //         return Ok(result);
        //     }
        //     catch (Exception ex)
        //     {
        //         Console.WriteLine(ex);
        //         return StatusCode(500, ex.Message);
        //     }
        // }
    }
}

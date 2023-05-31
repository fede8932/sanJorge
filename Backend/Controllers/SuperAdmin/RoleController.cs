using Microsoft.AspNetCore.Mvc;
using Repuestos_San_jorge.Services.SuperAdmin;
using Repuestos_San_jorge.Models;

namespace Repuestos_San_jorge.Controllers.SuperAdmin
{
    [ApiController]
    [Route("api/role")]
    public class RoleController : Controller
    {
        private readonly IRoleService _roleService;

        public RoleController(IRoleService roleService)
        {
            _roleService = roleService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateRole([FromBody] Role role)
        {
            try
            {
                var result = await _roleService.CreateRoleAsync(role);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Role>>> GetRoles()
        {
            try
            {
                var roles = await _roleService.GetRolesAsync();
                return Ok(roles);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Ocurrió un error interno en el servidor.");
            }
        }
    }
}

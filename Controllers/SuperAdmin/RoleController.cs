using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Repuestos_San_jorge.Services.SuperAdmin;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Dto.SuperAdmin;

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
        public async Task<ActionResult<Role>> CreateRole([FromBody] Role role)
        {
            await _roleService.CreateRoleAsync(role);
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Role>>> GetRoles()
        {
            var roles = await _roleService.GetRolesAsync();
            return Ok(roles);
        }
    }
}

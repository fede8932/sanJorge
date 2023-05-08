using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;

namespace Repuestos_San_jorge.Services.SuperAdmin
{
    public class RoleService : IRoleService
    {
        private readonly OfficeDb _dbContext;

        public RoleService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> CreateRoleAsync(Role role)
        {
            try
            {
                _dbContext.Roles.Add(role);
                await _dbContext.SaveChangesAsync();
                return "Registrado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Role>> GetRolesAsync()
        {
            try
            {
                return await _dbContext.Roles.ToListAsync();
            }
            catch
            {
                throw;
            }
        }
    }

    public interface IRoleService
    {
        Task<string> CreateRoleAsync(Role role);
        Task<IEnumerable<Role>> GetRolesAsync();
    }
}

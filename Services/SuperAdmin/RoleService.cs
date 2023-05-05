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

        public async Task<CreateRoleResponse> CreateRoleAsync(Role role)
        {
            try
            {
                _dbContext.Roles.Add(role);
                await _dbContext.SaveChangesAsync();
                return new CreateRoleResponse { Success = true };
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return new CreateRoleResponse
                {
                    Success = false,
                    ErrorMessage = "Ocurrió un error al crear el rol: " + ex.Message
                };
            }
        }

        public async Task<IEnumerable<Role>> GetRolesAsync()
        {
            try
            {
                return await _dbContext.Roles.ToListAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }

    public interface IRoleService
    {
        Task<CreateRoleResponse> CreateRoleAsync(Role role);
        Task<IEnumerable<Role>> GetRolesAsync();
    }

    public class CreateRoleResponse
    {
        public bool Success { get; set; }
        public string? ErrorMessage { get; set; }
    }
}

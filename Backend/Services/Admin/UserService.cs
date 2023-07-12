using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using BCrypt.Net;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Services.Admin
{
    public class UserService : IUserService
    {
        private readonly OfficeDb _dbContext;

        public UserService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<int> CreateUserAsync(User user) // crear usuario
        {
            try
            {
                var rol = await _dbContext.Roles.FirstOrDefaultAsync(rol => rol.id == user.roleId);
                if (rol == null)
                {
                    throw new ArgumentNullException(nameof(rol), "El rol no puede ser null");
                }
                user.role = rol;
                var passwordHash = BCrypt.Net.BCrypt.HashPassword(user.password);
                user.password = passwordHash;
                _dbContext.Users.Add(user);
                await _dbContext.SaveChangesAsync();
                return user.id;
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<User>> GetUsersAsync() // Listar Usuarios
        {
            try
            {
                var anonymousUsers = await _dbContext.Users
                    .Include(user => user.role)
                    .Select(
                        user =>
                            new
                            {
                                user.id,
                                user.name,
                                user.lastName,
                                user.email,
                                user.role
                            }
                    )
                    .ToListAsync();
                var users = anonymousUsers.Select(
                    anonymousUser =>
                        new User
                        {
                            id = anonymousUser.id,
                            name = anonymousUser.name,
                            lastName = anonymousUser.lastName,
                            email = anonymousUser.email,
                            role = anonymousUser.role
                        }
                );
                return users;
            }
            catch
            {
                throw;
            }
        }
    }

    public interface IUserService
    {
        Task<int> CreateUserAsync(User user);
        Task<IEnumerable<User>> GetUsersAsync();
        // Task<User> GetUserAsync();
    }
}

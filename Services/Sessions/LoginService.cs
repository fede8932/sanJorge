using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using BCrypt.Net;
using Repuestos_San_jorge.Dto.Admin;
using Repuestos_San_Jorge.Utils;

namespace Repuestos_San_jorge.Services.Sessions
{
    public class LoginService : ILoginService
    {
        private readonly OfficeDb _dbContext;
        private readonly JwtService _jwtService;

        public LoginService(OfficeDb dbContext, JwtService jwtService)
        {
            _dbContext = dbContext;
            _jwtService = jwtService;
        }

        public async Task<UserLoginReturnDto> UserLoginAsync(UserLoginDto data)
        {
            try
            {
                var user = await _dbContext.Users.FirstOrDefaultAsync(
                    user => user.email == data.email
                );
                if (user == null)
                {
                    throw new ArgumentNullException(nameof(user), "No existe usuario");
                }

                bool isMatch = BCrypt.Net.BCrypt.Verify(data.password, user.password);
                if (!isMatch)
                {
                    throw new ArgumentException("No coinciden las credenciales");
                }
                UserLoginReturnDto loginResult = _jwtService.GenerateToken(user);
                var session = await _dbContext.Sessions.FirstOrDefaultAsync(
                    session => session.userId == user.id
                );
                if (session == null)
                {
                    Session _session = new Session
                    {
                        userId = user.id,
                        token = loginResult.access_token,
                        refresh = loginResult.refresh_token,
                    };
                    _dbContext.Sessions.Add(_session);
                }
                else
                {
                    session.token = loginResult.access_token;
                    session.refresh = loginResult.refresh_token;
                    _dbContext.Sessions.Update(session);
                }
                await _dbContext.SaveChangesAsync();
                return loginResult;
            }
            catch
            {
                throw;
            }
        }
    }

    public interface ILoginService
    {
        Task<UserLoginReturnDto> UserLoginAsync(UserLoginDto data);
    }
}

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

        public async Task<UserLoginReturnDto> UserLoginAsync(
            UserLoginDto data,
            string ip,
            string userAgent
        )
        {
            try
            {
                var user = await _dbContext.Users.FirstOrDefaultAsync(
                    user => user.email == data.email
                );
                if (user == null || !user.status)
                {
                    throw new ArgumentNullException(nameof(user), "No existe usuario activo");
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
                        fechaHora = DateTime.UtcNow,
                        ip = ip,
                        agenteUsuario = userAgent
                    };
                    _dbContext.Sessions.Add(_session);
                }
                else
                {
                    session.fechaHora = DateTime.UtcNow;
                    session.ip = ip;
                    session.agenteUsuario = userAgent;
                    _dbContext.Sessions.Update(session);
                }

                var dataUser = _jwtService.DecodeToken(loginResult.refresh_token);
                Console.Write("ver que onda",dataUser);
                await _dbContext.SaveChangesAsync();
                return loginResult;
            }
            catch
            {
                throw;
            }
        }

        // public async Task<UserLoginReturnDto> UserLogiUserRefreshTokenAsyncnAsync(
        //     string refresh,
        //     string ip,
        //     string userAgent
        // )
        // {
        //     try
        //     {
        //         if (_jwtService.VerifyToken(refresh))
        //         {
        //             throw new ArgumentException("Las credenciales no son correctas");
        //         }
        //         var dataUser = _jwtService.DecodeToken(refresh);
        //         Console.WriteLine(dataUser);
        //         var user = await _dbContext.Users.FirstOrDefaultAsync(
        //             user => user.id == dataUser.FindFirst("sub")?.Value
        //         );
        //         if (user == null || !user.status)
        //         {
        //             throw new ArgumentNullException(nameof(user), "No existe usuario activo");
        //         }
        //         UserLoginReturnDto loginResult = _jwtService.GenerateToken(user);
        //         var session = await _dbContext.Sessions.FirstOrDefaultAsync(
        //             session => session.userId == user.id
        //         );
        //         if (session == null)
        //         {
        //             Session _session = new Session
        //             {
        //                 userId = user.id,
        //                 fechaHora = DateTime.UtcNow,
        //                 ip = ip,
        //                 AgenteUsuario = userAgent
        //             };
        //             _dbContext.Sessions.Add(_session);
        //         }
        //         else
        //         {
        //             session.fechaHora = DateTime.UtcNow;
        //             session.ip = ip;
        //             session.AgenteUsuario = userAgent;
        //             _dbContext.Sessions.Update(session);
        //         }
        //         await _dbContext.SaveChangesAsync();
        //         return loginResult;
        //     }
        //     catch
        //     {
        //         throw;
        //     }
        // }
    }

    public interface ILoginService
    {
        Task<UserLoginReturnDto> UserLoginAsync(UserLoginDto data, string ip, string userAgent);
        // Task<UserLoginReturnDto> UserRefreshTokenAsync(string refresh, string ip, string userAgent);
    }
}

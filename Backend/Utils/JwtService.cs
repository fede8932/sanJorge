using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Repuestos_San_jorge.Dto.Admin;
using Repuestos_San_jorge.Models;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Repuestos_San_Jorge.Utils{
public class JwtService
{
    private readonly IConfiguration _configuration;
    private readonly string _secretKey;
    private readonly int _refreshTokenExpiryMinutes;

    public JwtService(IConfiguration configuration)
    {
        _configuration = configuration;
        _secretKey = _configuration["JwtConfig:SecretKey"] ?? throw new InvalidOperationException("La clave secreta no está configurada correctamente en el archivo appsettings.json.");

        _refreshTokenExpiryMinutes = Convert.ToInt32(_configuration["JwtConfig:RefreshTokenExpiryMinutes"]);
    }

    public UserLoginReturnDto GenerateToken(User user)
    {
        var accessToken = GenerateJwtToken(user, Convert.ToInt32(_configuration["JwtConfig:AccessTokenExpiryMinutes"]));
        var refreshToken = GenerateRefreshToken(user, _refreshTokenExpiryMinutes);

        return new UserLoginReturnDto
        {
            access_token = accessToken,
            refresh_token = refreshToken
        };
    }

    private string GenerateJwtToken(User user, int expiryMinutes)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_secretKey);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.id.ToString()),
                new Claim(ClaimTypes.Name, user.name),
                new Claim(ClaimTypes.Name, user.lastName),
                new Claim(ClaimTypes.Name, user.email),
                new Claim(ClaimTypes.NameIdentifier, user.roleId.ToString()),
                // Agrega cualquier otra información del usuario que desees incluir en el token
            }),
            Expires = DateTime.UtcNow.AddMinutes(expiryMinutes),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }

    private string GenerateRefreshToken(User user, int expiryMinutes)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_secretKey);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.id.ToString()),
                new Claim(ClaimTypes.Name, user.name),
                new Claim(ClaimTypes.Name, user.lastName),
                new Claim(ClaimTypes.Name, user.email),
                new Claim(ClaimTypes.NameIdentifier, user.roleId.ToString()),
                // Agrega cualquier otra información del usuario que desees incluir en el token
            }),
            Expires = DateTime.UtcNow.AddMinutes(expiryMinutes),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
        public bool VerifyToken(string token)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_secretKey);

        try
        {
            tokenHandler.ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false, // Puedes ajustar esto según tus necesidades
                ValidateAudience = false // Puedes ajustar esto según tus necesidades
            }, out SecurityToken validatedToken);

            return true;
        }
        catch
        {
            return false;
        }
    }

    public ClaimsPrincipal DecodeToken(string token)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_secretKey);

        try
        {
            var claimsPrincipal = tokenHandler.ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false, // Puedes ajustar esto según tus necesidades
                ValidateAudience = false // Puedes ajustar esto según tus necesidades
            }, out SecurityToken validatedToken);

            return claimsPrincipal;
        }
        catch
        {
            throw;
        }
    }

}


}

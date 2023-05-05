using Microsoft.Extensions.DependencyInjection;
using Repuestos_San_jorge.Services.SuperAdmin;

namespace Repuestos_San_jorge.Configuration
{
    public static class ServiceConfiguration
    {
        public static void Configure(IServiceCollection services)
        {
            services.AddScoped<IRoleService, RoleService>();
            // Registrar otros servicios aquí
        }
    }
}
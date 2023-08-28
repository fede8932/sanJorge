using Microsoft.Extensions.DependencyInjection;
using Repuestos_San_jorge.Services.Admin;
using Repuestos_San_jorge.Services.Sessions;
using Repuestos_San_jorge.Services.SuperAdmin;
using Repuestos_San_Jorge.Utils;

namespace Repuestos_San_jorge.Configuration
{
    public static class ServiceConfiguration
    {
        public static void Configure(IServiceCollection services)
        {
            services.AddScoped<IRoleService, RoleService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IClientService, ClientService>();
            services.AddScoped<ISellerService, SellerService>();
            services.AddScoped<ISupplierService, SupplierService>();
            services.AddScoped<IRepresentativeService, RepresentativeService>();
            services.AddScoped<IScheduleService, ScheduleService>();
            services.AddScoped<IMovementService, MovementService>();
            services.AddScoped<IBrandService, BrandService>();
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IPurchaseOrderService, PurchaseOrderService>();
            services.AddScoped<IPurchaseOrderItemService, PurchaseOrderItemService>();
            services.AddScoped<ILoginService, LoginService>();
            services.AddScoped<ICustomerDiscountService, CustomerDiscountService>();
            services.AddScoped<JwtService>();
            // Registrar otros servicios aquí
        }
    }
}
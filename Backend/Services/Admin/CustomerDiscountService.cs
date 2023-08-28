using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Services.Admin
{
    public class CustomerDiscountService : ICustomerDiscountService
    {
        private readonly OfficeDb _dbContext;

        public CustomerDiscountService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Client> AddDiscount(CustomerDiscount customerDiscount) // crear representante de proveedor(seguir despues de seller)
        {
            try
            {
                _dbContext.CustomerDiscounts.Add(customerDiscount);
                await _dbContext.SaveChangesAsync();
                var client = await _dbContext.Clients
                    .Include(c => c.customerDiscounts)
                    .ThenInclude(cd => cd.brand)
                    .Where(c => c.id == customerDiscount.clientId)
                    .FirstOrDefaultAsync();
                if (client == null)
                {
                    throw new ArgumentNullException(nameof(client), "El cliente no puede ser null");
                }
                return client;
            }
            catch
            {
                throw;
            }
        }

        public async Task<Client> DeleteDiscount(int brandId, int clientId) // crear representante de proveedor(seguir despues de seller)
        {
            try
            {
                var customerDiscount = await _dbContext.CustomerDiscounts.FirstOrDefaultAsync(
                    cd => cd.brandId == brandId && cd.clientId == clientId
                );
                if (customerDiscount == null)
                {
                    throw new ArgumentNullException(
                        nameof(customerDiscount),
                        "El descuento no puede ser null"
                    );
                }
                _dbContext.CustomerDiscounts.Remove(customerDiscount);
                await _dbContext.SaveChangesAsync();
                var client = await _dbContext.Clients
                    .Include(c => c.customerDiscounts)
                    .ThenInclude(cd => cd.brand)
                    .Where(c => c.id == customerDiscount.clientId)
                    .FirstOrDefaultAsync();
                if (client == null)
                {
                    throw new ArgumentNullException(nameof(client), "El cliente no puede ser null");
                }
                return client;
            }
            catch
            {
                throw;
            }
        }
    }

    public interface ICustomerDiscountService
    {
        Task<Client> AddDiscount(CustomerDiscount customerDiscount);
        Task<Client> DeleteDiscount(int brandId, int clientId);
    }
}

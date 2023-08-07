using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using static System.Runtime.InteropServices.JavaScript.JSType;
using Repuestos_San_Jorge.Utils;
using Repuestos_San_jorge.Dto.Admin;
using Repuestos_San_jorge.Dto.Enums;

namespace Repuestos_San_jorge.Services.Admin
{
    public class ClientService : IClientService
    {
        private readonly OfficeDb _dbContext;

        public ClientService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> CreateClientAsync(
            Client client,
            CustomerDiscountDto[] customerDiscounts
        ) // crear cliente(seguir despues de seller)
        {
            try
            {
                var user = await _dbContext.Users.FirstOrDefaultAsync(
                    user => user.id == client.userId
                );
                if (user == null)
                {
                    throw new ArgumentNullException(nameof(user), "El usuario no puede ser null");
                }
                client.user = user;
                var seller = await _dbContext.Sellers.FirstOrDefaultAsync(
                    seller => seller.id == client.sellerId
                );
                if (seller == null)
                {
                    throw new ArgumentNullException(
                        nameof(seller),
                        "El vendedor no puede ser null"
                    );
                }
                client.seller = seller;
                CurrentAcount currentAcount =
                    new()
                    {
                        acountNumber = Utils.AcountNumberGen(
                            client.cuit.Substring(0, 1) + client.cuit.Substring(3, 4)
                        ),
                    };
                _dbContext.CurrentAcounts.Add(currentAcount);
                await _dbContext.SaveChangesAsync();
                client.currentAcountId = currentAcount.id;
                _dbContext.Clients.Add(client);
                await _dbContext.SaveChangesAsync();
                foreach (CustomerDiscountDto discount in customerDiscounts)
                {
                    var supplier = await _dbContext.Suppliers.FirstOrDefaultAsync(
                        supplier => supplier.razonSocial == discount.supplierRazonSocial
                    );
                    if (supplier == null)
                    {
                        throw new ArgumentNullException(
                            nameof(supplier),
                            "El proveedor no puede ser null"
                        );
                    }
                    CustomerDiscount newDiscount =
                        new()
                        {
                            clientId = client.id,
                            notas = discount.notas,
                            porcentaje = discount.porcentaje,
                            supplierId = supplier.id,
                        };
                    _dbContext.CustomerDiscounts.Add(newDiscount);
                }
                await _dbContext.SaveChangesAsync();
                return "Registrado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Client>> GetClientsAsync() // Listar Clientes
        {
            try
            {
                return await _dbContext.Clients.ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Client>> GetClientsByDataAsync(string text) // Listar Clientes
        {
            try
            {
                var clients = await _dbContext.Clients
                    .Where(s => s.cuit.Contains(text) || s.razonSocial.Contains(text))
                    .Include(s => s.user)
                    .Include(s => s.currentAcount)
                    .Include(s => s.seller)
                    .ThenInclude(ss => ss.user)
                    .ToListAsync();
                return clients;
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> DeleteClientAsync(int id) // Eliminar Cliente
        {
            try
            {
                var client = await _dbContext.Clients.SingleOrDefaultAsync(
                    client => client.id == id
                );
                if (client == null)
                {
                    throw new ArgumentNullException(nameof(client), "El cliente no puede ser null");
                }
                var user = await _dbContext.Users.SingleOrDefaultAsync(
                    user => user.id == client.userId
                );
                if (user == null)
                {
                    throw new ArgumentNullException(nameof(user), "El user no puede ser null");
                }
                user.status = false;
                await _dbContext.SaveChangesAsync();
                return "Cliente desactivado";
            }
            catch
            {
                throw;
            }
        }

        // public async Task<string> UpdateClientAsync(int id, UpdateClientDto data) // editar clientes
        // {
        //     try
        //     {
        //         var client = await _dbContext.Clients.SingleOrDefaultAsync(
        //             client => client.id == id
        //         );
        //         if (client == null)
        //         {
        //             throw new ArgumentNullException(nameof(client), "El cliente no puede ser null");
        //         }
        //         var dataUpdate = new Dictionary<string, object>();
        //         foreach (var propiedad in data.GetType().GetProperties())
        //         {
        //             string nombrePropiedad = propiedad.Name;
        //             var valorPropiedad = propiedad.GetValue(data);
        //             if (valorPropiedad != null)
        //             {
        //                 dataUpdate.Add(nombrePropiedad, valorPropiedad);
        //             }
        //         }
        //         _dbContext.Entry(client).CurrentValues.SetValues(dataUpdate);
        //         await _dbContext.SaveChangesAsync();
        //         return "Datos de cliente actualizados";
        //     }
        //     catch
        //     {
        //         throw;
        //     }
        // }
        public async Task<Client> UpdateClientAsync(int id, UpdateClientDto data) // editar vendedores
        {
            try
            {
                IvaType ivaType;
                if (!Enum.TryParse(data.iva, out ivaType))
                {
                    throw new ArgumentException("Valor de IVA inválido", nameof(data.iva));
                }
                var cliente = await _dbContext.Clients
                    .Include(c => c.user) // Incluir la relación con User
                    .Include(c => c.currentAcount)
                    .SingleOrDefaultAsync(c => c.id == id);
                if (cliente == null)
                {
                    throw new ArgumentNullException(
                        nameof(cliente),
                        "El cliente no puede ser null"
                    );
                }
                var vendedor = await _dbContext.Sellers
                    .Include(s => s.user)
                    .SingleOrDefaultAsync(s => s.id == data.sellerId);
                if (vendedor == null)
                {
                    throw new ArgumentNullException(
                        nameof(cliente),
                        "El vendedor no puede ser null"
                    );
                }
                cliente.user.email = data.email;
                cliente.altura = data.altura;
                cliente.calle = data.calle;
                cliente.localidad = data.localidad;
                cliente.codigoPostal = data.codigoPostal;
                cliente.telefono = data.telefono;
                cliente.iva = ivaType;
                cliente.seller = vendedor;
                _dbContext.Entry(cliente).State = EntityState.Modified;
                await _dbContext.SaveChangesAsync();
                return cliente;
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> AddClientDiscountAsync(CustomerDiscount customerDiscount) // agregar descuento clientes
        {
            try
            {
                var client = await _dbContext.Clients.SingleOrDefaultAsync(
                    client => client.id == customerDiscount.clientId
                );
                if (client == null)
                {
                    throw new ArgumentNullException(nameof(client), "El cliente no puede ser null");
                }
                var supplier = await _dbContext.Suppliers.SingleOrDefaultAsync(
                    supplier => supplier.id == customerDiscount.supplierId
                );
                if (supplier == null)
                {
                    throw new ArgumentNullException(
                        nameof(client),
                        "El proveedor no puede ser null"
                    );
                }
                customerDiscount.client = client;
                customerDiscount.supplier = supplier;
                _dbContext.CustomerDiscounts.Add(customerDiscount);
                await _dbContext.SaveChangesAsync();
                return "Descuento registrado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<CustomerDiscount> GetClientDiscountAsync(int clientId, int supplierId) // buscar descuento clientes/proveedor
        {
            try
            {
                var customerDiscont = await _dbContext.CustomerDiscounts.FirstOrDefaultAsync(
                    cd => cd.clientId == clientId && cd.supplierId == supplierId
                );
                if (customerDiscont == null)
                {
                    throw new ArgumentNullException(
                        nameof(customerDiscont),
                        "Descuento inexistente"
                    );
                }
                return customerDiscont;
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<CustomerDiscount>> GetDiscountByClientAsync(int clientId) // buscar descuento clientes/proveedor
        {
            try
            {
                var customerDiscont = await _dbContext.CustomerDiscounts
                    .Include(cd => cd.supplier)
                    .Where(cd => cd.clientId == clientId)
                    .ToListAsync();
                if (customerDiscont == null)
                {
                    throw new ArgumentNullException(
                        nameof(customerDiscont),
                        "Descuento inexistente"
                    );
                }
                return customerDiscont;
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> UpdateClientDiscountAsync(
            int clientId,
            int supplierId,
            UpdateCustomerDiscountDto data
        ) // actualizar descuento clientes/proveedor
        {
            try
            {
                var customerDiscont = await _dbContext.CustomerDiscounts.FirstOrDefaultAsync(
                    cd => cd.clientId == clientId && cd.supplierId == supplierId
                );
                if (customerDiscont == null)
                {
                    throw new ArgumentNullException(
                        nameof(customerDiscont),
                        "Descuento inexistente"
                    );
                }
                var dataUpdate = new Dictionary<string, object>();
                foreach (var propiedad in data.GetType().GetProperties())
                {
                    string nombrePropiedad = propiedad.Name;
                    var valorPropiedad = propiedad.GetValue(data);
                    if (valorPropiedad != null)
                    {
                        dataUpdate.Add(nombrePropiedad, valorPropiedad);
                    }
                }
                _dbContext.Entry(customerDiscont).CurrentValues.SetValues(dataUpdate);
                await _dbContext.SaveChangesAsync();
                return "Modificado";
            }
            catch
            {
                throw;
            }
        }
    }

    public interface IClientService
    {
        Task<string> CreateClientAsync(Client client, CustomerDiscountDto[] customerDiscounts);
        Task<IEnumerable<Client>> GetClientsAsync();
        Task<IEnumerable<Client>> GetClientsByDataAsync(string text);
        Task<Client> UpdateClientAsync(int id, UpdateClientDto data);
        Task<string> DeleteClientAsync(int id);
        Task<string> AddClientDiscountAsync(CustomerDiscount customerDiscount);
        Task<CustomerDiscount> GetClientDiscountAsync(int clientId, int supplierId);
        Task<IEnumerable<CustomerDiscount>> GetDiscountByClientAsync(int clientId);
        Task<string> UpdateClientDiscountAsync(
            int clientId,
            int supplierId,
            UpdateCustomerDiscountDto data
        );
    }
}

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

namespace Repuestos_San_jorge.Services.Admin
{
    public class ClientService : IClientService
    {
        private readonly OfficeDb _dbContext;

        public ClientService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> CreateClientAsync(Client client) // crear cliente(seguir despues de seller)
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
                CurrentAcount currentAcount = new CurrentAcount
                {
                    acountNumber = Utils.AcountNumberGen(client.cuit.Substring(0, 4)),
                };
                _dbContext.CurrentAcounts.Add(currentAcount);
                await _dbContext.SaveChangesAsync();
                client.currentAcountId = currentAcount.id;
                _dbContext.Clients.Add(client);
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

        public async Task<string> UpdateClientAsync(int id, UpdateClientDto data) // editar clientes
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
                _dbContext.Entry(client).CurrentValues.SetValues(dataUpdate);
                await _dbContext.SaveChangesAsync();
                return "Datos de cliente actualizados";
            }
            catch
            {
                throw;
            }
        }
    }

    public interface IClientService
    {
        Task<string> CreateClientAsync(Client client);
        Task<IEnumerable<Client>> GetClientsAsync();

        Task<string> UpdateClientAsync(int id, UpdateClientDto data);
        Task<string> DeleteClientAsync(int id);
    }
}

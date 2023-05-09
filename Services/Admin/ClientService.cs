using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using static System.Runtime.InteropServices.JavaScript.JSType;

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
                var user = await _dbContext.Users.FirstOrDefaultAsync(user => user.id == client.userId);
                if (user == null)
                {
                    throw new ArgumentNullException(nameof(user), "El usuario no puede ser null");
                }
                client.user = user;
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
    }

    public interface IClientService
    {
        Task<string> CreateClientAsync(Client client);
        Task<IEnumerable<Client>> GetClientsAsync();
        // Task<string> UpdateClientAsync(int id);
        // Task<string> DeleteClientAsync(int id);
    }
}
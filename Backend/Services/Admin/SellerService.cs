using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Services.Admin
{
    public class SellerService : ISellerService
    {
        private readonly OfficeDb _dbContext;

        public SellerService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> CreateSellerAsync(Seller seller) // crear vendedor
        {
            try
            {
                var user = await _dbContext.Users.FirstOrDefaultAsync(
                    user => user.id == seller.userId
                );
                if (user == null)
                {
                    throw new ArgumentNullException(nameof(user), "El usuario no puede ser null");
                }
                seller.user = user;
                _dbContext.Sellers.Add(seller);
                await _dbContext.SaveChangesAsync();
                return "Registrado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Seller>> GetSellersAsync() // Listar vendedores
        {
            try
            {
                return await _dbContext.Sellers.Include(seller => seller.user).ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        // public async Task<IEnumerable<Seller>> GetSellersBydataAsync(string text, string by) // Listar vendedores
        // {
        //     try
        //     {
        //         if (by == "cuil")
        //         {
        //             var sellers = await _dbContext.Sellers
        //                 .Where(s => s.cuil.Contains(text))
        //                 .Include(s => s.user)
        //                 .ToListAsync();
        //             return sellers;
        //         }
        //         else
        //         {
        //             var users = await _dbContext.Users
        //                 .Where(u => u.name.Contains(text) || u.lastName.Contains(text))
        //                 .Include(u => u.seller)
        //                 .ToListAsync();

        //             // Cargar los vendedores relacionados después de obtener los usuarios
        //             var sellers = users
        //                 .Where(user => user.seller != null)
        //                 .Select(user => user.seller)
        //                 .ToList();
        //             return sellers;
        //         }
        //     }
        //     catch
        //     {
        //         throw;
        //     }
        // }
        public async Task<SearchSellersDto> GetSellersBydataAsync(
            string text,
            string by,
            int page,
            int pageSize,
            string orderByColumn
        )
        {
            try
            {
                IQueryable<Seller> query;

                if (text == "null")
                {
                    // Si el texto está vacío, devuelve todos los vendedores
                    query = _dbContext.Sellers;
                }
                else
                {
                    if (by == "cuil")
                    {
                        query = _dbContext.Sellers.Where(s => s.cuil.Contains(text));
                    }
                    else
                    {
                        query = _dbContext.Sellers.Where(
                            s => s.user.name.Contains(text) || s.user.lastName.Contains(text)
                        );
                        // .ToListAsync();
                    }
                }

                int totalRows = await query.CountAsync();

                // Ordenar por la columna especificada de manera descendente
                if (!string.IsNullOrEmpty(orderByColumn))
                {
                    switch (orderByColumn.ToLower())
                    {
                        case "id":
                            query = query.OrderByDescending(s => s.id);
                            break;
                        // Agrega más casos según las columnas por las que desees ordenar
                        default:
                            // Si la columna especificada no es válida, puedes manejarlo según tus necesidades.
                            break;
                    }
                }

                // Aplicar paginación
                query = query.Skip((page - 1) * pageSize).Take(pageSize);

                // Incluir la entidad User
                query = query.Include(s => s.user);

                var sellers = await query.ToListAsync();

                int totalPages = (int)Math.Ceiling((double)totalRows / pageSize);

                SearchSellersDto dataSearch = new SearchSellersDto
                {
                    sellers = sellers,
                    totalRows = totalRows,
                    totalPages = totalPages
                };

                return dataSearch;
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> DeleteSellerAsync(int id) // desactivar vendedores
        {
            try
            {
                var vendedor = await _dbContext.Sellers.SingleOrDefaultAsync(
                    seller => seller.id == id
                );
                if (vendedor == null)
                {
                    throw new ArgumentNullException(
                        nameof(vendedor),
                        "El vendedor no puede ser null"
                    );
                }
                var user = await _dbContext.Users.SingleOrDefaultAsync(
                    user => user.id == vendedor.userId
                );
                if (user == null)
                {
                    throw new ArgumentNullException(nameof(user), "El user no puede ser null");
                }
                user.status = false;
                await _dbContext.SaveChangesAsync();
                return "Vendedor desactivado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<Seller> UpdateSellerAsync(int id, UpdateSellerDto data) // editar vendedores
        {
            try
            {
                var vendedor = await _dbContext.Sellers
                    .Include(s => s.user) // Incluir la relación con User
                    .SingleOrDefaultAsync(s => s.id == id);
                if (vendedor == null)
                {
                    throw new ArgumentNullException(
                        nameof(vendedor),
                        "El vendedor no puede ser null"
                    );
                }
                if (vendedor.user == null)
                {
                    throw new ArgumentNullException(
                        nameof(vendedor.user),
                        "El usuario no puede ser null"
                    );
                }
                vendedor.user.name = data.name;
                vendedor.user.lastName = data.lastName;
                vendedor.cuil = data.cuil;
                vendedor.user.email = data.email;
                vendedor.altura = data.altura;
                vendedor.calle = data.calle;
                vendedor.localidad = data.localidad;
                vendedor.codigoPostal = data.codigoPostal;
                vendedor.telefono = data.telefono;
                vendedor.comisionBase = data.comisionBase;
                vendedor.comisionOferta = data.comisionOferta;
                _dbContext.Entry(vendedor).State = EntityState.Modified;
                await _dbContext.SaveChangesAsync();
                return vendedor;
            }
            catch
            {
                throw;
            }
        }
    }

    public interface ISellerService
    {
        Task<string> CreateSellerAsync(Seller seller);
        Task<IEnumerable<Seller>> GetSellersAsync();
        Task<SearchSellersDto> GetSellersBydataAsync(
            string text,
            string by,
            int page,
            int pageSize,
            string orderByColumn
        );
        Task<Seller> UpdateSellerAsync(int id, UpdateSellerDto data);
        Task<string> DeleteSellerAsync(int id);
    }
}

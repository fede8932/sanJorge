using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Services.Admin
{
    public class ProductService : IProductService
    {
        private readonly OfficeDb _dbContext;

        public ProductService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> CreateProductAsync(
            Product product,
            int brandId,
            int? stock,
            int? stockMin
        ) // crear producto(con marca ya creada)
        {
            try
            {
                var brand = await _dbContext.Brands.SingleOrDefaultAsync(
                    brand => brand.id == brandId
                );
                if (brand == null)
                {
                    throw new ArgumentNullException(nameof(brand), "La marca no puede ser null");
                }
                var brandProduct = new BrandProduct { brand = brand, product = product };
                var productStock = new Stock { };
                productStock.stock = (int)(stock == null ? 0 : stock);
                productStock.minStock = (int)(stockMin == null ? 3 : stockMin);
                productStock.brand = brand;
                productStock.product = product;
                _dbContext.BrandProducts.Add(brandProduct);
                _dbContext.Products.Add(product);
                _dbContext.Stocks.Add(productStock);
                await _dbContext.SaveChangesAsync();
                return "Registrado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Product>> GetProductsAsync() // Listar productos
        {
            try
            {
                return await _dbContext.Products.ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> UpdateProductAsync(int id, UpdateProductDto data) // editar producto
        {
            try
            {
                var product = await _dbContext.Products.SingleOrDefaultAsync(
                    product => product.id == id
                );
                if (product == null)
                {
                    throw new ArgumentNullException(
                        nameof(product),
                        "El producto no puede ser null"
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
                _dbContext.Entry(product).CurrentValues.SetValues(dataUpdate);
                await _dbContext.SaveChangesAsync();
                return "Datos de producto actualizados";
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> AddBrandToProductAsync(int productId, int brandId) // agregar marca a producto
        {
            try
            {
                var brand = await _dbContext.Brands.SingleOrDefaultAsync(
                    brand => brand.id == brandId
                );
                if (brand == null)
                {
                    throw new ArgumentNullException(
                        nameof(brand),
                        "No existe marca en los registros"
                    );
                }
                var product = await _dbContext.Products.SingleOrDefaultAsync(
                    product => product.id == productId
                );
                if (product == null)
                {
                    throw new ArgumentNullException(
                        nameof(brand),
                        "No existe producto en los registros"
                    );
                }
                var brandProduct = new BrandProduct { brand = brand, product = product };
                _dbContext.BrandProducts.Add(brandProduct);
                await _dbContext.SaveChangesAsync();
                return "Producto actualizado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> UpdateProductStock(
            int productId,
            int brandId,
            UpdateProdStockDto data
        ) // modificar stock
        {
            try
            {
                var stock = await _dbContext.Stocks.SingleOrDefaultAsync(
                    stock => stock.brandId == brandId && stock.productId == productId
                );
                if (stock == null)
                {
                    throw new ArgumentNullException(
                        nameof(stock),
                        "No hay registro de ese producto y/o marca en los registros"
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
                _dbContext.Entry(stock).CurrentValues.SetValues(dataUpdate);
                await _dbContext.SaveChangesAsync();
                return "Stock actualizado";
            }
            catch
            {
                throw;
            }
        }
    }

    public interface IProductService
    {
        Task<string> CreateProductAsync(Product product, int brandId, int? stock, int? stockMin);
        Task<IEnumerable<Product>> GetProductsAsync();

        Task<string> UpdateProductAsync(int id, UpdateProductDto data);
        Task<string> AddBrandToProductAsync(int productId, int brandId);
        Task<string> UpdateProductStock(int productId, int brandId, UpdateProdStockDto data);
    }
}

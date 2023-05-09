using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;

namespace Repuestos_San_jorge.Data
{
    public class OfficeDb : DbContext
    {
        public OfficeDb(DbContextOptions<OfficeDb> options)
            : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<Role> Roles => Set<Role>();
        public DbSet<Client> Clients => Set<Client>();
        public DbSet<Seller> Sellers => Set<Seller>();
        public DbSet<Schedule> Schedules => Set<Schedule>();
        public DbSet<Supplier> Suppliers => Set<Supplier>();
        public DbSet<Representative> Representatives => Set<Representative>();
        public DbSet<CurrentAcount> CurrentAcounts => Set<CurrentAcount>();
        public DbSet<Movement> Movements => Set<Movement>();
        public DbSet<Brand> Brands => Set<Brand>();
        public DbSet<BrandProduct> BrandProducts => Set<BrandProduct>();
        public DbSet<BrandSupplier> BrandSuppliers => Set<BrandSupplier>();
        public DbSet<CustomerDiscount> CustomerDiscounts => Set<CustomerDiscount>();
        public DbSet<Product> Products => Set<Product>();
        public DbSet<PurchaseOrder> PurchaseOrders => Set<PurchaseOrder>();
        public DbSet<PurchaseOrderItem> PurchaseOrderItems => Set<PurchaseOrderItem>();
        public DbSet<Stock> Stocks => Set<Stock>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<User>()
                .HasOne(user => user.role)
                .WithMany(role => role.users)
                .HasForeignKey(user => user.roleId);
            modelBuilder
                .Entity<User>()
                .HasOne(user => user.client)
                .WithOne(client => client.user)
                .HasForeignKey<Client>(client => client.userId);
            modelBuilder
                .Entity<User>()
                .HasOne(user => user.seller)
                .WithOne(seller => seller.user)
                .HasForeignKey<Seller>(seller => seller.userId);
            modelBuilder
                .Entity<Client>()
                .HasOne(client => client.schedule)
                .WithOne(schedule => schedule.client)
                .HasForeignKey<Schedule>(schedule => schedule.clientId);
            modelBuilder
                .Entity<Seller>()
                .HasMany(seller => seller.clients)
                .WithOne(client => client.seller)
                .HasForeignKey(client => client.sellerId);
            modelBuilder
                .Entity<CurrentAcount>()
                .HasOne(currentAcount => currentAcount.client)
                .WithOne(client => client.currentAcount)
                .HasForeignKey<Client>(client => client.currentAcountId);
            modelBuilder
                .Entity<CurrentAcount>()
                .HasOne(currentAcount => currentAcount.movement)
                .WithMany(movement => movement.currentAcounts)
                .HasForeignKey(currentAcount => currentAcount.movementId);
            modelBuilder
                .Entity<Representative>()
                .HasOne(representative => representative.supplier)
                .WithMany(supplier => supplier.representative)
                .HasForeignKey(representative => representative.supplierId);
            modelBuilder
                .Entity<CustomerDiscount>()
                .HasKey(
                    customerDiscount =>
                        new { customerDiscount.clientId, customerDiscount.supplierId }
                );
            modelBuilder
                .Entity<CustomerDiscount>()
                .HasOne(customerDiscount => customerDiscount.client)
                .WithMany(client => client.customerDiscounts)
                .HasForeignKey(customerDiscount => customerDiscount.clientId);
            modelBuilder
                .Entity<CustomerDiscount>()
                .HasOne(customerDiscount => customerDiscount.supplier)
                .WithMany(supplier => supplier.customerDiscounts)
                .HasForeignKey(customerDiscount => customerDiscount.supplierId);
            modelBuilder
                .Entity<BrandSupplier>()
                .HasKey(brandSupplier => new { brandSupplier.brandId, brandSupplier.supplierId });
            modelBuilder
                .Entity<BrandSupplier>()
                .HasOne(brandSupplier => brandSupplier.supplier)
                .WithMany(supplier => supplier.brandSuppliers)
                .HasForeignKey(brandSupplier => brandSupplier.supplierId);
            modelBuilder
                .Entity<BrandSupplier>()
                .HasOne(brandSupplier => brandSupplier.brand)
                .WithMany(brand => brand.brandSuppliers)
                .HasForeignKey(brandSupplier => brandSupplier.brandId);
            modelBuilder
                .Entity<PurchaseOrderItem>()
                .HasOne(purchaseOrderItem => purchaseOrderItem.purchaseOrder)
                .WithMany(purchaseOrder => purchaseOrder.purchaseOrderItems)
                .HasForeignKey(purchaseOrderItem => purchaseOrderItem.purchaseOrderId);
            modelBuilder
                .Entity<PurchaseOrderItem>()
                .HasOne(purchaseOrderItem => purchaseOrderItem.product)
                .WithMany(product => product.purchaseOrderItems)
                .HasForeignKey(purchaseOrderItem => purchaseOrderItem.productId);
            modelBuilder
                .Entity<BrandProduct>()
                .HasKey(brandProduct => new { brandProduct.brandId, brandProduct.productId });
            modelBuilder
                .Entity<BrandProduct>()
                .HasOne(brandProduct => brandProduct.brand)
                .WithMany(brand => brand.brandProducts)
                .HasForeignKey(brandProduct => brandProduct.brandId);
            modelBuilder
                .Entity<BrandProduct>()
                .HasOne(brandProduct => brandProduct.product)
                .WithMany(product => product.brandProducts)
                .HasForeignKey(brandProduct => brandProduct.productId);
            modelBuilder
                .Entity<Product>()
                .HasOne(product => product.stock)
                .WithOne(stock => stock.product)
                .HasForeignKey<Stock>(stock => stock.productId);
            modelBuilder
                .Entity<Brand>()
                .HasOne(brand => brand.stock)
                .WithOne(stock => stock.brand)
                .HasForeignKey<Stock>(stock => stock.brandId);
        }
    }
}

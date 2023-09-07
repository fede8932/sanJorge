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
        public DbSet<Session> Sessions => Set<Session>();
        public DbSet<PointOfSale> PointOfSales => Set<PointOfSale>();
        public DbSet<ControlOrder> ControlOrders => Set<ControlOrder>();
        public DbSet<Voucher> Vouchers => Set<Voucher>();
        public DbSet<Price> Prices => Set<Price>();
        public DbSet<OrderAjust> OrderAjusts => Set<OrderAjust>();
        public DbSet<AjustOrderItem> AjustOrderItems => Set<AjustOrderItem>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Conversiones de enum
            modelBuilder
                .Entity<Movement>()
                .Property(Movements => Movements.type)
                .HasConversion<string>();
            modelBuilder.Entity<Client>().Property(client => client.iva).HasConversion<string>();
            modelBuilder
                .Entity<PurchaseOrder>()
                .Property(purchaseOrder => purchaseOrder.status)
                .HasConversion<string>();
            modelBuilder
                .Entity<PurchaseOrder>()
                .Property(purchaseOrder => purchaseOrder.type)
                .HasConversion<string>();
            modelBuilder
                .Entity<Voucher>()
                .Property(voucher => voucher.type)
                .HasConversion<string>();
            modelBuilder
                .Entity<Voucher>()
                .Property(voucher => voucher.code)
                .HasConversion<string>();
            modelBuilder
                .Entity<OrderAjust>()
                .Property(orderAjust => orderAjust.status)
                .HasConversion<string>();

            // Restricciones
            modelBuilder.Entity<Brand>().HasIndex(brand => brand.name).IsUnique();
            modelBuilder.Entity<Client>().HasIndex(client => client.razonSocial).IsUnique();
            modelBuilder.Entity<Client>().HasIndex(client => client.cuit).IsUnique();
            modelBuilder.Entity<Product>().HasIndex(product => product.article).IsUnique();
            modelBuilder.Entity<Role>().HasIndex(role => role.name).IsUnique();
            modelBuilder.Entity<Seller>().HasIndex(seller => seller.cuil).IsUnique();
            modelBuilder.Entity<Supplier>().HasIndex(supplier => supplier.razonSocial).IsUnique();
            modelBuilder.Entity<Supplier>().HasIndex(supplier => supplier.cuit).IsUnique();
            modelBuilder.Entity<User>().HasIndex(user => user.email).IsUnique();

            // Relaciones
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
                .HasMany(client => client.schedules)
                .WithOne(schedule => schedule.client)
                .HasForeignKey(schedule => schedule.clientId);
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
                .Entity<Movement>()
                .HasOne(movement => movement.currentAcount)
                .WithMany(currentAcount => currentAcount.movements)
                .HasForeignKey(movement => movement.currentAcountId);
            modelBuilder
                .Entity<Representative>()
                .HasOne(representative => representative.supplier)
                .WithMany(supplier => supplier.representative)
                .HasForeignKey(representative => representative.supplierId);
            modelBuilder
                .Entity<CustomerDiscount>()
                .HasKey(
                    customerDiscount =>
                        new { customerDiscount.clientId, customerDiscount.brandId }
                );
            modelBuilder
                .Entity<CustomerDiscount>()
                .HasOne(customerDiscount => customerDiscount.client)
                .WithMany(client => client.customerDiscounts)
                .HasForeignKey(customerDiscount => customerDiscount.clientId);
            modelBuilder
                .Entity<CustomerDiscount>()
                .HasOne(customerDiscount => customerDiscount.brand)
                .WithMany(brand => brand.customerDiscounts)
                .HasForeignKey(customerDiscount => customerDiscount.brandId);
            modelBuilder.Entity<Brand>().HasIndex(brand => brand.name).IsUnique();
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
                .HasOne(purchaseOrderItem => purchaseOrderItem.brand)
                .WithMany(brand => brand.purchaseOrderItems)
                .HasForeignKey(purchaseOrderItem => purchaseOrderItem.brandId);
            modelBuilder
                .Entity<PurchaseOrderItem>()
                .HasOne(purchaseOrderItem => purchaseOrderItem.product)
                .WithMany(product => product.purchaseOrderItems)
                .HasForeignKey(purchaseOrderItem => purchaseOrderItem.productId);
            modelBuilder
                .Entity<BrandProduct>()
                .HasKey(brandProduct => new { brandProduct.productId, brandProduct.brandId });
            modelBuilder
                .Entity<BrandProduct>()
                .HasOne(brandProduct => brandProduct.product)
                .WithMany(product => product.brandProducts)
                .HasForeignKey(brandProduct => brandProduct.productId);

            modelBuilder
                .Entity<BrandProduct>()
                .HasOne(brandProduct => brandProduct.brand)
                .WithMany(brand => brand.brandProducts)
                .HasForeignKey(brandProduct => brandProduct.brandId);
            modelBuilder
                .Entity<BrandProduct>()
                .HasOne(brandProduct => brandProduct.stock)
                .WithOne()
                .HasForeignKey<BrandProduct>(brandProduct => brandProduct.stockId);

            modelBuilder
                .Entity<BrandProduct>()
                .HasOne(brandProduct => brandProduct.price)
                .WithOne()
                .HasForeignKey<BrandProduct>(brandProduct => brandProduct.priceId);
            modelBuilder
                .Entity<CurrentAcount>()
                .HasOne(currentAcount => currentAcount.supplier)
                .WithOne(supplier => supplier.currentAcount)
                .HasForeignKey<Supplier>(supplier => supplier.currentAcountId);
            modelBuilder
                .Entity<PurchaseOrder>()
                .HasOne(purchaseOrder => purchaseOrder.supplier)
                .WithMany(supplier => supplier.purchaseOrders)
                .HasForeignKey(purchaseOrder => purchaseOrder.supplierId);
            modelBuilder
                .Entity<PurchaseOrder>()
                .HasOne(purchaseOrder => purchaseOrder.client)
                .WithMany(client => client.purchaseOrders)
                .HasForeignKey(purchaseOrder => purchaseOrder.clientId);
            modelBuilder
                .Entity<PurchaseOrder>()
                .HasOne(purchaseOrder => purchaseOrder.Voucher)
                .WithOne(voucher => voucher.purchaseOrder)
                .HasForeignKey<Voucher>(voucher => voucher.purchaseOrderId);
            modelBuilder
                .Entity<PurchaseOrder>()
                .HasOne(purchaseOrder => purchaseOrder.controlOrder)
                .WithOne(controlOrder => controlOrder.purchaseOrder)
                .HasForeignKey<ControlOrder>(controlOrder => controlOrder.purchaseOrderId);
            modelBuilder
                .Entity<PointOfSale>()
                .HasOne(pointOfSale => pointOfSale.stock)
                .WithOne(stock => stock.pointOfSale)
                .HasForeignKey<Stock>(stock => stock.pointOfSaleId);
            modelBuilder
                .Entity<PointOfSale>()
                .HasMany(pointOfSale => pointOfSale.locations)
                .WithOne(location => location.pointOfSale)
                .HasForeignKey(location => location.pointOfSaleId);
            modelBuilder.Entity<PurchaseOrder>()
                .HasOne(purchaseOrder => purchaseOrder.orderAjust)
                .WithOne(orderAjust => orderAjust.purchaseOrder)
                .HasForeignKey<OrderAjust>(orderAjust => orderAjust.orderId);
            modelBuilder
                .Entity<AjustOrderItem>()
                .HasOne(ajustOrderItem => ajustOrderItem.orderAjust)
                .WithMany(ajustOrder => ajustOrder.ajustOrderItems)
                .HasForeignKey(ajustOrderItem => ajustOrderItem.orderAjustId);
            modelBuilder
                .Entity<AjustOrderItem>()
                .HasOne(ajustOrderItem => ajustOrderItem.brand)
                .WithMany(brand => brand.ajustOrderItems)
                .HasForeignKey(ajustOrderItem => ajustOrderItem.brandId);
            modelBuilder
                .Entity<AjustOrderItem>()
                .HasOne(ajustOrderItem => ajustOrderItem.product)
                .WithMany(product => product.ajustOrderItems)
                .HasForeignKey(ajustOrderItem => ajustOrderItem.productId);
        }
    }
}

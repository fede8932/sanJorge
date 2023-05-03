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
                .HasForeignKey<Client>(seller => seller.userId);
            modelBuilder
                .Entity<Client>()
                .HasOne(client => client.schedule)
                .WithOne(schedule => schedule.client)
                .HasForeignKey<Schedule>(schedule => schedule.clientId);
            modelBuilder
                .Entity<Seller>()
                .HasOne(seller => seller.client)
                .WithOne(client => client.seller)
                .HasForeignKey<Client>(client => client.sellerId);
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
            modelBuilder //revisar porque es many to many
                .Entity<Supplier>()
                .HasOne(supplier => supplier.customerDiscounts)
                .WithOne(customerDiscounts => customerDiscounts.supplier)
                .HasForeignKey<CustomerDiscount>(customerDiscounts => customerDiscounts.supplierId);
            modelBuilder //revisar porque es many to many
                .Entity<Client>()
                .HasOne(client => client.customerDiscount)
                .WithOne(customerDiscounts => customerDiscounts.client)
                .HasForeignKey<CustomerDiscount>(customerDiscounts => customerDiscounts.clientId);
        }
    }
}

﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Repuestos_San_jorge.Data;

#nullable disable

namespace Repuestos_San_jorge.Migrations
{
    [DbContext(typeof(OfficeDb))]
    [Migration("20230517081050_cambios001")]
    partial class cambios001
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Repuestos_San_jorge.Models.Brand", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.HasIndex("name")
                        .IsUnique();

                    b.ToTable("Brands");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.BrandProduct", b =>
                {
                    b.Property<int>("brandId")
                        .HasColumnType("integer");

                    b.Property<int>("productId")
                        .HasColumnType("integer");

                    b.Property<int>("id")
                        .HasColumnType("integer");

                    b.HasKey("brandId", "productId");

                    b.HasIndex("productId");

                    b.ToTable("BrandProducts");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.BrandSupplier", b =>
                {
                    b.Property<int?>("brandId")
                        .HasColumnType("integer");

                    b.Property<int?>("supplierId")
                        .HasColumnType("integer");

                    b.Property<int>("id")
                        .HasColumnType("integer");

                    b.HasKey("brandId", "supplierId");

                    b.HasIndex("supplierId");

                    b.ToTable("BrandSuppliers");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Client", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("altura")
                        .HasColumnType("integer");

                    b.Property<string>("calle")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("codigoPostal")
                        .HasColumnType("integer");

                    b.Property<string>("comentarios")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("character varying(300)");

                    b.Property<string>("coordenadas")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("cuit")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("currentAcountId")
                        .HasColumnType("integer");

                    b.Property<string>("iva")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("localidad")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("razonSocial")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("sellerId")
                        .HasColumnType("integer");

                    b.Property<string>("telefono")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("userId")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("currentAcountId")
                        .IsUnique();

                    b.HasIndex("sellerId");

                    b.HasIndex("userId")
                        .IsUnique();

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.CurrentAcount", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("acountNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("CurrentAcounts");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.CustomerDiscount", b =>
                {
                    b.Property<int>("clientId")
                        .HasColumnType("integer");

                    b.Property<int>("supplierId")
                        .HasColumnType("integer");

                    b.Property<int>("id")
                        .HasColumnType("integer");

                    b.Property<string>("notas")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<float>("porcentaje")
                        .HasColumnType("real");

                    b.HasKey("clientId", "supplierId");

                    b.HasIndex("supplierId");

                    b.ToTable("CustomerDiscounts");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Movement", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<float>("amount")
                        .HasColumnType("real");

                    b.Property<int>("currentAcountId")
                        .HasColumnType("integer");

                    b.Property<DateTime?>("fecha")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("type")
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.HasIndex("currentAcountId");

                    b.ToTable("Movements");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Product", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("article")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<float>("costPercentage")
                        .HasColumnType("real");

                    b.Property<string>("description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<float>("listPrice")
                        .HasColumnType("real");

                    b.Property<float>("salePercentage")
                        .HasColumnType("real");

                    b.HasKey("id");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.PurchaseOrder", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<DateTime>("date")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("status")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("supplierId")
                        .HasColumnType("integer");

                    b.Property<float>("total")
                        .HasColumnType("real");

                    b.HasKey("id");

                    b.ToTable("PurchaseOrders");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.PurchaseOrderItem", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("amount")
                        .HasColumnType("integer");

                    b.Property<int>("productId")
                        .HasColumnType("integer");

                    b.Property<int>("purchaseOrderId")
                        .HasColumnType("integer");

                    b.Property<float>("salePrice")
                        .HasColumnType("real");

                    b.HasKey("id");

                    b.HasIndex("productId");

                    b.HasIndex("purchaseOrderId");

                    b.ToTable("PurchaseOrderItems");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Representative", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("apellido")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("comentarios")
                        .HasColumnType("text");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool?>("status")
                        .HasColumnType("boolean");

                    b.Property<int>("supplierId")
                        .HasColumnType("integer");

                    b.Property<string>("telefono")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.HasIndex("supplierId");

                    b.ToTable("Representatives");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Role", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Schedule", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<TimeSpan>("apertura")
                        .HasColumnType("interval");

                    b.Property<TimeSpan>("cierre")
                        .HasColumnType("interval");

                    b.Property<int>("clientId")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("clientId");

                    b.ToTable("Schedules");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Seller", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("altura")
                        .HasColumnType("integer");

                    b.Property<string>("calle")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("codigoPostal")
                        .HasColumnType("integer");

                    b.Property<float?>("comisionBase")
                        .HasColumnType("real");

                    b.Property<float?>("comisionOferta")
                        .HasColumnType("real");

                    b.Property<string>("cuil")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("localidad")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("telefono")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("userId")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("userId")
                        .IsUnique();

                    b.ToTable("Sellers");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Stock", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("brandId")
                        .HasColumnType("integer");

                    b.Property<int>("minStock")
                        .HasColumnType("integer");

                    b.Property<int>("productId")
                        .HasColumnType("integer");

                    b.Property<int>("stock")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("brandId")
                        .IsUnique();

                    b.HasIndex("productId")
                        .IsUnique();

                    b.ToTable("Stocks");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Supplier", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("altura")
                        .HasColumnType("integer");

                    b.Property<string>("calle")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("codigoPostal")
                        .HasColumnType("integer");

                    b.Property<string>("comentarios")
                        .HasColumnType("text");

                    b.Property<string>("cuit")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("localidad")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("razonSocial")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool?>("status")
                        .HasColumnType("boolean");

                    b.Property<string>("telefono")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("Suppliers");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.User", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("lastName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("roleId")
                        .HasColumnType("integer");

                    b.Property<bool>("status")
                        .HasColumnType("boolean");

                    b.HasKey("id");

                    b.HasIndex("roleId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.BrandProduct", b =>
                {
                    b.HasOne("Repuestos_San_jorge.Models.Brand", "brand")
                        .WithMany("brandProducts")
                        .HasForeignKey("brandId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Repuestos_San_jorge.Models.Product", "product")
                        .WithMany("brandProducts")
                        .HasForeignKey("productId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("brand");

                    b.Navigation("product");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.BrandSupplier", b =>
                {
                    b.HasOne("Repuestos_San_jorge.Models.Brand", "brand")
                        .WithMany("brandSuppliers")
                        .HasForeignKey("brandId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Repuestos_San_jorge.Models.Supplier", "supplier")
                        .WithMany("brandSuppliers")
                        .HasForeignKey("supplierId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("brand");

                    b.Navigation("supplier");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Client", b =>
                {
                    b.HasOne("Repuestos_San_jorge.Models.CurrentAcount", "currentAcount")
                        .WithOne("client")
                        .HasForeignKey("Repuestos_San_jorge.Models.Client", "currentAcountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Repuestos_San_jorge.Models.Seller", "seller")
                        .WithMany("clients")
                        .HasForeignKey("sellerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Repuestos_San_jorge.Models.User", "user")
                        .WithOne("client")
                        .HasForeignKey("Repuestos_San_jorge.Models.Client", "userId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("currentAcount");

                    b.Navigation("seller");

                    b.Navigation("user");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.CustomerDiscount", b =>
                {
                    b.HasOne("Repuestos_San_jorge.Models.Client", "client")
                        .WithMany("customerDiscounts")
                        .HasForeignKey("clientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Repuestos_San_jorge.Models.Supplier", "supplier")
                        .WithMany("customerDiscounts")
                        .HasForeignKey("supplierId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("client");

                    b.Navigation("supplier");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Movement", b =>
                {
                    b.HasOne("Repuestos_San_jorge.Models.CurrentAcount", "currentAcount")
                        .WithMany("movements")
                        .HasForeignKey("currentAcountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("currentAcount");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.PurchaseOrderItem", b =>
                {
                    b.HasOne("Repuestos_San_jorge.Models.Product", "product")
                        .WithMany("purchaseOrderItems")
                        .HasForeignKey("productId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Repuestos_San_jorge.Models.PurchaseOrder", "purchaseOrder")
                        .WithMany("purchaseOrderItems")
                        .HasForeignKey("purchaseOrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("product");

                    b.Navigation("purchaseOrder");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Representative", b =>
                {
                    b.HasOne("Repuestos_San_jorge.Models.Supplier", "supplier")
                        .WithMany("representative")
                        .HasForeignKey("supplierId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("supplier");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Schedule", b =>
                {
                    b.HasOne("Repuestos_San_jorge.Models.Client", "client")
                        .WithMany("schedules")
                        .HasForeignKey("clientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("client");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Seller", b =>
                {
                    b.HasOne("Repuestos_San_jorge.Models.User", "user")
                        .WithOne("seller")
                        .HasForeignKey("Repuestos_San_jorge.Models.Seller", "userId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("user");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Stock", b =>
                {
                    b.HasOne("Repuestos_San_jorge.Models.Brand", "brand")
                        .WithOne("stock")
                        .HasForeignKey("Repuestos_San_jorge.Models.Stock", "brandId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Repuestos_San_jorge.Models.Product", "product")
                        .WithOne("stock")
                        .HasForeignKey("Repuestos_San_jorge.Models.Stock", "productId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("brand");

                    b.Navigation("product");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.User", b =>
                {
                    b.HasOne("Repuestos_San_jorge.Models.Role", "role")
                        .WithMany("users")
                        .HasForeignKey("roleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("role");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Brand", b =>
                {
                    b.Navigation("brandProducts");

                    b.Navigation("brandSuppliers");

                    b.Navigation("stock");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Client", b =>
                {
                    b.Navigation("customerDiscounts");

                    b.Navigation("schedules");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.CurrentAcount", b =>
                {
                    b.Navigation("client");

                    b.Navigation("movements");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Product", b =>
                {
                    b.Navigation("brandProducts");

                    b.Navigation("purchaseOrderItems");

                    b.Navigation("stock")
                        .IsRequired();
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.PurchaseOrder", b =>
                {
                    b.Navigation("purchaseOrderItems");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Role", b =>
                {
                    b.Navigation("users");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Seller", b =>
                {
                    b.Navigation("clients");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.Supplier", b =>
                {
                    b.Navigation("brandSuppliers");

                    b.Navigation("customerDiscounts");

                    b.Navigation("representative");
                });

            modelBuilder.Entity("Repuestos_San_jorge.Models.User", b =>
                {
                    b.Navigation("client");

                    b.Navigation("seller");
                });
#pragma warning restore 612, 618
        }
    }
}

using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Repuestos_San_jorge.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Brands",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Brands", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Movements",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    type = table.Column<string>(type: "text", nullable: false),
                    amount = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movements", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    article = table.Column<string>(type: "text", nullable: false),
                    description = table.Column<string>(type: "text", nullable: false),
                    listPrice = table.Column<float>(type: "real", nullable: false),
                    costPercentage = table.Column<float>(type: "real", nullable: false),
                    salePercentage = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "PurchaseOrders",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    status = table.Column<string>(type: "text", nullable: false),
                    total = table.Column<float>(type: "real", nullable: false),
                    supplierId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PurchaseOrders", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Suppliers",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    razonSocial = table.Column<string>(type: "text", nullable: false),
                    cuit = table.Column<string>(type: "text", nullable: false),
                    calle = table.Column<string>(type: "text", nullable: false),
                    altura = table.Column<int>(type: "integer", nullable: false),
                    localidad = table.Column<string>(type: "text", nullable: false),
                    codigoPostal = table.Column<int>(type: "integer", nullable: false),
                    telefono = table.Column<string>(type: "text", nullable: false),
                    email = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Suppliers", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "CurrentAcounts",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    movementId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurrentAcounts", x => x.id);
                    table.ForeignKey(
                        name: "FK_CurrentAcounts_Movements_movementId",
                        column: x => x.movementId,
                        principalTable: "Movements",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BrandProducts",
                columns: table => new
                {
                    brandId = table.Column<int>(type: "integer", nullable: false),
                    productId = table.Column<int>(type: "integer", nullable: false),
                    id = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrandProducts", x => new { x.brandId, x.productId });
                    table.ForeignKey(
                        name: "FK_BrandProducts_Brands_brandId",
                        column: x => x.brandId,
                        principalTable: "Brands",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BrandProducts_Products_productId",
                        column: x => x.productId,
                        principalTable: "Products",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Stocks",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    stock = table.Column<int>(type: "integer", nullable: false),
                    minStock = table.Column<int>(type: "integer", nullable: false),
                    productId = table.Column<int>(type: "integer", nullable: false),
                    brandId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stocks", x => x.id);
                    table.ForeignKey(
                        name: "FK_Stocks_Brands_brandId",
                        column: x => x.brandId,
                        principalTable: "Brands",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Stocks_Products_productId",
                        column: x => x.productId,
                        principalTable: "Products",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PurchaseOrderItems",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    amount = table.Column<int>(type: "integer", nullable: false),
                    salePrice = table.Column<float>(type: "real", nullable: false),
                    purchaseOrderId = table.Column<int>(type: "integer", nullable: false),
                    productId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PurchaseOrderItems", x => x.id);
                    table.ForeignKey(
                        name: "FK_PurchaseOrderItems_Products_productId",
                        column: x => x.productId,
                        principalTable: "Products",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PurchaseOrderItems_PurchaseOrders_purchaseOrderId",
                        column: x => x.purchaseOrderId,
                        principalTable: "PurchaseOrders",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "text", nullable: false),
                    lastName = table.Column<string>(type: "text", nullable: false),
                    email = table.Column<string>(type: "text", nullable: false),
                    password = table.Column<string>(type: "text", nullable: false),
                    salt = table.Column<string>(type: "text", nullable: false),
                    roleId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.id);
                    table.ForeignKey(
                        name: "FK_Users_Roles_roleId",
                        column: x => x.roleId,
                        principalTable: "Roles",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BrandSuppliers",
                columns: table => new
                {
                    supplierId = table.Column<int>(type: "integer", nullable: false),
                    brandId = table.Column<int>(type: "integer", nullable: false),
                    id = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrandSuppliers", x => new { x.brandId, x.supplierId });
                    table.ForeignKey(
                        name: "FK_BrandSuppliers_Brands_brandId",
                        column: x => x.brandId,
                        principalTable: "Brands",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BrandSuppliers_Suppliers_supplierId",
                        column: x => x.supplierId,
                        principalTable: "Suppliers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Representatives",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "text", nullable: false),
                    apellido = table.Column<string>(type: "text", nullable: false),
                    email = table.Column<string>(type: "text", nullable: false),
                    telefono = table.Column<string>(type: "text", nullable: false),
                    supplierId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Representatives", x => x.id);
                    table.ForeignKey(
                        name: "FK_Representatives_Suppliers_supplierId",
                        column: x => x.supplierId,
                        principalTable: "Suppliers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Sellers",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    cuil = table.Column<string>(type: "text", nullable: false),
                    calle = table.Column<string>(type: "text", nullable: false),
                    altura = table.Column<int>(type: "integer", nullable: false),
                    codigoPostal = table.Column<int>(type: "integer", nullable: false),
                    localidad = table.Column<string>(type: "text", nullable: false),
                    telefono = table.Column<string>(type: "text", nullable: false),
                    comisionBase = table.Column<float>(type: "real", nullable: false),
                    ComisionOferta = table.Column<float>(type: "real", nullable: false),
                    userId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sellers", x => x.id);
                    table.ForeignKey(
                        name: "FK_Sellers_Users_userId",
                        column: x => x.userId,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    razonSocial = table.Column<string>(type: "text", nullable: false),
                    cuit = table.Column<string>(type: "text", nullable: false),
                    calle = table.Column<string>(type: "text", nullable: false),
                    altura = table.Column<int>(type: "integer", nullable: false),
                    coordenadas = table.Column<string>(type: "text", nullable: false),
                    localidad = table.Column<string>(type: "text", nullable: false),
                    codigoPostal = table.Column<int>(type: "integer", nullable: false),
                    iva = table.Column<float>(type: "real", nullable: false),
                    telefono = table.Column<string>(type: "text", nullable: false),
                    comentarios = table.Column<string>(type: "text", nullable: false),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    sellerId = table.Column<int>(type: "integer", nullable: false),
                    currentAcountId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.id);
                    table.ForeignKey(
                        name: "FK_Clients_CurrentAcounts_currentAcountId",
                        column: x => x.currentAcountId,
                        principalTable: "CurrentAcounts",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Clients_Sellers_sellerId",
                        column: x => x.sellerId,
                        principalTable: "Sellers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Clients_Users_userId",
                        column: x => x.userId,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CustomerDiscounts",
                columns: table => new
                {
                    supplierId = table.Column<int>(type: "integer", nullable: false),
                    clientId = table.Column<int>(type: "integer", nullable: false),
                    id = table.Column<int>(type: "integer", nullable: false),
                    porcentaje = table.Column<float>(type: "real", nullable: false),
                    notas = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerDiscounts", x => new { x.clientId, x.supplierId });
                    table.ForeignKey(
                        name: "FK_CustomerDiscounts_Clients_clientId",
                        column: x => x.clientId,
                        principalTable: "Clients",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CustomerDiscounts_Suppliers_supplierId",
                        column: x => x.supplierId,
                        principalTable: "Suppliers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Schedules",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    apertura = table.Column<TimeSpan>(type: "interval", nullable: false),
                    cierre = table.Column<TimeSpan>(type: "interval", nullable: false),
                    clientId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Schedules", x => x.id);
                    table.ForeignKey(
                        name: "FK_Schedules_Clients_clientId",
                        column: x => x.clientId,
                        principalTable: "Clients",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BrandProducts_productId",
                table: "BrandProducts",
                column: "productId");

            migrationBuilder.CreateIndex(
                name: "IX_BrandSuppliers_supplierId",
                table: "BrandSuppliers",
                column: "supplierId");

            migrationBuilder.CreateIndex(
                name: "IX_Clients_currentAcountId",
                table: "Clients",
                column: "currentAcountId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Clients_sellerId",
                table: "Clients",
                column: "sellerId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Clients_userId",
                table: "Clients",
                column: "userId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CurrentAcounts_movementId",
                table: "CurrentAcounts",
                column: "movementId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerDiscounts_supplierId",
                table: "CustomerDiscounts",
                column: "supplierId");

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseOrderItems_productId",
                table: "PurchaseOrderItems",
                column: "productId");

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseOrderItems_purchaseOrderId",
                table: "PurchaseOrderItems",
                column: "purchaseOrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Representatives_supplierId",
                table: "Representatives",
                column: "supplierId");

            migrationBuilder.CreateIndex(
                name: "IX_Schedules_clientId",
                table: "Schedules",
                column: "clientId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sellers_userId",
                table: "Sellers",
                column: "userId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Stocks_brandId",
                table: "Stocks",
                column: "brandId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Stocks_productId",
                table: "Stocks",
                column: "productId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_roleId",
                table: "Users",
                column: "roleId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BrandProducts");

            migrationBuilder.DropTable(
                name: "BrandSuppliers");

            migrationBuilder.DropTable(
                name: "CustomerDiscounts");

            migrationBuilder.DropTable(
                name: "PurchaseOrderItems");

            migrationBuilder.DropTable(
                name: "Representatives");

            migrationBuilder.DropTable(
                name: "Schedules");

            migrationBuilder.DropTable(
                name: "Stocks");

            migrationBuilder.DropTable(
                name: "PurchaseOrders");

            migrationBuilder.DropTable(
                name: "Suppliers");

            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.DropTable(
                name: "Brands");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "CurrentAcounts");

            migrationBuilder.DropTable(
                name: "Sellers");

            migrationBuilder.DropTable(
                name: "Movements");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Roles");
        }
    }
}

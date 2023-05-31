using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Repuestos_San_jorge.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
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
                name: "CurrentAcounts",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    acountNumber = table.Column<string>(type: "text", nullable: false),
                    status = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurrentAcounts", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "PointOfSales",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nombre = table.Column<string>(type: "text", nullable: false),
                    calle = table.Column<string>(type: "text", nullable: false),
                    altura = table.Column<int>(type: "integer", nullable: false),
                    localidad = table.Column<string>(type: "text", nullable: false),
                    codigoPostal = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PointOfSales", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    article = table.Column<string>(type: "text", nullable: false),
                    description = table.Column<string>(type: "character varying(300)", maxLength: 300, nullable: false),
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
                    supplierId = table.Column<int>(type: "integer", nullable: true)
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
                name: "Sessions",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    ip = table.Column<string>(type: "text", nullable: false),
                    fechaHora = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    agenteUsuario = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sessions", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Movements",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    type = table.Column<string>(type: "text", nullable: true),
                    fecha = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    amount = table.Column<float>(type: "real", nullable: false),
                    currentAcountId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movements", x => x.id);
                    table.ForeignKey(
                        name: "FK_Movements_CurrentAcounts_currentAcountId",
                        column: x => x.currentAcountId,
                        principalTable: "CurrentAcounts",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
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
                    comentarios = table.Column<string>(type: "character varying(300)", maxLength: 300, nullable: true),
                    codigoPostal = table.Column<int>(type: "integer", nullable: false),
                    status = table.Column<bool>(type: "boolean", nullable: true),
                    telefono = table.Column<string>(type: "text", nullable: false),
                    email = table.Column<string>(type: "text", nullable: false),
                    currentAcountId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Suppliers", x => x.id);
                    table.ForeignKey(
                        name: "FK_Suppliers_CurrentAcounts_currentAcountId",
                        column: x => x.currentAcountId,
                        principalTable: "CurrentAcounts",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "Location",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    sector = table.Column<string>(type: "text", nullable: false),
                    rack = table.Column<string>(type: "text", nullable: false),
                    estante = table.Column<string>(type: "text", nullable: false),
                    pointOfSaleId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Location", x => x.id);
                    table.ForeignKey(
                        name: "FK_Location_PointOfSales_pointOfSaleId",
                        column: x => x.pointOfSaleId,
                        principalTable: "PointOfSales",
                        principalColumn: "id");
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
                    productId = table.Column<int>(type: "integer", nullable: true),
                    brandId = table.Column<int>(type: "integer", nullable: true),
                    pointOfSaleId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stocks", x => x.id);
                    table.ForeignKey(
                        name: "FK_Stocks_Brands_brandId",
                        column: x => x.brandId,
                        principalTable: "Brands",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_Stocks_PointOfSales_pointOfSaleId",
                        column: x => x.pointOfSaleId,
                        principalTable: "PointOfSales",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_Stocks_Products_productId",
                        column: x => x.productId,
                        principalTable: "Products",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "ControlOrders",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    numRemito = table.Column<string>(type: "text", nullable: false),
                    status = table.Column<int>(type: "integer", nullable: false),
                    resumen = table.Column<string>(type: "character varying(300)", maxLength: 300, nullable: true),
                    purchaseOrderId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ControlOrders", x => x.id);
                    table.ForeignKey(
                        name: "FK_ControlOrders_PurchaseOrders_purchaseOrderId",
                        column: x => x.purchaseOrderId,
                        principalTable: "PurchaseOrders",
                        principalColumn: "id");
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
                name: "Vouchers",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    numComprobante = table.Column<string>(type: "text", nullable: false),
                    numRemito = table.Column<string>(type: "text", nullable: false),
                    afip = table.Column<bool>(type: "boolean", nullable: false),
                    fecha = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    type = table.Column<string>(type: "text", nullable: false),
                    subtotal = table.Column<float>(type: "real", nullable: false),
                    iva = table.Column<float>(type: "real", nullable: false),
                    total = table.Column<float>(type: "real", nullable: false),
                    purchaseOrderId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vouchers", x => x.id);
                    table.ForeignKey(
                        name: "FK_Vouchers_PurchaseOrders_purchaseOrderId",
                        column: x => x.purchaseOrderId,
                        principalTable: "PurchaseOrders",
                        principalColumn: "id");
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
                    status = table.Column<bool>(type: "boolean", nullable: false),
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
                    comentarios = table.Column<string>(type: "text", nullable: true),
                    status = table.Column<bool>(type: "boolean", nullable: true),
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
                    comisionBase = table.Column<float>(type: "real", nullable: true),
                    comisionOferta = table.Column<float>(type: "real", nullable: true),
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
                    iva = table.Column<string>(type: "text", nullable: false),
                    telefono = table.Column<string>(type: "text", nullable: false),
                    comentarios = table.Column<string>(type: "character varying(300)", maxLength: 300, nullable: true),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    sellerId = table.Column<int>(type: "integer", nullable: false),
                    currentAcountId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.id);
                    table.ForeignKey(
                        name: "FK_Clients_CurrentAcounts_currentAcountId",
                        column: x => x.currentAcountId,
                        principalTable: "CurrentAcounts",
                        principalColumn: "id");
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
                    notas = table.Column<string>(type: "character varying(300)", maxLength: 300, nullable: false)
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
                name: "IX_Brands_name",
                table: "Brands",
                column: "name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BrandSuppliers_supplierId",
                table: "BrandSuppliers",
                column: "supplierId");

            migrationBuilder.CreateIndex(
                name: "IX_Clients_cuit",
                table: "Clients",
                column: "cuit",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Clients_currentAcountId",
                table: "Clients",
                column: "currentAcountId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Clients_razonSocial",
                table: "Clients",
                column: "razonSocial",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Clients_sellerId",
                table: "Clients",
                column: "sellerId");

            migrationBuilder.CreateIndex(
                name: "IX_Clients_userId",
                table: "Clients",
                column: "userId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ControlOrders_purchaseOrderId",
                table: "ControlOrders",
                column: "purchaseOrderId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CustomerDiscounts_supplierId",
                table: "CustomerDiscounts",
                column: "supplierId");

            migrationBuilder.CreateIndex(
                name: "IX_Location_pointOfSaleId",
                table: "Location",
                column: "pointOfSaleId");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_currentAcountId",
                table: "Movements",
                column: "currentAcountId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_article",
                table: "Products",
                column: "article",
                unique: true);

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
                name: "IX_Roles_name",
                table: "Roles",
                column: "name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Schedules_clientId",
                table: "Schedules",
                column: "clientId");

            migrationBuilder.CreateIndex(
                name: "IX_Sellers_cuil",
                table: "Sellers",
                column: "cuil",
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
                name: "IX_Stocks_pointOfSaleId",
                table: "Stocks",
                column: "pointOfSaleId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Stocks_productId",
                table: "Stocks",
                column: "productId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Suppliers_cuit",
                table: "Suppliers",
                column: "cuit",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Suppliers_currentAcountId",
                table: "Suppliers",
                column: "currentAcountId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Suppliers_razonSocial",
                table: "Suppliers",
                column: "razonSocial",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_email",
                table: "Users",
                column: "email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_roleId",
                table: "Users",
                column: "roleId");

            migrationBuilder.CreateIndex(
                name: "IX_Vouchers_purchaseOrderId",
                table: "Vouchers",
                column: "purchaseOrderId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BrandProducts");

            migrationBuilder.DropTable(
                name: "BrandSuppliers");

            migrationBuilder.DropTable(
                name: "ControlOrders");

            migrationBuilder.DropTable(
                name: "CustomerDiscounts");

            migrationBuilder.DropTable(
                name: "Location");

            migrationBuilder.DropTable(
                name: "Movements");

            migrationBuilder.DropTable(
                name: "PurchaseOrderItems");

            migrationBuilder.DropTable(
                name: "Representatives");

            migrationBuilder.DropTable(
                name: "Schedules");

            migrationBuilder.DropTable(
                name: "Sessions");

            migrationBuilder.DropTable(
                name: "Stocks");

            migrationBuilder.DropTable(
                name: "Vouchers");

            migrationBuilder.DropTable(
                name: "Suppliers");

            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.DropTable(
                name: "Brands");

            migrationBuilder.DropTable(
                name: "PointOfSales");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "PurchaseOrders");

            migrationBuilder.DropTable(
                name: "CurrentAcounts");

            migrationBuilder.DropTable(
                name: "Sellers");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Roles");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repuestos_San_jorge.Migrations
{
    /// <inheritdoc />
    public partial class actualizacion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Clients_sellerId",
                table: "Clients");

            migrationBuilder.AddColumn<bool>(
                name: "status",
                table: "Users",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_Clients_sellerId",
                table: "Clients",
                column: "sellerId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Clients_sellerId",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "status",
                table: "Users");

            migrationBuilder.CreateIndex(
                name: "IX_Clients_sellerId",
                table: "Clients",
                column: "sellerId",
                unique: true);
        }
    }
}

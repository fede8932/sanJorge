using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repuestos_San_jorge.Migrations
{
    /// <inheritdoc />
    public partial class cambios001 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Brands_name",
                table: "Brands",
                column: "name",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Brands_name",
                table: "Brands");
        }
    }
}

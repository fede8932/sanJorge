using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repuestos_San_jorge.Migrations
{
    /// <inheritdoc />
    public partial class cambio4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "movementId",
                table: "CurrentAcounts");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "movementId",
                table: "CurrentAcounts",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repuestos_San_jorge.Migrations
{
    /// <inheritdoc />
    public partial class cambioss : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "comentarios",
                table: "Representatives",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "status",
                table: "Representatives",
                type: "boolean",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "comentarios",
                table: "Representatives");

            migrationBuilder.DropColumn(
                name: "status",
                table: "Representatives");
        }
    }
}

using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repuestos_San_jorge.Migrations
{
    /// <inheritdoc />
    public partial class cambio3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CurrentAcounts_Movements_movementId",
                table: "CurrentAcounts");

            migrationBuilder.DropIndex(
                name: "IX_CurrentAcounts_movementId",
                table: "CurrentAcounts");

            migrationBuilder.AddColumn<int>(
                name: "currentAcountId",
                table: "Movements",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "fecha",
                table: "Movements",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "acountNumber",
                table: "CurrentAcounts",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_currentAcountId",
                table: "Movements",
                column: "currentAcountId");

            migrationBuilder.AddForeignKey(
                name: "FK_Movements_CurrentAcounts_currentAcountId",
                table: "Movements",
                column: "currentAcountId",
                principalTable: "CurrentAcounts",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Movements_CurrentAcounts_currentAcountId",
                table: "Movements");

            migrationBuilder.DropIndex(
                name: "IX_Movements_currentAcountId",
                table: "Movements");

            migrationBuilder.DropColumn(
                name: "currentAcountId",
                table: "Movements");

            migrationBuilder.DropColumn(
                name: "fecha",
                table: "Movements");

            migrationBuilder.DropColumn(
                name: "acountNumber",
                table: "CurrentAcounts");

            migrationBuilder.CreateIndex(
                name: "IX_CurrentAcounts_movementId",
                table: "CurrentAcounts",
                column: "movementId");

            migrationBuilder.AddForeignKey(
                name: "FK_CurrentAcounts_Movements_movementId",
                table: "CurrentAcounts",
                column: "movementId",
                principalTable: "Movements",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

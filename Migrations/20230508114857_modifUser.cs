﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repuestos_San_jorge.Migrations
{
    /// <inheritdoc />
    public partial class modifUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "salt",
                table: "Users");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "salt",
                table: "Users",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}

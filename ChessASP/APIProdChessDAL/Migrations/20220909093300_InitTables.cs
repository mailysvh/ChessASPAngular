using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace APIProdChessDAL.Migrations
{
    public partial class InitTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ChessPlayers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Login = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Birthdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PlayerGender = table.Column<int>(type: "int", nullable: false),
                    ELO = table.Column<int>(type: "int", nullable: true),
                    PlayerRole = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChessPlayers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tournaments",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MinimumPlayers = table.Column<int>(type: "int", nullable: false),
                    MaximumPlayers = table.Column<int>(type: "int", nullable: false),
                    ELOMin = table.Column<int>(type: "int", nullable: true),
                    ELOMax = table.Column<int>(type: "int", nullable: true),
                    WomenOnly = table.Column<bool>(type: "bit", nullable: false),
                    CurrentState = table.Column<int>(type: "int", nullable: false),
                    CurrentRound = table.Column<int>(type: "int", nullable: false),
                    EndOfRegistrationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    canRegister = table.Column<bool>(type: "bit", nullable: false),
                    isRegistered = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tournaments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CategoryTournament",
                columns: table => new
                {
                    CategoriesId = table.Column<int>(type: "int", nullable: false),
                    TournamentsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryTournament", x => new { x.CategoriesId, x.TournamentsId });
                    table.ForeignKey(
                        name: "FK_CategoryTournament_Categories_CategoriesId",
                        column: x => x.CategoriesId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CategoryTournament_Tournaments_TournamentsId",
                        column: x => x.TournamentsId,
                        principalTable: "Tournaments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ChessPlayerTournament",
                columns: table => new
                {
                    ParticipantsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TournamentsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChessPlayerTournament", x => new { x.ParticipantsId, x.TournamentsId });
                    table.ForeignKey(
                        name: "FK_ChessPlayerTournament_ChessPlayers_ParticipantsId",
                        column: x => x.ParticipantsId,
                        principalTable: "ChessPlayers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChessPlayerTournament_Tournaments_TournamentsId",
                        column: x => x.TournamentsId,
                        principalTable: "Tournaments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Junior" },
                    { 2, "Senior" },
                    { 3, "Veteran" }
                });

            migrationBuilder.InsertData(
                table: "ChessPlayers",
                columns: new[] { "Id", "Birthdate", "ELO", "Email", "Login", "Password", "PlayerGender", "PlayerRole" },
                values: new object[] { new Guid("11111111-1111-1111-1111-111111111111"), new DateTime(1990, 12, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), 3000, "mailysvh@hotmail.com", "Admin", "�gB��\\v��U�g�6#ȳ��E��x��F�", 0, 0 });

            migrationBuilder.CreateIndex(
                name: "IX_CategoryTournament_TournamentsId",
                table: "CategoryTournament",
                column: "TournamentsId");

            migrationBuilder.CreateIndex(
                name: "IX_ChessPlayers_Email",
                table: "ChessPlayers",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ChessPlayers_Login",
                table: "ChessPlayers",
                column: "Login",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ChessPlayerTournament_TournamentsId",
                table: "ChessPlayerTournament",
                column: "TournamentsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CategoryTournament");

            migrationBuilder.DropTable(
                name: "ChessPlayerTournament");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "ChessPlayers");

            migrationBuilder.DropTable(
                name: "Tournaments");
        }
    }
}

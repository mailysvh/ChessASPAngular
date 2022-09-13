using APIProdChessDAL.Configs;
using APIProdChessDAL.Entities;
using APIProdChessDAL.Enums;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;
using System.Security.Cryptography;
using System.Text;

namespace APIProdChessDAL
{
    public class ChessContext : DbContext
    {
        public DbSet<ChessPlayer> ChessPlayers { get => Set<ChessPlayer>(); }
        public DbSet<Tournament> Tournaments { get; set; }
        public DbSet<Category> Categories { get; set; }

        public ChessContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration<ChessPlayer>(new PlayerConfiguration());
            builder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "Junior" },
                new Category { Id = 2, Name = "Senior" },
                new Category { Id = 3, Name = "Veteran" }
                );

            builder.Entity<ChessPlayer>().HasData(
                new ChessPlayer
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    Login = "Admin",
                    Password = Encoding.UTF8.GetString(SHA256.HashData(Encoding.UTF8.GetBytes("1234"))),
                    Birthdate = new DateTime(1990, 12, 12),
                    ELO = 3000,
                    Email = "test@test.com",
                    PlayerGender = 0,
                    PlayerRole = Role.Admin
                }
                );

        }
    }


}
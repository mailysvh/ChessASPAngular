// <auto-generated />
using System;
using APIProdChessDAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace APIProdChessDAL.Migrations
{
    [DbContext(typeof(ChessContext))]
    [Migration("20220913161137_m77")]
    partial class m77
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("APIProdChessDAL.Entities.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Junior"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Senior"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Veteran"
                        });
                });

            modelBuilder.Entity("APIProdChessDAL.Entities.ChessPlayer", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Birthdate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("ELO")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PlayerGender")
                        .HasColumnType("int");

                    b.Property<int>("PlayerRole")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("Login")
                        .IsUnique();

                    b.ToTable("ChessPlayers");

                    b.HasData(
                        new
                        {
                            Id = new Guid("11111111-1111-1111-1111-111111111111"),
                            Birthdate = new DateTime(1990, 12, 12, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            ELO = 3000,
                            Email = "test@test.com",
                            Login = "Admin",
                            Password = "�gB��\\v��U�g�6#ȳ��E��x��F�",
                            PlayerGender = 0,
                            PlayerRole = 0
                        });
                });

            modelBuilder.Entity("APIProdChessDAL.Entities.Tournament", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("CurrentRound")
                        .HasColumnType("int");

                    b.Property<int>("CurrentState")
                        .HasColumnType("int");

                    b.Property<int?>("ELOMax")
                        .HasColumnType("int");

                    b.Property<int?>("ELOMin")
                        .HasColumnType("int");

                    b.Property<DateTime>("EndOfRegistrationDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MaximumPlayers")
                        .HasColumnType("int");

                    b.Property<int>("MinimumPlayers")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("datetime2");

                    b.Property<bool>("WomenOnly")
                        .HasColumnType("bit");

                    b.Property<bool>("canRegister")
                        .HasColumnType("bit");

                    b.Property<bool>("isRegistered")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("Tournaments");
                });

            modelBuilder.Entity("CategoryTournament", b =>
                {
                    b.Property<int>("CategoriesId")
                        .HasColumnType("int");

                    b.Property<Guid>("TournamentsId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("CategoriesId", "TournamentsId");

                    b.HasIndex("TournamentsId");

                    b.ToTable("CategoryTournament");
                });

            modelBuilder.Entity("ChessPlayerTournament", b =>
                {
                    b.Property<Guid>("ParticipantsId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("TournamentsId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("ParticipantsId", "TournamentsId");

                    b.HasIndex("TournamentsId");

                    b.ToTable("ChessPlayerTournament");
                });

            modelBuilder.Entity("CategoryTournament", b =>
                {
                    b.HasOne("APIProdChessDAL.Entities.Category", null)
                        .WithMany()
                        .HasForeignKey("CategoriesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("APIProdChessDAL.Entities.Tournament", null)
                        .WithMany()
                        .HasForeignKey("TournamentsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ChessPlayerTournament", b =>
                {
                    b.HasOne("APIProdChessDAL.Entities.ChessPlayer", null)
                        .WithMany()
                        .HasForeignKey("ParticipantsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("APIProdChessDAL.Entities.Tournament", null)
                        .WithMany()
                        .HasForeignKey("TournamentsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}

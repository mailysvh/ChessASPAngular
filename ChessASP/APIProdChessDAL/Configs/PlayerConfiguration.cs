using APIProdChessDAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace APIProdChessDAL.Configs
{
    public class PlayerConfiguration: IEntityTypeConfiguration<ChessPlayer>
    {
        public void Configure(EntityTypeBuilder<ChessPlayer> builder)
        {
            builder.HasIndex(p=>p.Login).IsUnique();
            builder.HasIndex(p=>p.Email).IsUnique();
            //builder.HasIndex(p => p.Reference).IsUnique();
            //builder.Property(p => p.Reference).IsUnicode(false).IsFixedLength().HasMaxLength(8);
            ////retire le n
            //builder.HasCheckConstraint("CK_MinLength", "Len(Name)>=4");
            //builder.Property(p => p.Price).HasPrecision(8, 2);
        }
    }
}

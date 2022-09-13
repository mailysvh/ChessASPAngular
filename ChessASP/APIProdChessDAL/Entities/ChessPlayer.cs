using APIProdChessDAL.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace APIProdChessDAL.Entities
{
    public class ChessPlayer
    {
        public Guid Id { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime Birthdate { get; set; }
        public Gender PlayerGender { get; set; }

        //[Range(0, 3001)]
        public int? ELO { get; set; } //0-3000
        public Role PlayerRole { get; set; }
        public IEnumerable<Tournament> Tournaments { get; set; }
    }
}

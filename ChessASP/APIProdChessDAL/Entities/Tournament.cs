using APIProdChessDAL.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace APIProdChessDAL.Entities
{
    public class Tournament
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public string? Location { get; set; }
        [Range(2, 32)]
        public int MinimumPlayers { get; set; }
        [Range(2, 32)]
        public int MaximumPlayers { get; set; }
        //[Range(0, 3001)]
        public int? ELOMin { get; set; }
        //[Range(0, 3001)]
        public int? ELOMax { get; set; }
        public ICollection<Category> Categories { get; set; }
        public bool WomenOnly { get; set; }

        public State CurrentState { get; set; }
        public int CurrentRound { get; set; }

        public DateTime EndOfRegistrationDate {get; set;}
        public DateTime CreationDate {get; set;}
        public DateTime UpdateDate { get; set; }
        public ICollection<ChessPlayer> Participants { get; set; }
        public bool canRegister { get; set; }
        public bool isRegistered { get; set; } //is a player registered?
    }
}

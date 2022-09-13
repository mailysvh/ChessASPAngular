import { Component, OnInit } from '@angular/core';
import { StatusPipe} from 'src/app/shared/pipes/status.pipe';
import { Tournament } from 'src/app/core/models/tournament.model';
import { TournamentService } from '../../services/tournament.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './indextournamentlist.component.html',
  styleUrls: ['./indextournamentlist.component.scss']
})
export class IndextournamentlistComponent implements OnInit {

  tournamentList! : Tournament[];

  constructor(
    private _tournamentService : TournamentService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.Get();
  }

  Get(){
    this._tournamentService.getAll().subscribe(
      (PlayerService: Tournament[]) => {
        this.tournamentList = PlayerService
      }
    )
  }

  removeTournament(id : string){

    this._tournamentService.remove(id).subscribe(
      res=>{
        this.tournamentList = this.tournamentList.filter(t=>t.id !== id);
        console.log(`tournament '${id}' was removed`)
      }
    )
  }

  displayTournament(id : string){
    this._router.navigateByUrl("/tournament/readtournament/" + id);
  }

  goToAddTournamentPage(){
    this._router.navigateByUrl("/tournament/addtournament");
  }
}

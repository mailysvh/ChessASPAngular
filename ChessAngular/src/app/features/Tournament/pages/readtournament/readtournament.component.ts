import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tournament } from 'src/app/core/models/tournament.model';
import { TournamentService } from '../../services/tournament.service';

@Component({
  templateUrl: './readtournament.component.html',
  styleUrls: ['./readtournament.component.scss']
})
export class ReadtournamentComponent implements OnInit {


  tournamenttoRead!: Tournament;
  private routeSub!: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _tounamentService: TournamentService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    console.log(this.getIdFromRoute());
    console.log(this.getTournament());
  }

  getIdFromRoute() : string{
    let currentRoute! : string;
    this.routeSub = this._route.params.subscribe(params => {
      //console.log(params) //log the entire params object
      //console.log(params['id']) //log the value of id
      currentRoute =  params['id'];
    });
    console.log(currentRoute);
    return currentRoute;
  }

  goToUpdateTournamentPage(id: string){
    this._router.navigateByUrl("/tournament/updatetournament/" + id);
  }

  getTournament(): boolean{
    try {
      this._tounamentService.get(this.getIdFromRoute()).subscribe(
        (PlayerService: Tournament) => {
          this.tournamenttoRead = PlayerService;
        }
      )
      if(this.tournamenttoRead == null){
        return false;
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

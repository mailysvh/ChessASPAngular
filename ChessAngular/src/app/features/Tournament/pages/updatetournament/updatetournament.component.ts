import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api'; //pas /config sinon ça marche pas en angular 14
import { Tournament } from 'src/app/core/models/tournament.model';
import { TournamentService } from '../../services/tournament.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './updatetournament.component.html',
  styleUrls: ['./updatetournament.component.scss']
})
export class UpdatetournamentComponent implements OnInit {

  tournamenttoUpdate!: Tournament;
  fg!: FormGroup;
  categoryChoice: string[];
  stateChoice: string[];
  roundChoice: number[];
  private routeSub!: Subscription;

  constructor(
    private primengConfig: PrimeNGConfig,
    private builder: FormBuilder,
    private _tournamentService : TournamentService,
    private route: ActivatedRoute
    ) {
      this.categoryChoice = [
        'Junior',
        'Senior',
        'Veteran'
      ];
      this.roundChoice = [
        0,1,2,3,4,5
      ];
      this.stateChoice = [
        'AwaitingPlayers',
        'Ongoing',
        'Completed'
      ];
    }

  ngOnInit(): void {
    console.log(this.getTournament());
  }

  getIdFromRoute() : string{
    let currentRoute! : string;
    this.routeSub = this.route.params.subscribe(params => {
      currentRoute =  params['id'];
    });
    console.log(currentRoute);
    return currentRoute;
  }

  // createTournamentFG(){
  //   this.fg = this.builder.group({
  //     id : [this.tournamenttoUpdate.id],
  //     name : [this.tournamenttoUpdate.name],
  //     location : [this.tournamenttoUpdate.location],
  //     maximumPlayers: [this.tournamenttoUpdate.minimumPlayers],
  //     maximumPlayers: [this.tournamenttoUpdate.maximumPlayers,
  //     eloMin: [this.tournamenttoUpdate.eloMin],
  //     eloMax: [this.tournamenttoUpdate.eloMax],
  //     categories: [this.tournamenttoUpdate.categories],
  //     womenOnly: [this.tournamenttoUpdate.womenOnly],
  //     currentState: [this.tournamenttoUpdate.currentState],
  //     currentRound: [this.tournamenttoUpdate.currentRound],
  //     endOfRegistrationDate: [this.tournamenttoUpdate.endOfRegistrationDate],
  //     creationDate: [this.tournamenttoUpdate.creationDate],
  //     updateDate: [Date.now],
  //     numberOfPlayers: [this.tournamenttoUpdate.participants?.length],
  //     canRegister: [this.tournamenttoUpdate.canRegister],
  //     isRegistered: [this.tournamenttoUpdate.isRegistered],
  //     participants: this.builder.array([])
  //   })
  // }


  submit(){}

  getTournament(): boolean{
    try {
      this._tournamentService.get(this.getIdFromRoute()).subscribe(
        (TournamentService: Tournament) => {
          this.tournamenttoUpdate = TournamentService;
        }
      )
      if(this.tournamenttoUpdate == null){
        return false;
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

}

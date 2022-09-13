import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { TournamentService } from '../../services/tournament.service';


@Component({
  templateUrl: './addtournament.component.html',
  styleUrls: ['./addtournament.component.scss']
})
export class AddtournamentComponent implements OnInit {

  fg!: FormGroup;

  categoryChoice: string[];
  checked: boolean = false;

  isLoading: boolean = false;

  constructor(
    private _tournamentService : TournamentService,
    private builder: FormBuilder,
    private primeNGConfig: PrimeNGConfig,
    private router : Router
  ) {
    this.categoryChoice = [
      'Junior',
      'Senior',
      'Veteran'
    ];
  }

  ngOnInit(): void {
    this.createTournamentFG();
    this.primeNGConfig.ripple = true;
  }

  createTournamentFG(){
    this.fg = this.builder.group({
      name: [],
      location: [],
      minimumPlayers: [2],
      maximumPlayers: [32],
      eloMin: [0],
      eloMax: [3000],
      categories: [[],],
      womenOnly:[false,],
      endOfRegistrationDate : [(new Date().getDate() + 32)]
    })
  }

  submit(){

    try {
      this.isLoading = true;
      //console.log(this.fg.value);//check here
      this._tournamentService.create(this.fg.value).subscribe(
          () => {
            console.log("tournament added to database");
            this.router.navigateByUrl("/tournament/indextournament");
            this.isLoading = false;
            }
          )

    } catch (error) {
      console.log(error);
    }
  }

}

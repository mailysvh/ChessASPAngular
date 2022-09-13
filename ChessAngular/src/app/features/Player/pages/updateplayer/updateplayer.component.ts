import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/core/models/player.model';
import { environment } from 'src/environments/environment';
import { PlayerService } from '../../services/playerService.service';
import { PrimeNGConfig } from 'primeng/api'; //pas /config sinon ça marche pas en angular 14

@Component({
  templateUrl: './updateplayer.component.html',
  styleUrls: ['./updateplayer.component.scss']
})
export class UpdateplayerComponent implements OnInit {

  playertoUpdate!: Player;
  fg!: FormGroup;
  categoryChoice: string[];
  playerGender: string = 'Woman';
  private routeSub!: Subscription;
  temp!: any;
  genderOptions: any[];

  constructor(
    private builder: FormBuilder,
    private _http : HttpClient,
    private _playerService : PlayerService,
    private route: ActivatedRoute,
    private router: Router,
    private primeNGConfig: PrimeNGConfig
  ) {
    this.categoryChoice = [
      'Junior',
      'Senior',
      'Veteran'
    ];
    this.genderOptions = [
      { label: 'Woman', value: 0 },
      { label: 'Man', value: 1 },
      { label: 'Other', value: 2 }
    ];
  }

  ngOnInit(): void {
    console.log(this.getPlayer());
    this.primeNGConfig.ripple = true;
    this.createPlayerFG();
  }

  submit(){}


  createPlayerFG(){
    this.fg = this.builder.group({
      id: [],
      login: [],
      email: [],
      password: [],
      birthdate: [],
      elo: [],
      playerGender: [],
      playerRole:[],
      tournaments: this.builder.array([])
    })
  }


  getPlayer(): boolean{
    try {
      this._playerService.get(this.getIdFromRoute()).subscribe(
        (PlayerService: Player) => {
          this.playertoUpdate = PlayerService;
        }
      )
      if(this.playertoUpdate == null){
        return false;
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }


  getIdFromRoute() : string{
    let currentRoute! : string;
    this.routeSub = this.route.params.subscribe(params => {
      //console.log(params) //log the entire params object
      //console.log(params['id']) //log the value of id
      currentRoute =  params['id'];
    });
    console.log(currentRoute);
    return currentRoute;
  }

  // updateData(value: any) {
  //   let player = {
  //     login: [],
  //     email: [],
  //     password: [],
  //     birthdate: [],
  //     elo: [],
  //     playerGender: [],
  //     playerRole:[],
  //     tournamentList: this.builder.array([])
  //   }
  // }
}

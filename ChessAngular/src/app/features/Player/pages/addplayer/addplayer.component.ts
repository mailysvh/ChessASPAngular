import { Component, OnInit } from '@angular/core';
// import { Player } from 'src/app/core/models/player.model';
import { PlayerService } from '../../services/playerService.service';
import { PrimeNGConfig } from 'primeng/api'; //pas /config sinon ça marche pas en angular 14
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.scss']
})
export class AddplayerComponent implements OnInit {

  genderOptions: any[];

  playerGender: string = 'Woman';

  fg!: FormGroup;

  constructor(
    private _playerService : PlayerService,
    private builder: FormBuilder,
    private primeNGConfig: PrimeNGConfig,
    private router : Router
  ) {
    this.genderOptions = [
      { label: 'Woman', value: 0 },
      { label: 'Man', value: 1 },
      { label: 'Other', value: 2 }
    ];
  }

  ngOnInit(): void {
    this.createPlayerFG();
    this.primeNGConfig.ripple = true;
  }

  createPlayerFG(){
    this.fg = this.builder.group({
      id: [null],
      login: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      birthdate: [new Date('2000-01-01'), [Validators.required]],
      elo: [1200],
      playerGender: [0],
      playerRole:[0],
      tournaments: this.builder.array([])
    })
  }

  submit(){
    try {
      this._playerService.create(this.fg.value).subscribe(
          () => {
            console.log("player added to database");
            console.log(this.fg.value);
            this.router.navigateByUrl("/player/indexplayer")
            }
          )

    } catch (error) {
      console.log(error);
    }
  }

}

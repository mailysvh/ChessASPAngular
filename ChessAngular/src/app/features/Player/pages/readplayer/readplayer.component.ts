import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/core/models/player.model';
import { PlayerService } from '../../services/playerService.service';

@Component({
  templateUrl: './readplayer.component.html',
  styleUrls: ['./readplayer.component.scss']
})
export class ReadplayerComponent implements OnInit {

  playertoRead!: Player;
  private routeSub!: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _playerService: PlayerService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    console.log(this.getIdFromRoute());
    console.log(this.getPlayer());
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

  goToUpdatePlayerPage(id: string){
    this._router.navigateByUrl("/player/updateplayer/" + id);
  }

  getPlayer(): boolean{
    try {
      this._playerService.get(this.getIdFromRoute()).subscribe(
        (PlayerService: Player) => {
          this.playertoRead = PlayerService;
        }
      )
      if(this.playertoRead == null){
        return false;
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

}

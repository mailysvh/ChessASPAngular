import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/core/models/player.model';
import { PlayerService } from '../../services/playerService.service';

@Component({
  templateUrl: './indexplayerlist.component.html',
  styleUrls: ['./indexplayerlist.component.scss']
})
export class IndexplayerlistComponent implements OnInit {

  playersList! : Player[];

  constructor(
    private _playerService : PlayerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.Get();
  }

  Get(){
    this._playerService.get10().subscribe(
      (PlayerService: Player[]) => {
        this.playersList = PlayerService
      }
    )
  }

  removePlayer(id : string){

    this._playerService.remove(id).subscribe(
      res=>{
        this.playersList = this.playersList.filter(p=>p.id !== id);
        console.log(`Player '${id}' was removed`);
      }
    )
  }

  goToAddPlayerPage(){
    this.router.navigateByUrl("/player/addplayer");
  }

  displayPlayer(id : string){
    this.router.navigateByUrl("/player/readplayer/" + id);
  }

}

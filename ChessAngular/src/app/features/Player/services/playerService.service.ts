import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Player } from "src/app/core/models/player.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private _httpClient : HttpClient
  ) { }

  get10() : Observable<Player[]> {
    return this._httpClient.get<Player[]>(environment.base_url + "/ChessPlayer");
  }

  get(id: string): Observable<Player> {
    return this._httpClient.get<Player>(environment.base_url + "/ChessPlayer/" + id);
  }

  // playerIsValid(id: string): boolean{
  //   if(this._httpClient.get(environment.base_url + "/ChessPlayer/" + id)){
  //     console.log('player valid ok');
  //     return true;
  //   }
  //   console.log('player not valid');
  //   return false;
  // }

  create(data: any): Observable<any> {
    return this._httpClient.post(environment.base_url + "/ChessPlayer", data);
  }

  remove(data: any): Observable<any>{
    return this._httpClient.delete(environment.base_url + "/ChessPlayer/" + data)
  }

  updateData(data: any, id: string): Observable<any> {
    return this._httpClient.patch(environment.base_url + "/update/" + id, data)
}

}

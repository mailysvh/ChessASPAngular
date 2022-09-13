import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tournament } from "src/app/core/models/tournament.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(
    private _httpClient : HttpClient
  ) { }

  getAll() : Observable<Tournament[]> {
    return this._httpClient.get<Tournament[]>(environment.base_url + "/Tournament")
  }

  get(id: string): Observable<Tournament> {
    return this._httpClient.get<Tournament>(environment.base_url + "/Tournament/" + id);
  }
  create(data: any): Observable<any> {
    return this._httpClient.post(environment.base_url + "/Tournament", data);
  }

    remove(data: any) : Observable<any> {
    return this._httpClient.delete<string>(environment.base_url + "/Tournament/" + data)
  }

}

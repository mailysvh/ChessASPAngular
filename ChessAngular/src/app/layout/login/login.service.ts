import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Login } from 'src/app/core/models/login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token$: BehaviorSubject<string|null> = new BehaviorSubject<string|null>(null);
  role$: BehaviorSubject<string|null> = new BehaviorSubject<string|null>(null);

  constructor(
    private readonly _http: HttpClient,
    private _router: Router
  ) {
    let data = localStorage.getItem('user');
    if(data){
      let obj = JSON.parse(data);
      this.token$.next(obj.token);
      this.role$.next(obj.user.role);

    }
  }

  login(form: any) : Observable<Login> {
    return this._http.post<Login>(environment.base_url + '/authentication', form)
      .pipe(
        // effectue une operation sur le resultat
        tap(response => {
          console.log(response);
          let userString = JSON.stringify(response);
          localStorage.setItem('user', userString)
          this.token$.next(response.token);
          // const decodedToken : any = jwtDecode(response.token);
          // const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
          //this.role$.next(role);
          this.role$.next(response.player.playerRole.toString());
        })
    );
  }

  logout(){
    // il faut cibler ce qu'on clear
    localStorage.removeItem("user");
    this.token$.next(null);
    this.role$.next(null);
    this._router.navigateByUrl("tournament/indextournament")
  }
}

// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjExMTExMTExLTExMTEtMTExMS0xMTExLTExMTExMTExMTExMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dlbmRlciI6IldvbWFuIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZGF0ZW9mYmlydGgiOiIxMi0xMi05MCAwMDowMDowMCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaXNzIjoiaHR0cHM6Ly9jaGVja21hdGUuY29tIn0.msnhJmBvkHlDVHBJsomF4yf7lxUJGE4x0BQUSns_R60",
//   "player": {
//     "id": "11111111-1111-1111-1111-111111111111",
//     "login": "Admin",
//     "email": "mailysvh@hotmail.com",
//     "password": "\u0003�gB\u0016��\\v\u001e��U�g�6#ȳ��E�\u0013�x��F�",
//     "birthdate": "1990-12-12T00:00:00",
//     "playerGender": 0,
//     "elo": 3000,
//     "playerRole": 0,
//     "tournaments": null
//   }
// }

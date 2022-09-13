import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  isLogged : boolean = false;

  constructor(
    private _login : LoginService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    //s'abonner aux changements d'état du token. si token, ca veut dire qu'on est authentifié
    this._login.token$?.subscribe(token => this.isLogged = !!token)
  }

  goToLogin(){
    this._router.navigateByUrl("/login")
  }

  logout(){
    this._login.logout();
  }

}

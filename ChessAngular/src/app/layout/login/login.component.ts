import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this.fg = this._fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }


  submit() {
    if(this.fg.invalid){
      console.log('Password invalid');
      return;}
    console.log('Valid password entered'),
    this._loginService.login(this.fg.value).subscribe(
      {
      next: () =>
      this._router.navigate(['/tournament/indextournament'])
      }

    )
    console.log(this.fg.value);
  }



}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Router :Router) { }
  loginFrom=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  ngOnInit() {

  }
login(){
  console.log(this.loginFrom.value);
  localStorage.setItem("user", JSON.stringify(this.loginFrom.value));
  this._Router.navigateByUrl( "/user")
}
}

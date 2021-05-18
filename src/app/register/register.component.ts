import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  aim="register here";
  accno="Acount number please";
  pswd="";
uname="";
  constructor() { }

  ngOnInit(): void {
  }
  register(){}


}

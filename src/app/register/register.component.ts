import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../servics/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  accno="";
  pswd="";
  uname="";
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var uname=this.uname;
    var acno=this.accno;
    var pswd=this.pswd;

    let user = this.dataService.accountDetails;

    if(acno in user){
      alert("user exist please login");
  }
  else{
    user[acno]={
    acno,
    username:uname,
    password:pswd,
    balance:0}
  }
  alert("successfully registerd.......");
  this.router.navigateByUrl("");
  }


}

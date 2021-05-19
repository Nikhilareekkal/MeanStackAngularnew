import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../servics/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perfect banking partner";
  accno="Acount number please";
  pswd="";
  


  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
  // accnoChange(event:any){
  //   this.accno=event.target.value;
  //   console.log(this.accno);
    
  // }
  // pswdChange(event:any){
  //   this.pswd=event.target.value;
  //   console.log(this.pswd);
    
  // }
  login(){
    
    var acno=this.accno;
    var pswd=this.pswd;
   let users=this.dataService.accountDetails;
    if (acno in users) {
        if (pswd == users[acno]["password"]) {
            alert("login successful")
            this.router.navigateByUrl("dashboard")
        }
        else {
            alert("incorrect pssword")
        }

    }
    else {
        alert("invalid account")
    }


  }
  register(){
    this.router.navigateByUrl("register");
  }

}

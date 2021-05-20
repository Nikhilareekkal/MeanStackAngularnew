import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  loginForm=this.fb.group({
  accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
})


  constructor(private router:Router,private dataService:DataService,private fb:FormBuilder) { }

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
    
    var acno=this.loginForm.value.accno;
    var pswd=this.loginForm.value.pswd;
   
    const result = this.dataService.login(acno,pswd);

    if(result){
      alert("login successful")
      this.router.navigateByUrl("dashboard")

    }
  }

  
  register(){
    this.router.navigateByUrl("register");
  }

}

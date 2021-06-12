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
  //accno="Acount number please";
  //pswd="";
  loginForm=this.fb.group({
  accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
})


  constructor(private router:Router,private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
 
  login(){
    
    if(this.loginForm.valid){
    var acno=this.loginForm.value.accno;
    var pswd=this.loginForm.value.pswd;
   
    this.dataService.login(acno,pswd)
      .subscribe((result:any)=>{
        if(result){
        alert(result.message);
        localStorage.setItem("name",result.name);
        localStorage.setItem("acno",result.acno);
        this.router.navigateByUrl("dashboard")
  
      }
    },
    (result)=>{
      alert(result.error.message);
    

      })
 
  }
  else{
    alert("invalid form")
  }
  }

  
  register(){
    this.router.navigateByUrl("register");
  }

}

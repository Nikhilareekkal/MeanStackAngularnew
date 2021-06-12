import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../servics/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
// dAccno="";
// dPswd="";
// dAmount="";
// wAccno="";
// wPswd="";
// wAmount="";
depositForm=this.fb.group({ 
  accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
withdrawForm=this.fb.group({ 
  waccno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  wpswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]],
  wamount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
  user:any;
  acno:any;
  lDate:Date=new Date()
  constructor(private dataService:DataService,private fb:FormBuilder,private router:Router) {
    this.user=localStorage.getItem("name")
   }

  ngOnInit(): void {
  }
  deposit(){
   
    if(this.depositForm.valid){
    var accno=this.depositForm.value.accno;
    var pswd=this.depositForm.value.pswd;
    var amount=this.depositForm.value.amount;

   this.dataService.deposit(accno,pswd,amount)
   .subscribe((result:any)=>{
    if(result){
      alert(result.message);
    
   }},
   (result:any)=>{
     alert(result.error.message);
   })
  }
    else{
      alert("invalid form")
    }
  }

  withdrwal(){
   
    if(this.withdrawForm.valid){
    var accno=this.withdrawForm.value.waccno;
    var pswd=this.withdrawForm.value.wpswd;
    var amount=this.withdrawForm.value.wamount;

    this.dataService.withdrwal(accno,pswd,amount)
    .subscribe((result:any)=>{
    if(result){
      alert(result.message)
    }},
    (result:any)=>{
      alert(result.error.message);
    })
   }
  
  else{
    alert("invalid form")
  }
  

  }

  onDelete(event:any){
    this.dataService.deleteAccDetails(event)
   .subscribe ((result:any)=>{
     if(result){
       alert(result.message)
       this.router.navigateByUrl("")
       
     }
   },
    (result:any)=>{
    alert(result.error.message);
  })
  }
  onCancel(){
    this.acno =""
  }
  deleteAcc(){
    this.acno=localStorage.getItem("acno")

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { DataService } from 'services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private db:DataService) { }

  ngOnInit(): void {
  }

  loginForm=this.fb.group({
    userId:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  login(){
 
  
    var userId=this.loginForm.value.userId
    
    
    var pswd=this.loginForm.value.pswd
    let database=this.db.database
    //call login in dataservice
    if(this.loginForm.valid){
      this.db.login(userId,pswd)
      .subscribe((result:any)=>{
        if(result){
          localStorage.setItem('currentId',JSON.stringify(result.currentId))
          localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
          localStorage.setItem("token",JSON.stringify(result.token))
  
          alert(result.message)
           this.router.navigateByUrl("dashboard")
        }
      },
      (result)=>{
        alert(result.error.message)
      }
      )
     
     
    }
    else{
      alert("Invalid Forms")
    }
    }
}

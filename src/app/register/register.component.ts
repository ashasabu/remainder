import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'services/data.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    userId:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private router:Router,private fb:FormBuilder,private ds:DataService) { }

  ngOnInit(): void {
  }
  register(){
   
    var userId=this.registerForm.value.userId
    var username=this.registerForm.value.username
    var pswd=this.registerForm.value.pswd
    if(this.registerForm.valid){
   this.ds.register(username,userId,pswd)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl("")
      }
    },
      (result)=>{
        alert(result.error.message)
      })
    }
  else{
    alert("Invalid Forms!!!")
  }


  }
}

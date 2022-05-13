import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
loginDate:any
date:any
textselected:any

dateForm=this.fb.group({
  date:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  text:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})
  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { 
    this.loginDate=new Date()


  }
  // date1=new Date()
  // currentYear=this.date1.getUTCFullYear()
  // currentMonth=this.date1.getUTCMonth()+1
  // currentDay=this.date1.getUTCDate()
  // todayDate:any
  // dateselected:any
  // finalMonth:any
  // finalDay:any
  ngOnInit(): void {
//     if(this.currentMonth<10){
// this.finalMonth= "0" +this.currentMonth;
//     }
//     else{
// this.finalMonth=this.currentMonth
//     }

//     if(this.currentDay<10){
// this.finalDay= "0" +this.currentDay;
//     }
//     else{
// this.finalDay=this.currentDay;
//     }
//     this.todayDate=this.currentYear+"-"+this.finalMonth+"-"+this.finalDay
//     console.log(this.todayDate);
 
  }

// event(){

//   if(this.todayDate==this.dateselected) {
//     alert("hello")
//   }

// }

submit(){
  
  var date=this.dateForm.value.date
  // console.log(event);

  var text=this.dateForm.value.text
  console.log(date);  
  console.log(text);
  
}

}

// start(){
// console.log(this.start);

// }

///





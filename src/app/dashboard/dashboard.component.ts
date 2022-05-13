import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
loginDate:any
date:any

  constructor() { 
    this.loginDate=new Date()
// console.log(this.loginDate);

  }

  ngOnInit(): void {
  }
event(){

  


}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'services/data.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  userId: any;
  events: any;
  currentDate: any

  constructor(private fb: FormBuilder, private router: Router, private ds: DataService) {

    this.userId = JSON.parse(localStorage.getItem('currentId') || '')

    this.ds.viewdetails(this.userId)
      .subscribe((result: any) => {

        this.events = result.event

      },
        (result: any) => {
          alert(result.error.message)
        })

  }


    ngOnInit(): void {
    }
  
   
  }


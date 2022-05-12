import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// const options={
//   headers:new HttpHeaders()
// }
@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentId:any
  currentUser:any
  database:any ={
    1000:{userId:1000,username:"meena",pswd:1000,event:[]},
    1001:{userId:1001,username:"neena",pswd:1001,event:[]},
    1002:{userId:1002,username:"aneena",pswd:1002,event:[]}
  }
  constructor(private http:HttpClient) {
   // this.getDetails()
   }
   //store local storage
// saveDetails(){
//   localStorage.setItem("database",JSON.stringify(this.database))
//   if(this.currentId){
//     localStorage.setItem("currentId",JSON.stringify(this.currentId))
//   }
//   if(this.currentUser){
//     localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
//   }
// }
// getDetails(){
//   if(localStorage.getItem("database")){
//     this.database =JSON.parse(localStorage.getItem("database")||'')
//   }
//   if(localStorage.getItem("currentId")){
//     this.currentId=JSON.parse(localStorage.getItem("currentId")||'')
//   }
//   if(localStorage.getItem("currentUser")){
//     this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
//   }
  
// }



  register(username:any,userId:any,pswd:any){
   
    const data={
      username,
      userId,
      pswd
    }
    return this.http.post('http://localhost:3000/register',data)

  }


  login(userId:any,pswd:any){
    const data={
      userId,
      pswd
    }
    return this.http.post('http://localhost:3000/login',data)
   
     }
}

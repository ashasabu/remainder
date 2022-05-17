import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentId:any
  currentUser:any
  database:any ={
    1:{userId:1,username:"meena",pswd:1,event:[]},
    2:{userId:2,username:"neena",pswd:2,event:[]},
    3:{userId:3,username:"aneena",pswd:3,event:[]}
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

     addEvent(userId:any,token:any,date:any,text:any){
   
      const data={
        userId,
        token,
        date,
        text
      
      }
      return this.http.post('http://localhost:3000/addEvent',data)
  
    }

    // getOptions(){
    //   const token=JSON.parse(localStorage.getItem("token")||'')
    //   //create http header
    //   let headers=new HttpHeaders()
    //   //add token to req header
    //   if(token){
    //     headers=headers.append('x-access-token',token)
    //     options.headers=headers
    //   }
    //   return options
    //     }
}

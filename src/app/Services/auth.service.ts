import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Admin } from '../Models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  actualAdmin: Admin ={
    "email": "eve.holt@reqres.in",
    "passWord": "cityslicka"
  }
  readonly baseURL :string ="https://reqres.in/api/login"

  constructor(private myClient?:HttpClient) {
    // this.getAdmin().subscribe((Response)=>{ console.log(Response)})
   }
  
  getAdmin() 
  {
    return this.myClient.get(this.baseURL);
  }

  authAdmin(admin:any) 
  {
      let localAdmin :Admin
      if(localStorage.getItem('Admin'))
        localAdmin = JSON.parse(localStorage.getItem('Admin')) as Admin;
      else
        localStorage.setItem("Admin" ,  JSON.stringify(this.actualAdmin));
      
      if(localAdmin.email === admin.email && localAdmin.passWord === admin.passWord)
        return true
  }
 
}

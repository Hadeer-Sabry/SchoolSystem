import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  readonly baseURL :string ="https://reqres.in/api/users"
  
  constructor(private myClient:HttpClient  ) { }

  getStudentById(id)
  {
    return this.myClient.get(`${this.baseURL}/${id}`);
  }
}

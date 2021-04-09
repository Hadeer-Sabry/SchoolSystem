import { Injectable } from '@angular/core';
import {HttpClient , HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor( private myClient:HttpClient ) { }

  readonly baseURL :string ="https://reqres.in/api/users"

  getPageById(id)
  {
    let params = new HttpParams().set('page', id);
    return this.myClient.get(`${this.baseURL}` , {params: params});
  }
}

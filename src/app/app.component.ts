import { Component} from '@angular/core';
import {Router  } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor( private router :Router  ){
  }
  
  title = 'schoolSystem';

  public loggedIn()
  {
   return localStorage.getItem("token");
  }
  
  public logOut() {
    localStorage.removeItem("token")
    this.router.navigate(['/LogIn']);  
  }
    
}

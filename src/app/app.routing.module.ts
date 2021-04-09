import { PagesComponent } from './Components/pages/pages.component';
import {RouterModule  , Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {loginComponent} from './Components/logIn/login.component'
import { StudentComponent } from './Components/student/student.component';
import { StudentsComponent } from './Components/students/students.component';
import { AuthGuard } from './Guards/auth.guard';

export const routes:Routes=[
    {path:'' , redirectTo:'/LogIn' , pathMatch:'full'  },
    {path:'Pages' , component:PagesComponent},
    {path:'student/:id' , component:StudentComponent  , canActivate:[AuthGuard] },
    {path:'students/:id/:per_page' , component:StudentsComponent  , canActivate:[AuthGuard]},
    {path:'LogIn' , component:loginComponent },
]

@NgModule({
    declarations: [
    ],
    imports: [
     CommonModule ,
      RouterModule.forRoot(routes) 
    ],
    
    exports:[RouterModule]
  })
  export class AppRoutingModule { }
  

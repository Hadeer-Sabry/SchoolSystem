import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {loginComponent} from './Components/logIn/login.component'
import { PagesService } from './Services/pages.service';
import { StudentsService } from './Services/students.service';
import { PagesComponent } from './Components/pages/pages.component';
import { StudentComponent } from './Components/student/student.component';
import { StudentsComponent } from './Components/students/students.component';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing.module';
import { CommonModule } from '@angular/common'; 
import { AuthService } from './Services/auth.service';
import { AuthGuard } from './Guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent ,
    loginComponent,
    PagesComponent,
    StudentComponent ,
    StudentsComponent , 
  ],
  imports: [
    BrowserModule ,
    FormsModule ,
    RouterModule ,
    HttpClientModule ,
    AppRoutingModule ,
    CommonModule
  ],
  providers: [
    PagesService ,
    StudentsService ,
    AuthService ,
    AuthGuard ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

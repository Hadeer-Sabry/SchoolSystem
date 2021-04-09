import {Component, OnInit} from '@angular/core'
import {Admin} from 'src/app/Models/models'
import {Router} from '@angular/router'
import { AuthService } from 'src/app/Services/auth.service';

@Component ({
    selector:'app-login',
    templateUrl :'./login.component.html',
    styleUrls:[]
})
export class loginComponent implements OnInit{

    constructor ( private router?:Router , private auth?:AuthService ){}

    submitedAdmin:Admin = {} as Admin
    Message:string =" "

    ngOnInit():void{
    }  

    submitLogin()
    {
        const result = this.auth.authAdmin(this.submitedAdmin);
        if(result)
        {
            localStorage.setItem("token" ,this.submitedAdmin.email);
            this.router.navigate(['Pages']);
        }
        else
            this.Message="Invalid Email or Password"
    }  
}
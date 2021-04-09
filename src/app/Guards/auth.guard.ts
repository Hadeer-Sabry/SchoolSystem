import { Injectable } from "@angular/core";
import {  CanActivate,  Router } from "@angular/router";


@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private router:Router ){}
    canActivate():boolean {
        if(! localStorage.getItem("token"))
            {
                this.router.navigate(['LogIn']);
                return false
            }
            return true ;
    }
}

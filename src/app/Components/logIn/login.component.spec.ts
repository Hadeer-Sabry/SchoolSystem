import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { Admin } from "src/app/Models/models"
import { AuthService } from "src/app/Services/auth.service"
import { loginComponent } from "./login.component"

describe('LogIn Component' , ()=>{
    let comp :loginComponent
    let auth :AuthService
    beforeEach(function(){
        TestBed.configureTestingModule({
            imports:[RouterTestingModule ] ,
            providers:[AuthService]
        })
        comp = new loginComponent()
        auth = new AuthService()
    })

    it('#submitLogin() should Toggle Message' , ()=>{
        expect(comp.Message).toBe(" " , "Empty String At First") ;
    })
})
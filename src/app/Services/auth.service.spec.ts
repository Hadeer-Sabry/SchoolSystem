import { TestBed } from "@angular/core/testing";
import { AuthService } from "./auth.service"
import {  HttpClientModule } from "@angular/common/http";
import { Admin } from "../Models/models";

describe('AuthServices' , ()=>{
    let auth :AuthService
    let adminMock :Admin

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientModule]
        })
        auth = new AuthService()
        adminMock={email:"eve.holt@reqres.in" , passWord:"cityslicka"}
    }) ;
    it('must Return true if there is SubmitedAdmin equal email:"eve.holt@reqres.in" , passWord:"cityslicka"' , ()=>{
        expect(auth.authAdmin(adminMock)).toBeTrue;
    })
})
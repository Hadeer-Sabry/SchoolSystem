import { TestBed } from "@angular/core/testing";
import {PagesService } from "./pages.service"
import {  HttpClientModule} from "@angular/common/http";
import { pages} from "../Models/models";

describe('PageServices' , ()=>{
    let page:PagesService
    let pageId =2

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientModule]
        })
        page = TestBed.inject(PagesService)
    }) ;
   
    it('should get page data Successfully ' , (done:DoneFn)=>{
        page.getPageById(pageId).subscribe((Page :pages)=>{
        expect(Page.page).toEqual(pageId) ;
        done() ;
            })
        })

  
})
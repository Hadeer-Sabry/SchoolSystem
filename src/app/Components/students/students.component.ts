import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router , Params} from '@angular/router'
import {PagesService} from 'src/app/Services/pages.service' 
import {pages} from 'src/app/Models/models' 

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: []
})
export class StudentsComponent implements OnInit {
 
  pageId :number 
  page :pages
  per_page :any
  listStudent:any

  constructor(private AR :ActivatedRoute , private myServices:PagesService  ,private router:Router , private route :Router) { 
    this.pageId = this.AR.snapshot.params.id;
    this.AR.params.subscribe((params: Params) => this.per_page = params['per_page']);
  }

  ngOnInit(): void {
    this.myServices.getPageById(this.pageId).subscribe(
      (Response)=>{ this.page = Response as pages ;
        this.listStudent = this.page.data
        if(this.per_page != this.page.per_page)
        {
          this.listStudent=[] 
          for(let i=0 ; i<this.per_page ; i++)
          {
            this.listStudent.push(this.page.data[i])
          }
        }
      },
  (error)=>console.log(error))
  }

  backBtn()
   {
     this.router.navigate(['Pages'])
   }
}

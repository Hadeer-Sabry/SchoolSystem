import { Component, OnInit } from '@angular/core';
import {PagesService} from 'src/app/Services/pages.service' 
import {Router} from '@angular/router'
import {pages} from 'src/app/Models/models' 

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: []
})
export class PagesComponent implements OnInit {

  constructor (private myServices:PagesService  , private router:Router ){}
  
  page :pages
  pageNumber ='page1'
  numStudent :number = 6
  numPage :number = 1
  numberSelected :number = 6
  filteredList:any

  getPageInfo(id)
  {
    this.myServices.getPageById(id).subscribe(
      (Response)=>{ this.page = Response as pages ;
       this.numPage = this.page.page
       this.numStudent = this.page.per_page
       this.filteredList= this.page.data
      },
  (error)=>console.log(error))
  }

  ngOnInit():void{
    this.getPageInfo(1);
  }  
  
  radioChecked(pageId){
    this.getPageInfo(pageId)
      this.numPage = pageId 
  }

  detailsStudent(studentId ){
      this.router.navigate(['/student/'+(studentId)] );
  }

  studentsDetails(pageId)
  {
    this.router.navigate(["students" , pageId ,  this.numberSelected ]);
  }

  selectedNumber(event)
  {
    if(event.target.value == this.page.per_page)
    {
      this.filteredList = this.page.data;
    }
    else
    {
      this.filteredList=[] 
      for(let i=0 ; i<event.target.value ; i++)
      {
        this.filteredList.push(this.page.data[i])
      }
    }
  }
}

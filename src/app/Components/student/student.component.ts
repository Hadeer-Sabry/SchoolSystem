import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router'
import {StudentsService} from 'src/app/Services/students.service' 

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: []
})
export class StudentComponent implements OnInit {

  studentId?:number
  student : any

  constructor(private AR ?:ActivatedRoute , private router ?:Router , private myServices ?:StudentsService ) {
    this.studentId = this.AR.snapshot.params.id;
   }

   ngOnInit(): void {
    this.myServices.getStudentById(this.studentId).subscribe(
      (Response)=>{ this.student = Response as any ;
      },
    ( error)=>console.log(error))
    }

   backBtn()
   {
     this.router.navigate(['Pages'])
     return 'Done'
   }
}

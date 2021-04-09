import { TestBed } from "@angular/core/testing";
import {StudentsService } from "./students.service"
import {  HttpClientModule } from "@angular/common/http";
import { Student } from "../Models/models";

describe('StudentServices' , ()=>{
    let student:StudentsService
    let data:Array<Student>
    let studentId = 1
   
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientModule]
        })
        student = TestBed.inject(StudentsService)
    }) ;
   
    it('should get Student data Successfully ' , (done:DoneFn)=>{
        student.getStudentById(studentId).subscribe((Student :any)=>{
        expect(Student.data.id).toEqual(studentId) ;
        done() ;
            })
        })

  
})
// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { ActivatedRoute, Router, Routes } from "@angular/router";
// import { RouterTestingModule  } from "@angular/router/testing";
// import { StudentComponent } from "./student.component"
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import{AppRoutingModule , routes} from "src/app/app.routing.module"
// describe('StudentComponent ' , ()=>{
//     let router:Router
//     const fakeActivatedRoute = {
//         snapshot: { data: { } }
//       } as ActivatedRoute;
    
//     let app :StudentComponent
//   let fixture :ComponentFixture<StudentComponent>

//     beforeEach(function(){
//         const routerStub = {
//             navigate: jasmine.createSpy('navigate'),
//             navigateByUrl: jasmine.createSpy('navigateByUrl')
//         };
//         TestBed.configureTestingModule({
//           imports:[ RouterTestingModule.withRoutes(routes)  , HttpClientTestingModule],
//           providers:[{provide: ActivatedRoute, useValue: fakeActivatedRoute} , 
//             { provide: Router, useValue: routerStub }]
//         }).compileComponents();
//         const  fixture = TestBed.createComponent(StudentComponent);
//         app = fixture.componentInstance;
//       })
//     it('#backBtn() must Return Done' , ()=>{
//         const comp = new StudentComponent();
//         expect(comp.backBtn()).toBe('Done');
//     })
// })
export interface Admin
 {
     email:string ,
     passWord:string
 }


 export interface Student
 {
     email:string ,
     first_name:string ,
     id:number,
     last_name :string ,
     avatar :string
 }

 export interface pages
 {
     page:number ,
     per_page:number ,
     total:number,
     total_pages :number ,
     data : Array <Student>
 }
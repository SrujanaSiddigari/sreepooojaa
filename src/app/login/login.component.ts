import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email='';
  password='';
  lgformchk;
  formclick=false;
  constructor( private http:HttpClient) { }

  ngOnInit() {
  }

  login(formData:NgForm){
    //alert("hi");
   this.email=formData.value.email;
   this.password=formData.value.password;
   console.log(this.email);
   console.log(this.password);
   this.formclick=true;
    let data={
    email:this.email,
    password:this.password
    }
  
   this.http.post("http://localhost/sreepooja/sreeloginusr.php",data)
   .subscribe(
    (res) => {
      console.log(res);

      this.lgformchk=false;
       },
    err => {
      console.log("error occured");
      this.lgformchk=true;
    }
 
   );

} 
  }


import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  onformclick = false;
  pwdcheck;
username;
 email;
password;
cpassword;
  constructor(private http:HttpClient) { }

  ngOnInit() {

  }
  
  register(formdata: NgForm) {
this.username=formdata.value.username;
this.email=formdata.value.email;
this.password=formdata.value.password;
this.cpassword =formdata.value.rePassword;
  this.onformclick = true;

    //console.log(formdata);
    let data={
    email : this.email,
    username : this.username,
 //  console.log("name"+uname);
    //console.log("email" +email);
    password :this.password,
   // console.log("password"+password);
   cpassword : this.cpassword//

    //console.log("cpassword"+cpassword);
    }
    
    if(this.password!=this.cpassword){
     // console.log(this.password);
     // console.log(this.cpassword);

     //this.pwdcheck=false;
        this.pwdcheck=true;

     console.log('password incorrect');
    
     }
      if(this.password==this.cpassword){
       //this.pwdcheck=true;
       this.pwdcheck=false;
       console.log('registered successfully');
   
      this.email='';
       this.username='';
       this.password='';
       this.cpassword='';
    this.http.post("http://localhost/sreepooja/sreesavuser.php",data)
    .subscribe(
      (res:Response) => {
        console.log(res.json());
        
      },
  
      err => {
        console.log("invalid credentials");
      }
   
     );

    }

     }
  }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from '../app.services';
import jwt_decode from "jwt-decode";
import { ToastrService } from 'ngx-toastr';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  decoded:any;
  errorMsg: string="";
  public Username: string="";
  Admin:any
  public Password: string="";
  //constructor() { }
   constructor(private accountService: AccountServiceService, private router: Router,private Toastr: ToastrService) { }

  ngOnInit() {
    // console.log('hello')

    // if(localStorage.getItem("access_token") != null){
    //   //this.router.navigate(['/dashboard']);
    // }
   
  }

  loginSubmit(){
    this.errorMsg = "";
    this.Toastr.toastrConfig.progressBar = true;
    console.log(this.Username,this.Password)
    this.accountService.login(this.Username,this.Password).subscribe((resp)=>{
      console.log(resp)
    // Store access token, UserId and Role in local storage
    // localStorage.setItem('access_token',resp.body.token);
    // // localStorage.setItem('role',resp.Roles);
    // var token = localStorage.getItem("access_token");
    //  this.decoded = jwt_decode(token);
          // localStorage.setItem('role',this.decoded.Roles);
          if(resp.code == 200){
            console.log(resp.data.fullName)
            window.localStorage.setItem('loggedUser', resp.data.fullName);
            this.router.navigate(['/dashboard']);
            this.Toastr.success('Welcome to M & S Attendance Portal' );
          }
          // else{
          //   this.Toastr.error('Invalid Email Address or Password'); 
          // }
    //  if(localStorage.getItem("role")=='Admin' || localStorage.getItem("role")=='PM' ){
    
    },
    (err)=>{
      if(err.status == 400){
        this.Toastr.error('Invalid Email Address or Password'); 
      }
    //  else if(err.status == ""){
    //     this.Toastr.error('Input field should not be empty'); 
    //   }
      else{
        this.Toastr.error("Something went on the server side !!!");
      console.log(err);}
      
    });
  }
}



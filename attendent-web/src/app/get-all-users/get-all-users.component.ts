import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GettAllusersService } from '../services/gett-allusers.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.scss']
})
export class GetAllUsersComponent implements OnInit {

  GetAllUsersData: Array<any>= new Array();
  UserData: any

  constructor(private GetAllUsersService: GettAllusersService, private router: Router,private Toastr: ToastrService) { }

  ngOnInit(): void {

    this.GetAllUsersService.GetAllUsers().subscribe(resp=>{
      this.GetAllUsersData = resp.data;
       console.log(resp)
     },
     error=>{
       this.Toastr.error("Something went on the server side !!!");
       console.log(error);
     });


    //  this.GetAllUsersService.GetEmployee().subscribe(resp=>{
    //   this.GetAllUsersData = resp.data;
    //    console.log(resp)
    //  },
    //  error=>{
    //    this.Toastr.error("Something went on the server side !!!");
    //    console.log(error);
    //  });
     
  }
  getUser(id:any){
  window.localStorage.setItem('getObjUserId',id);
  this.router.navigate(['/user']);
}

}

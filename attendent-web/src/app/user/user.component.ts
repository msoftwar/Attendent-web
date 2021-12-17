import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GettAllusersService } from '../services/gett-allusers.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  GetAllUsersData: Array<any>= new Array();

  constructor(private GetAllUsersService: GettAllusersService, private router: Router,private Toastr: ToastrService) { }

  ngOnInit(): void {

    // this.GetAllUsersService.GetSingleEmployee().subscribe(resp=>{
    //   this.GetAllUsersData = resp.data;
    //    console.log(resp)
    //  },
    //  error=>{
    //    this.Toastr.error("Something went on the server side !!!");
    //    console.log(error);
    //  });
 
   
  }


}
function id(id: any, any: any) {
  throw new Error('Function not implemented.');
}


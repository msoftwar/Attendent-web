import { Component, OnInit } from '@angular/core';
import { GettAllusersService } from '../services/gett-allusers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private GetAllUsersService: GettAllusersService) { }
  totalEmployee: Array<any>= new Array();
  employeeCount: Number=0;
  ngOnInit() {
    this.GetAllUsersService.GetEmployee().subscribe(resp=>{
      this.totalEmployee = resp.data;
      this.employeeCount=resp.data.length;
       console.log(resp)
     },
     );
    }
}

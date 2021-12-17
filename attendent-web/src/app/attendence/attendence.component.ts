import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Timestamp } from 'rxjs';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss']
})
export class AttendenceComponent implements OnInit {

  AttendanceData: Array<any>= new Array();

  constructor(private AttendanceService: AttendanceService, private router: Router,private Toastr: ToastrService) { }

  ngOnInit(): void {

    this.AttendanceService.GetAttendance().subscribe(data=>{
     this.AttendanceData = data.data;
      console.log(data)
    },
    error=>{
      this.Toastr.error("Something went on the server side !!!");
      console.log(error);
    });

  }
  searchLocation(lat:number,long:number){
    window.open(`https://www.google.com/maps/?q=${lat},${long}`, "_blank")
  }
  ConverDate
  (timeStamp:any){
    console.log(timeStamp)
    console.log(new Date(Number(timeStamp)))
    var t=new Date(Number(timeStamp))
return String(t.toDateString()+" "+t.toTimeString().split(' ')[0])
  }

}

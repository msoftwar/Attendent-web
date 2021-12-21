import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { Timestamp } from 'rxjs';
import { AttendanceService } from '../services/attendance.service';
import { ExportService } from '../services/export.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss']
})
export class AttendenceComponent implements OnInit {

  AttendanceData: Array<any>= new Array();
  DataToShow: Array<any>= new Array();
  exportData: Array<any> = new Array();
  constructor(private AttendanceService: AttendanceService,private exportService: ExportService, private router: Router,private Toastr: ToastrService,public datepipe: DatePipe,) { }
  InitialStartDate: Date = new Date;
  InitialEndDate:  Date = new Date;
  startDate: string = "";
  endDate: string = "";
  ngOnInit(): void {

    this.AttendanceService.GetAttendance().subscribe(data=>{
     this.AttendanceData = data.data;
     this.DataToShow=data.data2;
     this.exportData = data.data3;
      console.log(data)
    },
    error=>{
      this.Toastr.error("Something went on the server side !!!");
      console.log(error);
    });

  }
  filterByTime(){
    var startTime=new Date(this.InitialStartDate).getTime()-18000000
    var endTime=new Date(this.InitialEndDate).getTime()+68399999
    //18000000
    console.log(new Date(startTime-18000000),new Date(endTime-18000000))
    this.AttendanceService.FilterByTime(startTime,endTime).subscribe(data=>{
      this.AttendanceData = data.data;
      this.DataToShow=data.data2;
      this.exportData = data.data3;
       console.log(data)
     },
     error=>{
       this.Toastr.error("Something went on the server side !!!");
       console.log(error);
     });
  }

  export() {
    this.exportService.exportExcel(this.exportData, 'Attendance Excel');
  
}

  searchLocation(lat:number,long:number){
    window.open(`https://www.google.com/maps/?q=${lat},${long}`, "_blank")
  }
  ConverDate
  (timeStamp:any){
    console.log(timeStamp)
    console.log(new Date(Number(timeStamp)))
    var t=new Date(Number(timeStamp))
return String(t.toDateString())
  }
  ConvertTime
  (timeStamp:any){
    console.log(timeStamp)
    console.log(new Date(Number(timeStamp)))
    var t=new Date(Number(timeStamp))
return String(t.toTimeString().split(' ')[0])
  }
  ConverDateDepricated
  (timeStamp:any){
    console.log(timeStamp)
    console.log(new Date(Number(timeStamp)))
    var t=new Date(Number(timeStamp))
return String(t.toDateString()+" "+t.toTimeString().split(' ')[0])
  }

}

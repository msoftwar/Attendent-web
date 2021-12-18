import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

DataToShow:Array<any>=new Array<any>();
  constructor( private router: Router,private Toastr: ToastrService,private AttendanceService: AttendanceService,) { }

  ngOnInit(): void {
    this.AttendanceService.GetSingleEmployeeAttendance(window.localStorage.getItem('getObjUserId')).subscribe(data=>{
     // this.UserData = data.data;
      this.DataToShow=data.data
      console.log('hello')
      console.log("data",this.DataToShow)
//      data.data.map((ud:any)=>{
//        // console.log(ud)
// if(ud.status=="checkin"){
  
//   var temp=new UserAttendanceModel()
//   temp.checkinLat=ud.locationList[0].latitude;
//   temp.checkinLong=ud.locationList[0].longitude;
//   temp.checkinTime=ud.locationList[0].time;
//   temp.email=ud.userData[0]._id
//   temp.name=ud.userData[0].fullName
//   var t=new Date(Number(ud.locationList[0].time)).toDateString();
//   this.UserData.map((ud2:any)=>{
  
// if(ud2.status=="checkout"){
//   var t2=new Date(Number(ud2.locationList[0].time)).toDateString();
//   if(t==t2){
//     console.log(ud);
//     console.log(ud2);
//     console.log(t+" ---" +t2)
//      temp.checkoutTime=ud2.locationList[0].time;
//   temp.checkoutLat=ud2.locationList[0].latitude;
//   temp.checkoutLong=ud2.locationList[0].longitude;
//   temp.summary=ud2.summary;
//   console.log(temp)
//   this.DataToShow.push(temp);
//   }
 
// }
//   })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
// }
//       })
    

    })
    
   
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

}



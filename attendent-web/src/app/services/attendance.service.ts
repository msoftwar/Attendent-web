import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  //constructor(private _http:HttpClient,private activatedRoute: ActivatedRoute, private auth: AccountServiceService, private router: Router) { }

  constructor(private _http:HttpClient,private activatedRoute: ActivatedRoute) { }

  GetAttendance():Observable<any>{

    let FullUrl = localStorage.getItem('BaseUrl')+"/api/users/attendance";
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      'Accept': 'application/json',
      "Authorization": "Basic YWRtaW5Ac2tpbGxzb3J0ZWQuY29tOkRQYXNzQHdvcmQxMjAy"

    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this._http.get(FullUrl,requestOptions );
  }
  GetSingleEmployeeAttendance(id:any):Observable<any>{
    let FullUrl = localStorage.getItem('BaseUrl')+"/api/users/getEmployeeAttendance?id="+id;
   const headerDict = {
     'Access-Control-Allow-Origin':'*',
     'Accept': 'application/json',
     "Authorization": "Basic YWRtaW5Ac2tpbGxzb3J0ZWQuY29tOkRQYXNzQHdvcmQxMjAy"

   }
   const requestOptions = {                                                                                                                                                                                 
     headers: new HttpHeaders(headerDict), 
   };

   return this._http.get(FullUrl,requestOptions );
 }
 FilterSingleEmployeeByTime(id:any,startTime:any,endTime:any):Observable<any>{
  let FullUrl = localStorage.getItem('BaseUrl')+"/api/users/filterEmployeeByTime?id="+id+"&&startTime="+startTime+"&&endTime="+endTime;
 const headerDict = {
   'Access-Control-Allow-Origin':'*',
   'Accept': 'application/json',
   "Authorization": "Basic YWRtaW5Ac2tpbGxzb3J0ZWQuY29tOkRQYXNzQHdvcmQxMjAy"

 }
 const requestOptions = {                                                                                                                                                                                 
   headers: new HttpHeaders(headerDict), 
 };

 return this._http.get(FullUrl,requestOptions );
}
 FilterByTime(startTime:any,endTime:any):Observable<any>{
  let FullUrl = localStorage.getItem('BaseUrl')+"/api/users/filterByTime?startTime="+startTime+"&&endTime="+endTime;
 const headerDict = {
   'Access-Control-Allow-Origin':'*',
   'Accept': 'application/json',
   "Authorization": "Basic YWRtaW5Ac2tpbGxzb3J0ZWQuY29tOkRQYXNzQHdvcmQxMjAy"

 }
 const requestOptions = {                                                                                                                                                                                 
   headers: new HttpHeaders(headerDict), 
 };

 return this._http.get(FullUrl,requestOptions );
}

}

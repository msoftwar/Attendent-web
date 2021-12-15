import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { Login } from './login';
//import { Icategories } from '../site-layout/category';
//import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService 
    {

  constructor( private httpClient:HttpClient,private router:Router) { }

        /* Login Method */
//    login(Username:string,Password:string):Observable<any>{
    
//     const headerDict = {
//       'Access-Control-Allow-Origin':'*',
//       'Content-Type':'application/json'
//       //'Accept': 'application/json'
//     }
//     const requestOptions = {                                                                                                                                                                                 
//       headers: new HttpHeaders(headerDict), 
//     };
    
//     let FullUrl = localStorage.getItem('BaseUrl')+"/api/User/login";
//     let data = {username: Username , password: Password}
//     return this.httpClient.post(FullUrl,data,requestOptions);
    
//   }
login(Username:string,Password:string):Observable<any>{
    const baseUrl = "http://localhost:3000/api/login"; 
    let data = {username: Username , password: Password}
    return this.httpClient.post<any>(baseUrl,data);
}
//   login(Loginbody: any):Observable<Login>{
//    const baseUrl = "http://localhost:3000/api/login"; 
//    return this.httpClient.post<Login>(baseUrl, Loginbody);
//   }
  
}

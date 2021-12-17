import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  changeAuthStatus(arg0: boolean) {
    throw new Error('Method not implemented.');
  }
      constructor(private _http:HttpClient,private router:Router) { }

      /* Login Method */
      login(Username:string,Password:string):Observable<any>{
       
       const headerDict = {
         'Access-Control-Allow-Origin':'*',
         'Content-Type':'application/json',
         "Authorization": "Basic YWRtaW5Ac2tpbGxzb3J0ZWQuY29tOkRQYXNzQHdvcmQxMjAy",

         //'Accept': 'application/json'
       }
       const requestOptions = {                                                                                                                                                                                 
         headers: new HttpHeaders(headerDict), 
       };
       
       let FullUrl = localStorage.getItem('BaseUrl')+"/api/users/login";
       let data = {email: Username , password: Password}
       return this._http.post(FullUrl,data,requestOptions);
   
     
     }
     Logout() {
      localStorage.removeItem('accessToken');
      this.router.navigate(['/login']);
    }


    }



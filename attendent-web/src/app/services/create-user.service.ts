import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private _http:HttpClient,private activatedRoute: ActivatedRoute, private router: Router) { }


  create_user(data: any):Observable<any>{

    
    const headerDict = {
      'Access-Control-Allow-Origin':'*',
      'Accept': 'application/json',
      "Authorization": "Basic YWRtaW5Ac2tpbGxzb3J0ZWQuY29tOkRQYXNzQHdvcmQxMjAy"

    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let FullUrl = localStorage.getItem('BaseUrl')+"/api/users/signup";
    return this._http.post(FullUrl,data,requestOptions );
  }
}

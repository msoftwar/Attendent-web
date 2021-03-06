import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GettAllusersService {

  constructor(private _http:HttpClient,private activatedRoute: ActivatedRoute) { }

  GetAllUsers():Observable<any>{

    let FullUrl = localStorage.getItem('BaseUrl')+"/api/users/get-all-users";
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

  GetEmployee():Observable<any>{
     let FullUrl = localStorage.getItem('BaseUrl')+"/api/users/get-all-users";
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



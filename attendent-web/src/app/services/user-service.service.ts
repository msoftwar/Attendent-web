import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountServiceService } from '../app.services';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // Logout() {
  //   throw new Error('Method not implemented.');
  // }
  Logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
  Token: any;

  constructor(private _http:HttpClient,private activatedRoute: ActivatedRoute, private auth: AccountServiceService, private router: Router) { }

  
  handleResponse(data: any){
    this.Token.handle(data.access_token);
   // this.auth.changeAuthStatus(true);
  
    this.router.navigateByUrl('/dashboard');
  }
 
}

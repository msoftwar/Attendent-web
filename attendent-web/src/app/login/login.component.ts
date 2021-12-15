import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from '../app.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public Username!: string;
  public Password!: string;
  constructor(private accountService: AccountServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.Username,this.Password)
    .subscribe(
      res =>console.log(res),
      error => console.log(error)
    )
  }

}

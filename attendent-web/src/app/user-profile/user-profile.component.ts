import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  userDisplayName:string = '';
  ngOnInit() {
    console.log(window.localStorage.getItem('loggedUser'))
     this.userDisplayName = String(window.localStorage.getItem('loggedUser'));
  }

}

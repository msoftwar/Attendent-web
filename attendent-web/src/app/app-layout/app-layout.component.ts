import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Login } from '../login';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
// export class AppLayoutComponent implements OnInit {

//   UserData!: Login;
//   UserAllData : Array<any> = new Array();
//   constructor(private userService: UserServiceService, private Route: Route,) { }

//   ngOnInit(): void {
//     // this.Route.params.subscribe((data: { Username: Login; }) =>{
//     //   this.UserData = data.Username;
//     //  // this.productID = data.productId;
//     //   //this.SearchCategory = data.categoryId;
//     //   })
//     //   this.userService.getUserData().subscribe(viewData =>{
//     //   //@ts-ignore
//     //   this.UserData = viewData[0];
//     //    // console.log(this.productData.productImg)
//     //    // this.userService.RelatedProduct(this.productData.categoryId).subscribe(categoryData =>{
//     //   // this.ProductList = categoryData

//     //   //@ts-ignore
//     //     for(let i=0;i<categoryData.length;i++){
//     //        if(this.UserData.Username!=us&&this.productData.categoryId==categoryData[i].categoryId){
//     //         this.ProductList.push(categoryData[i])
//     //        }
//     //    }
//     //   })
//     //   })

    
//   }

  

// }
export class AppLayoutComponent implements OnInit {

  //constructor(private userService: UserServiceService, private Route: Route,) { }

  userDisplayName:string = '';
  ngOnInit() {
    console.log(window.localStorage.getItem('loggedUser'))
     this.userDisplayName = String(window.localStorage.getItem('loggedUser'));
  }

  // logout(){
  //   this.userService.Logout();
  // }
}

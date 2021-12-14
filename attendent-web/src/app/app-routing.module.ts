import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { GoogleMapComponent } from './google-map/google-map.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
// import { MapComponent } from './map/map.component';
const routes: Routes = [
  {
    path:'',redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: AppLayoutComponent,
    children: [
      {
        path: '', component: DashboardComponent, pathMatch: 'full'
      }
    ]
  },
  {
    path: 'signup',
    component: SignupComponent,
    children: [
      {
        path: '', component: SignupComponent, pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: '', component: LoginComponent, pathMatch: 'full'
      }
    ]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    children: [
      {
        path: '', component: ForgotPasswordComponent, pathMatch: 'full'
      }
    ]
  },
  {
    path: 'user-profile',
    component: AppLayoutComponent,
    children: [
      {
        path: '', component: UserProfileComponent, pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '**', component: PageNotFoundComponent, pathMatch: 'full'
      }
    ]
  }
 
  // {
  //   path: 'map',
  //   component: AppLayoutComponent,
  //   children: [
  //     {
  //       path: '', component: MapComponent, pathMatch: 'full'
  //     }
  //   ]
  // },
  // {
  //   path: 'google-map',
  //   component: AppLayoutComponent,
  //   children: [
  //     {
  //       path: '', component: GoogleMapComponent, pathMatch: 'full'
  //     }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

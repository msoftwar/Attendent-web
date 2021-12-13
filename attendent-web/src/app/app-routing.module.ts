import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {
    path:'',redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '', component: AppLayoutComponent, pathMatch: 'full'
      }
    ]
  },
  {
    path: 'signup',
    component: AppLayoutComponent,
    children: [
      {
        path: '', component: SignupComponent, pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

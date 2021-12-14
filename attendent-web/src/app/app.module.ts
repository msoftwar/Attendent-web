import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { GoogleMapComponent } from './google-map/google-map.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
// import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    LoginComponent,
    SignupComponent,
    AppLayoutComponent,
    UserProfileComponent,
    DashboardComponent,
    // // GoogleMapComponent,
     PageNotFoundComponent,
    // // MapComponent,

  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule
   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

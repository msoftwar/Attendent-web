import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
// import { NgxPaginationModule} from 'ngx-pagination';  
// import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
// import { TextMaskModule } from 'angular2-text-mask';
// import { OrderModule } from 'ngx-order-pipe';
// import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ToastrModule } from 'ngx-toastr';
// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoadingBarModule } from '@ngx-loading-bar/core';
import { AppRoutingModule } from './app-routing.module';
// import { AuthGuard} from './auth/auth.guard';
// import { AuthInterceptor } from './auth/auth.interceptor';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { UserComponent } from './user/user.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';

// import { AllpatientsComponent } from './allpatients/allpatients.component';
// import { GenderComponent } from './gender/gender.component';
// import { DistrictsComponent } from './districts/districts.component';
// import { TTAComponent } from './tta/tta.component';
// import { TehsilComponent } from './tehsil/tehsil.component';
// import { HealthfacilityComponent } from './healthfacility/healthfacility.component';
// import { PmdtsiteComponent } from './pmdtsite/pmdtsite.component';
// import { PatientstatusComponent } from './patientstatus/patientstatus.component';
// import { LabsComponent } from './labs/labs.component';
// import { ClinicComponent } from './clinic/clinic.component';
// import { BmuComponent } from './bmu/bmu.component';
// import { DtcComponent } from './dtc/dtc.component';
// import { NationalandProLabsComponent } from './nationaland-pro-labs/nationaland-pro-labs.component';
// import { ProjectManagerComponent } from './project-manager/project-manager.component';
// import { StatComponent } from './stat/stat.component';
// import { GenePatientsComponent } from './gene-patients/gene-patients.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppLayoutComponent,
    LoginComponent,
    AttendenceComponent,
    GetAllUsersComponent,
    UserComponent,
    // AllpatientsComponent,
    // GenderComponent,
    // DistrictsComponent,
    // TTAComponent,
    // TehsilComponent,
    // HealthfacilityComponent,
    // PmdtsiteComponent,
    // PatientstatusComponent,
    // LabsComponent,
    // ClinicComponent,
    // BmuComponent,
    // DtcComponent,
    // NationalandProLabsComponent,
    // ProjectManagerComponent,
    // StatComponent,
    // GenePatientsComponent,
  ],
  imports: [
    BrowserModule,
    // MultiSelectAllModule,
    // TextMaskModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule,
    // ChartsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      progressBar: true,
    }),
    // LoadingBarHttpClientModule,
    // LoadingBarRouterModule,
    // LoadingBarModule,
    // NgxPaginationModule,
    // Ng2SearchPipeModule,
    // OrderModule
  ],
  providers: [
    // AuthGuard,
    DatePipe
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptor,
  //     multi: true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

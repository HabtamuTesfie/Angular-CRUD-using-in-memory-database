//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 30/08/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateEmployeeComponent} from './com/employee/create-employee/create-employee.component';
import {EmployeeDetailsComponent} from './com/employee/employee-details/employee-details.component';
import {EmployeeListComponent} from './com/employee/employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import {UpdateEmployeeComponent} from './com/employee/update-employee/update-employee.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DataService} from './srv/data.service';
import {MaterialModule} from './com/materialModule.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CandidateComponent} from './com/candidate/candidate-list/candidate.component';
import {DataSourceService} from './srv/dataSource.service';
import {AddCandidateComponent} from './com/candidate/add-candidate/add-candidate.component';
import {UpdateCandidateComponent} from './com/candidate/update-candidate/update-candidate.component';
import {DeleteCandidateComponent} from './com/candidate/delete-candidate/delete-candidate.component';
import {HomeComponent} from './com/home/home.component';
import {LoadingComponent} from './com/loading/loading.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    CandidateComponent,
    AddCandidateComponent,
    UpdateCandidateComponent,
    DeleteCandidateComponent,
    HomeComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService)
  ],
  providers: 
  [
    {
      provide: DataSourceService,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

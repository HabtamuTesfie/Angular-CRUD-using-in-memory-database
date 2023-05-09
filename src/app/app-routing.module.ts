//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Candidate Information Management
 *       Date Created: 05/07/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {EmployeeDetailsComponent} from './com/employee/employee-details/employee-details.component';
import {CreateEmployeeComponent} from './com/employee/create-employee/create-employee.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeListComponent} from './com/employee/employee-list/employee-list.component';
import {UpdateEmployeeComponent} from './com/employee/update-employee/update-employee.component';
import {CandidateComponent} from './com/candidate/candidate-list/candidate.component';
import {HomeComponent} from './com/home/home.component';

//------------------------------------------------------------------------------
/**
 * Application routes configuration.
 */
//------------------------------------------------------------------------------
const routes: Routes = 
[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmployeeListComponent },
  { path: 'candidateInfo', component: CandidateComponent},
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
];

//------------------------------------------------------------------------------
/**
 * Application routing module.
 */
//------------------------------------------------------------------------------
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

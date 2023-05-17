//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 05/07/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {Employee} from '../../../model/models';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Logger} from '../../../srv/logger.service';
import {ShareService} from 'src/app/srv/share.service';


//-----------------------------------------------------------------------------
/**
 * CreateEmployeeComponent to create new employee
 */
//-----------------------------------------------------------------------------
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit
{
  //-------------------------------------------------------- Exposed properties
  public employee: Employee = new Employee();
  public submitted: boolean = false;
  public message:           string = "Are you sure?";
  public confirmButtonText: string = "Yes";
  public cancelButtonText:  string = "Cancel";

  //---------------------------------------------------------------------------
  /**
   *                             Initialization
   */
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  /**
   * Constructor.
   *
   * @param   srvS   Share service
   * @param   router router library
   * @param   log    logger service
   */
  //---------------------------------------------------------------------------
  constructor(private srvS: ShareService,
              private router: Router,
              private log:    Logger){}


  //---------------------------------------------------------------------------
  /**
   * Component initialization event handler.
   */
  //---------------------------------------------------------------------------
  public ngOnInit()
  {
    this.log.log("component intialized successfully");
  } // ngOnInit


  //----------------------------------------------------------------------------
  /**
   * Add new employee
   */
  //----------------------------------------------------------------------------
  public newEmployee(): void
  {
    this.submitted = false;
    this.employee = new Employee();
  } // newEmployee


  //----------------------------------------------------------------------------
  /**
   * Submit data for the next transaction
   */
  //----------------------------------------------------------------------------
  public onSubmit(): void
  {
    this.submitted = true;
    this.save();
  } // onSubmit


  //----------------------------------------------------------------------------
  /**
   * Save employee data
   */
  //----------------------------------------------------------------------------
  private save(): void
  {
    this.srvS.createEmployee(this.employee).subscribe(data =>
    {
      console.log(data)
      this.employee = new Employee();
      this.gotoList();
    });
  } // save


  //----------------------------------------------------------------------------
  /**
   * route to employee list
   */
  //----------------------------------------------------------------------------
  private gotoList(): void
  {
    this.router.navigate(['/employees']);
  } // gotoList

} // CreateEmployeeComponent

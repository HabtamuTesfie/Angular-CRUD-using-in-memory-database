//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 05/07/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../model/models';
import {ActivatedRoute, Router} from '@angular/router';
import {ShareService} from '../../../srv/share.service';


//-----------------------------------------------------------------------------
/**
 * UpdateEmployeeComponent to update employee
 */
//-----------------------------------------------------------------------------
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit 
{
  //-------------------------------------------------------- Exposed properties
  public id:       number;
  public employee: Employee;

  //---------------------------------------------------------------------------
  /**
   *                             Initialization
   */
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  /**
   * Constructor.
   *
   * @param   route  Activated Route
   * @param   router router
   * @param   srvS   Share service
   */
  //---------------------------------------------------------------------------
  constructor(private route:  ActivatedRoute,
              private router: Router,
              private srvS:   ShareService) {}


  //---------------------------------------------------------------------------
  /**
   * Component initialization event handler.
   */
  //---------------------------------------------------------------------------
  public ngOnInit(): void 
  {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];

    this.srvS.getEmployee(this.id).subscribe(data => 
    {
      this.employee = data;
    });
  } // ngOnInit

  public onSubmit(): void 
  {
    this.updateEmployee();
  } // onSubmit


  //---------------------------------------------------------------------------
  /**
   * route to employee list.
   */
  //---------------------------------------------------------------------------
  private gotoList(): void 
  {
    this.router.navigate(['/employees']);
  } // gotoList


  //---------------------------------------------------------------------------
  /**
   * To update employee data.
   */
  //---------------------------------------------------------------------------
  private updateEmployee():void 
  {
    this.srvS.updateEmployee(this.id, this.employee).subscribe(data => 
    {
      this.employee = new Employee();
      this.gotoList();
    });
  } // updateEmployee

} // UpdateEmployeeComponent

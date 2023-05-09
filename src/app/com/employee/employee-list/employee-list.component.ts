//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 05/07/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {Observable} from "rxjs";
import {Employee} from "../../../model/models";
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Router} from '@angular/router';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ShareService} from "src/app/srv/share.service";


//-----------------------------------------------------------------------------
/**
 * EmployeeListComponent to display list of employee
 */
//-----------------------------------------------------------------------------
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit
{
  //-------------------------------------------------------- Exposed properties
  public employees: Observable<Employee[]>;


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
   */
  //---------------------------------------------------------------------------
  constructor(private srvS:   ShareService,
              private router: Router) {}


   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   @ViewChild(MatSort, {static: true}) sort: MatSort;
   @ViewChild('filter',  {static: true}) filter: ElementRef;    

  //---------------------------------------------------------------------------
  /**
   * Component initialization event handler.
   */
  //---------------------------------------------------------------------------
  public ngOnInit(): void
  {
    this.reloadData();
  } // ngOnInit


  //----------------------------------------------------------------------------
  /**
   * Reload data after insertion,deletion or modifications of single data
   */
  //----------------------------------------------------------------------------
  private reloadData(): void 
  {
    this.employees = this.srvS.getEmployeesList();
  } // reloadData

  //----------------------------------------------------------------------------
  /**
   * To delete employee data.
   *
   * @param  id Employee id
   */
  //----------------------------------------------------------------------------
  public deleteEmployee(id: number): void 
  {
    this.srvS.deleteEmployee(id).subscribe(data => 
    {
      this.reloadData();
    });
  } // deleteEmployee


  //----------------------------------------------------------------------------
  /**
   * To display employee data detail.
   *
   * @param  id Employee id
   */
  //----------------------------------------------------------------------------
  public employeeDetails(id: number): void
  {
    this.router.navigate(['details', id]);
  } // employeeDetails


  //----------------------------------------------------------------------------
  /**
   * To update employee data.
   *
   * @param  id Employee id
   */
  //----------------------------------------------------------------------------
  public updateEmployee(id: number): void
  {
    this.router.navigate(['update', id]);
  } // updateEmployee

} // EmployeeListComponent

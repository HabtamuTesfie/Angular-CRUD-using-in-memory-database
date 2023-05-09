//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 30/08/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {Employee} from '../../../model/models';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ShareService} from '../../../srv/share.service';


//-----------------------------------------------------------------------------
/**
 * EmployeeDetailsComponent to view employee detail data
 */
//-----------------------------------------------------------------------------
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit
{
  //-------------------------------------------------------- Exposed properties
  public id:       number;
  public employee: Employee;
  public emp:      any;

  //---------------------------------------------------------------------------
  /**
   *                             Initialization
   */
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  /**
   * Constructor.
   *
   * @param   srvS  employee service
   * @param   router  router library
   */
  //---------------------------------------------------------------------------
  constructor(private route:  ActivatedRoute,
              private router: Router,
              private srvS: ShareService) {}


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
      this.emp = data;      
      this.emp.forEach((element:any) => 
      {
        if(element.id == this.id) 
        {
          this.employee = element;
        }
      });
    })
  } // ngOnInit


  //----------------------------------------------------------------------------
  /**
   * route to employee list
   */
  //----------------------------------------------------------------------------
  public list(): void
  {
    this.router.navigate(['employees']);
  } // list

} // EmployeeDetailsComponent

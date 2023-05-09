//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 30/08/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {Component} from '@angular/core';
import {Router} from '@angular/router';


//-----------------------------------------------------------------------------
/**
 * AppComponent main component of the app
 */
//-----------------------------------------------------------------------------
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  //-------------------------------------------------------- Exposed properties
  public title: string;
  //---------------------------------------------------------------------------
  /**
   *                             Initialization
   */
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  /**
   * Constructor.
   *
   * @param router Router
   */
  //---------------------------------------------------------------------------
  constructor( private router:  Router)
  {
    if (this.router.url.indexOf("employee") > 0)
    {  
      this.title = 'Xoka Employee Information Management System';
    }
    else
    {
      this.title = 'Xoka Candidate Information Management System';
    }
  }
}

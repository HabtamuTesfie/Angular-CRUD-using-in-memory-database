//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 05/07/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {Component} from '@angular/core';


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
   */
  //---------------------------------------------------------------------------
  // constructor()
  // {

  //   const menuElement: any = document.querySelector("#candidate-page");
  //   if(menuElement)
  //   {
  //     menuElement.addEventListener('click', ()=>
  //     {
  //       this.title = 'Xoka Candidate Information Management System';
  //     });
      
  //   }
  // }

  // ngAfterViewInit():void
  // {

  //   const menuElement: any = document.querySelector("#candidate-page");
  //   setTimeout(()=>
  //   {

  //     if(menuElement)
  //     {
  //       menuElement.addEventListener('click', ()=>
  //       {
  //         this.title = 'Xoka Candidate Information Management System';
  //       },1000);
        
  //     }
  //   })
  // }
} // AppComponent

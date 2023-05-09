//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Candidate Information Management
 *       Date Created: 05/07/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {Injectable} from "@angular/core";


//-----------------------------------------------------------------------------
/**
 * Logger services
 */
//-----------------------------------------------------------------------------
@Injectable({  providedIn: 'root' })
export class Logger
{
  //----------------------------------------------------------------------------
  /**
   *                          Initialization/Termination
   */
  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------
  /**
   * Constructor.
   */
  //----------------------------------------------------------------------------
  constructor() {}


  //----------------------------------------------------------------------------
  /**
   * Logs console message.
   *
   * @param  message displayed message
   */
  //----------------------------------------------------------------------------
  public log(message: string): void
  {
    const timeString: string = new Date().toLocaleTimeString();

    if (timeString) console.log(message ,timeString);
  } // log


  //----------------------------------------------------------------------------
  /**
   * Logs error message.
   *
   * @param  message displayed error message
   */
  //----------------------------------------------------------------------------
  public error(message: string): void
  {
    console.error('ERROR:'+ message);
  } // error

} // Logger

//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Candidate Information Management
 *       Date Created: 05/07/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {Directive, ElementRef, HostListener} from '@angular/core';


//-----------------------------------------------------------------------------
/**
 * custom PhoneNumberDirective to validate candidate phone number
 */
//-----------------------------------------------------------------------------
@Directive({
  selector: '[phoneNumber]'
})
export class PhoneNumberDirective 
{
  //--------------------------------------------------------private data members
	private phoneRegEx = /^[0-9]+(x|X){0,1}[0-9]*?$/g;

  //---------------------------------------------------------------------------
  /**
   *                             Initialization
   */
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  /**
   * Constructor.
   *
   * @param el ElementRef
   */
  //---------------------------------------------------------------------------
	constructor(private el: ElementRef) {}

  //----------------------------------------------------------------------------
  /**
   * Restrict user only insert number
   */
  //----------------------------------------------------------------------------
	@HostListener('keydown', ['$event'])
	onKeyDown(event: KeyboardEvent) 
  {
    //---------------------------------------------Allow: home, end, left, right
		if ([8, 9, 13, 27, 46].indexOf(event.keyCode) !== -1 ||
			(event.keyCode >= 35 && event.keyCode <= 39)) return;
		
		this.validateRegEx(event);
	} // onKeyDown


   //----------------------------------------------------------------------------
   /**
    * Block past
    */
   //----------------------------------------------------------------------------
    @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) 
    {
      e.preventDefault();
    }
  

   //----------------------------------------------------------------------------
   /**
    * Block copy
    */
   //----------------------------------------------------------------------------
    @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) 
    {
      e.preventDefault();
    }
  
    //----------------------------------------------------------------------------
    /**
     * Block cut
     */
    //----------------------------------------------------------------------------
    @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) 
    {
      e.preventDefault();
    }


    //----------------------------------------------------------------------------
    /**
     * Validate user input
     */
    //----------------------------------------------------------------------------
	  private validateRegEx(event: KeyboardEvent): void
    {
	  	let current: string = this.el.nativeElement.value;
	  	let next: string    = current.concat(event.key);
  
	  	if (next && !String(next).match(this.phoneRegEx)) 
      {
	  		event.preventDefault();
	  	}
      if (current.length>9) event.preventDefault();

	  } // validateRegEx

} // PhoneNumberDirective

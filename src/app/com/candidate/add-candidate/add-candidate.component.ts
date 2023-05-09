//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Candidate Information Management
 *       Date Created: 05/07/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {Component, Inject} from '@angular/core';
import {Candidate} from '../../../model/models';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import {ShareService} from 'src/app/srv/share.service';


//-----------------------------------------------------------------------------
/**
 * AddCandidateComponent to create new candidate
 */
//-----------------------------------------------------------------------------
@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent 
{ 
  //---------------------------------------------------------------------------
  /**
   *                             Initialization
   */
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  /**
   * Constructor.
   *
   * @param   dialogRef   MatDialogRef
   * @param   data        Candidate object
   * @param   dataService DataSourceService
   */
  //---------------------------------------------------------------------------
  constructor(public dialogRef: MatDialogRef<AddCandidateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Candidate,
              public srvS: ShareService) 
  {
    this.data = new Candidate();
  }

  //------------------------------------------------Form control with validation            
  formControl = new FormControl('', 
  [
    Validators.required,
    Validators.email
  ]);
  

  //---------------------------------------------------------------------------
  /**
   * To get form validation error message.
   * 
   * @returns error message
   */
  //---------------------------------------------------------------------------
  public getErrorMessage(): string 
  {
    return this.formControl.hasError('required') ? 'Required field' :
    this.formControl.hasError('email') ? 'Not a valid email' :
    '';
  } // getErrorMessage

  //---------------------------------------------------------------------------
  /**
   * To close modal on no click.
   */
  //---------------------------------------------------------------------------
  public cancel(): void 
  {
    this.dialogRef.close();
  } // cancel
  
  
  //---------------------------------------------------------------------------
  /**
   * confirm additions of candidate data.
   */
  //---------------------------------------------------------------------------
  public addCandidate(): void 
  {
    this.srvS.addCandidate(this.data);
  } // addCandidate

} // AddCandidateComponent

//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 30/08/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {ShareService} from '../../../srv/share.service';
import {Candidate} from '../../../model/models';
import {FormControl, Validators} from '@angular/forms';


//-----------------------------------------------------------------------------
/**
 * UpdateCandidateComponent to modify or update or edit candidate
 */
//-----------------------------------------------------------------------------
@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent
{
  public sample: any; 
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
  constructor(public dialogRef: MatDialogRef<UpdateCandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Candidate, 
    public srvS: ShareService) 
  {

    this.sample = { endDate: this.data.birthDate };
  }

  

  //----------------------------------------------------------------------------
  /**
   * To close edit form modal
   */
  //----------------------------------------------------------------------------
  public cancel(): void 
  {
    this.dialogRef.close();
  } // cancel
  

  //----------------------------------------------------------------------------
  /**
   * Edit candidate Info
   */
  //----------------------------------------------------------------------------
  public edit(): void 
  {
    this.srvS.updateCandidate(this.data);
  } // edit

} // UpdateCandidateComponent

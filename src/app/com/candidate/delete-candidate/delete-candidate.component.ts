//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 30/08/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {Component, Inject} from '@angular/core';
import {Candidate} from '../../../model/models';
import {ShareService} from '../../../srv/share.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


//-----------------------------------------------------------------------------
/**
 * DeleteCandidateComponent to remove candidate
 */
//-----------------------------------------------------------------------------
@Component({
  selector: 'app-delete-candidate',
  templateUrl: './delete-candidate.component.html',
  styleUrls: ['./delete-candidate.component.css']
})
export class DeleteCandidateComponent 
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
  constructor(public dialogRef: MatDialogRef<DeleteCandidateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Candidate, 
              public srvS: ShareService) {}


  //----------------------------------------------------------------------------
  /**
   * To close delete modal
   */
  //----------------------------------------------------------------------------
  public cancel(): void 
  {
    this.dialogRef.close();
  } //cancel

} // DeleteCandidateComponent

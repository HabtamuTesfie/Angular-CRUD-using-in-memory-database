//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 30/08/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShareService} from 'src/app/srv/share.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {fromEvent} from 'rxjs';
import { DataSourceService } from 'src/app/srv/dataSource.service';
import { AddCandidateComponent } from '../add-candidate/add-candidate.component';
import { Candidate } from '../../../model/models';
import { UpdateCandidateComponent } from '../update-candidate/update-candidate.component';
import { DeleteCandidateComponent } from '../delete-candidate/delete-candidate.component';


//-----------------------------------------------------------------------------
/**
 * CandidateComponent to display list of candidates
 */
//-----------------------------------------------------------------------------
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit 
{
  //-------------------------------------------------------- Exposed properties
  public displayedColumns = ['id', 'firstName', 'lastName', 'gender', 'email', 'birthDate', 'expectedSalary', 'actions'];
  public index:  number;
  public id:     number;

  //--------------------------------------------------------Private data memebers
  private candidateData: Candidate;


  //---------------------------------------------------------------------------
  /**
   *                             Initialization
   */
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  /**
   * Constructor.
   *
   * @param   httpClient    HttpClient
   * @param   dialogService MatDialog
   * @param   dataService   DataSourceService
   */
  //---------------------------------------------------------------------------
  constructor(public httpClient:    HttpClient,
              public dialogService: MatDialog,
              public srvS:          ShareService,
              public srvDs:         DataSourceService) {}

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
    this.srvS.candidateData.subscribe(data => 
    {
      this.candidateData = data;
    });
    this.loadData();
  } // ngOnInit


  //---------------------------------------------------------------------------
  /**
   * To reload list of candiddate data.
   */
  //---------------------------------------------------------------------------
  public reload(): void
  {
    this.loadData();
  } // reload


  //---------------------------------------------------------------------------
  /**
   * To open candidate form.
   */
  //---------------------------------------------------------------------------
  public openAdCandidateForm(): void 
  {
    const dialogRef = this.dialogService.open(AddCandidateComponent, 
    {
      autoFocus: false,
      height:   '650px'
    });

    dialogRef.afterClosed().subscribe(result => 
    {
      if (result === 1) 
      {
        this.srvS.dataChange.value.push(this.candidateData);
        this.refreshTable();
      }
    });
  } // openAdCandidateForm


  //---------------------------------------------------------------------------
  /**
   * To edit candidate data.
   */
  //---------------------------------------------------------------------------
  public editCandidateData(i:number,candidate: Candidate): void
  {
    const dialogRef = this.dialogService.open(UpdateCandidateComponent, 
    {
      data: candidate,
      autoFocus: false,
      height:   '650px'
    });

    dialogRef.afterClosed().subscribe(result => 
      {
      if (result === 1) 
      {
        this.srvS.dataChange.value.splice(i, 1);
        this.srvS.dataChange.value[i] = this.candidateData;
        this.refreshTable();
      }
    });
  } // editCandidateData


  //---------------------------------------------------------------------------
  /**
   * To delete candidate data.
   */
  //---------------------------------------------------------------------------
  deleteItem(i: number, candidate: Candidate) 
  {
    this.index = i;
    const dialogRef = this.dialogService.open(DeleteCandidateComponent, 
    {
      data: candidate
    });

    dialogRef.afterClosed().subscribe(result => 
      {
      if (result === 1) 
      {
        this.srvS.dataChange.value.splice(i, 1);
        this.refreshTable();
      }
    });
  } // deleteItem


  //---------------------------------------------------------------------------
  /**
   * To refresh candidate list table.
   */
  //---------------------------------------------------------------------------
  private refreshTable() 
  {
    this.paginator._changePageSize(this.paginator.pageSize);
  } // refreshTable


  //---------------------------------------------------------------------------
  /**
   * To reload data when user keyup on filter.
   */
  //---------------------------------------------------------------------------
  private loadData(): void
  {
    this.srvS = new ShareService(this.httpClient);
    this.srvDs = new DataSourceService(this.srvS, this.paginator, this.sort);

    fromEvent(this.filter.nativeElement, 'keyup').subscribe(() => 
    {
      if (!this.srvDs) return;

      this.srvDs.filter = this.filter.nativeElement.value;
    });
  } // loadData

} // CandidateComponent

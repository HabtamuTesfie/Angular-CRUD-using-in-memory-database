//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 30/08/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {DataSource} from '@angular/cdk/collections';
import {Candidate} from '../model/models';
import {BehaviorSubject, Observable, map, merge} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Injectable} from '@angular/core';
import { ShareService } from './share.service';


//-----------------------------------------------------------------------------
/**
 * Data source services
 */
//-----------------------------------------------------------------------------
@Injectable({  providedIn: 'root' })
export class DataSourceService extends DataSource<Candidate> 
{
  //--------------------------------------------------------private data members
  private filterChange = new BehaviorSubject('');

  //----------------------------------------------------------exposed properties
  public filteredData: Candidate[] = [];
  public renderedData: Candidate[] = [];

  //----------------------------------------------------------------------------
  /**
   *                          Initialization/Termination
   */
  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------
  /**
   * Constructor.
   *
   * @param  srvEmp    Employee service
   * @param  paginator MatPaginator
   * @param  sort      MatSort
   */
  //----------------------------------------------------------------------------
  constructor(private srvS:      ShareService,
              private paginator: MatPaginator,
              private sort:      MatSort) 
  {
    super();

    this.filterChange.subscribe(() => this.paginator.pageIndex = 0);
  }


  //----------------------------------------------------------------------------
  /**
   * Getter method for filter change values.
   */
  //----------------------------------------------------------------------------
  get filter(): string 
  {
    return this.filterChange.value;
  } // filter


  //----------------------------------------------------------------------------
  /**
   * Setter method for filter change values.
   */
  //----------------------------------------------------------------------------
  set filter(filter: string) 
  {
    this.filterChange.next(filter);
  } // filter


  //----------------------------------------------------------------------------
  /**
   * Connect function called by the table to retrieve one stream containing 
   * the data to render.
   * 
   * @returns Observable that emits a new value when the data changes
   */
  //----------------------------------------------------------------------------
  public connect(): Observable<Candidate[]> 
  {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = 
    [
      this.srvS.dataChange,
      this.sort.sortChange,
      this.filterChange,
      this.paginator.page
    ];

    this.srvS.getAllCandidates();

    return merge(...displayDataChanges).pipe(map( () => 
    {
      // Filter data
      this.filteredData = this.srvS.data.slice().filter((candidate: Candidate) => 
      {
        const searchStr = (candidate.id + candidate.firstName + candidate.lastName + candidate.gender + candidate?.birthDate + candidate?.email + candidate?.expectedSalary).toLowerCase();

        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });
      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());
      // Grab the page's slice of the filtered sorted data.
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this.paginator.pageSize);

      return this.renderedData;
      }
    ));
  } // connect


  //----------------------------------------------------------------------------
  /*
   *                      DataSource abstract method Implementation
   */
  //----------------------------------------------------------------------------
  disconnect() {} // disconnect


  //----------------------------------------------------------------------------
  /**
   * To sort candidat data.
   *
   * @param  data Candidate object
   * @return sorted copy of the database data.
   */
  //----------------------------------------------------------------------------
  sortData(data: Candidate[]): Candidate[] 
  {
    if (!this.sort.active || this.sort.direction === '') return data;

    return data.sort((a, b) => 
    {
      let propertyA: number | string | Date = '';
      let propertyB: number | string | Date = '';

      switch (this.sort.active) 
      {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'firstName': [propertyA, propertyB] = [a.firstName, b.firstName]; break;
        case 'lastName': [propertyA, propertyB] = [a.lastName, b.lastName]; break;
        case 'gender': [propertyA, propertyB] = [a.gender, b.gender]; break;
        case 'email': [propertyA, propertyB] = [a.email, b.email]; break;
        case 'birthDate': [propertyA, propertyB] = [a.birthDate, b.birthDate]; break;
        case 'expectedSalary': [propertyA, propertyB] = [a.expectedSalary, b.expectedSalary]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this.sort.direction === 'asc' ? 1 : -1);
    });
  } // sortData

} // DataSourceService

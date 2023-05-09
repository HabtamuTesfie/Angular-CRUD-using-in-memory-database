//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Candidate Information Management
 *       Date Created: 05/07/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Employee, Candidate} from '../model/models';


//-----------------------------------------------------------------------------
/**
 * Employee services
 */
//-----------------------------------------------------------------------------
@Injectable({  providedIn: 'root' })
export class ShareService
{
  //--------------------------------------------------------private data members
  private readonly employeeUrl  = 'api/employee/';
  private readonly candidateUrl = 'api/candidate/';
  
  //----------------------------------------------------------exposed properties
  public  dataChange:   BehaviorSubject<Candidate[]> = new BehaviorSubject<Candidate[]>([]);
  public candidateData = new BehaviorSubject<any>({});
  //----------------------------------------------------------------------------
  /**
   *                          Initialization/Termination
   */
  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------
  /**
   * Constructor.
   *
   * @param  http   Http client
   */
  //----------------------------------------------------------------------------
  constructor(private http: HttpClient) {}


  //----------------------------------------------------------------------------
  /**
   * To get single employee data.
   *
   * @param  id Employee id
   * @return
   */
  //----------------------------------------------------------------------------
  public getEmployee(id: number): Observable<Employee>
  {
    return this.http.get<Employee>(`${this.employeeUrl}/${id}`);
  } // getEmployee


  get data(): Candidate[] 
  {
    return this.dataChange.value;
  }


  //----------------------------------------------------------------------------
  /**
   * CRUD METHODS
   */
  //----------------------------------------------------------------------------
  public getAllCandidates(): void 
  {
    this.http.get<Candidate[]>(this.candidateUrl).subscribe(data => 
    {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => 
    {
      console.log (error.name + ' ' + error.message);
    });
  } // getAllCandidates


  //----------------------------------------------------------------------------
  /**
   * To add new candidate
   */
  //----------------------------------------------------------------------------
  public addCandidate(candidate: Candidate): void
  {
    this.candidateData.next(candidate);
    this.http.post(`${this.candidateUrl}`, candidate);
  } // addCandidate


  //----------------------------------------------------------------------------
  /**
   * update candidate data=>DEMO ONLY.
   */
  //----------------------------------------------------------------------------
  public updateCandidate(candidate: Candidate): void 
  {
    this.candidateData.next(candidate);
  } // updateCandidate


  //----------------------------------------------------------------------------
  /**
   * To add employee data.
   *
   * @param  employee  Employee data
   */
  //----------------------------------------------------------------------------
  createEmployee(employee: Object): Observable<Object>
  {
    return this.http.post(`${this.employeeUrl}`, employee);
  } // createEmployee


  //----------------------------------------------------------------------------
  /**
   * To update employee data.
   *
   * @param  id  Employee id
   * @param  value  modified employee data
   */
  //----------------------------------------------------------------------------
  updateEmployee(id: number, value: any): Observable<Object>
  {
    return this.http.put(`${this.employeeUrl}/${id}`, value);
  } // updateEmployee


  //----------------------------------------------------------------------------
  /**
   * To delete employee data.
   *
   * @param  id  Employee id
   */
  //----------------------------------------------------------------------------
  deleteCandidate(id: number): Observable<any>
  {
    return this.http.delete(`${this.employeeUrl}/${id}`, { responseType: 'text' });
  } // deleteEmployee


  //----------------------------------------------------------------------------
  /**
   * To delete employee data.
   *
   * @param  id  Employee id
   */
  //----------------------------------------------------------------------------
  deleteEmployee(id: number): Observable<any>
  {
    return this.http.delete(`${this.employeeUrl}/${id}`, { responseType: 'text' });
  } // deleteEmployee


  //----------------------------------------------------------------------------
  /**
   * To get all employee data.
   *
   * @return Employee observable
   */
  //----------------------------------------------------------------------------
  getEmployeesList(): Observable<any>
  {
    return this.http.get(`${this.employeeUrl}`);
  } // getEmployeesList

} // ShareService

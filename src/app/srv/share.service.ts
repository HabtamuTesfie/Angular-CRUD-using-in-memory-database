//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 30/08/2023
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

  // getDialogData()
  // {
  //   console.log("+++++++++++++++++++++++++++++++++++++++++++++");
  //   console.log(this.candidateData)
  //   console.log("+++++++++++++++++++++++++++++++++++++++++++++");
  //   debugger
  //   return this.candidateData;
  // }

  /** CRUD METHODS */
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
  }

  // DEMO ONLY, you can find working methods below
  public addCandidate(candidate: Candidate): void
  {
    this.candidateData.next(candidate);
    this.http.post(`${this.candidateUrl}`, candidate);
  }


  //----------------------------------------------------------------------------
  /**
   * update candidate data=>DEMO ONLY.
   */
  //----------------------------------------------------------------------------
  public updateCandidate(candidate: Candidate): void 
  {
    // this.dataChange.next(candidate)
    this.candidateData.next(candidate);
  } // updateCandidate


  //----------------------------------------------------------------------------
  /**
   * To add employee data.
   *
   * @param  employee  Employee data
   * @return
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
   * @return
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
   * @return
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
   * @return
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
   * @param  id  Employee id
   * @return
   */
  //----------------------------------------------------------------------------
  getEmployeesList(): Observable<any>
  {
    return this.http.get(`${this.employeeUrl}`);
  } // getEmployeesList

  // ADD, POST METHOD
  addItem(candidate: Candidate): void 
  {
    this.http.post(this.candidateUrl, candidate).subscribe(data => 
    {
      this.candidateData.next(candidate);
      console.log('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => 
      {
      console.log('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(candidate: Candidate): void 
     {
       this.http.put(this.candidateUrl + candidate.id, candidate).subscribe(data => 
       {
         this.candidateData.next(candidate);
         console.log('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => 
      {
        console.log('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void 
  {
    this.http.delete(this.candidateUrl + id).subscribe(data => 
    {
      console.log('Successfully deleted', 3000);
    },
    (err: HttpErrorResponse) => 
    {
     console.log('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
   });
  }

} // ShareService

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
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Employee, Department, Candidate } from '../model/models';


//-----------------------------------------------------------------------------
/**
 * DataService services
 */
//-----------------------------------------------------------------------------
@Injectable({providedIn: 'root'})
export class DataService implements InMemoryDbService
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
   * To create db object.
   *
   * @return
   */
  //----------------------------------------------------------------------------
  createDb()
  {
    const employee: Employee[] =
    [
      {id: 1, firstName: 'merid', lastName: "adihanom",email: 'adhan@gmail.com',active: false},
      {id: 2, firstName: 'nahom', lastName: "adihanom",email: 'adhan@gmail.com',active: false},
      {id: 3, firstName: 'bilal', lastName: "graba", email: 'bilal@gmail.com', active: true},
      {id: 4, firstName: 'Seaman', lastName: "Cap",  email: 'test@gmail.com',active: true},
      {id: 5, firstName: 'nahom', lastName: "adihanom",email: 'adhan@gmail.com',active: false},
      {id: 6, firstName: 'bilal', lastName: "graba", email: 'bilal@gmail.com', active: true},
      {id: 7, firstName: 'Seaman', lastName: "Cap",  email: 'test@gmail.com',active: true},
      {id: 8, firstName: 'nahom', lastName: "adihanom",email: 'adhan@gmail.com',active: false},
      {id: 9, firstName: 'bilal', lastName: "graba", email: 'bilal@gmail.com', active: true},
      {id: 10, firstName: 'Seaman', lastName: "Cap",  email: 'test@gmail.com',active: true},
      {id: 11, firstName: 'nahom', lastName: "adihanom",email: 'adhan@gmail.com',active: false},
      {id: 12, firstName: 'bilal', lastName: "graba", email: 'bilal@gmail.com', active: true},
      {id: 13, firstName: 'astede', lastName: "mebria",  email: 'test@gmail.com',active: true},
      {id: 14, firstName: 'girma', lastName: "molla",email: 'geta@gmail.com',active: false},
      {id: 15, firstName: 'seyoum', lastName: "haile", email: 'haile@gmail.com', active: true}
    ];

    const department: Department[] = 
    [
      {id: 1, name: 'Software'},
      {id: 2, name: 'Electrical'},
      {id: 3, name: 'Mechanical'},
      {id: 4, name: 'Health'},
      {id: 5, name: 'Social'},
      {id: 6, name: 'Hardware'},
      {id: 7, name: 'Computational'},
      {id: 8, name: 'other'},
    ]

    const candidate: Candidate[] =
    [
      {id: 1, firstName: 'henock', lastName: 'mekuant',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr',phone: '0912006323'},
      {id: 2, firstName: 'belete', lastName: 'mebrtau',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr' ,phone: '0935456776'},
      {id: 3, firstName: 'chale', lastName: 'dagallo',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr' ,phone: '09345678'},
      {id: 4, firstName: 'helen', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr' ,phone: '0945678998'},
      {id: 5, firstName: 'mekilit', lastName: 'gelimo',gender: 'female', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr' ,phone: '0981234345'},
      {id: 6, firstName: 'merimawyt', lastName: 'dida',gender: 'female', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr' ,phone: '0967899087'},
      {id: 7, firstName: 'selam', lastName: 'tola',gender: 'female', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr' ,phone: '0934567890'},
    ]

    return {employee, department,candidate};
  } // createDb

} // DataService

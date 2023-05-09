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
      {id: 1, firstName: 'henock', lastName: 'mekuant',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      {id: 2, firstName: 'belete', lastName: 'mebrtau',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      {id: 3, firstName: 'chale', lastName: 'dagallo',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      {id: 4, firstName: 'helen', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      {id: 5, firstName: 'mekilit', lastName: 'gelimo',gender: 'female', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      {id: 6, firstName: 'merimawyt', lastName: 'dida',gender: 'female', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      {id: 7, firstName: 'selam', lastName: 'tola',gender: 'female', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 8, firstName: 'messert', lastName: 'messaye',gender: 'female', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 9, firstName: 'helen', lastName: 'getachew',gender: 'female', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 10, firstName: 'tedy', lastName: 'haile',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 11, firstName: 'haymi', lastName: 'ronaldo',gender: 'female', email: 'female@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 12, firstName: 'gidiown', lastName: 'pual',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 13, firstName: 'jhon', lastName: 'de',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 14, firstName: 'peter', lastName: 'tes',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 15, firstName: 'fistum', lastName: 'lal',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 16, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 17, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 18, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 19, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 20, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 21, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 22, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 23, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 24, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 25, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 26, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 27, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 28, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 29, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 30, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 31, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 32, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 33, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 34, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 35, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 36, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 37, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 38, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 39, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
      // {id: 40, firstName: 'henock', lastName: 'meles',gender: 'male', email: 'henock@gmail.com', birthDate: '06/05/1998', expectedSalary: '20000 birr'},
    ]

    return {employee, department,candidate};
  } // createDb

} // DataService

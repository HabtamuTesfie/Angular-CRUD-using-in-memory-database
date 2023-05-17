//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 12/07/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {HttpClientModule} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';
import {ShareService} from 'src/app/srv/share.service';

describe('EmployeeService', () => 
{
  beforeEach(() => TestBed.configureTestingModule
  ({
    imports: [HttpClientModule]
  }));

  
  it('should be created', () => 
  {
    const service: ShareService = TestBed.inject(ShareService);

    expect(service).toBeTruthy();
  });
});

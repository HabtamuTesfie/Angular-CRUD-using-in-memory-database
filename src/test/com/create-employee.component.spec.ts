//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 12/07/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {CreateEmployeeComponent} from 'src/app/com/employee/create-employee/create-employee.component';
import {CommonTestModule} from '../app-common-testing.module';


describe('CreateEmployeeComponent', () => 
{
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  beforeEach(async(() => 
  {
    TestBed.configureTestingModule
    ({
      imports: [CommonTestModule,HttpClientModule,RouterTestingModule],
      declarations: [ CreateEmployeeComponent ]
    })
    .compileComponents();
  }));


  beforeEach(() => 
  {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => 
  {
    expect(component).toBeTruthy();
  });
});

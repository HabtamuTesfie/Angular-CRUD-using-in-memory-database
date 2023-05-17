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
import {BrowserModule} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {UpdateEmployeeComponent} from 'src/app/com/employee/update-employee/update-employee.component';
import {CommonTestModule} from '../app-common-testing.module';

describe('UpdateEmployeeComponent', () => 
{
  let component: UpdateEmployeeComponent;
  let fixture: ComponentFixture<UpdateEmployeeComponent>;

  beforeEach(async(() => 
  {
    TestBed.configureTestingModule
    ({
      imports: [CommonTestModule,HttpClientModule,BrowserModule,RouterTestingModule],
      declarations: [UpdateEmployeeComponent]
    })
    .compileComponents();
  }));


  beforeEach(() => 
  {
    fixture = TestBed.createComponent(UpdateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => 
  {
    expect(component).toBeTruthy();
  });
});

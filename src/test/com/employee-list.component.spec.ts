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
import {MatDialogModule} from '@angular/material/dialog';
import {OverlayModule} from '@angular/cdk/overlay';
import {RouterTestingModule} from '@angular/router/testing';
import {EmployeeListComponent} from 'src/app/com/employee/employee-list/employee-list.component';
import {CommonTestModule} from '../app-common-testing.module';

describe('EmployeeListComponent', () => 
{
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async(() => 
  {
    TestBed.configureTestingModule
    ({
      imports: 
      [
        CommonTestModule,
        HttpClientModule,
        BrowserModule,
        MatDialogModule,
        RouterTestingModule,
        OverlayModule
      ],
      declarations: [EmployeeListComponent]
    })
    .compileComponents();
  }));


  beforeEach(() => 
  {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

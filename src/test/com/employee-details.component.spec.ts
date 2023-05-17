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
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeDetailsComponent} from 'src/app/com/employee/employee-details/employee-details.component';
import {CommonTestModule} from '../app-common-testing.module';


describe('EmployeeDetailsComponent', () => 
{
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

  beforeEach(async(() => 
  {
    TestBed.configureTestingModule({
      imports: 
      [
        CommonTestModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [EmployeeDetailsComponent]
    })
    .compileComponents();
  }));


  beforeEach(() => 
  {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => 
  {
    expect(component).toBeTruthy();
  });
});

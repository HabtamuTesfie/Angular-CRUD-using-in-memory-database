import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeComponent } from '../app/com/employee/create-employee/create-employee.component';
import { CommonTestModule } from './app-common-testing.module';

describe('CreateEmployeeComponent', () => 
{
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  beforeEach(async(() => 
  {
    TestBed.configureTestingModule
    ({
      imports: [CommonTestModule],
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

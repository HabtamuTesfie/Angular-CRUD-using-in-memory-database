//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 12/07/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AddCandidateComponent} from '../app/com/candidate/add-candidate/add-candidate.component';
import {CommonTestModule} from './app-common-testing.module';


describe('AddCandidateComponent', () => 
{
  let component: AddCandidateComponent;
  let fixture:   ComponentFixture<AddCandidateComponent>;

  beforeEach(async () => 
  {
    await TestBed.configureTestingModule
    ({
      imports: [CommonTestModule],
      declarations: [AddCandidateComponent],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => 
  {
    fixture = TestBed.createComponent(AddCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => 
  {
    expect(component).toBeTruthy();
  });
});

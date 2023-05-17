import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateComponent } from '../app/com/candidate/candidate-list/candidate.component';
import { CommonTestModule } from './app-common-testing.module';

describe('CandidateComponent', () => 
{
  let component: CandidateComponent;
  let fixture: ComponentFixture<CandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule
    ({
      imports: [CommonTestModule],
      declarations: [ CandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => 
  {
    fixture = TestBed.createComponent(CandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => 
  {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCandidateComponent } from '../app/com/candidate/update-candidate/update-candidate.component';
import { CommonTestModule } from './app-common-testing.module';

describe('UpdateCandidateComponent', () => {
  let component: UpdateCandidateComponent;
  let fixture: ComponentFixture<UpdateCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonTestModule],
      declarations: [ UpdateCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

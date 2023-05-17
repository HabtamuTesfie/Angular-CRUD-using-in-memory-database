import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCandidateComponent } from '../app/com/candidate/delete-candidate/delete-candidate.component';
import { CommonTestModule } from './app-common-testing.module';

describe('DeleteCandidateComponent', () => {
  let component: DeleteCandidateComponent;
  let fixture: ComponentFixture<DeleteCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonTestModule],
      declarations: [ DeleteCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

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
import {AddCandidateComponent} from '../../app/com/candidate/add-candidate/add-candidate.component';
import {CommonTestModule} from '../app-common-testing.module';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {OverlayModule} from '@angular/cdk/overlay';
import {FormsModule} from '@angular/forms';


describe('AddCandidateComponent', () => 
{
  let component: AddCandidateComponent;
  let fixture:   ComponentFixture<AddCandidateComponent>;

  beforeEach(async () => 
  {
    await TestBed.configureTestingModule
    ({
      imports: 
      [
        CommonTestModule,
        HttpClientModule,
        FormsModule,
        BrowserModule,
        MatDialogModule,
        OverlayModule
      ],
      declarations: [AddCandidateComponent],
      providers: 
      [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ]
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

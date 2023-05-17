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
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {OverlayModule} from '@angular/cdk/overlay';
import {FormsModule} from '@angular/forms';
import {UpdateCandidateComponent} from 'src/app/com/candidate/update-candidate/update-candidate.component';
import {CommonTestModule} from '../app-common-testing.module';


describe('UpdateCandidateComponent', () => 
{
  let component: UpdateCandidateComponent;
  let fixture: ComponentFixture<UpdateCandidateComponent>;

  beforeEach(async () => 
  {
    await TestBed.configureTestingModule
    ({
      imports: 
      [
        CommonTestModule,
        HttpClientModule,
        BrowserModule,
        FormsModule,
        MatDialogModule,
        OverlayModule
      ],
      declarations: [UpdateCandidateComponent],
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
    fixture = TestBed.createComponent(UpdateCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => 
  {
    expect(component).toBeTruthy();
  });
});

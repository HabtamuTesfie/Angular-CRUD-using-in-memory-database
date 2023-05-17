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
import {DeleteCandidateComponent} from 'src/app/com/candidate/delete-candidate/delete-candidate.component';
import {CommonTestModule} from '../app-common-testing.module';

describe('DeleteCandidateComponent', () => 
{
  let component: DeleteCandidateComponent;
  let fixture: ComponentFixture<DeleteCandidateComponent>;

  beforeEach(async () => 
  {
    await TestBed.configureTestingModule
    ({
      imports: 
      [
        CommonTestModule,
        HttpClientModule,
        BrowserModule,
        MatDialogModule,
        OverlayModule
      ],
      declarations: [DeleteCandidateComponent],
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
    fixture = TestBed.createComponent(DeleteCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => 
  {
    expect(component).toBeTruthy();
  });
});

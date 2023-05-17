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
import {DataSourceService} from 'src/app/srv/dataSource.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatDialogModule} from '@angular/material/dialog';
import {CandidateComponent} from 'src/app/com/candidate/candidate-list/candidate.component';
import {ShareService} from 'src/app/srv/share.service';
import {CommonTestModule} from '../app-common-testing.module';

describe('CandidateComponent', () => 
{
  let component: CandidateComponent;
  let fixture: ComponentFixture<CandidateComponent>;

  let srvDs:      DataSourceService;
  let srvS:       ShareService;
  let paginator:  MatPaginator;
  let sort:       MatSort;
  let httpClient: HttpClient;

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
      declarations: [ CandidateComponent ],
      providers: [MatPaginator,MatSort]
    })
    .compileComponents();
  });


  beforeEach(() => 
  {
    fixture = TestBed.createComponent(CandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    srvDs      = TestBed.inject(DataSourceService);
    srvS       = TestBed.inject(ShareService);
    paginator  = TestBed.inject(MatPaginator);
    sort       = TestBed.inject(MatSort);
    httpClient = TestBed.inject(HttpClient);
  });

  
  it('should create', () => 
  {
    expect(component).toBeTruthy();
  });
});

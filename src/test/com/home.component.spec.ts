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
import { HomeComponent } from 'src/app/com/home/home.component';

describe('HomeComponent', () => 
{
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => 
  {
    await TestBed.configureTestingModule
    ({
      declarations: [HomeComponent]
    })
    .compileComponents();
  });


  beforeEach(() => 
  {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => 
  {
    expect(component).toBeTruthy();
  });
});

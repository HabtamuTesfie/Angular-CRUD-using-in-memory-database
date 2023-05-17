//-----------------------------------------------------------------------------
/*
 *   Application Name: Xoka - Employee Management
 *       Date Created: 12/07/2023
 *           Compiler: TypeScript
 *
 * Developer: Habtamu Tesfie
 */
//-----------------------------------------------------------------------------
import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonTestModule} from '../app-common-testing.module';
import {AppComponent} from 'src/app/app.component';


xdescribe('AppComponent', () => 
{
  beforeEach(async(() => 
  {
    TestBed.configureTestingModule
    ({
      imports: 
      [
        RouterTestingModule,
        CommonTestModule
      ],
      declarations: 
      [
        AppComponent
      ],
    }).compileComponents();
  }));


  it('should create the app', () => 
  {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'candidate information management system'`, () => 
  {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('candidate information management system');
  });


  it('should render title in a h1 tag', () => 
  {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to candidate information management system!');
  });
});

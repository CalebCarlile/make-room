import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MkrAppComponent } from './mkr-app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MkrAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MkrAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'make-room'`, () => {
    const fixture = TestBed.createComponent(MkrAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('make-room');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MkrAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to make-room!');
  });
});

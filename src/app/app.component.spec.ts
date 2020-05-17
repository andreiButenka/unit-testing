import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppTestingModule } from './app.module.testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule(AppTestingModule).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unit-tesing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('unit-tesing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('unit-tesing app is running!');
  });
});

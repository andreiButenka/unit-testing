import { BoldDirective } from './bold.directive';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div appBold>
                  text
             </div>`
})
export class TestComponent {}

describe('BoldDirective', () => {
  let testComponent: TestComponent;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, BoldDirective ],
    });

    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;

  });

  it('should create an instance', () => {
    const directive = fixture.debugElement.query(By.directive(BoldDirective));
    expect(directive).toBeTruthy();
  });

  it('should make text bold', () => {
    const div = fixture.debugElement.nativeElement.querySelector('div');
    expect(div.style.fontWeight).toBe('bold');
  });
});

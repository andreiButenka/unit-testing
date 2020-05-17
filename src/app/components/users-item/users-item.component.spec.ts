import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersItemComponent } from './users-item.component';
import { AppTestingModule } from 'src/app/app.module.testing';

describe('UsersItemComponent', () => {
  let component: UsersItemComponent;
  let fixture: ComponentFixture<UsersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(AppTestingModule)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

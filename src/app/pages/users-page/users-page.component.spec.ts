import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageComponent } from './users-page.component';
import { AppTestingModule } from 'src/app/app.module.testing';
import { usersServiceMock } from 'src/app/services/users.service.mock';

describe('UsersPageComponent', () => {
  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(AppTestingModule)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call userService getUsers method oninit', () => {
    component.ngOnInit();
    expect(usersServiceMock.getUsers).toHaveBeenCalled();
  });
});

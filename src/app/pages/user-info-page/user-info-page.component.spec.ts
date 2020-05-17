import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoPageComponent } from './user-info-page.component';
import { AppTestingModule } from 'src/app/app.module.testing';
import { usersServiceMock } from 'src/app/services/users.service.mock';

describe('UserInfoPageComponent', () => {
  let component: UserInfoPageComponent;
  let fixture: ComponentFixture<UserInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(AppTestingModule)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call userService getSingleUser method oninit', () => {
    component.ngOnInit();
    expect(usersServiceMock.getSingleUser).toHaveBeenCalled();
  });
});

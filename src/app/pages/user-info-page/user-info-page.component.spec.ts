import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoPageComponent } from './user-info-page.component';
import { usersServiceMock } from 'src/app/services/users.service.mock.spec';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from 'src/app/services/users.service';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersItemComponent } from 'src/app/components/users-item/users-item.component';
import { By } from '@angular/platform-browser';

describe('UserInfoPageComponent', () => {
  let component: UserInfoPageComponent;
  let fixture: ComponentFixture<UserInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        UsersItemComponent,
        UserInfoPageComponent,
      ],
      providers: [{
        provide: UsersService,
        useValue: usersServiceMock
      }],
    })
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

  it('should redirect to users list page', () => {
    const href = fixture.debugElement.query(By.css('.return')).nativeElement
    .getAttribute('href');
    expect(href).toEqual('/users');
  });
});

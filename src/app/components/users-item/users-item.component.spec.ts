import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersItemComponent } from './users-item.component';
import { Component, ViewChild } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

const mockUser: IUser = {
  avatar: 'input-avatar',
  email: 'input-email',
  first_name: 'input-first',
  id: 1,
  last_name: 'input-last',
};

@Component({
  selector: `app-host-component`,
  template: `<app-users-item [info]="value"></app-users-item>`
})
class TestHostComponent {
  @ViewChild(UsersItemComponent, { static: false })
  public usersItemComponent: UsersItemComponent;
  public value: IUser = mockUser;
}

xdescribe('UsersItemComponent', () => {
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersItemComponent,
        TestHostComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  it('should get input info value', () => {
    expect(hostComponent.usersItemComponent.info).toEqual(mockUser);
  });
});

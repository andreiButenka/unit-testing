import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { UsersPageComponent } from './users-page.component';
import { AppTestingModule } from 'src/app/app.module.testing.spec';
import { UsersService } from 'src/app/services/users.service';
import { of, EMPTY } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsersPageComponent', () => {
  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;
  let userService: UsersService;
  let spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        UsersPageComponent,
      ],
      providers: [UsersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPageComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('User\'s list');
  });

  it('should call userService getUsers method oninit', (() => {
    spyOn(userService, 'getUsers').and.returnValue(of({ data: []}));
    component.ngOnInit();

    expect(userService.getUsers).toHaveBeenCalled();
  }));
});

import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { takeUntil, map } from 'rxjs/operators';
import { IUsersList } from 'src/app/interfaces/users-list';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  public users$: Observable<IUsersList>;

  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.users$ = this.usersService.getUsers().pipe(map((response) => response.data), takeUntil(this.destroy$));
  }
}

import { Component, OnInit } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { ReplaySubject, Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss']
})
export class UserInfoPageComponent implements OnInit {

  public user$: Observable<IUser>;
  public id: string;

  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  constructor(public usersService: UsersService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.user$ = this.usersService.getSingleUser(this.id).pipe(map((response) => response.data), takeUntil(this.destroy$));
  }

}

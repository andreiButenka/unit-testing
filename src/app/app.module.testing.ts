import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersItemComponent } from './components/users-item/users-item.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { BoldDirective } from './directives/bold.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { UsersService } from './services/users.service';
import { usersServiceMock } from './services/users.service.mock';

export const AppTestingModule = {
  imports: [
    CommonModule,
    RouterTestingModule,
    RouterTestingModule,
    HttpClientTestingModule,
  ],
  declarations: [AppComponent,
    UsersPageComponent,
    UsersItemComponent,
    UserInfoPageComponent,
    BoldDirective,
    UppercasePipe],
  providers: [{
    provide: UsersService,
    useValue: usersServiceMock,
  }],
};

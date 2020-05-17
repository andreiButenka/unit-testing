import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersItemComponent } from './components/users-item/users-item.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { BoldDirective } from './directives/bold.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    UsersItemComponent,
    UserInfoPageComponent,
    BoldDirective,
    UppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

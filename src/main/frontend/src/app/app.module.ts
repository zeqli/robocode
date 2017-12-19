import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule} from "./app-routing.module";
import { RobocodeModule} from "./robocode/robocode.module";
import { FormsModule} from "@angular/forms";
import { HttpModule} from "@angular/http";
import { RouterModule} from "@angular/router";
import {RobocodeService} from "./robocode/robocode.service";
import { AlertComponent } from './shared/alert/alert.component';
import { RegisterComponent } from './register/register.component';
import {AlertService} from "./shared/alert/alert.service";
import {AuthGuard} from "./shared/guards/auth.guard";
import {AuthenticationService} from "./shared/authentication.service";
import {UserService} from "./shared/user.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./shared/jwt-interceptor";
import {LoginComponent} from "./authentication/login/login.component";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {GlobalEventsManagerService} from "./shared/global-events-manager.service";
import { WelcomeComponent } from './shared/welcome/welcome.component';
import {UserInfoService} from "./shared/userinfo.service";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AlertComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    WelcomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    RobocodeModule
  ],
  providers: [
    GlobalEventsManagerService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    RobocodeService,
    UserInfoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

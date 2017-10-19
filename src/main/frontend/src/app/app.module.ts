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

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    HttpModule,
    AppRoutingModule,
    RobocodeModule
  ],
  providers: [RobocodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

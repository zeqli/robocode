import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RobocodeComponent} from "./robocode/robocode.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {BattleComponent} from "./robocode/battle/battle.component";
import {EditorComponent} from "./robocode/editor/editor.component";
import {CreateComponent} from "./robocode/create/create.component";
import {NewRobotComponent} from "./robocode/editor/new-robot/new-robot.component";
import {LegacyRobotComponent} from "./robocode/editor/legacy-robot/legacy-robot.component";
import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {HomeComponent} from "./home/home.component";
import {WelcomeComponent} from "./shared/welcome/welcome.component";


const appRoutes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'robocode', component: RobocodeComponent, canActivate: [AuthGuard] },
  { path: 'robocode/create', component: CreateComponent, canActivate: [AuthGuard]  },
  { path: 'robocode/edit', component: EditorComponent, canActivate: [AuthGuard]  },
  { path: 'robocode/edit/:id', component: LegacyRobotComponent, canActivate: [AuthGuard]  },
  { path: 'robocode/edit/new/:package/:robotName', component: NewRobotComponent, canActivate: [AuthGuard] },
  { path: 'robocode/battle', component: BattleComponent, canActivate: [AuthGuard]  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  // { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

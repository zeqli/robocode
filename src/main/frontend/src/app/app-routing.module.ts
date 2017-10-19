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


const appRoutes: Routes = [
  { path: 'robocode', component: RobocodeComponent },
  { path: 'robocode/create', component: CreateComponent },
  { path: 'robocode/edit/', component: EditorComponent },
  { path: 'robocode/edit/:id', component: LegacyRobotComponent },
  { path: 'robocode/edit/new/:package/:robotName', component: NewRobotComponent },
  { path: 'robocode/battle', component: BattleComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
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

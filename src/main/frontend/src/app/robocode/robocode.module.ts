import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditorComponent } from './editor/editor.component';
import { BattleComponent } from './battle/battle.component';
import { RobocodeComponent} from "./robocode.component";
import { FormsModule} from "@angular/forms";
import { CodemirrorModule} from "ng2-codemirror";
import { NewRobotComponent } from './editor/new-robot/new-robot.component';
import { LegacyRobotComponent } from './editor/legacy-robot/legacy-robot.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CodemirrorModule
  ],
  declarations: [
    RobocodeComponent,
    CreateComponent,
    EditorComponent,
    BattleComponent,
    NewRobotComponent,
    LegacyRobotComponent
  ]
})
export class RobocodeModule { }

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RobocodeService} from "../robocode.service";
import {Domain, Robot, RobotModel, RobotViewModel, SimpleRobot} from "../robot.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import * as _ from 'underscore';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EditorComponent implements OnInit {

  allRobots: Robot[];

  userOptions: string[];
  selectedUsers: string;

  packageOptions: string[];
  selectedPackage: string;

  robotOptions: Robot[];
  selectedRobots: Robot;


  constructor(
    private robocodeService: RobocodeService,
    private router: Router
  ) {
    this.allRobots = [];


    this.userOptions = [];
    this.selectedUsers = "";

    this.packageOptions = [];
    this.selectedPackage = "";

    this.robotOptions = [];
    this.selectedRobots = null;
  }

  ngOnInit() {
    this.robocodeService.getAllRobots().subscribe(data => {
      this.allRobots = data;

      let userOptionsUnique = [];
      this.allRobots.forEach(robot => {
        userOptionsUnique.push(robot.userId);
      });
      userOptionsUnique = _.uniq(userOptionsUnique);
      this.userOptions = userOptionsUnique;
    });

  }

  userChanges(newUsers) {
    console.log(newUsers);

    let packageOptionsRaw = [];
    this.allRobots.forEach(robot => {
      if (newUsers == robot.userId) {
        packageOptionsRaw.push(robot.packageId);
      }
    });

    let packageOptionsUnique = _.uniq(packageOptionsRaw);
    this.packageOptions = packageOptionsUnique;

  }

  packageChange(newObj) {
    console.log(newObj);

    this.robotOptions = _.filter(this.allRobots, (r) => {
      if (this.selectedUsers == r.userId && this.selectedPackage == r.packageId) {
        return true;
      } else {
        return false;
      }
    });
  }


  robotChange(newRobot) {
    console.log(newRobot);
    console.log(this.robotOptions);

  }



  onSubmit() {

    this.router.navigate(["robocode/edit", this.selectedRobots.id]);
  }
}

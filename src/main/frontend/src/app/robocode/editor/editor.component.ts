import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RobocodeService} from "../robocode.service";
import {Domain, Robot, RobotModel, RobotViewModel, SimpleRobot} from "../robot.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import * as _ from 'underscore';
import {User} from "../../shared/models/user";
import {UserInfoService} from "../../shared/userinfo.service";
import {Constant} from "../../shared/constant";

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


  hasPermission: boolean = true;

  hasRobotRead: boolean = false;

  currentUser: User;


  constructor(
    private robocodeService: RobocodeService,
    private router: Router,

    private userInfoService: UserInfoService
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
    this.currentUser = this.userInfoService.getCurrentUser();

    if (localStorage.getItem(Constant.ACCESS)) {
      let access = JSON.parse(localStorage.getItem(Constant.ACCESS));
      access.forEach(ac => {
        if (ac.name.toUpperCase() == 'Robot_Read'.toUpperCase()) {
          this.hasRobotRead = true;
        }
      })
    } else{
      console.log("Missing access on editor ")
    }

    if (!this.hasPermission) {
      this.router.navigate(['/dashboard']);
      return;
    }


    this.robocodeService.getAllRobots().subscribe(data => {
      this.allRobots = data;

      let userOptionsUnique = [];
      this.allRobots.forEach(robot => {
        if ((robot.userId.toUpperCase() == this.currentUser.username.toUpperCase()
            && robot.groupId == this.currentUser.token.group.id) || this.hasRobotRead) {
          userOptionsUnique.push(robot.userId);
        }

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

        if ((robot.userId.toUpperCase() == this.currentUser.username.toUpperCase()
            && robot.groupId == this.currentUser.token.group.id) || this.hasRobotRead) {


          packageOptionsRaw.push(robot.packageId);
        }


      }
    });

    let packageOptionsUnique = _.uniq(packageOptionsRaw);
    this.packageOptions = packageOptionsUnique;

  }

  packageChange(newObj) {
    console.log(newObj);

    this.robotOptions = _.filter(this.allRobots, (r) => {
      if (this.selectedUsers == r.userId && this.selectedPackage == r.packageId && ((r.userId.toUpperCase() == this.currentUser.username.toUpperCase()
          && r.groupId == this.currentUser.token.group.id) || this.hasRobotRead)) {
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

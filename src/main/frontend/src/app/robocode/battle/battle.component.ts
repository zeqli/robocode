import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Robot} from "../robot.model";
import {RobocodeService} from "../robocode.service";
import * as _ from 'underscore';
import {User} from "../../shared/models/user";
import {UserInfoService} from "../../shared/userinfo.service";
import {Constant} from "../../shared/constant";

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  allRobots: Robot[];

  userOptions: string[];
  selectedUsers: string[];

  packageOptions: string[];
  selectedPackage: string[];

  robotOptions: Robot[];
  selectedRobots: Robot[];
  addedRobots: Robot[];

  hasPermission: boolean = true;

  hasRobotPlay: boolean = false;

  currentUser: User;

  constructor(
    private router: Router,
    private robocodeService: RobocodeService,
    private userInfoService: UserInfoService
  ) {
    this.allRobots = [];

    this.userOptions = [];
    this.selectedUsers =[];

    this.packageOptions = [];
    this.selectedPackage = [];

    this.robotOptions = [];
    this.selectedRobots = [];
    this.addedRobots = [];
  }

  ngOnInit() {

    this.currentUser = this.userInfoService.getCurrentUser();
    // Admin cannot play
    if (this.currentUser.username.toUpperCase() == 'ADMIN') {
      this.hasPermission = false;
    }


    if (localStorage.getItem(Constant.ACCESS)) {
      let access = JSON.parse(localStorage.getItem(Constant.ACCESS));
      access.forEach(ac => {
        if (ac.name.toUpperCase() == 'Robot_Play'.toUpperCase()) {
          this.hasRobotPlay = true;
        }
      })
    } else{
      console.log("Missing access on create ")
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
            && robot.groupId == this.currentUser.token.group.id) || this.hasRobotPlay) {
          userOptionsUnique.push(robot.userId);
        }

      });
      userOptionsUnique = _.uniq(userOptionsUnique);
      this.userOptions = userOptionsUnique;
    })
  }

  userChanges(newUsers) {
    console.log(newUsers);

    let packageOptionsRaw = [];
    this.allRobots.forEach(robot => {
      if (newUsers.indexOf(robot.userId) > -1 && ((robot.userId.toUpperCase() == this.currentUser.username.toUpperCase()
          && robot.groupId == this.currentUser.token.group.id) || this.hasRobotPlay)) {

        packageOptionsRaw.push(robot.packageId);
      }
    });

    let packageOptionsUnique = _.uniq(packageOptionsRaw);
    this.packageOptions = packageOptionsUnique;

  }

  packageChange(newObj) {
    console.log(newObj);

    this.robotOptions = _.filter(this.allRobots, (r) => {
      if (this.selectedUsers.indexOf(r.userId) > -1 && this.selectedPackage.indexOf(r.packageId) > -1 &&
        ((r.userId.toUpperCase() == this.currentUser.username.toUpperCase()
          && r.groupId == this.currentUser.token.group.id) || this.hasRobotPlay)) {
        return true;
      } else {
        return false;
      }
    })
  }

  selectedRobotsChange(newSelectedRobots) {
    console.log("Selected Robots Changed");
    console.log(newSelectedRobots)
  }

  startBattle() {
    let idList: number[] = [];
    this.addedRobots.forEach(robot => idList.push(robot.id) );
    this.robocodeService.playBattle(this.addedRobots).subscribe(res => {
      console.log(res);
      window.location.href = res.redirectUrl;
    });
    // 1. Read Robots From Database
    // 2. Read Compiled Code / If not yet compiled, discard and notify
    // 3. Package them into jar
  }

  /**
   * Add robot to final selection
   */
  addToChosen() {
    this.addedRobots = this.addedRobots.concat(this.selectedRobots);
  }
}

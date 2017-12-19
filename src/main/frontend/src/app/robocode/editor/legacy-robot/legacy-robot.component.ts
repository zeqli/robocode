import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Robot, RobotModel, SimpleRobot} from "../../robot.model";
import {RobocodeService} from "../../robocode.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserInfoService} from "../../../shared/userinfo.service";
import {Constant} from "../../../shared/constant";
import {User} from "../../../shared/models/user";

@Component({
  selector: 'app-legacy-robot',
  templateUrl: './legacy-robot.component.html',
  styleUrls: ['./legacy-robot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LegacyRobotComponent implements OnInit {

  /**
   * Codemirror Editor setting
   */
  config;
  content;

  robot: Robot;

  id: string;
  robotId: string;

  responseMessage: string;

  isSubmit: boolean = false;

  currentUser: User;

  hasRobotUpdate: boolean = false;

  constructor(
    private robocodeService: RobocodeService,
    private route: ActivatedRoute,
    private userInfoService: UserInfoService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.currentUser = this.userInfoService.getCurrentUser();

    if (localStorage.getItem(Constant.ACCESS)) {
      let access = JSON.parse(localStorage.getItem(Constant.ACCESS));
      access.forEach(ac => {
        if (ac.name.toUpperCase() == 'Robot_Update'.toUpperCase()) {
          this.hasRobotUpdate = true;
        }
      })
    } else{
      console.log("Missing access on editor ")
    }



    this.config = {
      lineNumbers: true,
      mode: 'text/x-java',
      matchBrackets: true,
      viewportMargin: Infinity
    };

    // if (this.robot != null) {
    //   this.content = this.robocodeService.generateRobotStub(this.robot.packageName, this.robot.robotName);
    // }


    this.id = this.route.snapshot.paramMap.get('id');

    this.robocodeService.getRobotById(this.id).subscribe(data => {
      this.robot = new Robot(data);


      if (!this.hasRobotUpdate || !((this.robot.userId.toUpperCase() == this.currentUser.username.toUpperCase()
          && this.robot.groupId == this.currentUser.token.group.id))) {
        this.router.navigate(['/dashboard']);
        return;
      }

      this.content = this.robot.robotSrcCode;
    });


  }


  saveRobot() {

    this.robot.robotSrcCode = this.content;
    this.responseMessage = "";
    this.robocodeService.saveLegacyRobot(this.robot).subscribe(res => {
      this.responseMessage = res.response;
    });
  }


  compileRobot() {
    this.responseMessage = "";
    this.robocodeService.compileRobot(this.robot).subscribe(res => {
      this.responseMessage = res.response;
    });

  }



}

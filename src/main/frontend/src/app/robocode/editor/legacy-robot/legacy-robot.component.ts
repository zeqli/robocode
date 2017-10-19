import { Component, OnInit } from '@angular/core';
import {Robot, RobotModel, SimpleRobot} from "../../robot.model";
import {RobocodeService} from "../../robocode.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-legacy-robot',
  templateUrl: './legacy-robot.component.html',
  styleUrls: ['./legacy-robot.component.css']
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


  constructor(
    private robocodeService: RobocodeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
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
    });


    this.content = this.robot.robotSrcCode;
  }


  saveRobot() {
    this.isSubmit = true;

    this.robot.robotSrcCode = this.content;

    this.robocodeService.saveLegacyRobot(this.robot).subscribe(res => {
      this.responseMessage = res;
    });
  }



}

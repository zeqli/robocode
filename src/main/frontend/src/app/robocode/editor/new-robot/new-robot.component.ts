import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RobotModel, SimpleRobot} from "../../robot.model";
import {RobocodeService} from "../../robocode.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-new-robot',
  templateUrl: './new-robot.component.html',
  styleUrls: ['./new-robot.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NewRobotComponent implements OnInit {



  /**
   * Codemirror Editor setting
   */
  config;
  content;

  robot: RobotModel;

  packageId: string;
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

    this.robot = this.robocodeService.robot;
    // if (this.robot != null) {
    //   this.content = this.robocodeService.generateRobotStub(this.robot.packageName, this.robot.robotName);
    // }


    this.packageId = this.route.snapshot.paramMap.get('package');
    this.robotId = this.route.snapshot.paramMap.get('robotName');

    this.content = this.robocodeService.generateRobotStub(this.packageId, this.robotId);
  }


  saveRobot() {
    this.isSubmit = true;

    let newRobot = new SimpleRobot();
    newRobot.packageId = this.packageId;
    newRobot.access = 'Y';
    newRobot.robotId = this.robotId;
    newRobot.robotSrcCode = this.content;

    this.robocodeService.saveNewRobot(newRobot).subscribe(res => {
      this.responseMessage = res.response;
    });
  }
}

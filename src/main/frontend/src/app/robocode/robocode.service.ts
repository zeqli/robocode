import { Injectable} from "@angular/core";
import { Http} from "@angular/http";
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Robot, RobotModel, SimpleRobot} from "./robot.model";
import {capitalize} from "../utils/StringUtil";

@Injectable()
export class RobocodeService {

  private _robot: RobotModel;

  get robot(): RobotModel{
    return this._robot;
  }

  set robot(robot: RobotModel) {
    this._robot = robot;
  }

  private baseUrl: string = "api/v1/robocode/";

  constructor(private http: Http){}

  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'users')
      .map(res => res.json());

  }

  getRobotDomainInfo(): Observable<any> {
    return this.http.get(this.baseUrl + 'domain-info')
      .map(res => res.json());
  }

  saveNewRobot(newRobot: SimpleRobot): Observable<any> {
    return this.http.post(this.baseUrl + 'robot/new/save', newRobot)
      .map(res => res.json());
  }

  saveLegacyRobot(robot: Robot): Observable<any> {
    return this.http.post(this.baseUrl + 'robot/save', robot)
      .map(res => res.json());
  }

  getRobotById(id): Observable<any> {
    return this.http.get(this.baseUrl + 'robot/' + id)
      .map(res => res.json());
  }

  getAllRobots(): Observable<any> {
    return this.http.get(this.baseUrl + 'robots/all')
      .map(res => res.json());
  }


  playBattle(robotList: Robot[]) :Observable<any> {
    return this.http.post(this.baseUrl + 'battle/init', robotList)
      .map(res => res.json())
  }


  generateRobotStub(packageName: string, robotName: string){
    robotName = capitalize(robotName);
    return `
package ${packageName};

import robocode.*;
import robocode.HitByBulletEvent;
import robocode.Robot;
import robocode.ScannedRobotEvent;
//import java.awt.Color;

// API help: http://robocode.sourceforge.net/docs/robocode/robocode/Robot.html

/**
 * ${robotName}- a robot by User
 */
public class ${robotName} extends Robot{
	/**
	 * run: ${robotName} default behavior
	 */
	public void run() {
	// Initialization of the robot should be put here

	// After trying out your robot, try uncommenting the import at the top,
	// and the next line:

	// setColors(Color.red,Color.blue,Color.green); // body,gun,radar

	// Robot main loop
		while(true) {
			// Replace the next 4 lines with any behavior you would like
			ahead(100);
			turnGunRight(360);
			back(100);
			turnGunRight(360);
		}
	}
	/**
	 * onScannedRobot: What to do when you see another robot
	 */
	public void onScannedRobot(ScannedRobotEvent e) {
		// Replace the next line with any behavior you would like
		fire(1);
	}

	/**
	 * onHitByBullet: What to do when you're hit by a bullet
	 */
	public void onHitByBullet(HitByBulletEvent e) {
		// Replace the next line with any behavior you would like
		back(10);
	}
	
	/**
	 * onHitWall: What to do when you hit a wall
	 */
	public void onHitWall(HitWallEvent e) {
		// Replace the next line with any behavior you would like
		back(20);
	}	
}
     `

  }


}

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RobocodeService} from "../robocode.service";
import {Domain, RobotModel, RobotViewModel, SimpleRobot} from "../robot.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import * as _ from 'underscore';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EditorComponent implements OnInit {

  users: string[];
  packages: string[];
  robotName: string;

  userName: string;
  packageName: string;

  viewModel: RobotViewModel;

  domainMap: {};


  constructor(
    private robocodeService: RobocodeService,
    private router: Router) { }

  ngOnInit() {


    this.robocodeService.getAllRobots().subscribe(data => {
      this.viewModel = new RobotViewModel();
      this.viewModel.domains = [];

      this.domainMap = {};
      data.forEach(value => {
        let userId = value.userID;
        let packageId: string = value.packageID;
        if (this.domainMap[userId] != null) {
          this.domainMap[userId].packages.push(packageId);
        } else {
          this.domainMap[userId] = {};
          this.domainMap[userId].name = userId;
          this.domainMap[userId].packages = [packageId];
        }
      });

      this.viewModel.domains = [];
      this.users = [];
      Object.keys(this.domainMap).forEach(key => {
        this.domainMap[key].packages = _.uniq(this.domainMap[key].packages);
        let domain = new Domain(this.domainMap[key].name, this.domainMap[key].packages);
        this.viewModel.domains.push(domain);
        this.users.push(this.domainMap[key].name);
      });
    });
  }

  /**
   *
   * @param {String} value
   */
  onSelectUser(value: string) {
    this.packages = this.domainMap[value].packages;
  }

  onSubmit() {
    this.router.navigate(["robocode/edit/new", this.packageName, this.robotName]);
  }
}

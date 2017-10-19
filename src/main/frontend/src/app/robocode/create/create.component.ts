import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import 'codemirror/mode/clike/clike';
import {RobocodeService} from "../robocode.service";
import { Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Domain, RobotViewModel} from "../robot.model";
import * as _ from 'underscore';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


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


    this.robocodeService.getRobotDomainInfo().subscribe(data => {
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


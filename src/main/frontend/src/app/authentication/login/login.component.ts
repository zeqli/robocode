import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../shared/alert/alert.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../shared/authentication.service";
import {GlobalEventsManagerService} from "../../shared/global-events-manager.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private globalEventsManager: GlobalEventsManagerService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          if (data == null) {
            this.alertService.error("Invalid username or password.")
            this.loading = false;
            return;
          }
          this.globalEventsManager.showNavBar(true);
          let redirectUrl = this.returnUrl == '/' ? '/dashboard' : this.returnUrl;
          this.router.navigate([redirectUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}

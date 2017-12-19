import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {GlobalEventsManagerService} from "../global-events-manager.service";
import {Constant} from "../constant";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private globalEventsManager: GlobalEventsManagerService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem(Constant.PRINCIPAL)) {
      // Logged in

      this.globalEventsManager.showNavBar(true);
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}

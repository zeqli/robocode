import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "./constant";
import {UserInfoService} from "./userinfo.service";

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient,
              private userInfoService: UserInfoService) { }

  login(username: string, password: string) {
    return this.http.post<any>('/api/authenticate', { username: username, password: password })
      .map(res => {
        if (!res || res.status != 'success') {
            return null;
        }

        // res = res.json();

        let user = res.data;

        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(Constant.PRINCIPAL, JSON.stringify(user));
        }


        // Retrieve access information.
        let rids: number[] = [];
        user.token.roles.forEach(role => rids.push(role.id));

        if (localStorage.getItem(Constant.ACCESS)) {
          return user;
        }
        this.userInfoService.getAccessByRole(rids).subscribe(res => {
          localStorage.setItem(Constant.ACCESS, JSON.stringify(res));
        });
        return user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(Constant.ACCESS);
    localStorage.removeItem(Constant.PRINCIPAL);
  }
}

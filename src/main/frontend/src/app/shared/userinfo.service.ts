import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./models/user";
import {Constant} from "./constant";

@Injectable()
export class UserInfoService {


  constructor(private http: HttpClient) { }

  getAccessByRole(rids: number[] = []) {
    let body = {};
    body['rids'] = rids;
    return this.http.post('/api/accesses', body);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(Constant.PRINCIPAL));
  }

}

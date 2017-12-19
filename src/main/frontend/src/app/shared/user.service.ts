import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./models/user";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>('/api/v1/users');
  }

  getById(id: number) {
    return this.http.get('/api/v1/users/' + id);
  }

  create(user: User) {
    return this.http.post('/api/v1/users', user);
  }

  update(user: User) {
    return this.http.put('/api/v1/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }
}

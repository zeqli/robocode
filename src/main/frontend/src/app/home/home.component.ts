import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user";
import {UserService} from "../shared/user.service";
import {Constant} from "../shared/constant";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem(Constant.PRINCIPAL));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = [];
      users.forEach(u => {
        let newUser: User = new User();
        newUser.id = u.id;
        newUser.username = u.userID;
        this.users.push((newUser));
      });

      this.users.sort((a, b) => {
        let nameA = a.username.toUpperCase(); // ignore upper and lowercase
        let nameB = b.username.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
    });
  }
}

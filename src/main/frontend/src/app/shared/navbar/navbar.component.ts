import { Component, OnInit } from '@angular/core';
import {GlobalEventsManagerService} from "../global-events-manager.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showNavBar: boolean = false;


  constructor(private globalEventsManager: GlobalEventsManagerService) {
    this.globalEventsManager.showNavBarEmitter.subscribe((mode)=>{

      this.showNavBar = mode;
    });

  }


}

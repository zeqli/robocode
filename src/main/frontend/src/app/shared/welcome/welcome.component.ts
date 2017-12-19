import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `

    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Robocode</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <!--<li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>-->
          <li>
            <a [routerLink]="['/login']"><span class="glyphicon glyphicon-log-out"></span> Login</a></li>
        </ul>
      </div>
    </nav>
    
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
  `
  ,
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  title = 'Robocode';

  constructor() { }

  ngOnInit() {
  }

}

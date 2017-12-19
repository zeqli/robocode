import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class GlobalEventsManagerService {


  private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showNavBarEmitter: Observable<boolean> = this._showNavBar.asObservable();

  constructor() {}

  showNavBar(ifShow: boolean) {
    this._showNavBar.next(ifShow);
  }

}

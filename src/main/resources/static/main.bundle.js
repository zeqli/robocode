webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__robocode_robocode_component__ = __webpack_require__("../../../../../src/app/robocode/robocode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__robocode_battle_battle_component__ = __webpack_require__("../../../../../src/app/robocode/battle/battle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__robocode_editor_editor_component__ = __webpack_require__("../../../../../src/app/robocode/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__robocode_create_create_component__ = __webpack_require__("../../../../../src/app/robocode/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__robocode_editor_new_robot_new_robot_component__ = __webpack_require__("../../../../../src/app/robocode/editor/new-robot/new-robot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__robocode_editor_legacy_robot_legacy_robot_component__ = __webpack_require__("../../../../../src/app/robocode/editor/legacy-robot/legacy-robot.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'robocode', component: __WEBPACK_IMPORTED_MODULE_3__robocode_robocode_component__["a" /* RobocodeComponent */] },
    { path: 'robocode/create', component: __WEBPACK_IMPORTED_MODULE_7__robocode_create_create_component__["a" /* CreateComponent */] },
    { path: 'robocode/edit/', component: __WEBPACK_IMPORTED_MODULE_6__robocode_editor_editor_component__["a" /* EditorComponent */] },
    { path: 'robocode/edit/:id', component: __WEBPACK_IMPORTED_MODULE_9__robocode_editor_legacy_robot_legacy_robot_component__["a" /* LegacyRobotComponent */] },
    { path: 'robocode/edit/new/:package/:robotName', component: __WEBPACK_IMPORTED_MODULE_8__robocode_editor_new_robot_new_robot_component__["a" /* NewRobotComponent */] },
    { path: 'robocode/battle', component: __WEBPACK_IMPORTED_MODULE_5__robocode_battle_battle_component__["a" /* BattleComponent */] },
    { path: 'page-not-found', component: __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: 'page-not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</div>\n\n<ul>\n  <li><a routerLink=\"/robocode\">Robocode Home</a></li>\n  <li><a routerLink=\"/robocode/create\">Create Robot</a></li>\n  <li><a routerLink=\"/robocode/edit\">Robot Editor</a></li>\n  <li><a routerLink=\"/robocode/battle\">Play Battle</a></li>\n</ul>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Robocode';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__robocode_robocode_module__ = __webpack_require__("../../../../../src/app/robocode/robocode.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__robocode_robocode_service__ = __webpack_require__("../../../../../src/app/robocode/robocode.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__robocode_robocode_module__["a" /* RobocodeModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__robocode_robocode_service__["a" /* RobocodeService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/battle/battle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/robocode/battle/battle.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"battle-panel\" class=\"container\">\n  <!-- Robots Selection Tab -->\n  <div class=\"row\">\n    <div id=\"lineup\">\n      <div>\n        <h1>Robots</h1>\n        <hr>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <br>\n          <table>\n            <tr>\n              <!-- User Options -->\n              <td width=\"250px\">\n                <label>User</label>\n                <select class=\"form-control\" multiple name=\"domain_name\" id=\"domain_name\"\n                        [(ngModel)]=\"selectedUsers\"\n                        (ngModelChange)=\"userChanges($event)\">\n                  <option *ngFor=\"let user of userOptions\" [value]=\"user\">{{user}}</option>\n                </select>\n              </td>\n\n              <!-- Package Options -->\n              <td width=\"250px\">\n                <label>Package</label>\n                <select class=\"form-control\" multiple name=\"package\" id=\"package\"\n                        [(ngModel)]=\"selectedPackage\"\n                        (ngModelChange)=\"packageChange($event)\">\n                  <option *ngFor=\"let package of packageOptions\" [value]=\"package\">{{package}}</option>\n                </select>\n              </td>\n\n\n              <!-- Robot Options -->\n              <td width=\"250px\">\n                <label>Robots</label>\n                <select class=\"form-control\" multiple name=\"displayed-robots\"\n                        [(ngModel)]=\"selectedRobots\">\n                  <option *ngFor=\"let r of robotOptions\" [value]=\"r\">{{r.robotId}}</option>\n                </select>\n\n              </td>\n              <td width=\"100px\" align=\"center\">\n                <button type=\"button\" (click)=\"addToChosen()\">Add</button>\n              </td>\n              <td width=\"250px\">\n                <label>Selected Robots</label>\n                <select class=\"form-control\" multiple name=\"selected-robots\"\n                        (ngModelChange)=\"selectedRobotsChange($event)\">\n                  <option *ngFor=\"let r of addedRobots\" [value]=\"r\">{{r.robotId}}</option>\n                </select>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n  <!-- Battle Properties Option Tab -->\n  <div class=\"row\">\n    <div id=\"rules\">\n      <div>\n        <h1>Rules</h1>\n        <hr>\n      </div>\n\n      <table>\n        <tr>\n          <td>\n            Number of Rounds: <br> (integer > 0)\n          </td>\n          <td>\n            <input type=\"text\" name=\"numRounds\" value=\"10\">\n          </td>\n        </tr>\n        <tr>\n          <td width=\"200px\">Gun Cooling Rate: <br> (>0 and <=0.7)</td>\n          <td>\n            <input type=\"text\" name=\"gunCool\" id=\"gunCool\" value=\"0.1\"></td>\n        </tr>\n        <tr>\n          <td>\n            Inactivity Time: <br> (integer >= 0)\n          </td>\n          <td><input type=\"text\" name=\"inactivity\" value=\"450\"></td>\n        </tr>\n        <tr>\n          <td>\n            Sentry Border Size: <br> (integer >= 50)\n          </td>\n          <td><input type=\"text\" name=\"sentryBorder\" id=\"sentryBorder\" value=\"100\"></td>\n        </tr>\n        <tr>\n          <td>\n            Hide Enemy Names:\n          </td>\n          <td><input type=\"checkbox\" name=\"enemy\" value=\"enemy\"></td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"container\">\n  <div id=\"page-wrapper\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h1 class=\"page-header\">\n          <i class=\"fa fa-play\"></i>\n          <button type=\"button\"\n                  [disabled]=\"addedRobots == null || addedRobots.length == 0\"\n                  name=\"battlebutton\" id=\"battlebutton\"\n                  (click)=\"startBattle()\">Play Battle\n          </button>\n        </h1>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/robocode/battle/battle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__robocode_service__ = __webpack_require__("../../../../../src/app/robocode/robocode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BattleComponent = (function () {
    function BattleComponent(router, robocodeService) {
        this.router = router;
        this.robocodeService = robocodeService;
        this.allRobots = [];
        this.userOptions = [];
        this.selectedUsers = [];
        this.packageOptions = [];
        this.selectedPackage = [];
        this.robotOptions = [];
        this.selectedRobots = [];
        this.addedRobots = [];
    }
    BattleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.robocodeService.getAllRobots().subscribe(function (data) {
            _this.allRobots = data;
            var userOptionsUnique = [];
            _this.allRobots.forEach(function (robot) {
                userOptionsUnique.push(robot.userId);
            });
            userOptionsUnique = __WEBPACK_IMPORTED_MODULE_3_underscore__["uniq"](userOptionsUnique);
            _this.userOptions = userOptionsUnique;
        });
    };
    BattleComponent.prototype.userChanges = function (newUsers) {
        console.log(newUsers);
        var packageOptionsRaw = [];
        this.allRobots.forEach(function (robot) {
            if (newUsers.indexOf(robot.userId) > -1) {
                packageOptionsRaw.push(robot.packageId);
            }
        });
        var packageOptionsUnique = __WEBPACK_IMPORTED_MODULE_3_underscore__["uniq"](packageOptionsRaw);
        this.packageOptions = packageOptionsUnique;
    };
    BattleComponent.prototype.packageChange = function (newObj) {
        var _this = this;
        console.log(newObj);
        this.robotOptions = __WEBPACK_IMPORTED_MODULE_3_underscore__["filter"](this.allRobots, function (r) {
            if (_this.selectedUsers.indexOf(r.userId) > -1 && _this.selectedPackage.indexOf(r.packageId) > -1) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    BattleComponent.prototype.selectedRobotsChange = function (newSelectedRobots) {
        console.log("Selected Robots Changed");
        console.log(newSelectedRobots);
    };
    BattleComponent.prototype.startBattle = function () {
        var idList = [];
        this.addedRobots.forEach(function (robot) { return idList.push(robot.id); });
        this.robocodeService.playBattle(this.addedRobots).subscribe(function (res) {
            console.log(res);
            window.location.href = res.redirectUrl;
        });
        // 1. Read Robots From Database
        // 2. Read Compiled Code / If not yet compiled, discard and notify
        // 3. Package them into jar
    };
    /**
     * Add robot to final selection
     */
    BattleComponent.prototype.addToChosen = function () {
        this.addedRobots = this.addedRobots.concat(this.selectedRobots);
    };
    return BattleComponent;
}());
BattleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-battle',
        template: __webpack_require__("../../../../../src/app/robocode/battle/battle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/robocode/battle/battle.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */]) === "function" && _b || Object])
], BattleComponent);

var _a, _b;
//# sourceMappingURL=battle.component.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/robocode/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>New Robot</h2>\n\n<form #robotForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"user-name\">Select User</label>\n    <select class=\"form-control\" id=\"user-name\" name=\"user-name\"\n            #selectUserElem\n            required\n            [(ngModel)]=\"userName\"\n            (change)=\"onSelectUser(selectUserElem.value)\">\n      <option value=\"\">Select User</option>\n      <option *ngFor=\"let user of users\" [value]=\"user\">{{user}}</option>\n    </select>\n  </div>\n\n\n  <div class=\"form-group\">\n    <label for=\"package-name\">Select Package</label>\n    <select class=\"form-control\" id=\"package-name\" name=\"package-name\"\n            required\n            #selectPackageElem\n            [(ngModel)]=\"packageName\">\n      <option value=\"\">Select Package</option>\n      <option *ngFor=\"let package of packages\" [value]=\"package\">{{package}}</option>\n    </select>\n  </div>\n\n\n  <div class=\"form-group\" >\n    <p>Enter Robot Name</p>\n    <p>Example: MyFirstRobot. Must not contain spaces.</p>\n    <label>Robot Name</label>\n    <input class=\"form-control\" type=\"text\"\n           name=\"robot_name\" placeholder=\"Please enter a robot name\"\n           required\n           [(ngModel)]=\"robotName\" >\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!robotForm.form.valid\">Next</button>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/robocode/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_codemirror_mode_clike_clike__ = __webpack_require__("../../../../codemirror/mode/clike/clike.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_codemirror_mode_clike_clike___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_codemirror_mode_clike_clike__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__robocode_service__ = __webpack_require__("../../../../../src/app/robocode/robocode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__robot_model__ = __webpack_require__("../../../../../src/app/robocode/robot.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateComponent = (function () {
    function CreateComponent(robocodeService, router) {
        this.robocodeService = robocodeService;
        this.router = router;
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.robocodeService.getRobotDomainInfo().subscribe(function (data) {
            _this.viewModel = new __WEBPACK_IMPORTED_MODULE_5__robot_model__["c" /* RobotViewModel */]();
            _this.viewModel.domains = [];
            _this.domainMap = {};
            data.forEach(function (value) {
                var userId = value.userID;
                var packageId = value.packageID;
                if (_this.domainMap[userId] != null) {
                    _this.domainMap[userId].packages.push(packageId);
                }
                else {
                    _this.domainMap[userId] = {};
                    _this.domainMap[userId].name = userId;
                    _this.domainMap[userId].packages = [packageId];
                }
            });
            _this.viewModel.domains = [];
            _this.users = [];
            Object.keys(_this.domainMap).forEach(function (key) {
                _this.domainMap[key].packages = __WEBPACK_IMPORTED_MODULE_6_underscore__["uniq"](_this.domainMap[key].packages);
                var domain = new __WEBPACK_IMPORTED_MODULE_5__robot_model__["a" /* Domain */](_this.domainMap[key].name, _this.domainMap[key].packages);
                _this.viewModel.domains.push(domain);
                _this.users.push(_this.domainMap[key].name);
            });
        });
    };
    /**
     *
     * @param {String} value
     */
    CreateComponent.prototype.onSelectUser = function (value) {
        this.packages = this.domainMap[value].packages;
    };
    CreateComponent.prototype.onSubmit = function () {
        this.router.navigate(["robocode/edit/new", this.packageName, this.robotName]);
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create',
        template: __webpack_require__("../../../../../src/app/robocode/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/robocode/create/create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CreateComponent);

var _a, _b;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CodeMirror  {\r\n  border: 1px solid #eee !important;\r\n  height: 100% !important;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/robocode/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>View and Edit Robot</h2>\n\n<form #robotForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"user-name\">Select User</label>\n    <select class=\"form-control\" id=\"user-name\" name=\"user-name\"\n            #selectUserElem\n            required\n            [(ngModel)]=\"userName\"\n            (change)=\"onSelectUser(selectUserElem.value)\">\n      <option value=\"\">Select User</option>\n      <option *ngFor=\"let user of users\" [value]=\"user\">{{user}}</option>\n    </select>\n  </div>\n\n\n  <div class=\"form-group\">\n    <label for=\"package-name\">Select Package</label>\n    <select class=\"form-control\" id=\"package-name\" name=\"package-name\"\n            required\n            #selectPackageElem\n            [(ngModel)]=\"packageName\">\n      <option value=\"\">Select Package</option>\n      <option *ngFor=\"let package of packages\" [value]=\"package\">{{package}}</option>\n    </select>\n  </div>\n\n\n  <div class=\"form-group\" >\n    <p>Enter Robot Name</p>\n    <p>Example: MyFirstRobot. Must not contain spaces.</p>\n    <label>Robot Name</label>\n    <input class=\"form-control\" type=\"text\"\n           name=\"robot_name\" placeholder=\"Please enter a robot name\"\n           required\n           [(ngModel)]=\"robotName\" >\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!robotForm.form.valid\">Next</button>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/robocode/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__robocode_service__ = __webpack_require__("../../../../../src/app/robocode/robocode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__robot_model__ = __webpack_require__("../../../../../src/app/robocode/robot.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditorComponent = (function () {
    function EditorComponent(robocodeService, router) {
        this.robocodeService = robocodeService;
        this.router = router;
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.robocodeService.getAllRobots().subscribe(function (data) {
            _this.viewModel = new __WEBPACK_IMPORTED_MODULE_2__robot_model__["c" /* RobotViewModel */]();
            _this.viewModel.domains = [];
            _this.domainMap = {};
            data.forEach(function (value) {
                var userId = value.userID;
                var packageId = value.packageID;
                if (_this.domainMap[userId] != null) {
                    _this.domainMap[userId].packages.push(packageId);
                }
                else {
                    _this.domainMap[userId] = {};
                    _this.domainMap[userId].name = userId;
                    _this.domainMap[userId].packages = [packageId];
                }
            });
            _this.viewModel.domains = [];
            _this.users = [];
            Object.keys(_this.domainMap).forEach(function (key) {
                _this.domainMap[key].packages = __WEBPACK_IMPORTED_MODULE_4_underscore__["uniq"](_this.domainMap[key].packages);
                var domain = new __WEBPACK_IMPORTED_MODULE_2__robot_model__["a" /* Domain */](_this.domainMap[key].name, _this.domainMap[key].packages);
                _this.viewModel.domains.push(domain);
                _this.users.push(_this.domainMap[key].name);
            });
        });
    };
    /**
     *
     * @param {String} value
     */
    EditorComponent.prototype.onSelectUser = function (value) {
        this.packages = this.domainMap[value].packages;
    };
    EditorComponent.prototype.onSubmit = function () {
        this.router.navigate(["robocode/edit/new", this.packageName, this.robotName]);
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/robocode/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/robocode/editor/editor.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__robocode_service__["a" /* RobocodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__robocode_service__["a" /* RobocodeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], EditorComponent);

var _a, _b;
//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/editor/legacy-robot/legacy-robot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/robocode/editor/legacy-robot/legacy-robot.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"form-group\">\n    <button type=\"button\" (click)=\"saveRobot()\" [disabled]=\"isSubmit\" >Save Robot</button>\n  </div>\n  <div>\n    <label>{{responseMessage}}</label>\n  </div>\n  <div>\n    <codemirror [(ngModel)]=\"content\" [config]=\"config\"></codemirror>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/robocode/editor/legacy-robot/legacy-robot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegacyRobotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__robot_model__ = __webpack_require__("../../../../../src/app/robocode/robot.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__robocode_service__ = __webpack_require__("../../../../../src/app/robocode/robocode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LegacyRobotComponent = (function () {
    function LegacyRobotComponent(robocodeService, route) {
        this.robocodeService = robocodeService;
        this.route = route;
        this.isSubmit = false;
    }
    LegacyRobotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = {
            lineNumbers: true,
            mode: 'text/x-java',
            matchBrackets: true,
            viewportMargin: Infinity
        };
        // if (this.robot != null) {
        //   this.content = this.robocodeService.generateRobotStub(this.robot.packageName, this.robot.robotName);
        // }
        this.id = this.route.snapshot.paramMap.get('id');
        this.robocodeService.getRobotById(this.id).subscribe(function (data) {
            _this.robot = new __WEBPACK_IMPORTED_MODULE_1__robot_model__["b" /* Robot */](data);
        });
        this.content = this.robot.robotSrcCode;
    };
    LegacyRobotComponent.prototype.saveRobot = function () {
        var _this = this;
        this.isSubmit = true;
        this.robot.robotSrcCode = this.content;
        this.robocodeService.saveLegacyRobot(this.robot).subscribe(function (res) {
            _this.responseMessage = res;
        });
    };
    return LegacyRobotComponent;
}());
LegacyRobotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-legacy-robot',
        template: __webpack_require__("../../../../../src/app/robocode/editor/legacy-robot/legacy-robot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/robocode/editor/legacy-robot/legacy-robot.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], LegacyRobotComponent);

var _a, _b;
//# sourceMappingURL=legacy-robot.component.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/editor/new-robot/new-robot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CodeMirror  {\r\n  border: 1px solid #eee !important;\r\n  height: 100% !important;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/robocode/editor/new-robot/new-robot.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"form-group\">\n    <button type=\"button\" (click)=\"saveRobot()\" [disabled]=\"isSubmit\" >Save Robot</button>\n  </div>\n  <div>\n    <label>{{responseMessage}}</label>\n  </div>\n  <div>\n    <codemirror [(ngModel)]=\"content\" [config]=\"config\"></codemirror>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/robocode/editor/new-robot/new-robot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRobotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__robot_model__ = __webpack_require__("../../../../../src/app/robocode/robot.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__robocode_service__ = __webpack_require__("../../../../../src/app/robocode/robocode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewRobotComponent = (function () {
    function NewRobotComponent(robocodeService, route) {
        this.robocodeService = robocodeService;
        this.route = route;
        this.isSubmit = false;
    }
    NewRobotComponent.prototype.ngOnInit = function () {
        this.config = {
            lineNumbers: true,
            mode: 'text/x-java',
            matchBrackets: true,
            viewportMargin: Infinity
        };
        this.robot = this.robocodeService.robot;
        // if (this.robot != null) {
        //   this.content = this.robocodeService.generateRobotStub(this.robot.packageName, this.robot.robotName);
        // }
        this.packageId = this.route.snapshot.paramMap.get('package');
        this.robotId = this.route.snapshot.paramMap.get('robotName');
        this.content = this.robocodeService.generateRobotStub(this.packageId, this.robotId);
    };
    NewRobotComponent.prototype.saveRobot = function () {
        var _this = this;
        this.isSubmit = true;
        var newRobot = new __WEBPACK_IMPORTED_MODULE_1__robot_model__["d" /* SimpleRobot */]();
        newRobot.packageId = this.packageId;
        newRobot.access = 'Y';
        newRobot.robotId = this.robotId;
        newRobot.robotSrcCode = this.content;
        this.robocodeService.saveNewRobot(newRobot).subscribe(function (res) {
            _this.responseMessage = res;
        });
    };
    return NewRobotComponent;
}());
NewRobotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-robot',
        template: __webpack_require__("../../../../../src/app/robocode/editor/new-robot/new-robot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/robocode/editor/new-robot/new-robot.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__robocode_service__["a" /* RobocodeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], NewRobotComponent);

var _a, _b;
//# sourceMappingURL=new-robot.component.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/robocode.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/robocode/robocode.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center\">\n  <div class=\"footer-above\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <!--  <div class=\"footer-col col-md-4\">-->\n        <h3>About Robocode</h3>\n        <p>\n          Robocode is a programming game where the goal is to code a robot\n          battle tank to compete against other robots in a battle arena. So\n          the name Robocode is a short for \"Robot code\". The player is the\n          programmer of the robot, who will have no direct influence on the\n          game. Instead, the player must write the AI of the robot telling\n          it how to behave and react on events occurring in the battle\n          arena. Battles are running in real-time and on-screen.\n        </p>\n        <!--  </div> -->\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-below\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">Copyright &copy; 2016</div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/robocode/robocode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RobocodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RobocodeComponent = (function () {
    function RobocodeComponent() {
    }
    RobocodeComponent.prototype.ngOnInit = function () {
    };
    return RobocodeComponent;
}());
RobocodeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-robocode',
        template: __webpack_require__("../../../../../src/app/robocode/robocode.component.html"),
        styles: [__webpack_require__("../../../../../src/app/robocode/robocode.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RobocodeComponent);

//# sourceMappingURL=robocode.component.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/robocode.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RobocodeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_create_component__ = __webpack_require__("../../../../../src/app/robocode/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_editor_component__ = __webpack_require__("../../../../../src/app/robocode/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__battle_battle_component__ = __webpack_require__("../../../../../src/app/robocode/battle/battle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__robocode_component__ = __webpack_require__("../../../../../src/app/robocode/robocode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_codemirror__ = __webpack_require__("../../../../ng2-codemirror/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_codemirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_codemirror__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editor_new_robot_new_robot_component__ = __webpack_require__("../../../../../src/app/robocode/editor/new-robot/new-robot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editor_legacy_robot_legacy_robot_component__ = __webpack_require__("../../../../../src/app/robocode/editor/legacy-robot/legacy-robot.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var RobocodeModule = (function () {
    function RobocodeModule() {
    }
    return RobocodeModule;
}());
RobocodeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_codemirror__["CodemirrorModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__robocode_component__["a" /* RobocodeComponent */], __WEBPACK_IMPORTED_MODULE_2__create_create_component__["a" /* CreateComponent */], __WEBPACK_IMPORTED_MODULE_3__editor_editor_component__["a" /* EditorComponent */], __WEBPACK_IMPORTED_MODULE_4__battle_battle_component__["a" /* BattleComponent */], __WEBPACK_IMPORTED_MODULE_8__editor_new_robot_new_robot_component__["a" /* NewRobotComponent */], __WEBPACK_IMPORTED_MODULE_9__editor_legacy_robot_legacy_robot_component__["a" /* LegacyRobotComponent */]]
    })
], RobocodeModule);

//# sourceMappingURL=robocode.module.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/robocode.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RobocodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_StringUtil__ = __webpack_require__("../../../../../src/app/utils/StringUtil.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RobocodeService = (function () {
    function RobocodeService(http) {
        this.http = http;
        this.baseUrl = "api/v1/robocode/";
    }
    Object.defineProperty(RobocodeService.prototype, "robot", {
        get: function () {
            return this._robot;
        },
        set: function (robot) {
            this._robot = robot;
        },
        enumerable: true,
        configurable: true
    });
    RobocodeService.prototype.getUsers = function () {
        return this.http.get(this.baseUrl + 'users')
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.getRobotDomainInfo = function () {
        return this.http.get(this.baseUrl + 'domain-info')
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.saveNewRobot = function (newRobot) {
        return this.http.post(this.baseUrl + 'robot/new/save', newRobot)
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.saveLegacyRobot = function (robot) {
        return this.http.post(this.baseUrl + 'robot/save', robot)
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.getRobotById = function (id) {
        return this.http.get(this.baseUrl + 'robot/' + id)
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.getAllRobots = function () {
        return this.http.get(this.baseUrl + 'robots/all')
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.playBattle = function (robotList) {
        return this.http.post(this.baseUrl + 'battle/init', robotList)
            .map(function (res) { return res.json(); });
    };
    RobocodeService.prototype.generateRobotStub = function (packageName, robotName) {
        robotName = Object(__WEBPACK_IMPORTED_MODULE_3__utils_StringUtil__["a" /* capitalize */])(robotName);
        return "\npackage " + packageName + ";\n\nimport robocode.*;\nimport robocode.HitByBulletEvent;\nimport robocode.Robot;\nimport robocode.ScannedRobotEvent;\n//import java.awt.Color;\n\n// API help: http://robocode.sourceforge.net/docs/robocode/robocode/Robot.html\n\n/**\n * " + robotName + "- a robot by User\n */\npublic class " + robotName + " extends Robot{\n\t/**\n\t * run: " + robotName + " default behavior\n\t */\n\tpublic void run() {\n\t// Initialization of the robot should be put here\n\n\t// After trying out your robot, try uncommenting the import at the top,\n\t// and the next line:\n\n\t// setColors(Color.red,Color.blue,Color.green); // body,gun,radar\n\n\t// Robot main loop\n\t\twhile(true) {\n\t\t\t// Replace the next 4 lines with any behavior you would like\n\t\t\tahead(100);\n\t\t\tturnGunRight(360);\n\t\t\tback(100);\n\t\t\tturnGunRight(360);\n\t\t}\n\t}\n\t/**\n\t * onScannedRobot: What to do when you see another robot\n\t */\n\tpublic void onScannedRobot(ScannedRobotEvent e) {\n\t\t// Replace the next line with any behavior you would like\n\t\tfire(1);\n\t}\n\n\t/**\n\t * onHitByBullet: What to do when you're hit by a bullet\n\t */\n\tpublic void onHitByBullet(HitByBulletEvent e) {\n\t\t// Replace the next line with any behavior you would like\n\t\tback(10);\n\t}\n\t\n\t/**\n\t * onHitWall: What to do when you hit a wall\n\t */\n\tpublic void onHitWall(HitWallEvent e) {\n\t\t// Replace the next line with any behavior you would like\n\t\tback(20);\n\t}\t\n}\n     ";
    };
    return RobocodeService;
}());
RobocodeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], RobocodeService);

var _a;
//# sourceMappingURL=robocode.service.js.map

/***/ }),

/***/ "../../../../../src/app/robocode/robot.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RobotModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RobotViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Domain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SimpleRobot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Robot; });
var RobotModel = (function () {
    function RobotModel(packageName, robotName) {
        this.packageName = packageName;
        this.robotName = robotName;
    }
    return RobotModel;
}());

var RobotViewModel = (function () {
    function RobotViewModel() {
    }
    return RobotViewModel;
}());

var Domain = (function () {
    function Domain(name, packages) {
        this.name = name;
        this.packages = packages;
    }
    return Domain;
}());

var SimpleRobot = (function () {
    function SimpleRobot() {
    }
    return SimpleRobot;
}());

var Robot = (function () {
    function Robot(param) {
        this.id = param.id;
        this.userId = param.userId;
        this.packageId = param.packageId;
        this.robotId = param.robotId;
        this.access = param.access;
        this.filePath = param.filePath;
        this.createdDate = param.createdDate;
        this.updatedDate = param.updatedDate;
        this.robotSrcCode = param.robotSrcCode;
    }
    return Robot;
}());

//# sourceMappingURL=robot.model.js.map

/***/ }),

/***/ "../../../../../src/app/utils/StringUtil.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
var capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
//# sourceMappingURL=StringUtil.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
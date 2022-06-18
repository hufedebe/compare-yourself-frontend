webpackJsonp([1,4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_signin_signin_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_signup_signup_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compare_compare_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_auth_guard_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__user_signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__user_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'compare', canActivate: [__WEBPACK_IMPORTED_MODULE_5__user_auth_guard_service__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_4__compare_compare_component__["a" /* CompareComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__user_auth_guard_service__["a" /* AuthGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_auth_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isAuthenticated = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authStatusChanged.subscribe(function (authenticated) {
            _this.isAuthenticated = authenticated;
            if (authenticated) {
                _this.router.navigate(['/compare']);
            }
            else {
                _this.router.navigate(['/']);
            }
        });
        this.authService.initAuth();
    };
    AppComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(173),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_signup_signup_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_signin_signin_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__compare_compare_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__compare_compare_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__compare_compare_input_compare_input_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__compare_compare_results_compare_results_component__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__user_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_6__user_signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_7__compare_compare_component__["a" /* CompareComponent */],
            __WEBPACK_IMPORTED_MODULE_11__compare_compare_input_compare_input_component__["a" /* CompareInputComponent */],
            __WEBPACK_IMPORTED_MODULE_12__compare_compare_results_compare_results_component__["a" /* CompareResultsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__user_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__compare_compare_service__["a" /* CompareService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compare_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompareInputComponent = (function () {
    function CompareInputComponent(compareService) {
        this.compareService = compareService;
        this.isLoading = false;
        this.couldNotLoadData = false;
    }
    CompareInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.compareService.dataIsLoading.subscribe(function (isLoading) { return _this.isLoading = isLoading; });
        this.compareService.dataLoadFailed.subscribe(function (didFail) {
            _this.couldNotLoadData = didFail;
            _this.isLoading = false;
        });
    };
    CompareInputComponent.prototype.onSubmit = function () {
        var data = {
            age: this.form.value.age,
            height: this.form.value.height,
            income: this.form.value.income
        };
        this.compareService.onStoreData(data);
    };
    CompareInputComponent.prototype.onFetchStoredData = function () {
        this.compareService.onRetrieveData(false);
    };
    return CompareInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('compareForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], CompareInputComponent.prototype, "form", void 0);
CompareInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-compare-input',
        template: __webpack_require__(174),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__compare_service__["a" /* CompareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__compare_service__["a" /* CompareService */]) === "function" && _b || Object])
], CompareInputComponent);

var _a, _b;
//# sourceMappingURL=compare-input.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compare_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompareResultsComponent = (function () {
    function CompareResultsComponent(compareService) {
        this.compareService = compareService;
        this.compareData = [];
        this.didFail = false;
        this.lowerIsBetter = false;
        this.filter = 'age';
    }
    CompareResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.compareService.userData;
        this.compareService.dataEdited.subscribe(function () { return _this.user = _this.compareService.userData; });
        this.compareService.dataLoaded.subscribe(function (data) {
            _this.compareData = data;
        });
        this.compareService.dataLoadFailed.subscribe(function (didFail) { return _this.didFail = didFail; });
    };
    CompareResultsComponent.prototype.onFilter = function (filter) {
        this.filter = filter;
    };
    CompareResultsComponent.prototype.onSelectLower = function (isBetter) {
        this.lowerIsBetter = isBetter;
    };
    CompareResultsComponent.prototype.getListGroupItemClass = function (item) {
        if (+item[this.filter] === +this.user[this.filter]) {
            return 'list-group-item-warning';
        }
        if (this.lowerIsBetter) {
            return this.user[this.filter] < item[this.filter] ? 'list-group-item-success' : 'list-group-item-danger';
        }
        else {
            return this.user[this.filter] > item[this.filter] ? 'list-group-item-success' : 'list-group-item-danger';
        }
    };
    CompareResultsComponent.prototype.onStartSetData = function () {
        this.compareService.dataEdited.next(false);
    };
    CompareResultsComponent.prototype.onGetResults = function () {
        this.compareService.onRetrieveData();
    };
    CompareResultsComponent.prototype.onClearData = function () {
        this.compareService.onDeleteData();
    };
    return CompareResultsComponent;
}());
CompareResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-compare-results',
        template: __webpack_require__(175),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__compare_service__["a" /* CompareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__compare_service__["a" /* CompareService */]) === "function" && _a || Object])
], CompareResultsComponent);

var _a;
//# sourceMappingURL=compare-results.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuthenticated = this.authService.isAuthenticated();
        return isAuthenticated;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 110:
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

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"/\">Compare Yourself!</a>\r\n    </div>\r\n    <div class=\"navbar-default\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li *ngIf=\"isAuthenticated\" routerLinkActive=\"active\"><a routerLink=\"/compare\">Compare</a></li>\r\n        <li *ngIf=\"isAuthenticated\" routerLinkActive=\"active\"><a (click)=\"onLogout()\" style=\"cursor: pointer;\">Logout</a></li>\r\n        <li *ngIf=\"!isAuthenticated\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"><a routerLink=\"/\">Sign In</a></li>\r\n        <li *ngIf=\"!isAuthenticated\" routerLinkActive=\"active\"><a routerLink=\"/signup\">Sign Up</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n    <h3>Set your Data</h3>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3\">\r\n    <form class=\"text-center\" (ngSubmit)=\"onSubmit()\" #compareForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"age\"\r\n          class=\"control-label\">Age</label>\r\n        <input\r\n          type=\"number\"\r\n          id=\"age\"\r\n          name=\"age\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"height\"\r\n          class=\"control-label\">Height (inch)</label>\r\n        <input\r\n          type=\"number\"\r\n          id=\"height\"\r\n          name=\"height\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"income\"\r\n          class=\"control-label\">Monthly Income (USD)</label>\r\n        <input\r\n          type=\"number\"\r\n          id=\"income\"\r\n          name=\"income\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"compareForm.invalid\">Submit</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n<hr>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n    <div class=\"alert alert-danger\" *ngIf=\"couldNotLoadData\">An error occurred, please try again or submit new data!</div>\r\n    <button class=\"btn btn-primary\" (click)=\"onFetchStoredData()\">I already stored data on the server!</button>\r\n    <div class=\"loader\" *ngIf=\"isLoading\">Loading...</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n    <h2>Your Results</h2>\r\n    <button class=\"btn btn-success\" (click)=\"onStartSetData()\">Set Data</button>\r\n    <button class=\"btn btn-danger\" (click)=\"onClearData()\">Clear Data on Server</button>\r\n    <button class=\"btn btn-primary\" (click)=\"onGetResults()\">Get Results</button>\r\n    <hr>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n    <h3>Select Filter</h3>\r\n    <div class=\"list-group\">\r\n      <a style=\"cursor: pointer;\" class=\"list-group-item\" (click)=\"onFilter('age')\" [ngClass]=\"{active: filter == 'age'}\">Your Age: {{ user.age }}</a>\r\n      <a style=\"cursor: pointer;\" class=\"list-group-item\" (click)=\"onFilter('height')\" [ngClass]=\"{active: filter == 'height'}\">Your Height: {{ user.height }}</a>\r\n      <a style=\"cursor: pointer;\" class=\"list-group-item\" (click)=\"onFilter('income')\" [ngClass]=\"{active: filter == 'income'}\">Your Income: {{ user.income }}</a>\r\n    </div>\r\n    <div>\r\n      <button class=\"btn\" [ngClass]=\"{'btn-default': !lowerIsBetter, 'btn-primary': lowerIsBetter}\" (click)=\"onSelectLower(true)\">Lower is better</button>\r\n      <button class=\"btn\" [ngClass]=\"{'btn-default': lowerIsBetter, 'btn-primary': !lowerIsBetter}\" (click)=\"onSelectLower(false)\">Higher is better</button>\r\n    </div>\r\n    <hr>\r\n    <div class=\"loader\" *ngIf=\"!compareData && !didFail\">Loading...</div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n        <div class=\"alert alert-danger\" *ngIf=\"didFail\">\r\n          An error occurred, please try again!\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\" *ngFor=\"let data of compareData\" [ngClass]=\"getListGroupItemClass(data)\">\r\n        Age: {{ data.age }} | Height: {{ data.height }} | Income: {{ data.income }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<app-compare-input *ngIf=\"doInput\"></app-compare-input>\r\n<app-compare-results *ngIf=\"!doInput\"></app-compare-results>\r\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"didFail\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n    <div class=\"alert alert-danger\">Something went wrong, please try again!</div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3\">\r\n    <form class=\"text-center jumbotron\" (ngSubmit)=\"onSubmit()\" #usrForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"username\"\r\n          class=\"control-label\">Username</label>\r\n        <input\r\n          type=\"text\"\r\n          id=\"username\"\r\n          name=\"username\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"password\"\r\n          class=\"control-label\">Password</label>\r\n        <input\r\n          type=\"password\"\r\n          id=\"password\"\r\n          name=\"password\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"usrForm.invalid\">Submit</button>\r\n    </form>\r\n    <div class=\"loader\" *ngIf=\"isLoading\"></div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"didFail\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n    <div class=\"alert alert-danger\">Something went wrong, please try again!</div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3\">\r\n    <form class=\"text-center jumbotron\" (ngSubmit)=\"onSubmit()\" #usrForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"username\"\r\n          class=\"control-label\">Username</label>\r\n        <input\r\n          type=\"text\"\r\n          id=\"username\"\r\n          name=\"username\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"email\"\r\n          class=\"control-label\">Mail</label>\r\n        <input\r\n          type=\"email\"\r\n          id=\"email\"\r\n          name=\"email\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required\r\n          email>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"password\"\r\n          class=\"control-label\">Password</label>\r\n        <input\r\n          type=\"password\"\r\n          id=\"password\"\r\n          name=\"password\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"confirmPassword\"\r\n          class=\"control-label\">Confirm Password</label>\r\n        <input\r\n          type=\"password\"\r\n          id=\"confirmPassword\"\r\n          name=\"confirmPassword\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <div *ngIf=\"usrForm.value.password !== usrForm.value.confirmPassword\">Passwords do not match!</div>\r\n      <button class=\"btn btn-primary\" type=\"submit\"\r\n              [disabled]=\"(usrForm.value.password !== usrForm.value.confirmPassword) || usrForm.invalid\">Submit\r\n      </button>\r\n    </form>\r\n    <div class=\"loader\" *ngIf=\"isLoading\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"!confirmUser\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3 text-center\">\r\n    <button class=\"btn btn-default\" (click)=\"onDoConfirm()\">Confirm User</button>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"confirmUser\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-6 cold-sm-offset-1 col-md-offset-3\">\r\n    <form #confirmForm=\"ngForm\" (ngSubmit)=\"onConfirm(confirmForm.value)\" class=\"jumbotron text-center\">\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"usrName\"\r\n          class=\"control-label\">Username</label>\r\n        <input\r\n          type=\"text\"\r\n          id=\"usrName\"\r\n          name=\"usrName\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label\r\n          for=\"validationCode\"\r\n          class=\"control-label\">Validation Code</label>\r\n        <input\r\n          type=\"text\"\r\n          id=\"validationCode\"\r\n          name=\"validationCode\"\r\n          ngModel\r\n          class=\"form-control text-center\"\r\n          required>\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"confirmForm.invalid\">Confirm your Account</button>\r\n    </form>\r\n    <div class=\"loader\" *ngIf=\"isLoading\"></div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.authIsLoading = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.authDidFail = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.authStatusChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    AuthService.prototype.signUp = function (username, email, password) {
        this.authIsLoading.next(true);
        var user = {
            username: username,
            email: email,
            password: password
        };
        var emailAttribute = {
            Name: 'email',
            Value: user.email
        };
        return;
    };
    AuthService.prototype.confirmUser = function (username, code) {
        this.authIsLoading.next(true);
        var userData = {
            Username: username,
        };
    };
    AuthService.prototype.signIn = function (username, password) {
        this.authIsLoading.next(true);
        var authData = {
            Username: username,
            Password: password
        };
        this.authStatusChanged.next(true);
        return;
    };
    AuthService.prototype.getAuthenticatedUser = function () {
    };
    AuthService.prototype.logout = function () {
        this.authStatusChanged.next(false);
    };
    AuthService.prototype.isAuthenticated = function () {
        var user = this.getAuthenticatedUser();
        var obs = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            if (!user) {
                observer.next(false);
            }
            else {
                observer.next(false);
            }
            observer.complete();
        });
        return obs;
    };
    AuthService.prototype.initAuth = function () {
        var _this = this;
        this.isAuthenticated().subscribe(function (auth) { return _this.authStatusChanged.next(auth); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(98);


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_auth_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompareService = (function () {
    function CompareService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.dataEdited = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.dataIsLoading = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.dataLoaded = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.dataLoadFailed = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    CompareService.prototype.onStoreData = function (data) {
        var _this = this;
        this.dataLoadFailed.next(false);
        this.dataIsLoading.next(true);
        this.dataEdited.next(false);
        this.userData = data;
        this.http.post('https://API_ID.execute-api.REGION.amazonaws.com/dev/', data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'XX' })
        })
            .subscribe(function (result) {
            _this.dataLoadFailed.next(false);
            _this.dataIsLoading.next(false);
            _this.dataEdited.next(true);
        }, function (error) {
            _this.dataIsLoading.next(false);
            _this.dataLoadFailed.next(true);
            _this.dataEdited.next(false);
        });
    };
    CompareService.prototype.onRetrieveData = function (all) {
        var _this = this;
        if (all === void 0) { all = true; }
        this.dataLoaded.next(null);
        this.dataLoadFailed.next(false);
        var queryParam = '';
        var urlParam = 'all';
        if (!all) {
            urlParam = 'single';
        }
        this.http.get('https://API_ID.execute-api.REGION.amazonaws.com/dev/' + urlParam + queryParam, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'XXX' })
        })
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            if (all) {
                _this.dataLoaded.next(data);
            }
            else {
                console.log(data);
                if (!data) {
                    _this.dataLoadFailed.next(true);
                    return;
                }
                _this.userData = data[0];
                _this.dataEdited.next(true);
            }
        }, function (error) {
            _this.dataLoadFailed.next(true);
            _this.dataLoaded.next(null);
        });
    };
    CompareService.prototype.onDeleteData = function () {
        var _this = this;
        this.dataLoadFailed.next(false);
        this.http.delete('https://API_ID.execute-api.REGION.amazonaws.com/dev/', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'XXX' })
        })
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return _this.dataLoadFailed.next(true); });
    };
    return CompareService;
}());
CompareService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], CompareService);

var _a, _b;
//# sourceMappingURL=compare.service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compare_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompareComponent = (function () {
    function CompareComponent(compareService) {
        this.compareService = compareService;
        this.doInput = true;
    }
    CompareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.compareService.dataEdited.subscribe(function (edited) { return _this.doInput = !edited; });
    };
    return CompareComponent;
}());
CompareComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-compare',
        template: __webpack_require__(176),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__compare_service__["a" /* CompareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__compare_service__["a" /* CompareService */]) === "function" && _a || Object])
], CompareComponent);

var _a;
//# sourceMappingURL=compare.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = (function () {
    function SigninComponent(authService) {
        this.authService = authService;
        this.didFail = false;
        this.isLoading = false;
    }
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authIsLoading.subscribe(function (isLoading) { return _this.isLoading = isLoading; });
        this.authService.authDidFail.subscribe(function (didFail) { return _this.didFail = didFail; });
    };
    SigninComponent.prototype.onSubmit = function () {
        var usrName = this.form.value.username;
        var password = this.form.value.password;
        this.authService.signIn(usrName, password);
    };
    return SigninComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('usrForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], SigninComponent.prototype, "form", void 0);
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signin',
        template: __webpack_require__(177),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SigninComponent);

var _a, _b;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.confirmUser = false;
        this.didFail = false;
        this.isLoading = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authIsLoading.subscribe(function (isLoading) { return _this.isLoading = isLoading; });
        this.authService.authDidFail.subscribe(function (didFail) { return _this.didFail = didFail; });
    };
    SignupComponent.prototype.onSubmit = function () {
        var usrName = this.form.value.username;
        var email = this.form.value.email;
        var password = this.form.value.password;
        this.authService.signUp(usrName, email, password);
    };
    SignupComponent.prototype.onDoConfirm = function () {
        this.confirmUser = true;
    };
    SignupComponent.prototype.onConfirm = function (formValue) {
        this.authService.confirmUser(formValue.usrName, formValue.validationCode);
    };
    return SignupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('usrForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], SignupComponent.prototype, "form", void 0);
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(178),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 97;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(110);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.bundle.js.map
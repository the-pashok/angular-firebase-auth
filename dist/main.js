(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form-login/form-login.component */ "./src/app/components/form-login/form-login.component.ts");
/* harmony import */ var _components_form_signup_form_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form-signup/form-signup.component */ "./src/app/components/form-signup/form-signup.component.ts");
/* harmony import */ var _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/user-page/user-page.component */ "./src/app/components/user-page/user-page.component.ts");
/* harmony import */ var _guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guards/auth-guard.guard */ "./src/app/guards/auth-guard.guard.ts");







// guard

var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-up'
    },
    {
        path: 'sign-up',
        component: _components_form_signup_form_signup_component__WEBPACK_IMPORTED_MODULE_5__["FormSignupComponent"],
    },
    {
        path: 'sign-in',
        component: _components_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_4__["FormLoginComponent"]
    },
    {
        path: 'user-page/:uid',
        component: _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_6__["UserPageComponent"],
        canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuardGuard"]],
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/form-login/form-login.component */ "./src/app/components/form-login/form-login.component.ts");
/* harmony import */ var _components_form_signup_form_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/form-signup/form-signup.component */ "./src/app/components/form-signup/form-signup.component.ts");
/* harmony import */ var _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user-page/user-page.component */ "./src/app/components/user-page/user-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/greeting/greeting.component */ "./src/app/components/greeting/greeting.component.ts");







// firebase modules





// components






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_13__["FormLoginComponent"],
                _components_form_signup_form_signup_component__WEBPACK_IMPORTED_MODULE_14__["FormSignupComponent"],
                _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_15__["UserPageComponent"],
                _components_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_17__["GreetingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/form-login/form-login.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-login/form-login.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-form\">\n    <app-greeting class=\"main-form-left\"></app-greeting>\n    <div class=\"main-form-right\">\n        <div class=\"form-content\">\n            <h2>{{formHeader}}</h2>\n            <form [formGroup]=\"loginForm\" method=\"post\" (ngSubmit)=\"onSubmit(loginForm.value)\">\n                <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Email\" formControlName=\"email\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                </div>\n                <div class=\"mb-3\"><a class=\"link\" routerLink=\"/sign-up\">Sign up</a></div>\n                <button [disabled]=\"loginForm.invalid\" class=\"btn-regular btn-colored\" type=\"submit\">Sign in</button>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/form-login/form-login.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-login/form-login.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1sb2dpbi9mb3JtLWxvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/form-login/form-login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/form-login/form-login.component.ts ***!
  \***************************************************************/
/*! exports provided: FormLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginComponent", function() { return FormLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var FormLoginComponent = /** @class */ (function () {
    function FormLoginComponent(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.formHeader = 'Sign in';
        this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ]))
        });
    }
    FormLoginComponent.prototype.ngOnInit = function () {
    };
    FormLoginComponent.prototype.onSubmit = function (data) {
        this.authService.login(data.email, data.password);
    };
    FormLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-login',
            template: __webpack_require__(/*! ./form-login.component.html */ "./src/app/components/form-login/form-login.component.html"),
            styles: [__webpack_require__(/*! ./form-login.component.scss */ "./src/app/components/form-login/form-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], FormLoginComponent);
    return FormLoginComponent;
}());



/***/ }),

/***/ "./src/app/components/form-signup/form-signup.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/form-signup/form-signup.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-form\">\n    <app-greeting class=\"main-form-left\"></app-greeting>\n    <div class=\"main-form-right\">\n        <div class=\"form-content\">\n            <h2>{{formHeader}}</h2>\n\n            <form [formGroup]=\"signUpForm\" method=\"post\" (ngSubmit)=\"onSubmit(signUpForm.value)\">\n                <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Email\" formControlName=\"email\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" placeholder=\"Repeat password\" formControlName=\"repeatPassword\"\n                           [ngClass]=\"{'ng-invalid': signUpForm.errors && signUpForm.controls.repeatPassword.touched}\">\n                </div>\n                <div class=\"mb-3\">\n                    <a class=\"link\" routerLink=\"/sign-in\">Sign in</a>\n                </div>\n                <button [disabled]=\"signUpForm.invalid\" class=\"btn-regular btn-colored\" type=\"submit\">Sign up</button>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/form-signup/form-signup.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/form-signup/form-signup.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1zaWdudXAvZm9ybS1zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/form-signup/form-signup.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-signup/form-signup.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSignupComponent", function() { return FormSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var FormSignupComponent = /** @class */ (function () {
    function FormSignupComponent(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.formHeader = 'Sign up';
        this.submitted = false;
        this.signUpForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ])),
            repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        }, {
            validator: this.matchingPasswords('password', 'repeatPassword')
        });
    }
    Object.defineProperty(FormSignupComponent.prototype, "f", {
        get: function () { return this.signUpForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormSignupComponent.prototype.matchingPasswords = function (pass, confirm) {
        return function (group) {
            if (group.controls[pass].value === group.controls[confirm].value) {
                return null;
            }
            else {
                return { 'matchingPasswords': true };
            }
        };
    };
    FormSignupComponent.prototype.onSubmit = function (data) {
        this.submitted = true;
        if (this.signUpForm.invalid) {
            alert('Invalid data');
            return false;
        }
        this.authService.registerUser(data.email, data.password);
    };
    FormSignupComponent.prototype.ngOnInit = function () {
    };
    FormSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-signup',
            template: __webpack_require__(/*! ./form-signup.component.html */ "./src/app/components/form-signup/form-signup.component.html"),
            styles: [__webpack_require__(/*! ./form-signup.component.scss */ "./src/app/components/form-signup/form-signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], FormSignupComponent);
    return FormSignupComponent;
}());



/***/ }),

/***/ "./src/app/components/greeting/greeting.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/greeting/greeting.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>{{mainHeader}}</h1>\n    <h6>{{pseudoHeader}}</h6>\n</div>\n"

/***/ }),

/***/ "./src/app/components/greeting/greeting.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/greeting/greeting.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JlZXRpbmcvZ3JlZXRpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/greeting/greeting.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/greeting/greeting.component.ts ***!
  \***********************************************************/
/*! exports provided: GreetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreetingComponent", function() { return GreetingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GreetingComponent = /** @class */ (function () {
    function GreetingComponent() {
        this.mainHeader = 'Hello Friend!';
        this.pseudoHeader = 'Enter your personal data and start journey with us!';
    }
    GreetingComponent.prototype.ngOnInit = function () {
    };
    GreetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-greeting',
            template: __webpack_require__(/*! ./greeting.component.html */ "./src/app/components/greeting/greeting.component.html"),
            styles: [__webpack_require__(/*! ./greeting.component.scss */ "./src/app/components/greeting/greeting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GreetingComponent);
    return GreetingComponent;
}());



/***/ }),

/***/ "./src/app/components/user-page/user-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-page/user-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"mb-3\">\n        <p>user-page works!</p>\n    </div>\n\n    <button class=\"btn-regular btn-colored\" (click)=\"logout()\">Log out</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-page/user-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/user-page/user-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wYWdlL3VzZXItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user-page/user-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-page/user-page.component.ts ***!
  \*************************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



var UserPageComponent = /** @class */ (function () {
    function UserPageComponent(authService) {
        this.authService = authService;
    }
    UserPageComponent.prototype.ngOnInit = function () {
    };
    UserPageComponent.prototype.logout = function () {
        this.authService.logout();
    };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/components/user-page/user-page.component.html"),
            styles: [__webpack_require__(/*! ./user-page.component.scss */ "./src/app/components/user-page/user-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guards/auth-guard.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function() { return AuthGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuardGuard = /** @class */ (function () {
    function AuthGuardGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.isLoggedIn) {
            this.router.navigateByUrl('/sign-in');
            return false;
        }
        return true;
    };
    AuthGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuardGuard);
    return AuthGuardGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router, snackbar) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.snackbar = snackbar;
        this.snackbarConfig = {
            duration: 4000,
            panelClass: 'my-snackbar',
            verticalPosition: "bottom",
            horizontalPosition: "center"
        };
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.user = user;
                localStorage.setItem('user', JSON.stringify(_this.user));
            }
            else {
                localStorage.setItem('user', null);
            }
        });
    }
    AuthService.prototype.login = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(email, password)];
                    case 1:
                        user = _a.sent();
                        this.router.navigateByUrl('/user-page/' + user.user.uid);
                        this.snackbar.open('Successfully logged in!', 'Close', this.snackbarConfig);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        alert('Error! ' + e_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signOut()];
                    case 1:
                        _a.sent();
                        localStorage.removeItem('user');
                        this.router.navigateByUrl('/');
                        this.snackbar.open('Successfully logged out!', 'Close', this.snackbarConfig);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.registerUser = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, password)];
                    case 1:
                        res = _a.sent();
                        this.snackbar.open('Successfully registered!', 'Close', this.snackbarConfig);
                        this.router.navigateByUrl('/sign-in');
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        alert(e_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBga0gNylx0TUlSTNzu57ENST3GoIn9uzo",
        authDomain: "angular-firebase-auth-d7276.firebaseapp.com",
        databaseURL: "https://angular-firebase-auth-d7276.firebaseio.com",
        projectId: "angular-firebase-auth-d7276",
        storageBucket: "angular-firebase-auth-d7276.appspot.com",
        messagingSenderId: "552044122871",
        appId: "1:552044122871:web:0262d21c1763b2c2"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\angular-firebase-auth\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
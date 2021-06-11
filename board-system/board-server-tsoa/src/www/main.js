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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/account/account.component */ "./src/app/views/account/account.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/main/main.component */ "./src/app/views/main/main.component.ts");






var routes = [
    { path: '', component: _views_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
    { path: 'account', component: _views_account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"] },
    { path: 'login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bd-placeholder-img {\r\n    font-size: 1.125rem;\r\n    text-anchor: middle;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n  }\r\n\r\n  @media (min-width: 768px) {\r\n    .bd-placeholder-img-lg {\r\n      font-size: 3.5rem;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0U7TUFDRSxpQkFBaUI7SUFDbkI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJkLXBsYWNlaG9sZGVyLWltZyB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5iZC1wbGFjZWhvbGRlci1pbWctbGcge1xyXG4gICAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n</div>\r\n<app-footer></app-footer>\r\n"

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
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/page.service */ "./src/app/service/page.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(apiService, pageService) {
        this.apiService = apiService;
        this.pageService = pageService;
        this.title = 'board-client';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onTokenChangeListener = function () {
        var token = this.apiService.getLoginToken();
        if (!token && this.apiService.isLoginTokenExpired(token)) {
            console.log('force move to login.');
            this.pageService.moveTo('login');
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _service_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: jwtTokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtTokenGetter", function() { return jwtTokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _views_board_board_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/board/board.module */ "./src/app/views/board/board.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/main/main.component */ "./src/app/views/main/main.component.ts");
/* harmony import */ var _views_account_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/account/account.component */ "./src/app/views/account/account.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_page_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/page.service */ "./src/app/service/page.service.ts");

















function jwtTokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _views_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _views_account_account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"],
                _views_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: jwtTokenGetter,
                        allowedDomains: ['localhost:4200', 'localhost:8080'],
                    }
                }),
                _views_board_board_module__WEBPACK_IMPORTED_MODULE_8__["BoardModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
            ],
            providers: [
                _service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
                _service_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                _service_page_service__WEBPACK_IMPORTED_MODULE_16__["PageService"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"] //앵귤러 전용 태그 사용을 위한 스키마
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] //루트 모듈에서 사용하는 프로퍼티. 진입점인 루트 컴포넌트를 설정
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, apiService, authService) {
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
    }
    AuthGuard.prototype.getDecodedAccessToken = function (token) {
        try {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_5__["default"])(token);
        }
        catch (Error) {
            return null;
        }
    };
    AuthGuard.prototype.canActivate = function (next, state) {
        var token = this.apiService.getLoginToken();
        if (!token || this.apiService.isLoginTokenExpired(token)) {
            this.router.navigate(['login']);
            this.authService.logoutSet();
            return false;
        }
        if (this.authService.isLogedIn != true) {
            this.authService.loginSet(token);
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ApiService = /** @class */ (function () {
    function ApiService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.TOKEN_NAME = 'jwtauthToken';
        this.LOGIN_TOKEN = 'loginAuthToken';
        this.apiHost = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiHost;
        this.http = http;
        console.log(this.apiHost);
    }
    //토큰 발급
    ApiService.prototype.token_signin = function () {
        console.log('발급', this.apiHost);
        return this.http.post(this.apiHost + "/auth/token", {
            'origin': _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].clientHost,
            'clientSecret': _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].clientSecret,
        });
    };
    //클라이언트 단에 저장된 토큰 GET
    ApiService.prototype.getToken = function () {
        console.log("getToken()", localStorage.getItem(this.TOKEN_NAME));
        return localStorage.getItem(this.TOKEN_NAME);
    };
    //클라이언트 단에 토큰 SET
    ApiService.prototype.setToken = function (token) {
        console.log('setToken()');
        localStorage.setItem(this.TOKEN_NAME, token);
    };
    //클라이언트 단의 토큰 DELETE
    ApiService.prototype.removeToken = function () {
        console.log('removeToken()');
        localStorage.removeItem(this.TOKEN_NAME);
    };
    //클라이언트 단의 토큰 유효기간 체크
    ApiService.prototype.isTokenExpired = function (token) {
        console.log("tokenExpired");
        return this.jwtHelper.isTokenExpired(token);
    };
    ApiService.prototype.get_api_request = function (url) {
        var _this = this;
        try {
            if (this.getToken() == undefined || this.getToken() == null || this.isTokenExpired(this.getToken())) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                    _this.token_signin() //1. 토큰 발급
                        .subscribe(function (tokenAuth) {
                        _this.setToken(tokenAuth.data);
                        console.log(tokenAuth.data);
                        _this.http.get(url, {
                            headers: { Authorization: "Bearer " + (_this.getToken() || '') }
                        }).subscribe(function (resultModel) {
                            observer.next(resultModel); //4. 요청 완료 시 observer를 반응시킴(값 변환시점)
                            observer.complete();
                        });
                    });
                });
            }
            return this.http.get(url, {
                headers: { authorization: "Bearer " + (this.getToken() || '') }
            });
        }
        catch (error) {
            if (error.status === 419) {
                console.log("토큰 만료", error);
                return this.get_api_request(url);
            }
            else {
                console.log("서버 오류 or 유효하지 않은 사용자", error);
                return error.response;
            }
        }
    };
    ApiService.prototype.post_api_request = function (url, data) {
        var _this = this;
        try {
            if (this.getToken() == undefined || this.getToken() == null || this.isTokenExpired(this.getToken())) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                    _this.token_signin() //1. 토큰 발급
                        .subscribe(function (tokenAuth) {
                        _this.setToken(tokenAuth.data);
                        _this.http.post(url, data, {
                            headers: { Authorization: "Bearer " + (_this.getToken() || '') }
                        }).subscribe(function (resultModel) {
                            observer.next(resultModel); //4. 요청 완료 시 observer를 반응시킴(값 변환시점)
                            observer.complete();
                        });
                    });
                });
            }
            return this.http.post(url, data, {
                headers: { Authorization: "Bearer " + (this.getToken() || '') }
            });
        }
        catch (error) {
            if (error.status === 419) {
                console.log("토큰 만료", error);
                return this.post_api_request(url, data);
            }
            else {
                console.log("서버 오류 or 유효하지 않은 사용자", error);
                return error.response;
            }
        }
    };
    /* Login Auth API Reqeust */
    //로그인 토큰 발급
    ApiService.prototype.login_signin = function (user) {
        return this.http.post(this.apiHost + "/auth/login", {
            'email': user.email,
            'password': user.password,
        });
    };
    //클라이언트 단에 저장된 토큰 GET
    ApiService.prototype.getLoginToken = function () {
        return localStorage.getItem(this.LOGIN_TOKEN);
    };
    //클라이언트 단에 토큰 SET
    ApiService.prototype.setLoginToken = function (token) {
        if (token) {
            console.log('setToken()', token);
            localStorage.setItem(this.LOGIN_TOKEN, token);
        }
    };
    //클라이언트 단의 토큰 DELETE
    ApiService.prototype.removeLoginToken = function () {
        localStorage.removeItem(this.LOGIN_TOKEN);
    };
    //클라이언트 단의 토큰 유효기간 체크
    ApiService.prototype.isLoginTokenExpired = function (token) {
        var isExpire = this.jwtHelper.isTokenExpired(token);
        if (isExpire) {
            this.removeLoginToken();
        }
        return isExpire;
    };
    //로그인 요청
    ApiService.prototype.login_api = function (user) {
        var _this = this;
        try {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this.login_signin(user) //1. 토큰 발급
                    .subscribe(function (result) {
                    _this.setLoginToken(result.data);
                    observer.next(result); //4. 요청 완료 시 observer를 반응시킴(값 변환시점)
                    observer.complete();
                }, function (error) {
                    observer.next(error);
                    observer.complete();
                });
            });
        }
        catch (error) {
            console.log("인증 실패", error);
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                observer.next({
                    success: false
                });
                observer.complete();
            });
        }
    };
    //GET Reqeust with Login Auth
    ApiService.prototype.get_api_request_signin = function (url) {
        var _this = this;
        try {
            if (this.getLoginToken() == undefined || this.getLoginToken() == null || this.isLoginTokenExpired(this.getLoginToken())) {
                return;
            }
            return this.http.get(url, {
                headers: { authorization: "Bearer " + (this.getLoginToken() || '') }
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                if (res.token) {
                    console.log('RESET TOKEN');
                    _this.setLoginToken(res.token);
                }
                if (!res.success) {
                    console.log("App error");
                }
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err, caught) {
                throw new Error(err);
            }));
        }
        catch (error) {
            if (error.status === 419) {
                console.log("토큰 만료", error);
                return error.response;
            }
            else {
                console.log("서버 오류 or 유효하지 않은 사용자", error);
                return error.response;
            }
        }
    };
    //POST Reqeust with Login Auth
    ApiService.prototype.post_api_request_signin = function (url, data) {
        var _this = this;
        try {
            if (this.getLoginToken() == undefined || this.getLoginToken() == null || this.isLoginTokenExpired(this.getLoginToken())) {
                return;
            }
            return this.http.post(url, data, {
                headers: { Authorization: "Bearer " + (this.getToken() || '') }
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                if (res.token) {
                    console.log('RESET TOKEN');
                    _this.setLoginToken(res.token);
                }
                if (!res.success) {
                    console.log("App error");
                }
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err, caught) {
                throw new Error(err);
            }));
        }
        catch (error) {
            if (error.status === 419) {
                console.log("토큰 만료", error);
                return error.response;
            }
            else {
                console.log("서버 오류 or 유효하지 않은 사용자", error);
                return error.response;
            }
        }
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");



var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isLogedIn = false;
        this.nick = "";
    }
    AuthService.prototype.getDecodedAccessToken = function (token) {
        try {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
        }
        catch (Error) {
            return null;
        }
    };
    AuthService.prototype.loginSet = function (token) {
        this.isLogedIn = true;
        var decodedToken = this.getDecodedAccessToken(token);
        this.nick = decodedToken.nick;
    };
    AuthService.prototype.logoutSet = function () {
        this.isLogedIn = false;
        this.nick = "";
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/page.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/page.service.ts ***!
  \*****************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PageService = /** @class */ (function () {
    function PageService(router, zone) {
        this.router = router;
        this.zone = zone;
    }
    PageService.prototype.moveTo = function (url) {
        var _this = this;
        this.zone.run(function () {
            console.log("[pageService] [moveTo] Move to " + url);
            _this.router.navigate([url]);
        });
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-muted py-5\">\n  <div class=\"container\">\n    <p class=\"float-end mb-1\">\n      <a href=\"#\">Back to top</a>\n    </p>\n    <p class=\"mb-1\">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>\n    <p class=\"mb-0\">New to Bootstrap? <a href=\"/\">Visit the homepage</a> or read our <a href=\"/docs/5.0/getting-started/introduction/\">getting started guide</a>.</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"collapse bg-dark\" id=\"navbarHeader\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-8 col-md-7 py-4\">\n          <h4 class=\"text-white\">Author : Jaewhi-so</h4>\n          <p class=\"text-muted\">Use Angular Front-end and Node.js Server API </p>\n        </div>\n        <div class=\"col-sm-4 offset-md-1 py-4\">\n          <h4 class=\"text-white\">Content</h4>\n          <ul class=\"list-unstyled\">\n            <li><a routerLink=\"/\" routerLinkActive=\"active\">Main</a></li>\n            <li><a routerLink=\"/board\" routerLinkActive=\"active\">Board</a></li>\n            <li><a routerLink=\"/account\" routerLinkActive=\"active\">Get Account!</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"navbar navbar-dark bg-dark shadow-sm\">\n    <div class=\"container\">\n      <a href=\"#\" class=\"navbar-brand d-flex align-items-center\">\n        <strong>Tiny Web</strong>\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    </div>\n  </div>\n<div class=\"row bg-dark\" *ngIf=\"authService.isLogedIn\">\n  <div class=\"col-md-5\" style=\"margin : 15px\">\n    <span style=\"color:white\">{{authService.nick}}님 환영합니다  </span>\n    <button class=\"btn btn-primary\" (click)=\"logOut()\">로그아웃</button>\n  </div>\n  <div class=\"col-md-6\">\n  </div>\n</div>\n</header>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_service_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/page.service */ "./src/app/service/page.service.ts");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(apiService, authService, router, pageService) {
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.pageService = pageService;
    }
    HeaderComponent.prototype.getDecodedAccessToken = function (token) {
        try {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(token);
        }
        catch (Error) {
            return null;
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logOut = function () {
        this.apiService.removeLoginToken();
        this.authService.logoutSet();
        alert('로그아웃 성공');
        this.pageService.moveTo('/');
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_service_page_service__WEBPACK_IMPORTED_MODULE_6__["PageService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/views/account/account.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/account/account.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/account/account.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/account/account.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"py-5 text-center container\">\n  <div class=\"row py-lg-5\">\n    <div class=\"col-lg-6 col-md-8 mx-auto\">\n      <h1 class=\"fw-light\">Account</h1>\n      <p class=\"lead text-muted\">Get Your Account!</p>\n    </div>\n  </div>\n</section>\n<div class=\"col-md-7 col-lg-12\">\n  <form class=\"needs-validation\" [formGroup]=\"insertForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row g-3\">\n      <div class=\"col-sm-4\">\n        <label for=\"email\" class=\"form-label\">이메일</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Insert email\" formControlName=\"email\" required >\n        <div class=\"invalid-feedback\">\n          <app-form-handler *ngIf=\"insertForm.get('email').errors\" [formGroupErrors]='insertForm.get(\"email\").errors'></app-form-handler>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <label for=\"nick\" class=\"form-label\">닉네임</label>\n        <input type=\"nick\" class=\"form-control\" id=\"nick\" formControlName=\"nick\" required>\n        <div class=\"invalid-feedback\">\n          <app-form-handler *ngIf=\"insertForm.get('nick').errors\" [formGroupErrors]='insertForm.get(\"nick\").errors'></app-form-handler>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <label for=\"password\" class=\"form-label\">비밀번호</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" required>\n        <div class=\"invalid-feedback\">\n          <app-form-handler *ngIf=\"insertForm.get('password').errors\" [formGroupErrors]='insertForm.get(\"password\").errors'></app-form-handler>\n        </div>\n      </div>\n    </div>\n    <hr class=\"my-4\">\n    <button class=\"w-100 btn btn-primary btn-lg\" type=\"submit\" [disabled]=\"!insertForm.valid\">가입</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/views/account/account.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/account/account.component.ts ***!
  \****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AccountComponent = /** @class */ (function () {
    function AccountComponent(apiService, fb, router) {
        this.apiService = apiService;
        this.fb = fb;
        this.router = router;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiHost;
        this.insertForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nick: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.userReqModel = {};
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.updateRequestForm = function () {
        var _a = this.insertForm.controls, email = _a.email, password = _a.password, nick = _a.nick;
        this.userReqModel.email = email.value;
        this.userReqModel.password = password.value;
        this.userReqModel.nick = nick.value;
    };
    AccountComponent.prototype.onSubmit = function () {
        var _this = this;
        this.updateRequestForm();
        console.log(this.userReqModel);
        this.apiService.post_api_request(this.apiUrl + "/user", this.userReqModel)
            .subscribe(function (res) {
            if (res.success == true) {
                console.log('성공');
                alert("회원 가입에 성공했습니다.");
                _this.router.navigateByUrl('/');
            }
            else {
                console.log('회원 가입에 실패했습니다.');
            }
        });
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/views/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/views/account/account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/views/board/board-detail/board-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/board/board-detail/board-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2JvYXJkL2JvYXJkLWRldGFpbC9ib2FyZC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/board/board-detail/board-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/board/board-detail/board-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative\">\n    <div class=\"col-md-7 d-flex flex-column position-static\">\n      <h1 class=\"d-inline-block mb-2 text-primary\" *ngIf=\"board\">{{board.title}}</h1>\n      <h4 class=\"mb-0\" *ngIf=\"board\">{{board.nick}}</h4>\n      <div class=\"mb-1 text-muted\" *ngIf=\"board\">{{board.createdAt}}</div>\n      <br>\n      <p class=\"card-text mb-auto\" *ngIf=\"board\">{{board.content}}</p>\n      <a [routerLink]=\"['/board/list']\" [queryParams]=\"{ page: page }\" [routerLinkActive]=\"['active']\" class=\"stretched-link\">Continue reading</a>\n    </div>\n    <div class=\"col-md-5 d-flex d-lg-block\">\n      <img *ngIf=\"board\" src=\"{{loadImg(board.ridx)}}\" width=100% height=\"500\">\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/board/board-detail/board-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/board/board-detail/board-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: BoardDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardDetailComponent", function() { return BoardDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var BoardDetailComponent = /** @class */ (function () {
    function BoardDetailComponent(route, apiService) {
        var _this = this;
        this.route = route;
        this.apiService = apiService;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiHost;
        this.page = 0;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.route.snapshot.queryParamMap.get('page')) {
            this.page = Number(this.route.snapshot.queryParamMap.get('page'));
        }
        var board$ = this.apiService.get_api_request_signin(this.apiUrl + "/board/" + this.id);
        board$.subscribe(function (res) {
            if (res.success == true) {
                _this.board = res.data;
                console.log(_this.board, _this.board.title, _this.board.content);
            }
        });
    }
    BoardDetailComponent.prototype.ngOnInit = function () {
    };
    BoardDetailComponent.prototype.loadImg = function (id) {
        if (id == null || id == undefined) {
            return 'assets/img/lazyImage.jpg';
        }
        return this.apiUrl + "/resource/image?id=" + id;
    };
    BoardDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board-detail',
            template: __webpack_require__(/*! ./board-detail.component.html */ "./src/app/views/board/board-detail/board-detail.component.html"),
            styles: [__webpack_require__(/*! ./board-detail.component.css */ "./src/app/views/board/board-detail/board-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], BoardDetailComponent);
    return BoardDetailComponent;
}());



/***/ }),

/***/ "./src/app/views/board/board-insert-form/board-insert-form.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/views/board/board-insert-form/board-insert-form.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2JvYXJkL2JvYXJkLWluc2VydC1mb3JtL2JvYXJkLWluc2VydC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/board/board-insert-form/board-insert-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/board/board-insert-form/board-insert-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-7 col-lg-12\">\n  <h4 class=\"mb-3\">게시글 추가</h4>\n  <form class=\"needs-validation\" [formGroup]=\"insertForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row g-3\">\n      <div class=\"col-sm-6\">\n        <label for=\"title\" class=\"form-label\">제목</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Insert title\" formControlName=\"title\" required >\n        <div class=\"invalid-feedback\">\n          <app-form-handler *ngIf=\"insertForm.get('title').errors\" [formGroupErrors]='insertForm.get(\"title\").errors'></app-form-handler>\n        </div>\n      </div>\n\n      <div class=\"col-sm-6\">\n        <label for=\"lastName\" class=\"form-label\">닉네임</label>\n        <input type=\"text\" class=\"form-control\" id=\"nick\" formControlName=\"nick\" required>\n        <div class=\"invalid-feedback\">\n          <app-form-handler *ngIf=\"insertForm.get('nick').errors\" [formGroupErrors]='insertForm.get(\"nick\").errors'></app-form-handler>\n        </div>\n      </div>\n\n      <div class=\"col-12\">\n        <div class=\"md-form amber-textarea active-amber-textarea-2\">\n          <textarea id=\"content\" class=\"md-textarea form-control\" rows=\"15\" id=\"content\" formControlName=\"content\" required></textarea>\n          <div class=\"invalid-feedback\">\n            <app-form-handler *ngIf=\"insertForm.get('content').errors\" [formGroupErrors]='insertForm.get(\"content\").errors'></app-form-handler>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12\">\n        <label for=\"file\" class=\"form-label\">사진</label>\n          <input type=\"file\" class=\"form-control\" id=\"file\" accept=\"image/*\" (change)=\"onFileChange(fileInput.files)\" #fileInput>\n          <div class=\"invalid-feedback\">\n            Your username is required.\n          </div>\n      </div>\n      <img *ngIf=\"imageSrc\" [src]=\"imageSrc\" class=\"avatar\">\n    </div>\n    <input type=\"text\" class=\"form-control\" id=\"ridx\" formControlName=\"ridx\" style=\"visibility:hidden\">\n    <hr class=\"my-4\">\n    <button class=\"w-100 btn btn-primary btn-lg\" type=\"submit\" [disabled]=\"!insertForm.valid\">게시</button>\n  </form>\n</div>\n\n  \n\n"

/***/ }),

/***/ "./src/app/views/board/board-insert-form/board-insert-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/board/board-insert-form/board-insert-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: BoardInsertFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardInsertFormComponent", function() { return BoardInsertFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var BoardInsertFormComponent = /** @class */ (function () {
    function BoardInsertFormComponent(apiService, fb, router) {
        this.apiService = apiService;
        this.fb = fb;
        this.router = router;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiHost;
        this.imageSrc = '#';
        this.insertForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nick: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ridx: ['']
        });
        this.boardRequestModel = {
            id: null,
            title: null,
            nick: null,
            content: null,
            ridx: null,
        };
    }
    BoardInsertFormComponent.prototype.ngOnInit = function () {
    };
    BoardInsertFormComponent.prototype.updateRequestForm = function () {
        var _a = this.insertForm.controls, title = _a.title, content = _a.content, nick = _a.nick, ridx = _a.ridx;
        this.boardRequestModel.title = title.value;
        this.boardRequestModel.content = content.value;
        this.boardRequestModel.nick = nick.value;
        this.boardRequestModel.ridx = ridx.value || null;
    };
    BoardInsertFormComponent.prototype.onFileChange = function (files) {
        var _this = this;
        console.log(files);
        if (files && files.length > 0) {
            // For Preview
            var file_1 = files[0];
            this.formData = new FormData();
            this.formData.append('file', file_1);
            this.apiService.post_api_request_signin(this.apiUrl + "/resource/single", this.formData)
                .subscribe(function (res) {
                console.log('요청은 보냄');
                if (res.success == true) {
                    /* 브라우저는 보안 문제로 인해 파일 경로의 참조를 허용하지 않는다.
                    따라서 파일 경로를 img 태그에 바인딩할 수 없다.
                    FileReader.readAsDataURL 메소드를 사용하여 이미지 파일을 읽어
                    base64 인코딩된 스트링 데이터를 취득한 후, img 태그에 바인딩한다. */
                    _this.insertForm.controls.ridx.setValue(res.data.id);
                    reader_1.readAsDataURL(file_1);
                    reader_1.onload = function () {
                        _this.imageSrc = reader_1.result;
                    };
                    /* reactive form에서 input[type="file"]을 지원하지 않는다.
                      즉 파일 선택 시에 값이 폼컨트롤에 set되지 않는다
                      https://github.com/angular/angular.io/issues/3466
                      form validation을 위해 file.name을 폼컨트롤에 set한다. */
                    //this.insertForm.get('file').setValue(file.name);  
                }
                else {
                    console.log('실패');
                }
            });
            var reader_1 = new FileReader();
        }
    };
    BoardInsertFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.updateRequestForm();
        console.log(this.boardRequestModel);
        this.apiService.post_api_request_signin(this.apiUrl + "/board", this.boardRequestModel)
            .subscribe(function (res) {
            if (res.success == true) {
                console.log('성공');
                alert("게시물을 등록하였습니다.");
                _this.router.navigateByUrl('/board/list');
            }
            else {
                console.log('실패.');
            }
        });
    };
    BoardInsertFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board-insert-form',
            template: __webpack_require__(/*! ./board-insert-form.component.html */ "./src/app/views/board/board-insert-form/board-insert-form.component.html"),
            styles: [__webpack_require__(/*! ./board-insert-form.component.css */ "./src/app/views/board/board-insert-form/board-insert-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BoardInsertFormComponent);
    return BoardInsertFormComponent;
}());



/***/ }),

/***/ "./src/app/views/board/board-list/board-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/board/board-list/board-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2JvYXJkL2JvYXJkLWxpc3QvYm9hcmQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/board/board-list/board-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/board/board-list/board-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"album py-5 bg-light\">\n  <div class=\"container\">\n    <div [class]=\"'row row-cols-md-' + prefix\">\n      <div *ngFor=\"let board of boards\">\n        <div class=\"col\">\n          <div class=\"card shadow-sm\">\n            <img width=100% height=\"220\" src=\"{{loadImg(board.ridx)}}\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">{{board.title}}</p>\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"btn-group\">\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" (click)=\"detail_view(board.id);\">View</button>\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ngb-pagination [collectionSize]=\"pager.collectionSize\" [pageSize]=\"pager.pageSize\" [(page)]=\"pager.page\" [maxSize]=\"pager.maxSize\" (pageChange)=\"pageChanged($event)\" aria-label=\"Default pagination\"></ngb-pagination>\n\n"

/***/ }),

/***/ "./src/app/views/board/board-list/board-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/board/board-list/board-list.component.ts ***!
  \****************************************************************/
/*! exports provided: BoardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardListComponent", function() { return BoardListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var BoardListComponent = /** @class */ (function () {
    function BoardListComponent(route, apiService, router) {
        this.route = route;
        this.apiService = apiService;
        this.router = router;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiHost;
        this.prefix = 6;
    }
    BoardListComponent.prototype.ngOnInit = function () {
        this.pager = {
            pageSize: 12,
            maxSize: 2,
        };
        this.getList(Number(this.route.snapshot.queryParamMap.get('page')) || 0);
        //this.pagingList(pager);
    };
    BoardListComponent.prototype.getList = function (curPage) {
        var _this = this;
        var boards$ = this.apiService.get_api_request_signin(this.apiUrl + "/board?page=" + curPage + "&pageSize=" + this.pager.pageSize + "&maxSize=" + this.pager.maxSize);
        boards$.subscribe(function (res) {
            if (res.success = true) {
                _this.boards = res.data.list;
                _this.pager = res.data.pager;
            }
        });
    };
    BoardListComponent.prototype.detail_view = function (id) {
        this.router.navigateByUrl("/board/" + id + "?page=" + this.pager.page);
    };
    BoardListComponent.prototype.pageChanged = function (page) {
        this.pager.page = page;
        this.getList(page);
    };
    BoardListComponent.prototype.loadImg = function (id) {
        if (id == null || id == undefined) {
            return 'assets/img/lazyImage.jpg';
        }
        return this.apiUrl + "/resource/image?id=" + id;
    };
    BoardListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board-list',
            template: __webpack_require__(/*! ./board-list.component.html */ "./src/app/views/board/board-list/board-list.component.html"),
            styles: [__webpack_require__(/*! ./board-list.component.css */ "./src/app/views/board/board-list/board-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BoardListComponent);
    return BoardListComponent;
}());



/***/ }),

/***/ "./src/app/views/board/board-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/board/board-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BoardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardRoutingModule", function() { return BoardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _board_detail_board_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board-detail/board-detail.component */ "./src/app/views/board/board-detail/board-detail.component.ts");
/* harmony import */ var _board_insert_form_board_insert_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board-insert-form/board-insert-form.component */ "./src/app/views/board/board-insert-form/board-insert-form.component.ts");
/* harmony import */ var _board_list_board_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board-list/board-list.component */ "./src/app/views/board/board-list/board-list.component.ts");
/* harmony import */ var _board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board.component */ "./src/app/views/board/board.component.ts");








var routes = [
    {
        path: 'board', component: _board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"], canActivate: [src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            { path: '', component: _board_list_board_list_component__WEBPACK_IMPORTED_MODULE_6__["BoardListComponent"], canActivate: [src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], },
            { path: 'list', component: _board_list_board_list_component__WEBPACK_IMPORTED_MODULE_6__["BoardListComponent"], canActivate: [src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], },
            { path: 'insert', component: _board_insert_form_board_insert_form_component__WEBPACK_IMPORTED_MODULE_5__["BoardInsertFormComponent"], canActivate: [src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], },
            { path: ':id', component: _board_detail_board_detail_component__WEBPACK_IMPORTED_MODULE_4__["BoardDetailComponent"], canActivate: [src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], },
        ]
    },
];
var BoardRoutingModule = /** @class */ (function () {
    function BoardRoutingModule() {
    }
    BoardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BoardRoutingModule);
    return BoardRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/board/board.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/board/board.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/board/board.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/board/board.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"py-5 text-center container\">\n  <div class=\"row py-lg-5\">\n    <div class=\"col-lg-6 col-md-8 mx-auto\">\n      <h1 class=\"fw-light\">Board</h1>\n      <p class=\"lead text-muted\">There is simple board. You can view simple board, also insert board with photo </p>\n      <p>\n        <a routerLink=\"./list\" routerLinkActive=\"active\" class=\"btn btn-primary my-2\">Board List</a>&nbsp;\n        <a routerLink=\"./insert\" routerLinkActive=\"active\" class=\"btn btn-primary my-2\">Insert board</a>\n      </p>\n    </div>\n  </div>\n</section>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/views/board/board.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/board/board.component.ts ***!
  \************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/views/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/views/board/board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/views/board/board.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/board/board.module.ts ***!
  \*********************************************/
/*! exports provided: BoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModule", function() { return BoardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _board_detail_board_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board-detail/board-detail.component */ "./src/app/views/board/board-detail/board-detail.component.ts");
/* harmony import */ var _board_list_board_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board-list/board-list.component */ "./src/app/views/board/board-list/board-list.component.ts");
/* harmony import */ var _board_insert_form_board_insert_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board-insert-form/board-insert-form.component */ "./src/app/views/board/board-insert-form/board-insert-form.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board.component */ "./src/app/views/board/board.component.ts");
/* harmony import */ var _board_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./board-routing.module */ "./src/app/views/board/board-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");












var BoardModule = /** @class */ (function () {
    function BoardModule() {
    }
    BoardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"],
                _board_detail_board_detail_component__WEBPACK_IMPORTED_MODULE_3__["BoardDetailComponent"],
                _board_list_board_list_component__WEBPACK_IMPORTED_MODULE_4__["BoardListComponent"],
                _board_insert_form_board_insert_form_component__WEBPACK_IMPORTED_MODULE_5__["BoardInsertFormComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _board_routing_module__WEBPACK_IMPORTED_MODULE_9__["BoardRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            ],
            exports: [
                _board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"],
                _board_detail_board_detail_component__WEBPACK_IMPORTED_MODULE_3__["BoardDetailComponent"],
                _board_list_board_list_component__WEBPACK_IMPORTED_MODULE_4__["BoardListComponent"],
                _board_insert_form_board_insert_form_component__WEBPACK_IMPORTED_MODULE_5__["BoardInsertFormComponent"],
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"] //앵귤러 전용 태그 사용을 위한 스키마
            ],
        })
    ], BoardModule);
    return BoardModule;
}());



/***/ }),

/***/ "./src/app/views/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"py-5 text-center container\">\n  <div class=\"row py-lg-5\">\n    <div class=\"col-lg-6 col-md-8 mx-auto\">\n      <h1 class=\"fw-light\">LOGIN</h1>\n      <p class=\"lead text-muted\">Auth to use board service!</p>\n    </div>\n  </div>\n</section>\n<div class=\"col-md-7 col-lg-12\">\n  <form class=\"needs-validation\" [formGroup]=\"insertForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row g-3\">\n      <div class=\"col-sm-6\">\n        <label for=\"email\" class=\"form-label\">이메일</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Insert email\" formControlName=\"email\" required >\n        <div class=\"invalid-feedback\">\n          <app-form-handler *ngIf=\"insertForm.get('email').errors\" [formGroupErrors]='insertForm.get(\"email\").errors'></app-form-handler>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <label for=\"password\" class=\"form-label\">비밀번호</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" required>\n        <div class=\"invalid-feedback\">\n          <app-form-handler *ngIf=\"insertForm.get('password').errors\" [formGroupErrors]='insertForm.get(\"password\").errors'></app-form-handler>\n        </div>\n      </div>\n    </div>\n    <hr class=\"my-4\">\n    <button class=\"w-100 btn btn-primary btn-lg\" type=\"submit\" [disabled]=\"!insertForm.valid\">로그인</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, fb, router, authService) {
        this.apiService = apiService;
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiHost;
        this.insertForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.userReqModel = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.updateRequestForm = function () {
        var _a = this.insertForm.controls, email = _a.email, password = _a.password;
        this.userReqModel.email = email.value;
        this.userReqModel.password = password.value;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.updateRequestForm();
        console.log(this.userReqModel);
        this.apiService.login_api(this.userReqModel)
            .subscribe(function (response) {
            if (response.success == true) {
                console.log('성공');
                alert("로그인에 성공했습니다.");
                //login setting
                var token = _this.apiService.getLoginToken();
                _this.authService.loginSet(token);
                _this.router.navigateByUrl('/');
            }
            else {
                alert("로그인에 실패했습니다.");
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/main/main.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/main/main.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/main/main.component.html":
/*!************************************************!*\
  !*** ./src/app/views/main/main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"py-5 text-center container\">\n  <div class=\"row py-lg-5\">\n    <div class=\"col-lg-6 col-md-8 mx-auto\">\n      <h1 class=\"fw-light\">There is Main page!!</h1>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/views/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/views/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/views/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
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
    apiHost: 'http://172.30.1.34:8080/api/v1',
    //apiHost: 'http://172.30.1.58:8080/api/v1',
    clientHost: '172.30.1.34:4200',
    clientSecret: '27418175-4c00-42da-85ec-c1bc70cff130'
    //clientSecret: '3bbfbd01-f227-4fc9-bfe0-30ca85e98b2a'
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

module.exports = __webpack_require__(/*! C:\Users\admin\Documents\Server-Client-Board\board-system\board-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
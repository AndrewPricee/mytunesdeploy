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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _notfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notfound.component */ "./src/app/notfound.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _glimpse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./glimpse.component */ "./src/app/glimpse.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _notfound_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
                _glimpse_component__WEBPACK_IMPORTED_MODULE_8__["GlimpseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _notfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notfound.component */ "./src/app/notfound.component.ts");
/* harmony import */ var _glimpse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glimpse.component */ "./src/app/glimpse.component.ts");




var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot([
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'glimpse', component: _glimpse_component__WEBPACK_IMPORTED_MODULE_3__["GlimpseComponent"] },
    { path: '**', component: _notfound_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
]);


/***/ }),

/***/ "./src/app/glimpse.component.html":
/*!****************************************!*\
  !*** ./src/app/glimpse.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Showcase & Nav -->\r\n<header>\r\n    <nav class='cf'>\r\n        <ul class='cf'>\r\n            <li class=\"hide-on-small\">\r\n                <a href=\"#showcase\">myTunes</a>\r\n            </li>\r\n            <li>\r\n                <a href='#showcase'>Overview</a>\r\n            </li>\r\n            <li>\r\n                <a href='#music'>Music</a>\r\n            </li>\r\n            <li>\r\n                <a href='#video'>Video</a>\r\n            </li>\r\n            <li>\r\n                <a href='#gift-cards'>Gift Cards</a>\r\n            </li>\r\n            <li id='glimpse'>\r\n                    <a routerLink=\"/glimpse\" routerLinkActive=\"active\">\r\n                        Quick Glimpse\r\n                    </a>\r\n            </li>\r\n        </ul>\r\n        <a href='#' id='openup'>myTunes</a>\r\n    </nav>\r\n</header>\r\n\r\n<!-- Music Section -->\r\n<section id=\"music\" class=\"section\">\r\n    <div class=\"container\">\r\n        <h2 class=\"section-head\">\r\n            <i class=\"fas fa-music\"></i> Our Artists\r\n        </h2>\r\n<h3>Search Your Favourite Song / Artist</h3>\r\n        <input class=\"form-control\" type=\"search\" [formControl]=\"searchControl\"><br>\r\n\r\n        \r\n        <div *ngIf=\"isLoading\">\r\n            <i class='fa fa-spinner fa-spin fa-3x'></i>\r\n        </div>\r\n\r\n        <div *ngFor='let user of users' class=\"media\">\r\n            <div class='media-left'>\r\n                <img src=\"{{user.artworkUrl100}}\">\r\n            </div>\r\n            <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">{{user.artistName}}</h4>\r\n                album name: <a href=\"{{user.trackViewUrl}}\" target=\"_blank\">{{user.collectionName}}</a><br>\r\n\r\n                track name: <a href=\"{{user.previewUrl}}\" target=\"_blank\">{{user.trackName}}</a><br>\r\n\r\n                released: {{user.releaseDate}}\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>\r\n\r\n<!-- Footer -->\r\n<footer>\r\n    <div class=\"container\">\r\n        <div class=\"footer-cols\">\r\n            <ul>\r\n                <li>Shop & Learn</li>\r\n                <li>\r\n                    <a href=\"#\">Music</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Movies</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Shows</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Apps</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Gift Cards</a>\r\n                </li>\r\n            </ul>\r\n\r\n            <ul>\r\n                <li>Orange Store</li>\r\n                <li>\r\n                    <a href=\"#\">Find a Store</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Today at Orange</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Orange Camp</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Financing</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Order Status</a>\r\n                </li>\r\n            </ul>\r\n\r\n            <ul>\r\n                <li>Education & Business</li>\r\n                <li>\r\n                    <a href=\"#\">Orange & Education</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Shop For College</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Orange & Business</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Shop For Business</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Jobs</a>\r\n                </li>\r\n            </ul>\r\n\r\n            <ul>\r\n                <li>About Orange</li>\r\n                <li>\r\n                    <a href=\"#\">Newsroom</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Orange Leadership</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Investors</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Events</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Contact Orange</a>\r\n                </li>\r\n            </ul>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"footer-bottom text-center\">\r\n        Copyright &copy; 2018 Orange myTunes\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/glimpse.component.ts":
/*!**************************************!*\
  !*** ./src/app/glimpse.component.ts ***!
  \**************************************/
/*! exports provided: GlimpseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlimpseComponent", function() { return GlimpseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _glimpse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glimpse.service */ "./src/app/glimpse.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlimpseComponent = /** @class */ (function () {
    function GlimpseComponent(_glimpseService) {
        this._glimpseService = _glimpseService;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.isLoading = false;
        this.users = [];
    }
    GlimpseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (text) { return text.length >= 6; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (value) {
            _this.isLoading = true;
            _this._glimpseService.getGlimpseData(value)
                .subscribe(function (data) {
                _this.isLoading = false;
                _this.users = data.results;
                console.log(data.results);
            });
        });
    };
    GlimpseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'glimpse',
            template: __webpack_require__(/*! ./glimpse.component.html */ "./src/app/glimpse.component.html"),
            providers: [_glimpse_service__WEBPACK_IMPORTED_MODULE_2__["GlimpseService"]]
        }),
        __metadata("design:paramtypes", [_glimpse_service__WEBPACK_IMPORTED_MODULE_2__["GlimpseService"]])
    ], GlimpseComponent);
    return GlimpseComponent;
}());



/***/ }),

/***/ "./src/app/glimpse.service.ts":
/*!************************************!*\
  !*** ./src/app/glimpse.service.ts ***!
  \************************************/
/*! exports provided: GlimpseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlimpseService", function() { return GlimpseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlimpseService = /** @class */ (function () {
    function GlimpseService(_http) {
        this._http = _http;
    }
    GlimpseService.prototype.getGlimpseData = function (_searchTerm) {
        return this._http.get("https://itunes.apple.com/search?term=" + _searchTerm + "&limit=3");
    };
    GlimpseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], GlimpseService);
    return GlimpseService;
}());



/***/ }),

/***/ "./src/app/home.component.html":
/*!*************************************!*\
  !*** ./src/app/home.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n        <!-- Showcase & Nav -->\r\n        <div id=\"showcase\">\r\n          <header>\r\n            <nav class='cf'>\r\n              <ul class='cf'>\r\n                <li class=\"hide-on-small\">\r\n                  <a href=\"#showcase\">myTunes</a>\r\n                </li>\r\n                <li>\r\n                  <a href='#showcase'>Overview</a>\r\n                </li>\r\n                <li>\r\n                  <a href='#music'>Music</a>\r\n                </li>\r\n                <li>\r\n                  <a href='#video'>Video</a>\r\n                </li>\r\n                <li>\r\n                  <a href='#gift-cards'>Gift Cards</a>\r\n                </li>\r\n                <li id='glimpse'>\r\n                    <a routerLink=\"/glimpse\" routerLinkActive=\"active\">\r\n                        Quick Glimpse\r\n                    </a>\r\n                </li>\r\n              </ul>\r\n              <a href='#' id='openup'>myTunes</a>\r\n            </nav>\r\n          </header>\r\n          <div class=\"section-main container\">\r\n            <h1>myTunes.</h1>\r\n            <h2>Your music, movies, and TV shows take center stage.</h2>\r\n            <p class=\"lead hide-on-small\">\r\n              myTunes is the best way to organize and enjoy the music, movies, and TV shows you already have — and shop for the ones you\r\n              want. Enjoy all the entertainment myTunes has to offer on your Mac and PC.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      \r\n        <!-- Music Section -->\r\n        <section id=\"music\" class=\"section\">\r\n          <div class=\"container\">\r\n            <h2 class=\"section-head\">\r\n              <i class=\"fas fa-music\"></i> Music\r\n            </h2>\r\n            <h3>45 million songs. Zero ads.</h3>\r\n            <p class=\"lead\">Stream over 45 million songs, ad-free. Or download albums and tracks to listen to offline. All the music in your personal\r\n              myTunes library — no matter where it came from — lives right alongside the Orange Music catalog. Start your free\r\n              three-month trial with no commitment, and cancel anytime.</p>\r\n            <a href=\"#\" class=\"btn btn-primary mb\">Start Your Trial Now</a>\r\n           \r\n            <p class=\"text-light\">Orange Music is available in myTunes, and for iOS and Android devices.</p>\r\n            <!-- <img src=\"../assets/img/mockup1.png\" alt=\"\"> -->\r\n            <p id=small><a routerLink=\"/glimpse\" routerLinkActive=\"active\">\r\n                take a glimpse at our library... \r\n            </a></p>\r\n          </div>\r\n        </section>\r\n      \r\n        <!-- Video Section -->\r\n        <section id=\"video\" class=\"section bg-light\">\r\n          <div class=\"container\">\r\n            <h3>The movie and TV collection you always wished for. Granted.</h3>\r\n            <p class=\"lead\">With over 100,000 movies and TV shows to choose from, there’s always something great to watch on myTunes and if you\r\n              watch on Orange TV 4K, you’ll be able to enjoy a tremendous selection of your favorite content in 4K HDR. So get\r\n              ready to enjoy episodes of your favorite TV shows or hit movies you’ve been waiting to see — anytime, anywhere. Just\r\n              tap to play, or even download if you’re going somewhere you won’t have Wi-Fi.</p>\r\n            <a href=\"#\" class=\"btn btn-secondary\">Read More</a>\r\n            <img class=\"homeimg\" src=\"../assets/img/mockup1.png\" type=\"img\" alt=\"\">\r\n          </div>\r\n        </section>\r\n      \r\n        <!-- Entertainment Section -->\r\n        <section id=\"entertainment\" class=\"section\">\r\n          <div class=\"container\">\r\n            <h3>A world of entertainment. Available wherever you are.</h3>\r\n            <p class=\"lead\">The myTunes Store is available on all your devices, which means you can buy that catchy song you just heard or rent \r\n              that movie you’ve been meaning to see, anytime you want. And since your entire library of music, movies, and TV shows lives in myCloud, \r\n              everything you buy is immediately available, no matter how you want to play it.\r\n      \r\n            </p>\r\n          </div>\r\n        </section>\r\n      \r\n        <!-- Gift Card Section -->\r\n        <section id=\"gift-cards\" class=\"section bg-light\">\r\n          <div class=\"container\">\r\n            <div class=\"gift-cards\">\r\n              <div>\r\n                <img class=\"homeimg\" src=\"../assets/img/cards.png\" alt=\"\">\r\n              </div>\r\n              <div>\r\n                <h2>Gift Cards</h2>\r\n                <p>\r\n                    Give friends and family an App Store & myTunes Gift Card and they can choose anything from the App Store, the myTunes Store, \r\n                    and myBooks,2 or put it toward myMusic subscriptions and myCloud storage plans. You can also give them an Orange Store Gift Card \r\n                    that can be used to buy Orange hardware and accessories at any Orange Store or at <a href=\"#\">www.orange.com</a>\r\n      \r\n      \r\n                </p>\r\n                <p>Already have an Orange MyTunes Music Gift Card?</p>\r\n                <hr>\r\n                <a href=\"#\" class=\"text-secondary\">\r\n                  <i class=\"fas fa-chevron-right\"></i> Redeem\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n      \r\n        <!-- Footer -->\r\n        <footer>\r\n          <div class=\"container\">\r\n            <div class=\"footer-cols\">\r\n              <ul>\r\n                <li>Shop & Learn</li>\r\n                <li>\r\n                  <a href=\"#\">Music</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Movies</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Shows</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Apps</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Gift Cards</a>\r\n                </li>\r\n              </ul>\r\n      \r\n              <ul>\r\n                <li>Orange Store</li>\r\n                <li>\r\n                  <a href=\"#\">Find a Store</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Today at Orange</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Orange Camp</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Financing</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Order Status</a>\r\n                </li>\r\n              </ul>\r\n      \r\n              <ul>\r\n                <li>Education & Business</li>\r\n                <li>\r\n                  <a href=\"#\">Orange & Education</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Shop For College</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Orange & Business</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Shop For Business</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Jobs</a>\r\n                </li>\r\n              </ul>\r\n      \r\n              <ul>\r\n                <li>About Orange</li>\r\n                <li>\r\n                  <a href=\"#\">Newsroom</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Orange Leadership</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Investors</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Events</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Contact Orange</a>\r\n                </li>\r\n              </ul>\r\n      \r\n            </div>\r\n          </div>\r\n          <div class=\"footer-bottom text-center\">\r\n            Copyright &copy; 2018 Orange myTunes\r\n          </div>\r\n        </footer>\r\n      </body>\r\n      \r\n      \r\n      \r\n"

/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_router) {
        this._router = _router;
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/notfound.component.html":
/*!*****************************************!*\
  !*** ./src/app/notfound.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n@import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700');\r\n$nunito-font: 'Nunito', sans-serif;\r\n\r\n// mixins\r\n@mixin breakpoint($point) {\r\n    @if $point==mobile {\r\n        @media (max-width: 480px) and (min-width: 320px) {\r\n            @content ;\r\n        }\r\n    }\r\n}\r\n\r\n// keyrames\r\n@keyframes floating {\r\n    from { transform: translateY(0px); }\r\n    65%  { transform: translateY(15px); }\r\n    to   { transform: translateY(-0px); }\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody{\r\n  background-image: url('https://mars-404.templateku.co/img/star.svg'),linear-gradient(to bottom, #05007A, #4D007D);\r\n  height: 100%;\r\n  margin: 0;\r\n  background-attachment: fixed;\r\n  overflow: hidden;\r\n}\r\n\r\n.mars{\r\n  left:0;\r\n  right:0;\r\n  bottom:0;\r\n  position:absolute;\r\n  height: 27vmin;\r\n  background: url('https://mars-404.templateku.co/img/mars.svg') no-repeat bottom center;\r\n  background-size: cover;\r\n}\r\n\r\n.logo-404{\r\n  position: absolute;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  left: 0;\r\n  right: 0;\r\n  top: 16vmin;\r\n  width: 30vmin;\r\n\r\n  @include breakpoint(mobile){\r\n    top: 45vmin;\r\n  }\r\n}\r\n\r\n.meteor{\r\n  position: absolute;\r\n  right: 2vmin;\r\n  top: 16vmin;\r\n}\r\n\r\n.title{\r\n  color: white;\r\n  font-family: $nunito-font;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  font-size: 5vmin;\r\n  margin-top: 31vmin;\r\n\r\n  @include breakpoint(mobile){\r\n    margin-top: 65vmin;\r\n  }\r\n}\r\n\r\n.subtitle{\r\n  color: white;\r\n  font-family: $nunito-font;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  font-size: 3.5vmin;\r\n  margin-top: -1vmin;\r\n  margin-bottom: 9vmin;\r\n}\r\n\r\n.btn-back{\r\n  border: 1px solid white;\r\n  color: white;\r\n  height: 5vmin;\r\n  padding: 12px;\r\n  font-family: $nunito-font;\r\n  text-decoration: none;\r\n\tborder-radius: 5px;\r\n\r\n  &:hover{\r\n    background: white;\r\n    color: #4D007D;\r\n  }\r\n\r\n  @include breakpoint(mobile){\r\n    font-size: 3.5vmin;\r\n  }\r\n}\r\n\r\n.astronaut{\r\n  position: absolute;\r\n  top: 18vmin;\r\n  left: 10vmin;\r\n  height: 30vmin;\r\n\tanimation: floating 3s infinite ease-in-out;\r\n\r\n  @include breakpoint(mobile){\r\n    top: 2vmin;\r\n  }\r\n}\r\n\r\n.spaceship{\r\n  position: absolute;\r\n  bottom: 15vmin;\r\n  right: 24vmin;\r\n\r\n  @include breakpoint(mobile){\r\n    width: 45vmin;\r\n    bottom: 18vmin;\r\n  }\r\n}\r\n</style>\r\n<div class=\"mars\"></div>\r\n<img src=\"https://mars-404.templateku.co/img/404.svg\" class=\"logo-404\" />\r\n<img src=\"https://mars-404.templateku.co/img/meteor.svg\" class=\"meteor\" />\r\n<p class=\"title\">Oh no!!</p>\r\n<p class=\"subtitle\">\r\n    You’re either misspelling the URL <br /> or requesting a page that's no longer here.\r\n</p>\r\n<div align=\"center\">\r\n    <a class=\"btn-back\" href=\"#\">Back to previous page</a>\r\n</div>\r\n<img src=\"https://mars-404.templateku.co/img/astronaut.svg\" class=\"astronaut\" />\r\n<img src=\"https://mars-404.templateku.co/img/spaceship.svg\" class=\"spaceship\" />"

/***/ }),

/***/ "./src/app/notfound.component.ts":
/*!***************************************!*\
  !*** ./src/app/notfound.component.ts ***!
  \***************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound.component.html")
        })
    ], NotFoundComponent);
    return NotFoundComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! G:\mytunes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
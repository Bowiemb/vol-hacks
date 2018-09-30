webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaiterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WaiterPage = /** @class */ (function () {
    function WaiterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WaiterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WaiterPage');
    };
    WaiterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-waiter',template:/*ion-inline-start:"C:\Users\Vivian Li\Desktop\CS Stuff\Ionic\vol-hacks\skip\front-end\Skip\src\pages\waiter\waiter.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Waiting on a little extra...</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n   <div class="waiter-subtitle">Which restaurant are you in line for?</div>\n\n\n\n   <ion-card class = "restaurant-list">\n\n      <img src="assets/ChicFilA.png"/>\n\n      <ion-card-content>\n\n         <ion-card-title>\n\n            Chic-Fil-A\n\n         </ion-card-title>\n\n         <p>\n\n            A popular fast food restaurant known for its chicken biscuits.\n\n            <br>\n\n            @ UT Knoxville\n\n         </p>\n\n      </ion-card-content>\n\n   </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Vivian Li\Desktop\CS Stuff\Ionic\vol-hacks\skip\front-end\Skip\src\pages\waiter\waiter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], WaiterPage);
    return WaiterPage;
}());

//# sourceMappingURL=waiter.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/skipper/skipper.module": [
		276,
		1
	],
	"../pages/waiter/waiter.module": [
		277,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waiter_waiter__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__skipper_skipper__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    HomePage.prototype.pushWaiterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__waiter_waiter__["a" /* WaiterPage */]);
    };
    HomePage.prototype.pushSkipperPage = function () {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'origin, content-type, accept'
            })
        };
        // let first = document.getElementById('first').value;
        // let last = document.getElementById('last').value;
        console.log(this.first);
        console.log(this.last);
        var postData = {
            "fname": this.first,
            "lname": this.last
        };
        this.http.post("https://cors-anywhere.herokuapp.com/http://35.221.22.94/books/add", postData, {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        }).subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__skipper_skipper__["a" /* SkipperPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Vivian Li\Desktop\CS Stuff\Ionic\vol-hacks\skip\front-end\Skip\src\pages\home\home.html"*/'\n\n<ion-content padding>\n\n\n\n<div class="branding">\n\n   <img class="skip-title" src="assets/imgs/skip-title.png"/>\n\n\n\n   <img class="skip-logo" src="assets/imgs/skip-logo.png"/>\n\n</div>\n\n\n\n<div class="overlay">\n\n  <ion-list class="userInfo">\n\n    <ion-item>\n\n      <ion-input [(ngModel)]="first" type="text" placeholder="First Name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input [(ngModel)]="last" type="text" placeholder="Last Name"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <div class="submitButtons">\n\n    <button ion-button (click)=\'pushSkipperPage()\' class="skipButton" >Skipper</button>\n\n    <button ion-button (click)=\'pushWaiterPage()\' class="waitButton">Waiter</button>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\Vivian Li\Desktop\CS Stuff\Ionic\vol-hacks\skip\front-end\Skip\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_waiter_waiter__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_skipper_skipper__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_waiter_waiter__["a" /* WaiterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_skipper_skipper__["a" /* SkipperPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/skipper/skipper.module#SkipperPageModule', name: 'SkipperPage', segment: 'skipper', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/waiter/waiter.module#WaiterPageModule', name: 'WaiterPage', segment: 'waiter', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_waiter_waiter__["a" /* WaiterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_skipper_skipper__["a" /* SkipperPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Vivian Li\Desktop\CS Stuff\Ionic\vol-hacks\skip\front-end\Skip\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Vivian Li\Desktop\CS Stuff\Ionic\vol-hacks\skip\front-end\Skip\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkipperPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkipperPage = /** @class */ (function () {
    function SkipperPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SkipperPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SkipperPage');
    };
    SkipperPage.prototype.addOne = function (id) {
        var button1 = document.getElementById('quantity');
        var button2 = document.getElementById('quantity1');
        var val1 = Number(button1.value);
        var val2 = Number(button2.value);
        if (id == "quantity") {
            val1++;
        }
        else {
            val2++;
        }
        var element = document.getElementById('total');
        element.innerHTML = "$" + String(2.19 * val1 + 3.05 * val2);
        if (id == 'quantity') {
            button1.value = String(val1);
            button1.innerHTML = String(val1);
        }
        else {
            button2.value = String(val2);
            button2.innerHTML = String(val2);
        }
    };
    SkipperPage.prototype.removeOne = function (id) {
        if (Number(document.getElementById(id).value) > 0) {
            var button1 = document.getElementById('quantity');
            var button2 = document.getElementById('quantity1');
            var val1 = Number(button1.value);
            var val2 = Number(button2.value);
            if (id == "quantity") {
                val1--;
            }
            else {
                val2--;
            }
            var element = document.getElementById('total');
            element.innerHTML = "$" + String(2.19 * val1 + 3.05 * val2);
            if (id == 'quantity') {
                button1.value = String(val1);
                button1.innerHTML = String(val1);
            }
            else {
                button2.value = String(val2);
                button2.innerHTML = String(val2);
            }
        }
    };
    SkipperPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-skipper',template:/*ion-inline-start:"C:\Users\Vivian Li\Desktop\CS Stuff\Ionic\vol-hacks\skip\front-end\Skip\src\pages\skipper\skipper.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Skipping the line?</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div class="info">\n\n    <p class="restaurant"> Chic-Fil-A </p>\n\n    <p class="waiters"> <ion-badge class="num-waiters" item-end>2</ion-badge> Waiters </p>\n\n  </div>\n\n\n\n  <ion-card class="restaurantDiv">\n\n    <img class="restaurantImg" src="assets/imgs/ChicFilA.png"/>\n\n  </ion-card>\n\n\n\n\n\n  <hr>\n\n\n\n  <div class="itemsContainer">\n\n     <div class="item1">\n\n       <button id="removeQuantity" (click)="removeOne(\'quantity\')"> <ion-icon name="remove-circle"></ion-icon> </button>\n\n       <button id="quantity" ion-button color="light" disabled> 0 </button>\n\n       <button id="addQuantity" (click)="addOne(\'quantity\')"> <ion-icon name="add-circle"></ion-icon> </button>\n\n     </div>\n\n\n\n     <div class="item2"> <h3>Chicken Biscuit</h3> </div>\n\n     <div class="item3"> <h3>$2.19</h3> </div>\n\n   </div>\n\n\n\n   <hr>\n\n\n\n   <div class="itemsContainer">\n\n     <div class="item1">\n\n       <button (click)="removeOne(\'quantity1\')"> <ion-icon name="remove-circle"></ion-icon> </button>\n\n       <button id="quantity1" ion-button color="light" disabled> 0 </button>\n\n       <button (click)="addOne(\'quantity1\')"> <ion-icon name="add-circle"></ion-icon> </button>\n\n     </div>\n\n\n\n     <div class="item2"> <h3>Chicken Sandwich</h3> </div>\n\n     <div class="item3"> <h3>$3.05</h3> </div>\n\n   </div>\n\n\n\n </ion-content>\n\n\n\n <ion-footer>\n\n   <ion-toolbar>\n\n     <div class="itemsContainer">\n\n       <ion-title class="item1">Total:</ion-title>\n\n       <h2 id="total" class="item2"> $0.00 </h2>\n\n       <button ion-button color="secondary" class="item3"> Continue! </button>\n\n     </div>\n\n   </ion-toolbar>\n\n </ion-footer>\n\n'/*ion-inline-end:"C:\Users\Vivian Li\Desktop\CS Stuff\Ionic\vol-hacks\skip\front-end\Skip\src\pages\skipper\skipper.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SkipperPage);
    return SkipperPage;
}());

//# sourceMappingURL=skipper.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map
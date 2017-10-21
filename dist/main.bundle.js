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

module.exports = "\n<router-outlet></router-outlet>\n\n"

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
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import routing in appmodule.



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_24__angular_http__["a" /* HttpModule */]
        ],
        // inject it into any constructors
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_20__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_22__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_23__services_widget_service_client__["a" /* WidgetService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");













// config route default constants
var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    // navigate pass certain userID 显示在地址栏上
    { path: 'profile/:userId', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'profile/:userId/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'profile/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'profile/:userId/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'profile/:userId/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'profile/:userId/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
];
// use appRoutes to config router module and export it as an constant variable that
// that can be imported else where
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page\" class=\"navbar-link black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Edit Page</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"update(name,title)\"\n        routerLink=\"/profile/{{userId}}/website/{{wid}}/page\" class=\"navbar-link black\">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding\">\n\n\n      Name\n\n    <input [(ngModel)]=\"name\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Page Name\">\n\n      Title\n\n    <input [(ngModel)]=\"title\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Title\">\n\n    <a class=\"btn btn-danger btn-block\"\n       (click)=\"deletePage( pid )\"\n       routerLink=\"/profile/{{userId}}/website/{{wid}}/page\" >Delete</a>\n\n\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a\n        routerLink=\"/profile/{{userId}}\" class=\"blue\">\n        <span class=\"glyphicon glyphicon-user \"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageEditComponent = (function () {
    // inject route info in constructor
    function PageEditComponent(userService, websiteService, pageService, route) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
    }
    PageEditComponent.prototype.update = function (name, title) {
        var newPage = {
            _id: this.pid,
            name: name,
            websiteId: this.userId,
            description: title,
        };
        this.pageService.updatePage(this.pid, newPage);
    };
    PageEditComponent.prototype.deletePage = function (pageId) {
        this.pageService.deletePage(pageId);
    };
    // notify the changes of the route
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            // alert('userId: ' + this.userId);
            _this.websites = _this.websiteService.findWebsitesByUser(_this.userId);
            console.log(_this.websites);
        });
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "updateForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], PageEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n\n        <b class = grey>Pages</b>\n\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/new\" class=\"black\">\n        <span class=\"glyphicon glyphicon-plus \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid padding\"></div>\n<div *ngFor = \"let page of pages\" class=\"container-fluid \">\n  <ul routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page/{{pid}}\" class=\"list-group\">\n    <li class=\"list-group-item blue borderless\">\n\n      <a routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page/{{page._id}}/widget\">\n        {{ page.name }}\n      </a>\n\n      <a class=\"pull-right\" routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page/{{page._id}}\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<!--<div class=\"container-fluid\">-->\n  <!--<ul class=\"list-group padding\">-->\n    <!--<li class=\"list-group-item blue borderless\">-->\n      <!--<a href=\"../widget/widget-list.html\" >-->\n        <!--Blog Post-->\n      <!--</a>-->\n      <!--<a href=\"page-edit.html\" class=\"pull-right\">-->\n        <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n      <!--</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item blue borderless\">-->\n      <!--<a href=\"../widget/widget-list.html\" >-->\n        <!--Blogs-->\n      <!--</a>-->\n\n      <!--<a href=\"page-edit.html\" class=\"pull-right\">-->\n        <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n      <!--</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item blue borderless\">-->\n      <!--<a href=\"../widget/widget-list.html\" >-->\n        <!--Home-->\n      <!--</a>-->\n      <!--<a href=\"page-edit.html\" class=\"pull-right\">-->\n        <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n      <!--</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item blue borderless\">-->\n      <!--<a href=\"../widget/widget-list.html\" >-->\n        <!--About-->\n      <!--</a>-->\n      <!--<a href=\"page-edit.html\" class=\"pull-right\">-->\n        <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n      <!--</a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item blue borderless\">-->\n      <!--<a href=\"../widget/widget-list.html\" >-->\n        <!--Contact us-->\n      <!--</a>      <a href=\"page-edit.html\" class=\"pull-right\">-->\n      <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n    <!--</a>-->\n    <!--</li>-->\n\n  <!--</ul>-->\n<!--</div>-->\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"blue\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageListComponent = (function () {
    // inject route info in constructor
    function PageListComponent(userService, websiteService, pageService, route) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
    }
    // notify the changes of the route
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            // alert('userId: ' + this.userId);
            _this.websites = _this.websiteService.findWebsitesByUser(_this.userId);
            // console.log(this.websites);
            _this.pages = _this.pageService.findPageByWebsiteId(_this.wid);
        });
    };
    return PageListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageListComponent.prototype, "updateForm", void 0);
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], PageListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>New Page</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"create(pagename, title)\"\n        routerLink=\"/profile/{{userId}}/website/{{wid}}/page\" class=\"black\">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding\" >\n\n    <label>Name</label>\n    <input [(ngModel)]=\"pagename\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Page Name\"/>\n\n    <label>Title</label>\n    <input [(ngModel)]=\"title\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Title\"/>\n\n\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"blue\">\n        <span class=\"glyphicon glyphicon-user \"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageNewComponent = (function () {
    // inject route info in constructor
    function PageNewComponent(userService, websiteService, pageService, route) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
    }
    PageNewComponent.prototype.create = function (name, title) {
        var newPage = {
            _id: this.websiteService.newId(),
            name: name,
            websiteId: this.userId,
            description: title,
        };
        this.pageService.createPage(this.userId, newPage);
    };
    // notify the changes of the route
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            // alert('userId: ' + this.userId);
            _this.websites = _this.websiteService.findWebsitesByUser(_this.userId);
            console.log(_this.websites);
        });
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "createForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], PageNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n    <input ngModel\n           placeholder=\"username\"\n           name=\"username\"\n           class=\"form-control\"\n           type=\"text\"\n           required\n           #username = \"ngModel\"/>\n    <br/>\n\n    <input ngModel\n           placeholder=\"password\"\n           name=\"password\"\n           class=\"form-control\"\n           type=\"password\"\n           required\n           #password=\"ngModel\"/>\n    <br/>\n\n    <button class=\"btn btn-primary btn-block form-control\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\"\n    >Login</button>\n    <!--(click)=\"login()\"-->\n    <br/>\n\n    <button class=\"btn btn-success btn-block form-control\"\n            routerLink=\"/register\">Register</button>\n  </form>\n  <!--<form (ngSubmit) = \"login()\" #f=\"ngForm\">-->\n  <!--<input placeholder=\"username\"-->\n         <!--name=\"username\"-->\n         <!--type=\"text\"-->\n         <!--class=\"form-control\"-->\n         <!--ngModel-->\n         <!--required-->\n         <!--#username=\"ngModel\"/>-->\n  <!--<span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">-->\n    <!--Please enter username!-->\n  <!--</span>-->\n\n    <!--<input .../>-->\n    <!--<span> ...</span>-->\n    <!--<button class=\"btn btn-primary btn-block\"-->\n            <!--type=\"submit\"-->\n            <!--[disabled]=\"!f.valid\">Login</button>-->\n    <!--...-->\n  <!--</form>-->\n\n  <!--<input [(ngModel)] = \"username\"-->\n         <!--placeholder=\"username\"-->\n         <!--type=\"text\"-->\n         <!--class=\"form-control\"/>-->\n\n  <!--<input [(ngModel)]=\"password\"-->\n         <!--placeholder=\"password\"-->\n         <!--type=\"password\"-->\n         <!--class=\"form-control\"/>-->\n\n  <!--&lt;!&ndash;invoke the funciton by clicking&ndash;&gt;-->\n  <!--<button class=\"btn btn-primary btn-block\" (click)=\"login(username, password)\">Login</button>-->\n  <!--<button class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</button>-->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// below is an angular component
var LoginComponent = (function () {
    // privately declared variable
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.hello = 'Hello from the component';
        this.errorMsg = 'Invalid user name or password！';
    }
    LoginComponent.prototype.login = function () {
        // console.log('login' + username);
        // console.log(password);
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByCredentials(this.username, this.password);
        if (user) {
            // alert(user._id);
            this.router.navigate(['/profile', user._id]);
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Error';
            // alert('wrong username or password');
        }
    };
    // // function to be call from outside
    //
    // login(username: String, password: String) {
    //   // fetching data from loginForm
    //   // this.username = this.loginForm.value.username;
    //   // alert('username: ' + username);
    //   // use the router to navigate to certain components
    //   const user: User = this.userService.findUserByCredentials(username, password);
    //   // if there is a user, then navigator, will have userID passed too
    //   if (user) {
    //     this.router.navigate(['/profile', user._id]);
    //   }else {
    //     this.errorFlag = true;
    //     this.errorMsg
    //   }
    //
    //   // if (username === 'alice' && password === '123') {
    //   //   this.router.navigate(['/profile']);
    //   // }
    // }
    LoginComponent.prototype.ngOnInit = function () {
        this.title = 'This is Login Page';
        this.disabledFlag = true;
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!--<input value = \"{{user.username}}\"/>-->\n<!--<br/>-->\n\n<!--<input value = \"{{user.firstName}}\"/>-->\n\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-brand pull-left\">\n      <!--<a class=\"thick white nounderline \" href=\"../page/page-list.html\">-->\n      <b class=\"white\">Profile</b>\n      <!--</a>-->\n    </div>\n\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"update(username, firstName, lastName)\" class=\"white \"\n         routerLink=\"/profile/{{userId}}\">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n    <!--tick mark-->\n\n  </div>\n</nav>\n\n\n\n\n<!--<form id=\"updateForm\" (ngSubmit) = \"update()\" #f=\"ngForm\">-->\n  <div class=\"container\">\n\n      <div class=\"form-group padding\">\n        <label>Username</label>\n        <input [(ngModel)] = \"username\"\n               name=\"username\"\n               type=\"email\" class=\"form-control\"\n               placeholder=\"{{user.username}}\"\n               required>\n      </div>\n\n\n      <div class=\"form-group\">\n        <label>Email address</label>\n        <input [(ngModel)] = \"email\"\n               name=\"email\"\n               type=\"email\" class=\"form-control\"\n               placeholder=\"{{user.firstName}}.{{user.lastName}}@unicorn.com\"\n               required>\n      </div>\n\n\n      <div class=\"form-group\">\n        <label>First Name</label>\n        <input [(ngModel)] = \"firstName\"\n               name=\"firstName\"\n               type=\"text\"\n               class=\"form-control\"\n               placeholder=\"{{user.firstName}}\"\n               required>\n      </div>\n\n\n\n      <div class=\"form-group\">\n        <label>Last Name</label>\n        <input [(ngModel)] = \"lastName\"\n               name=\"lastName\"\n               type=\"text\"\n               class=\"form-control\"\n               placeholder=\"{{user.lastName}}\"\n               required>\n      </div>\n\n    <a class=\"btn btn-primary btn-block\"\n       routerLink=\"website\">Websites</a>\n    <a class=\"btn btn-danger btn-block \"\n       routerLink=\"/login\" >Logout</a>\n\n  </div>\n<!--</form>-->\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user \"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    // inject route info in constructor
    function ProfileComponent(userService, activatedRouter) {
        this.userService = userService;
        this.activatedRouter = activatedRouter;
    }
    ProfileComponent.prototype.update = function (username, firstName, lastName) {
        // console.log(user);
        // this.username = this.updateForm.value.username;
        // this.firstName = this.updateForm.value.firstName;
        // this.lastName = this.updateForm.value.lastName;
        // this.email = this.updateForm.value.email;
        var updatedUser = {
            _id: this.userId,
            username: username,
            password: this.user.password,
            firstName: firstName,
            lastName: lastName
            // email: this.email,
        };
        console.log(updatedUser);
        this.userService.updateUser(this.userId, updatedUser);
    };
    // notify the changes of the route
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.user = _this.userService.findUserById(_this.userId);
            _this.username = _this.user.username;
            // alert('userId: ' + this.userId);
        });
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "updateForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <h1>Register</h1>\n\n\n  <!--<input [(ngModel)] = \"username\"-->\n         <!--placeholder=\"username\"-->\n         <!--type=\"text\"-->\n         <!--class=\"form-control\"/>-->\n  <!--<input [(ngModel)]=\"password\"-->\n          <!--placeholder=\"password\"-->\n         <!--type=\"password\"-->\n         <!--class=\"form-control\"/>-->\n  <!--<input [(ngModel)]=\"passwordvalid\"-->\n          <!--placeholder=\"verify password\"-->\n         <!--type=\"password\"-->\n         <!--class=\"form-control\"/>-->\n  <!--<a class=\"btn btn-primary btn-block\" (click)=\"register(username, password, passwordvalid)\">Register</a>-->\n  <!--<a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Cancel</a>-->\n\n\n\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n    <input ngModel\n           placeholder=\"username\"\n           name=\"username\"\n           class=\"form-control\"\n           type=\"text\"\n           required\n           #username = \"ngModel\"/>\n\n\n    <input ngModel\n           placeholder=\"password\"\n           name=\"password\"\n           class=\"form-control\"\n           type=\"password\"\n           required\n           #password=\"ngModel\"/>\n\n\n    <input ngModel\n           placeholder=\"verify password\"\n           name=\"passwordvalid\"\n           class=\"form-control\"\n           type=\"password\"\n           required\n           #passwordvalid=\"ngModel\"/>\n\n\n\n    <button class=\"btn btn-primary btn-block\"\n            type = \"submit\"\n            [disabled]=\"!f.valid\">Register</button>\n\n    <button class=\"btn btn-danger btn-block\" routerLink=\"/login\">Cancel</button>\n\n  </form>\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    // function to be call from register
    RegisterComponent.prototype.register = function () {
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.passwordvalid = this.registerForm.value.passwordvalid;
        // if there is a user, then navigator, will have userID passed too
        if (this.userService.findUserByUsername(this.username)) {
            alert('Username "' + this.username + '" already exists');
            this.router.navigate(['/register']);
        }
        else if (this.password !== this.passwordvalid) {
            alert('Please validate your password!');
            this.router.navigate(['/register']);
        }
        else {
            var newUser = {
                _id: this.userService.newId(),
                username: this.username,
                password: this.password,
                firstName: '',
                lastName: ''
            };
            this.userService.createUser(newUser);
            this.router.navigate(['profile', newUser._id]);
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.title = 'This is Register Page';
        this.disabledFlag = true;
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Top navbar -->\n<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n\n    <!--<div class=\"navbar-text pull-left\">-->\n    <!--<span class=\"glyphicon glyphicon-chevron-left white pull-left\"></span>-->\n    <!--</div>-->\n\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <div class=\"navbar-text pull-left\">\n          <a routerLink=\"/profile/{{userId}}/website\" class=\"white\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3 hidden-xs\">\n\n        <div class=\"navbar-brand pull-left\">\n          <!--<a href=\"website-new.html\" class=\"white\">-->\n          <b class=\"white\">Websites</b>\n          <!--</a>-->\n        </div>\n\n        <div class=\"navbar-text pull-right\">\n          <span class=\"glyphicon glyphicon-plus white \"></span>\n        </div>\n        <!--</p>-->\n\n      </div>\n\n      <div class=\"col-sm-8\">\n\n        <!--heading on the nav bar-->\n        <div class=\"navbar-brand pull-left\">\n          <div class=\"thick white\">\n            <b>Edit Website</b>\n          </div>\n        </div>\n        <!--tick mark-->\n        <div class=\"navbar-text pull-right\">\n          <a (click)=\"update(name)\"\n            routerLink= \"/profile/{{userId}}/website\" class=\"white\">\n            <span class=\"glyphicon glyphicon-ok \"></span>\n          </a>\n        </div>\n\n      </div>\n\n    </div>\n  </nav>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n      <div class=\"padding\"></div>\n      <ul *ngFor = \"let website of websites\"  class=\"list-group \">\n        <li class=\"list-group-item blue borderless\">\n\n          <!--<a routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page\">-->\n          {{ website.name }}\n          <!--</a>-->\n\n          <a class=\"pull-right\" >\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-sm-8 padding\">\n      <div class=\"container-fluid\">\n\n          <b>Website Name</b>\n\n        <input [(ngModel)]=\"name\"\n                class=\"form-control\"\n                type=\"text\"\n                placeholder=\"Website Name\">\n\n\n          <b>Website Description</b>\n\n        <textarea class=\"form-control\" placeholder=\"Description\" rows=\"6\"></textarea>\n\n        <a (click)=\"deleteWebsite(this.wid)\"\n          class=\"btn btn-danger btn-block \" routerLink=\"/profile/{{userId}}/website\" >\n          Delete\n        </a>\n\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user \"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteEditComponent = (function () {
    // inject route info in constructor
    function WebsiteEditComponent(websiteService, route, activatedRoute) {
        this.websiteService = websiteService;
        this.route = route;
        this.activatedRoute = activatedRoute;
    }
    WebsiteEditComponent.prototype.update = function (name) {
        var newWebsite = {
            _id: this.wid,
            name: name,
            developerId: this.userId,
            description: '',
        };
        this.websiteService.updateWebsite(this.wid, newWebsite);
        // updateWebsite
    };
    WebsiteEditComponent.prototype.deleteWebsite = function (id) {
        this.websiteService.deleteWebsite(id);
    };
    // notify the changes of the route
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            // alert('userId: ' + this.userId);
            _this.websites = _this.websiteService.findWebsitesByUser(_this.userId);
        });
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "updateForm", void 0);
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{ userId }}\" class=\"white\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </p>\n\n    <div class=\"navbar-brand pull-left\">\n      <b class=\"white\">Websites</b>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{ userId }}/website/new\" class=\"white\">\n        <span class=\"glyphicon glyphicon-plus \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"padding\"></div>\n<div *ngFor = \"let website of websites\" class=\"container-fluid \">\n  <ul routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page\" class=\"list-group\">\n    <li class=\"list-group-item blue borderless\">\n\n      <a routerLink=\"/profile/{{ userId }}/website/{{ website._id }}/page\">\n        {{ website.name }}\n      </a>\n\n      <a class=\"pull-right\" routerLink=\"/profile/{{ userId }}/website/{{ website._id }}\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{ userId }}\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteListComponent = (function () {
    // inject route info in constructor
    function WebsiteListComponent(userService, websiteService, route) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.route = route;
    }
    // notify the changes of the route
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            // alert('userId: ' + this.userId);
            _this.websites = _this.websiteService.findWebsitesByUser(_this.userId);
            console.log(_this.websites);
        });
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WebsiteListComponent);

var _a, _b, _c;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Top navbar -->\n<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <div class=\"navbar-text pull-left\">\n          <a routerLink=\"/profile/{{ userId }}/website\" class=\"white\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3 hidden-xs\">\n        <div class=\"navbar-brand pull-left\">\n          <!--<a href=\"../page/page-list.html\" class=\"white\">-->\n          <b class=\"white\">Websites</b>\n          <!--</a>-->\n        </div>\n        <div  class=\"navbar-text pull-right white\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </div>\n        <!--</p>-->\n      </div>\n\n      <div class=\"col-sm-8\">\n        <!--heading on the nav bar-->\n        <div class=\"navbar-brand pull-left\">\n          <div class=\"thick white\">\n            <b>New Website</b>\n          </div>\n        </div>\n        <!--tick mark-->\n        <div class=\"navbar-text pull-right\">\n          <a (click)=\"create()\" routerLink=\"/profile/{{ userId }}/website\" class=\"white\">\n            <span class=\"glyphicon glyphicon-ok \"></span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n  </nav>\n</div>\n\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <div class=\"padding\"></div>\n      <ul *ngFor = \"let website of websites\"  class=\"list-group \">\n        <li class=\"list-group-item blue borderless\">\n\n          <!--<a routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page\">-->\n          {{ website.name }}\n          <!--</a>-->\n\n          <a class=\"pull-right\" >\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </ul>\n\n    </div>\n\n\n    <div class=\"col-sm-8 padding\">\n      <form (ngSubmit) = \"create()\" #f=\"ngForm\">\n        <div class=\"container-fluid\">\n\n            <b>Name</b>\n\n          <input ngModel\n                 placeholder=\"Website name\"\n                 name=\"websitename\"\n                 class=\"form-control\"\n                 type=\"text\"\n                 required\n                 #websitename = \"ngModel\"/>\n\n            <b>Description</b>\n\n          <textarea class=\"form-control\" placeholder=\"Description\" rows=\"6\"></textarea>\n\n          <!--<button class=\"btn btn-primary btn-block\"-->\n                  <!--type = \"submit\"-->\n                  <!--routerLink=\"/profile/{{ userId }}/website\"-->\n                  <!--[disabled]=\"!f.valid\"> test </button>-->\n\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{ userId }}\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = (function () {
    // inject route info in constructor
    function WebsiteNewComponent(websiteService, route, activatedRoute) {
        this.websiteService = websiteService;
        this.route = route;
        this.activatedRoute = activatedRoute;
    }
    WebsiteNewComponent.prototype.create = function () {
        this.websitename = this.createForm.value.websitename;
        var newWebsite = {
            _id: this.websiteService.newId(),
            name: this.websitename,
            developerId: this.userId,
            description: '',
        };
        this.websiteService.createWebsite(this.userId, newWebsite);
    };
    // notify the changes of the route
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            // alert('userId: ' + this.userId);
            _this.websites = _this.websiteService.findWebsitesByUser(_this.userId);
        });
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "createForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget/\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Choose Widget</b>\n      </div>\n    </div>\n\n    <!--&lt;!&ndash;tick mark&ndash;&gt;-->\n    <!--<div class=\"navbar-text pull-right\">-->\n    <!--<a href=\"website-new.html\" class=\"navbar-link\">-->\n    <!--<span class=\"glyphicon glyphicon-plus black\"></span>-->\n    <!--</a>-->\n    <!--</div>-->\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group padding \">\n\n    <div class=\"list-group-item blue nounderline borderless\">\n      <a href=\"widget-heading.html\">Header</a>\n    </div>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      Lable\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      HTML\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      Text Input\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      Link\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      Button\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      <a href=\"widget-image.html\">Image</a>\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      <a href=\"widget-youtube.html\">YouTube</a>\n\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      Data Table\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      Repeater\n    </li>\n\n\n\n  </ul>\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <!--<a href=\"profile.view.client.html\">-->\n      <span class=\"glyphicon glyphicon-user blue\"></span>\n      <!--</a>-->\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetChooserComponent = (function () {
    // inject route info in constructor
    function WidgetChooserComponent(userService, websiteService, pageService, route) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
    }
    // notify the changes of the route
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            // alert('userId: ' + this.userId);
            _this.websites = _this.websiteService.findWebsitesByUser(_this.userId);
            // console.log(this.websites);
            _this.pages = _this.pageService.findPageByWebsiteId(_this.wid);
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], WidgetChooserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a href=\"widget-list.html\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Widget Edit</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a href=\"widget-list.html\" class=\"black\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group padding\">\n      Name\n    <input class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Page Name\">\n\n      Text\n    <input class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Text\">\n\n      URL\n    <input class=\"form-control\"\n           type=\"text\"\n           placeholder=\"https://youtu.be/6EyvcFOck0E\">\n\n      Width\n    <input class=\"form-control\"\n           type=\"text\"\n           placeholder=\"100%\">\n\n    <a class=\"btn btn-danger btn-block\"\n       href=\"widget-list.html\" >Delete</a>\n\n  </ul>\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <!--<a href=\"../user/profile.view.client.html\">-->\n      <span class=\"glyphicon glyphicon-user blue\"></span>\n      <!--</a>-->\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
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

var WidgetEditComponent = (function () {
    function WidgetEditComponent() {
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetEditComponent);

//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a href=\"widget-list.html\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Widget Edit</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a href=\"widget-list.html\" class=\"black\">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group padding\">\n\n      Name\n\n    <input class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Page Name\">\n\n\n      Text\n\n    <input class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Text\">\n\n      Size\n    <input class=\"form-control\"\n           type=\"text\"\n           placeholder=\"5\">\n\n    <a class=\"btn btn-danger btn-block\"\n       href=\"widget-list.html\" >Delete</a>\n\n  </ul>\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <!--<a href=\"../user/profile.view.client.html\">-->\n      <span class=\"glyphicon glyphicon-user blue\"></span>\n      <!--</a>-->\n    </div>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
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

var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent() {
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetHeaderComponent);

//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a href=\"widget-list.html\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Widget Edit</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a href=\"widget-list.html\" class=\"black\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group padding\">\n      Name\n    <input class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Page Name\">\n\n      Text\n    <input class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Text\">\n\n      URL\n    <input class=\"form-control\"\n           type=\"text\"\n           placeholder=\"http://lorempixel.com/800/400/sports\">\n\n      Width\n    <input class=\"form-control\"\n           type=\"text\"\n           placeholder=\"100%\">\n\n\n      Upload\n    <input class=\"form-control\"\n           type=\"file\">\n\n    <div class=\"btn btn-primary btn-block\"\n    >Upload Image</div>\n\n    <a class=\"btn btn-danger btn-block\"\n       href=\"widget-list.html\" >Delete</a>\n\n  </ul>\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <!--<a href=\"../user/profile.view.client.html\">-->\n      <span class=\"glyphicon glyphicon-user blue\"></span>\n      <!--</a>-->\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
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

var WidgetImageComponent = (function () {
    function WidgetImageComponent() {
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetImageComponent);

//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-youtube works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
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

var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent() {
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetYoutubeComponent);

//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Widgets</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget/new\"\n         class=\"black\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid\">\n  <!--<ul class=\"list-group padding\">-->\n  <div class=\"jpa-widget\">\n    <div class=\"jpa-toolbar\">\n      <div>\n        <span class=\"glyphicon glyphicon-menu-hamburger black pull-right\"></span>\n        <a href=\"widget-heading.html\" class=\"blue\">\n          <span class=\"glyphicon glyphicon-cog  pull-right\"></span>\n        </a>\n      </div>\n    </div>\n    <h1>GIZMODO</h1>\n  </div>\n\n\n  <div class=\"jpa-widget\">\n    <div class=\"jpa-toolbar\">\n      <div>\n        <span class=\"glyphicon glyphicon-menu-hamburger black pull-right\"></span>\n        <a href=\"widget-heading.html\" class=\"blue\">\n          <span class=\"glyphicon glyphicon-cog  pull-right\"></span>\n        </a>\n      </div>\n    </div>\n    <p><a href=\"http://jalopnik.com/tag/tesla\" target=\"_blank\" rel=\"noopener\">Tesla</a> CEO <a href=\"http://jalopnik.com/tag/elon-musk\" target=\"_blank\" rel=\"noopener\">Elon Musk</a> was on Twitter again, this time calling out Daimler following the company’s announcement that it would<a href=\"http://jalopnik.com/very-bad-germans-at-daimler-plan-1-billion-investment-1818654847#_ga=2.29619770.405789552.1504644494-237114337.1501879443\" target=\"_blank\" rel=\"noopener\"> invest $1 billion in its Alabama plant </a>to manufacture its upcoming electric vehicles. Musk tweeted that Daimler should invest much more, and today it responded directly to him by saying it would.…<span class=\"read-more-placeholder\"></span></p>\n  </div>\n\n  <div class=\"jpa-widget\">\n    <div class=\"jpa-toolbar\">\n      <div>\n        <span class=\"glyphicon glyphicon-menu-hamburger black pull-right\"></span>\n        <a href=\"widget-image.html\" class=\"blue\">\n          <span class=\"glyphicon glyphicon-cog  pull-right\"></span>\n        </a>\n      </div>\n    </div>\n\n    <img width=\"100%\" src=\"http://lorempixel.com/800/400/sports\"/>\n\n  </div>\n\n\n  <div class=\"jpa-widget\">\n    <div class=\"jpa-toolbar\">\n      <div>\n        <span class=\"glyphicon glyphicon-menu-hamburger black pull-right\"></span>\n        <a href=\"widget-heading.html\" class=\"blue\">\n          <span class=\"glyphicon glyphicon-cog  pull-right\"></span>\n        </a>\n      </div>\n    </div>\n\n    <p><a href=\"http://jalopnik.com/tag/tesla\" target=\"_blank\" rel=\"noopener\">Tesla</a> CEO <a href=\"http://jalopnik.com/tag/elon-musk\" target=\"_blank\" rel=\"noopener\">Elon Musk</a> was on Twitter again, this time calling out Daimler following the company’s announcement that it would<a href=\"http://jalopnik.com/very-bad-germans-at-daimler-plan-1-billion-investment-1818654847#_ga=2.29619770.405789552.1504644494-237114337.1501879443\" target=\"_blank\" rel=\"noopener\"> invest $1 billion in its Alabama plant </a>to manufacture its upcoming electric vehicles. Musk tweeted that Daimler should invest much more, and today it responded directly to him by saying it would.…<span class=\"read-more-placeholder\"></span></p>\n\n  </div>\n\n\n\n  <div class=\"jpa-widget\">\n\n    <div class=\"jpa-toolbar\">\n      <div>\n        <span class=\"glyphicon glyphicon-menu-hamburger black pull-right\"></span>\n        <a href=\"widget-youtube.html\" class=\"blue\">\n          <span class=\"glyphicon glyphicon-cog  pull-right\"></span>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"videoWrapper\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/6EyvcFOck0E\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n\n  </div>\n\n  <div class=\"jpa-widget padding-b\">\n    <div class=\"jpa-toolbar\">\n      <div>\n        <span class=\"glyphicon glyphicon-menu-hamburger black pull-right\"></span>\n        <a href=\"widget-heading.html\" class=\"blue\">\n          <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n      </div>\n    </div>\n\n    <p><a href=\"http://jalopnik.com/tag/tesla\" target=\"_blank\" rel=\"noopener\">Tesla</a> CEO <a href=\"http://jalopnik.com/tag/elon-musk\" target=\"_blank\" rel=\"noopener\">Elon Musk</a> was on Twitter again, this time calling out Daimler following the company’s announcement that it would<a href=\"http://jalopnik.com/very-bad-germans-at-daimler-plan-1-billion-investment-1818654847#_ga=2.29619770.405789552.1504644494-237114337.1501879443\" target=\"_blank\" rel=\"noopener\"> invest $1 billion in its Alabama plant </a>to manufacture its upcoming electric vehicles. Musk tweeted that Daimler should invest much more, and today it responded directly to him by saying it would.…<span class=\"read-more-placeholder\"></span></p>\n\n  </div>\n\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-text pull-left\">\n\n      <span class=\"glyphicon glyphicon-play black\"></span>\n\n    </div>\n\n    <div class=\"navbar-text pull-left\">\n\n      <span class=\"glyphicon glyphicon-eye-open black\"></span>\n\n    </div>\n\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"blue\">\n        <span class=\"glyphicon glyphicon-user \"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetListComponent = (function () {
    // inject route info in constructor
    function WidgetListComponent(userService, websiteService, pageService, route) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
    }
    // notify the changes of the route
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            // alert('userId: ' + this.userId);
            _this.websites = _this.websiteService.findWebsitesByUser(_this.userId);
            // console.log(this.websites);
            _this.pages = _this.pageService.findPageByWebsiteId(_this.wid);
        });
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], WidgetListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
// executed on client
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// make class usable for all components
var PageService = (function () {
    function PageService() {
        // users are a group of json objects, here will be user(data structure)
        this.pages = [
            { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
        ];
        // api = {
        //   'createPage' : this.createPage,
        //   'findPageById': this.findPageById
        // };
    }
    // adds the page parameter instance to the local pages array. The new
    // page's websiteId is set to the websiteId parameter
    PageService.prototype.newId = function () {
        return (Number(this.pages[this.pages.length - 1]._id) + 1).toString();
    };
    PageService.prototype.createPage = function (websiteId, page) {
        this.pages.push(page);
    };
    // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var pages = [];
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                pages.push(this.pages[x]);
            }
        }
        return pages;
    };
    // retrieves the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.findPageById = function (pageId) {
        var pages = [];
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                pages.push(this.pages[x]);
            }
        }
        return pages;
    };
    // updates the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x].name = page.name;
                this.pages[x].description = page.description;
            }
        }
    };
    // removes the page from local pages array whose _id matches the pageId parameter
    PageService.prototype.deletePage = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages.splice(x, 1);
            }
        }
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], PageService);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
// executed on client
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// make class usable for all components
var UserService = (function () {
    function UserService() {
        // users are a group of json objects, here will be user(data structure)
        this.users = [
            { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder' },
            { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley' },
            { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' },
            { _id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi' }
        ];
        // api = {
        //   'createUser' : this.createUser,
        //   'findUserById': this.findUserById
        // };
    }
    UserService.prototype.newId = function () {
        return (Number(this.users[this.users.length - 1]._id) + 1).toString();
    };
    // adds the user parameter instance to the local users array
    UserService.prototype.createUser = function (user) {
        this.users.push(user);
        return user;
    };
    // define validating function
    // findUserByCredentials(username, password) {
    //   return this.users.find(function (user) {
    //     return user.username === username && user.password === password;
    //   });
    // }
    // returns the user whose username and password match the username and password parameters
    UserService.prototype.findUserByCredentials = function (username, password) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username && this.users[x].password === password) {
                return this.users[x];
            }
        }
        alert('Invalid username or password!');
    };
    // returns the user in local users array whose _id matches the userId parameter
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    // updates the user in local users array whose _id matches the userId parameter
    UserService.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === user._id) {
                this.users[x] = user;
                // this.users[x].firstName = user.firstName;
                // this.users[x].lastName = user.lastName;
            }
        }
    };
    // removes the user whose _id matches the userId parameter
    UserService.prototype.deleteUser = function (userId) {
        // let users: User[]=[];
        // for (let x = 0; x < this.users.length; x++) {
        //     users.push(this.users[x]);
        // }
        // for (let x = 0; x < this.users.length; x++) {
        //   this.users.pop();
        // }
        //
        // for (let x = 0; x < this.users.length; x++) {
        //     if(users[x]._id != userId){
        //       this.users.push(users[x]);
        //     }
        // }
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users.splice(x, 1);
            }
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], UserService);

//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
// executed on client
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// make class usable for all components
var WebsiteService = (function () {
    function WebsiteService() {
        // users are a group of json objects, here will be user(data structure)
        this.websites = [
            { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' }
        ];
        // api = {
        //   'createWebsite' : this.createWebsite,
        //   'findWebsitesById': this.findWebsitesById,
        //   'updateWebsites': this.updateWebsite
        // };
    }
    // generate a number for website._id
    WebsiteService.prototype.newId = function () {
        return (Number(this.websites[this.websites.length - 1]._id) + 1).toString();
    };
    // adds the website parameter instance to the local websites array.
    // The new website's developerId is set to the userId parameter
    WebsiteService.prototype.createWebsite = function (userId, website) {
        this.websites.push(website);
    };
    // retrieves the websites in local websites array whose developerId matches the parameter userId
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        // initiate the array
        var webs = [];
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                webs.push(this.websites[x]);
            }
        }
        return webs;
    };
    // retrieves the website in local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.findWebsitesById = function (websiteId) {
        var webs = this.websites;
        for (var x = 0; x < this.websites.length; x++) {
            webs.pop();
        }
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                webs.push(this.websites[x]);
            }
        }
        return webs;
    };
    // updates the website in local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites[x].name = website.name;
                this.websites[x].description = website.description;
                this.websites[x].developerId = website.developerId;
            }
        }
    };
    // removes the website from local websites array whose _id matches thewebsiteId parameter
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites.splice(x, 1);
            }
        }
        // return this.websites;
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], WebsiteService);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
// executed on client
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// make class usable for all components
var WidgetService = (function () {
    function WidgetService() {
        // users are a group of json objects, here will be user(data structure)
        this.widget = [];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetById': this.findWidgetById
        };
    }
    // adds the widget parameter instance to the local widgets array. The
    // new widget's pageId is set to the pageId parameter
    WidgetService.prototype.createWidget = function (pageId, widget) {
        this.widget.push(widget);
    };
    // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        for (var x = 0; x < this.widget.length; x++) {
            if (this.widget[x].pageId === pageId) {
                return this.widget[x];
            }
        }
    };
    // retrieves the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var x = 0; x < this.widget.length; x++) {
            if (this.widget[x]._id === widgetId) {
                return this.widget[x];
            }
        }
    };
    // updates the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widget.length; x++) {
            if (this.widget[x]._id === widgetId) {
                this.widget[x].widgetType = widget.widgetType;
                this.widget[x].pageId = widget.pageId;
                this.widget[x].size = widget.size;
                this.widget[x].text = widget.text;
                this.widget[x].url = widget.url;
            }
        }
    };
    // removes the widget from local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var x = 0; x < this.widget.length; x++) {
            if (this.widget[x]._id === widgetId) {
                this.widget.splice(x, 1);
            }
        }
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], WidgetService);

//# sourceMappingURL=widget.service.client.js.map

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
    production: false,
    baseUrl: 'http://localhost:3100'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
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
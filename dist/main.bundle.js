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

module.exports = "\n<router-outlet></router-outlet>\n\n\n\n\n<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">-->\n  <!--<h1>-->\n    <!--Welcome to {{title}}!-->\n  <!--</h1>-->\n  <!--<img width=\"300\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">-->\n<!--</div>-->\n<!--<h2>Here are some links to help you start: </h2>-->\n<!--<ul>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>-->\n  <!--</li>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>-->\n  <!--</li>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" href=\"http://angularjs.blogspot.ca/\">Angular blog</a></h2>-->\n  <!--</li>-->\n<!--</ul>-->\n\n"

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
        // template: `<router-outlet></router-outlet>`,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_flickr_service_clients__ = __webpack_require__("../../../../../src/app/services/flickr.service.clients.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
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
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_27__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_32_ngx_quill_editor__["a" /* QuillEditorModule */],
        ],
        // inject it into any constructors
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_20__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_22__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_23__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_26__services_test_service_client__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_29__services_flickr_service_clients__["a" /* FlickrService */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
















// config route default constants
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_14__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
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
    { path: 'profile/:userId/website/:wid/page/:pid/widget/:wgid/flickr', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] },
];
// use appRoutes to config router module and export it as an constant variable that
// that can be imported else where
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n\n  <h3 >\n    <a routerLink=\"./login\">Login</a>\n  </h3>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

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

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page\" class=\"navbar-link black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Edit Page</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"update(name, title)\"\n         class=\"navbar-link black\">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding\">\n\n  <b>Name</b>\n\n    <input [(ngModel)]=\"name\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"page name\">\n\n  <b>Tile</b>\n\n    <input [(ngModel)]=\"title\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"page title\">\n\n    <a class=\"btn btn-danger btn-block\"\n       (click)=\"deletePage(this.wid, this.pid)\"\n       routerLink=\"/profile/{{userId}}/website/{{wid}}/page\" >Delete</a>\n\n\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a\n        routerLink=\"/profile/{{userId}}\" class=\"blue\">\n        <span class=\"glyphicon glyphicon-user \"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

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
    function PageEditComponent(userService, websiteService, pageService, router, route) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.router = router;
        this.route = route;
    }
    PageEditComponent.prototype.update = function (name, title) {
        var _this = this;
        var newPage = {
            _id: this.pid,
            name: name,
            websiteId: this.userId,
            description: title,
        };
        this.pageService.updatePage(this.wid, this.pid, newPage)
            .subscribe(function (pages) {
            // this.pages = pages;
            _this.router.navigate(['profile', _this.userId, 'website', _this.wid, 'page']);
        });
    };
    // deletePage(pageId) {
    //   this.pageService.deletePage(pageId);
    // }
    PageEditComponent.prototype.deletePage = function (websiteId, pageId) {
        var _this = this;
        this.pageService.deletePage(websiteId, pageId)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
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
            _this.pageService.findPageById(_this.wid, _this.pid)
                .subscribe(function (page) {
                _this.page = page;
            });
            _this.pageService.findPagesByWebsiteId(_this.wid)
                .subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "updateForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
], PageEditComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n\n        <b class = grey>Pages</b>\n\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/new\" class=\"black\">\n        <span class=\"glyphicon glyphicon-plus \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid padding\"></div>\n<div *ngFor = \"let page of pages\" class=\"container-fluid \">\n  <ul routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page/{{pid}}\" class=\"list-group\">\n    <li class=\"list-group-item blue borderless\">\n\n      <a routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page/{{page._id}}/widget\">\n        {{ page.name }}（ website name: {{ page._website.name}} ）\n      </a>\n\n      <a class=\"pull-right\" routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page/{{page._id}}\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </li>\n  </ul>\n</div>\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"blue\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

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
            _this.wid = params['wid'];
            _this.websiteService.findWebsitesByUser(_this.userId)
                .subscribe(function (websites) {
                _this.websites = websites;
                console.log(websites);
            });
            _this.pageService.findPagesByWebsiteId(_this.wid)
                .subscribe(function (data) {
                _this.pages = data;
                console.log(data);
            });
            // this.pages = this.pageService.findPageByWebsiteId(this.wid);
        });
    };
    return PageListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
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

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>New Page</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"create(pagename, title)\"\n        class=\"black\">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding\" >\n\n    <label>Name</label>\n    <input [(ngModel)]=\"pagename\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Page Name\"/>\n\n    <label>Title</label>\n    <input [(ngModel)]=\"title\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Title\"/>\n\n\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"blue\">\n        <span class=\"glyphicon glyphicon-user \"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

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
    function PageNewComponent(userService, websiteService, pageService, route, router) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
        this.router = router;
    }
    PageNewComponent.prototype.create = function (name, title) {
        var _this = this;
        var newPage = {
            _id: this.websiteService.newId(),
            name: name,
            websiteId: this.wid,
            description: title,
        };
        this.pageService.createPage(this.wid, newPage).
            subscribe(function (pages) {
            _this.pages = pages;
            _this.router.navigate(['profile', _this.userId, 'website', _this.wid, 'page']);
        });
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
            // this.websites = this.websiteService.findWebsitesByUser(this.userId);
            console.log(_this.websites);
        });
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "createForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object])
], PageNewComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

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
    // api function for login
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        // calling and subscribe dynamic result from the http function located in user.service.client
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            if (user) {
                // alert(user._id);
                _this.router.navigate(['/profile/', user._id]);
            }
            else {
                _this.errorFlag = true;
                _this.errorMsg = 'Error';
                alert('wrong username or password');
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.title = 'This is Login Page';
        this.disabledFlag = true;
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
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

module.exports = "\n\n<!--<input value = \"{{user.username}}\"/>-->\n<!--<br/>-->\n\n<!--<input value = \"{{user.firstName}}\"/>-->\n\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-brand pull-left\">\n      <!--<a class=\"thick white nounderline \" href=\"../page/page-list.html\">-->\n      <b class=\"white\">Profile</b>\n      <!--</a>-->\n    </div>\n\n    <div class=\"navbar-text pull-right\">\n      <a (click)= \"update ()\" class=\"white \">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n    <!--tick mark-->\n\n  </div>\n</nav>\n\n\n<!--<form id=\"updateForm\" (ngSubmit) = \"update()\" #f=\"ngForm\">-->\n  <div class=\"container\">\n\n    <form #f=\"ngForm\">\n\n        <div class=\"form-group padding\">\n          <label>Username</label>\n          <input [(ngModel)] = \"username\"\n                 name=\"username\"\n                 type=\"email\" class=\"form-control\"\n                 placeholder=\"alice\"\n                 required>\n        </div>\n\n\n        <div class=\"form-group\">\n          <label>Email address</label>\n          <input [(ngModel)] = \"email\"\n                 name=\"email\"\n                 type=\"email\" class=\"form-control\"\n                 placeholder=\"a@unicorn.com\"\n                 required>\n        </div>\n\n\n        <div class=\"form-group\">\n          <label>First Name </label>\n          <input [(ngModel)] = \"firstName\"\n                 name=\"firstName\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 placeholder = \"firstName\"\n                 required>\n        </div>\n\n\n\n        <div class=\"form-group\">\n          <label>Last Name</label>\n          <input [(ngModel)] = \"lastName\"\n                 name=\"lastName\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 placeholder = \"lastName\"\n                 required>\n        </div>\n    </form>\n\n    <a class=\"btn btn-primary btn-block\"\n       routerLink=\"website\">Websites</a>\n    <a class=\"btn btn-danger btn-block \"\n       routerLink=\"/login\" >Logout</a>\n\n    <a (click)=\"deleteUser()\"\n      class=\"btn btn-danger btn-block \" routerLink=\"/login\" >Delete User</a>\n\n  </div>\n<!--</form>-->\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function ProfileComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    ProfileComponent.prototype.update = function () {
        var _this = this;
        // console.log(user);
        this.username = this.updateForm.value.username;
        this.firstName = this.updateForm.value.firstName;
        this.lastName = this.updateForm.value.lastName;
        this.email = this.updateForm.value.email;
        var updatedUser = {
            _id: this.userId,
            username: this.username,
            password: this.user.password,
            firstName: this.firstName,
            lastName: this.lastName
            // email: this.email,
        };
        console.log(updatedUser);
        this.userService.updateUser(this.userId, updatedUser).
            subscribe(function (newuser) {
            // console.log(status);
            _this.user = newuser;
            console.log(_this.user);
        });
    };
    ProfileComponent.prototype.deleteUser = function () {
        this.userService.deleteUser(this.userId).subscribe(function (status) {
            console.log(status);
        });
    };
    // notify the changes of the route
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        // this.user = this.userService.findUserById(this.userId);
        this.userService.findUserById(this.userId).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
        // alert('userId: ' + this.userId);
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
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
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.passwordvalid = this.registerForm.value.passwordvalid;
        this.userService.findUserByUsername(this.username)
            .subscribe(function (user) {
            if (user) {
                alert('Username "' + _this.username + '" already exists');
                _this.router.navigate(['/register']);
            }
            else if (_this.password !== _this.passwordvalid) {
                alert('Please validate your password!');
                _this.router.navigate(['/register']);
            }
            else {
                var newUser = {
                    _id: _this.userService.newId(),
                    username: _this.username,
                    password: _this.password,
                    firstName: '',
                    lastName: ''
                };
                _this.userService.createUser(newUser).subscribe(function (auser) {
                    _this.user = auser;
                    console.log(_this.user);
                    _this.router.navigate(['profile', _this.user._id]);
                });
                // this.router.navigate(['profile', this.user._id]);
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.title = 'This is Register Page';
        this.disabledFlag = true;
        // this.userService.findUserByUsername(this.username)
        //   .subscribe((user) => {
        //     this.user = user;
        //   });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
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

module.exports = "\n<!--Top navbar -->\n<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n\n    <!--<div class=\"navbar-text pull-left\">-->\n    <!--<span class=\"glyphicon glyphicon-chevron-left white pull-left\"></span>-->\n    <!--</div>-->\n\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <div class=\"navbar-text pull-left\">\n          <a routerLink=\"/profile/{{userId}}/website\" class=\"white\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3 hidden-xs\">\n\n        <div class=\"navbar-brand pull-left\">\n          <!--<a href=\"website-new.html\" class=\"white\">-->\n          <b class=\"white\">Websites</b>\n          <!--</a>-->\n        </div>\n\n        <div class=\"navbar-text pull-right\">\n          <span class=\"glyphicon glyphicon-plus white \"></span>\n        </div>\n        <!--</p>-->\n\n      </div>\n\n      <div class=\"col-sm-8\">\n\n        <!--heading on the nav bar-->\n        <div class=\"navbar-brand pull-left\">\n          <div class=\"thick white\">\n            <b>Edit Website</b>\n          </div>\n        </div>\n        <!--tick mark-->\n        <div class=\"navbar-text pull-right\">\n          <a (click)=\"update(name)\" class=\"white\">\n            <span class=\"glyphicon glyphicon-ok \"></span>\n          </a>\n        </div>\n\n      </div>\n\n    </div>\n  </nav>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n      <div class=\"padding\"></div>\n      <ul *ngFor = \"let website of websites\"  class=\"list-group \">\n        <li class=\"list-group-item blue borderless\">\n\n          <!--<a routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page\">-->\n          {{ website.name }}\n          <!--</a>-->\n\n          <a class=\"pull-right\" >\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-sm-8 padding\">\n      <div class=\"container-fluid\">\n\n          <b>Website Name</b>\n\n        <input [(ngModel)]=\"name\"\n                class=\"form-control\"\n                type=\"text\"\n                placeholder=\"website name\">\n\n\n          <b>Website Description</b>\n\n        <textarea class=\"form-control\" placeholder=\"Description\" rows=\"6\"></textarea>\n\n        <a (click)=\"deleteWebsite()\"\n          class=\"btn btn-danger btn-block\" >\n          Delete\n        </a>\n\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user \"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

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
    function WebsiteEditComponent(websiteService, route, router, activatedRoute) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    WebsiteEditComponent.prototype.update = function (name) {
        var _this = this;
        var newWebsite = {
            _id: this.wid,
            name: name,
            developerId: this.userId,
            description: '',
        };
        this.websiteService.updateWebsite(this.wid, newWebsite)
            .subscribe(function (status) {
            _this.router.navigate(['profile', _this.userId, 'website']);
            console.log(status);
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.userId, this.wid)
            .subscribe(function (websites) {
            _this.router.navigate(['profile', _this.userId, 'website']);
        });
    };
    // notify the changes of the route
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            // alert('userId: ' + this.userId);
            // this.websites = this.websiteService.findWebsitesByUser(this.userId);
            _this.websiteService.findWebsitesByUser(_this.userId)
                .subscribe(function (websites) {
                _this.websites = websites;
            });
            _this.websiteService.findWebsiteById(_this.userId, _this.wid)
                .subscribe(function (website) {
                _this.website = website;
            });
        });
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "updateForm", void 0);
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{ userId }}\" class=\"white\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </p>\n\n    <div class=\"navbar-brand pull-left\">\n      <b class=\"white\">Websites</b>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{ userId }}/website/new\" class=\"white\">\n        <span class=\"glyphicon glyphicon-plus \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"padding\"></div>\n<div *ngFor = \"let website of websites\" class=\"container-fluid \">\n  <ul routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page\" class=\"list-group\">\n    <li class=\"list-group-item blue borderless\">\n\n      <a routerLink=\"/profile/{{ userId }}/website/{{ website._id }}/page\">\n        {{ website.name }}         (username: {{ website._user.username}} )\n      </a>\n\n      <a class=\"pull-right\" routerLink=\"/profile/{{ userId }}/website/{{ website._id }}\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{ userId }}\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

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
    function WebsiteListComponent(websiteService, route, userService) {
        this.websiteService = websiteService;
        this.route = route;
        this.userService = userService;
    }
    // notify the changes of the route
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            // alert('userId: ' + this.userId);
            _this.websiteService.findWebsitesByUser(_this.userId)
                .subscribe(function (websites) {
                _this.websites = websites;
                console.log(websites);
            });
            // console.log(this.websites);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
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

module.exports = "\n<!--Top navbar -->\n<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <div class=\"navbar-text pull-left\">\n          <a routerLink=\"/profile/{{ userId }}/website\" class=\"white\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3 hidden-xs\">\n        <div class=\"navbar-brand pull-left\">\n          <!--<a href=\"../page/page-list.html\" class=\"white\">-->\n          <b class=\"white\">Websites</b>\n          <!--</a>-->\n        </div>\n        <div  class=\"navbar-text pull-right white\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </div>\n        <!--</p>-->\n      </div>\n\n      <div class=\"col-sm-8\">\n        <!--heading on the nav bar-->\n        <div class=\"navbar-brand pull-left\">\n          <div class=\"thick white\">\n            <b>New Website</b>\n          </div>\n        </div>\n        <!--tick mark-->\n        <div class=\"navbar-text pull-right\">\n          <a (click)=\"create()\"  class=\"white\" >\n            <span class=\"glyphicon glyphicon-ok \"></span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n  </nav>\n</div>\n\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <div class=\"padding\"></div>\n      <ul *ngFor = \"let website of websites\"  class=\"list-group \">\n        <li class=\"list-group-item blue borderless\">\n\n          <!--<a routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page\">-->\n          {{ website.name }}\n          <!--</a>-->\n\n          <a class=\"pull-right\" >\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </ul>\n\n    </div>\n\n\n    <div class=\"col-sm-8 padding\">\n      <form (ngSubmit) = \"create()\" #f=\"ngForm\">\n        <div class=\"container-fluid\">\n\n            <b>Name</b>\n\n          <input ngModel\n                 placeholder=\"Website name\"\n                 name=\"websitename\"\n                 class=\"form-control\"\n                 type=\"text\"\n                 required\n                 #websitename = \"ngModel\"/>\n\n            <b>Description</b>\n\n          <textarea class=\"form-control\" placeholder=\"Description\" rows=\"6\"></textarea>\n\n          <!--<button class=\"btn btn-primary btn-block\"-->\n                  <!--type = \"submit\"-->\n                  <!--routerLink=\"/profile/{{ userId }}/website\"-->\n                  <!--[disabled]=\"!f.valid\"> test </button>-->\n\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{ userId }}\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

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
    function WebsiteNewComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
    }
    WebsiteNewComponent.prototype.create = function () {
        var _this = this;
        this.websitename = this.createForm.value.websitename;
        var newWebsite = {
            _id: this.websiteService.newId(),
            name: this.websitename,
            developerId: this.userId,
            description: '',
        };
        this.websiteService.createWebsite(this.userId, newWebsite)
            .subscribe(function (websites) {
            // this.websites = websites;
            _this.router.navigate(['profile', _this.userId, 'website']);
        });
    };
    // notify the changes of the route
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            // alert('userId: ' + this.userId);
            // this.websites = this.websiteService.findWebsitesByUser(this.userId);
        });
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "createForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
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

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget/\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Choose Widget</b>\n      </div>\n    </div>\n\n    <!--&lt;!&ndash;tick mark&ndash;&gt;-->\n    <!--<div class=\"navbar-text pull-right\">-->\n    <!--<a href=\"website-new.html\" class=\"navbar-link\">-->\n    <!--<span class=\"glyphicon glyphicon-plus black\"></span>-->\n    <!--</a>-->\n    <!--</div>-->\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group padding \">\n\n    <!--<li class=\"list-group-item blue nounderline borderless\">-->\n      <!--<a (click)=\"createHeader(this.pid)\">Header</a>-->\n    <!--</li>-->\n\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      <a (click) = \"createWidget('HEADING')\">\n         Header\n      </a>\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      <a (click) = \"createWidget('IMAGE')\">\n         Image\n      </a>\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      <a (click) = \"createWidget('YOUTUBE')\">\n         YouTube\n      </a>\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      <a (click) = \"createWidget('HTML')\">\n        Html\n      </a>\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      <a (click) = \"createWidget('INPUT')\">\n        Text Input\n      </a>\n    </li>\n\n\n    <!--<li class=\"list-group-item blue nounderline borderless\">-->\n      <!--Lable-->\n    <!--</li>-->\n\n    <!--<li class=\"list-group-item blue nounderline borderless\">-->\n      <!--HTML-->\n    <!--</li>-->\n\n    <!--<li class=\"list-group-item blue nounderline borderless\">-->\n      <!--Text Input-->\n    <!--</li>-->\n\n    <!--<li class=\"list-group-item blue nounderline borderless\">-->\n      <!--Link-->\n    <!--</li>-->\n\n    <!--<li class=\"list-group-item blue nounderline borderless\">-->\n      <!--Button-->\n    <!--</li>-->\n\n    <!--<li class=\"list-group-item blue nounderline borderless\">-->\n      <!--<a (click)=\"createImage(this.pid)\">Image</a>-->\n    <!--</li>-->\n\n    <!--<li class=\"list-group-item blue nounderline borderless\">-->\n      <!--<a (click)=\"createYoutube(this.pid)\">Youtube</a>-->\n    <!--</li>-->\n\n    <!--<li class=\"list-group-item blue nounderline borderless\">-->\n      <!--Data Table-->\n    <!--</li>-->\n\n    <!--<li class=\"list-group-item blue nounderline borderless\">-->\n      <!--Repeater-->\n    <!--</li>-->\n\n\n\n  </ul>\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <!--<a href=\"profile.view.client.html\">-->\n      <span class=\"glyphicon glyphicon-user blue\"></span>\n      <!--</a>-->\n    </div>\n  </div>\n</nav>\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetChooserComponent(userService, websiteService, pageService, route, router, widgetService) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.defaultWidgetValues = {
            'HEADING': {
                name: '',
                _id: this.widgetService.newId(),
                widgetType: 'HEADING',
                pageId: this.pid,
                size: 0,
                text: 'text',
                width: '100%',
                url: 'undefined'
            },
            'IMAGE': {
                name: '',
                _id: this.widgetService.newId(),
                widgetType: 'IMAGE',
                pageId: this.pid,
                size: 0,
                text: 'text',
                width: '100%',
                url: 'undefined'
            },
            'YOUTUBE': {
                name: '',
                _id: this.widgetService.newId(),
                widgetType: 'YOUTUBE',
                pageId: this.pid,
                size: 0,
                text: 'text',
                width: '100%',
                url: 'undefined'
            },
            'HTML': {
                name: '',
                _id: this.widgetService.newId(),
                widgetType: 'HTML',
                pageId: this.pid,
                size: 0,
                text: 'HTML',
                width: '100%',
                url: 'undefined'
            },
            'INPUT': {
                name: '',
                _id: this.widgetService.newId(),
                widgetType: 'INPUT',
                pageId: this.pid,
                size: 0,
                text: 'INPUT',
                width: '100%',
                url: 'undefined'
            }
        };
    }
    WidgetChooserComponent.prototype.createHeader = function (pageId) {
        var _this = this;
        var newWidget = {
            name: '',
            _id: this.widgetService.newId(),
            widgetType: 'HEADING',
            pageId: this.pid,
            size: 0,
            text: 'text',
            width: '100%',
            url: 'url'
        };
        this.widgetService.createWidget(pageId, newWidget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['profile/' + _this.userId + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/' + newWidget._id]);
        });
    };
    WidgetChooserComponent.prototype.createImage = function (pageId) {
        var _this = this;
        var newWidget = {
            name: '',
            _id: this.widgetService.newId(),
            widgetType: 'IMAGE',
            pageId: this.pid,
            size: 0,
            text: 'text',
            width: '100%',
            url: 'url'
        };
        this.widgetService.createWidget(pageId, newWidget)
            .subscribe(function (widgets) {
            _this.router.navigate(['profile/' + _this.userId + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/' + newWidget._id]);
        });
    };
    WidgetChooserComponent.prototype.createYoutube = function (pageId) {
        var _this = this;
        var newWidget = {
            name: '',
            _id: this.widgetService.newId(),
            widgetType: 'YOUTUBE',
            pageId: this.pid,
            size: 0,
            text: 'text',
            width: '100%',
            url: 'undefined'
        };
        this.widget = newWidget;
        this.widgetService.createWidget(pageId, newWidget)
            .subscribe(function (widgets) {
            _this.router.navigate(['profile/' + _this.userId + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/' + newWidget._id]);
        });
    };
    WidgetChooserComponent.prototype.createWidget = function (widgetType) {
        var _this = this;
        this.widget = this.defaultWidgetValues[widgetType];
        this.widgetService.createWidget(this.pid, this.widget)
            .subscribe(function (newWidget) {
            _this.widget = newWidget;
            _this.router.navigate(['profile/' + _this.userId + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/' + _this.widget._id]);
        }, function (error) { return console.log(error); });
    };
    // notify the changes of the route
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            // this.widgetService.findAllWidgetsForPageId(this.pid)
            //   .subscribe((widgets: Widget[]) => {
            //     this.widgets = widgets;
            //   });
            // this.widgetService.findWidgetById(this.wgid)
            //   .subscribe((widget) => {
            //     this.widget = widget;
            //   });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__["a" /* WidgetService */]) === "function" && _f || Object])
], WidgetChooserComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "\n<!--<nav class=\"navbar navbar-light2 navbar-fixed-top\">-->\n  <!--<div class=\"container-fluid\">-->\n\n    <!--&lt;!&ndash;heading on the nav bar&ndash;&gt;-->\n    <!--<div class=\"navbar-text pull-left\">-->\n      <!--<a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget\" class=\"black\">-->\n        <!--<span class=\"glyphicon glyphicon-chevron-left \"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n\n    <!--<div class=\"navbar-brand pull-left\">-->\n      <!--<div class=\"thick grey\">-->\n        <!--<b>Widget Edit</b>-->\n      <!--</div>-->\n    <!--</div>-->\n\n    <!--&lt;!&ndash;tick mark&ndash;&gt;-->\n    <!--<div class=\"navbar-text pull-right\">-->\n      <!--<a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget\" class=\"black\">-->\n        <!--<span class=\"glyphicon glyphicon-ok\"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n\n  <!--</div>-->\n<!--</nav>-->\n\n\n<div class=\"container-fluid \">\n\n  <!--<div [ngSwitch] = \"widget.widgetType\">-->\n\n    <!--<div *ngSwitchCase = \"'HEADING'\">-->\n      <!--{{widget.text}}-->\n      <app-widget-header *ngIf=\"widget.type ==='HEADING'\"></app-widget-header>\n    <!--</div>-->\n\n    <!--<div *ngSwitchCase = \"'IMAGE'\">-->\n      <!--{{widget.size}}-->\n      <app-widget-image *ngIf=\"widget.type ==='IMAGE'\"></app-widget-image>\n    <!--</div>-->\n\n    <!--<div *ngSwitchCase = \"'HTML'\">-->\n      <app-widget-html *ngIf=\"widget.type ==='HTML'\"></app-widget-html>\n    <!--</div>-->\n\n    <!--<div *ngSwitchCase = \"'YOUTUBE'\">-->\n      <!--{{widget.url}}-->\n      <app-widget-youtube *ngIf=\"widget.type ==='YOUTUBE'\"></app-widget-youtube>\n    <!--</div>-->\n\n      <app-widget-text *ngIf=\"widget.type ==='INPUT'\"></app-widget-text>\n\n\n\n\n  <!--</div>-->\n</div>\n\n\n\n<!--<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">-->\n  <!--<div class=\"container-fluid\">-->\n    <!--<div class=\"navbar-text pull-right\">-->\n      <!--&lt;!&ndash;<a href=\"../user/profile.view.client.html\">&ndash;&gt;-->\n      <!--<span class=\"glyphicon glyphicon-user blue\"></span>-->\n      <!--&lt;!&ndash;</a>&ndash;&gt;-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</nav>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetEditComponent(userService, websiteService, widgetService, pageService, route) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.route = route;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                console.log(widget);
            });
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], WidgetEditComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Widget Edit</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateHeader(name, text, size)\" class=\"black\">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding\">\n\n      Name\n      <input [(ngModel)]=\"name\"\n             class=\"form-control\"\n             type=\"text\"\n             placeholder=\"Name\"/>\n\n     Text\n      <input [(ngModel)]=\"text\"\n             class=\"form-control\"\n             type=\"text\"\n             placeholder=\"Text\"/>\n\n      Size\n      <input [(ngModel)]=\"size\"\n             class=\"form-control\"\n             type=\"Number\"\n             placeholder=\"Size\"/>\n\n\n    <a class=\"btn btn-danger btn-block\"\n       (click)=\"deleteWidget(this.pid, this.wgid)\">Delete</a>\n\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <!--<a href=\"../user/profile.view.client.html\">-->\n      <span class=\"glyphicon glyphicon-user blue\"></span>\n      <!--</a>-->\n    </div>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    // inject route info in constructor
    function WidgetHeaderComponent(userService, websiteService, pageService, route, widgetService, router) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.updateHeader = function (name, text, size) {
        var _this = this;
        var newWidget = {
            name: name,
            _id: this.wgid,
            widgetType: this.widget.widgetType,
            pageId: this.pid,
            size: size,
            text: text,
            width: this.widget.url,
            url: this.widget.url
        };
        this.widgetService.updateWidget(this.pid, this.wgid, newWidget)
            .subscribe(function (widgets) {
            _this.router.navigate(['profile/' + _this.userId + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
        });
    };
    WidgetHeaderComponent.prototype.deleteWidget = function (pageId, widgetId) {
        var _this = this;
        this.widgetService.deleteWidget(pageId, widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['profile/' + _this.userId + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
        });
    };
    // notify the changes of the route
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            // this.widgetService.findAllWidgetsForPageId(this.pid)
            //   .subscribe((widgets: Widget[]) => {
            //     this.widgets = widgets;
            //   });
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                console.log(widget);
            });
        });
    };
    return WidgetHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__["a" /* Widget */]) === "function" && _a || Object)
], WidgetHeaderComponent.prototype, "widget", void 0);
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__["a" /* WidgetService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _g || Object])
], WidgetHeaderComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Widget Edit</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateHeader(name, text, size)\" class=\"black\">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid padding\">\n\n  <quill-editor [(ngModel)]=\"editorContent\"\n                [options]=\"editorOptions\"\n                (blur)=\"onEditorBlured($event)\"\n                (focus)=\"onEditorFocused($event)\"\n                (ready)=\"onEditorCreated($event)\"\n                (change)=\"onContentChanged($event)\"></quill-editor>\n\n\n  <br/>\n\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteWidget(this.pid, this.wgid)\">Delete</a>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(userService, websiteService, pageService, route, widgetService, router) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.editorContent = "<h3>I am Example content</h3>";
        this.editorOptions = {
            placeholder: 'insert content...'
        };
    }
    WidgetHtmlComponent.prototype.onEditorBlured = function (quill) {
        console.log('editor blur!', quill);
    };
    WidgetHtmlComponent.prototype.onEditorFocused = function (quill) {
        console.log('editor focus!', quill);
    };
    WidgetHtmlComponent.prototype.onEditorCreated = function (quill) {
        this.editor = quill;
        console.log('quill is ready! this is current quill instance object', quill);
    };
    WidgetHtmlComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        console.log('quill content is changed!', quill, html, text);
    };
    WidgetHtmlComponent.prototype.deleteWidget = function (pageId, widgetId) {
        var _this = this;
        this.widgetService.deleteWidget(pageId, widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['profile/' + _this.userId + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
        });
    };
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                console.log(widget);
            });
        });
    };
    return WidgetHtmlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__["a" /* Widget */]) === "function" && _a || Object)
], WidgetHtmlComponent.prototype, "widget", void 0);
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__["a" /* WidgetService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _g || Object])
], WidgetHtmlComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\" class=\"white\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </p>\n\n    <div class=\"navbar-brand pull-left\">\n      <b class=\"white\">Search Flickr</b>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid padding\">\n\n\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\"\n           type=\"text\" class=\"form-control\"\n           placeholder=\"Let's see!\">\n    <span class=\"input-group-btn padding-b\">\n           <a (click)=\"searchPhotos(searchText)\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n           </a>\n   </span>\n  </div>\n\n\n  <div class=\"row\">\n    <div *ngFor = \"let pic of photos['photo']\"\n         class=\"col-xs-4\">\n      <img    (click)=\"selectPhoto(pic)\"\n              width=\"100%\"\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n      <p></p>\n    </div>\n  </div>\n\n\n\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{ userId }}\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_flickr_service_clients__ = __webpack_require__("../../../../../src/app/services/flickr.service.clients.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(route, router, widgetService, http, service) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.http = http;
        this.service = service;
    }
    FlickrImageSearchComponent.prototype.searchPhotos = function (searchText) {
        var _this = this;
        this.service
            .searchPhotos(searchText)
            .subscribe(function (data) {
            console.log(data);
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            console.log(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = {
            websiteId: this.wid,
            pageId: this.pid,
            url: url
        };
    };
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
        });
    };
    return FlickrImageSearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], FlickrImageSearchComponent.prototype, "wid", void 0);
FlickrImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_flickr_service_clients__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_flickr_service_clients__["a" /* FlickrService */]) === "function" && _e || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=flickr-image-search.component.js.map

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

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Widget Edit</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateImage(name, text, url, width)\" class=\"black\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding\">\n\n    Name\n    <input [(ngModel)]=\"name\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Name\"/>\n\n    Text\n    <input [(ngModel)]=\"text\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"text\"/>\n\n    URL\n    <input [(ngModel)]=\"url\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"url\">\n\n    Width\n    <input [(ngModel)]=\"width\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"100%\"/>\n\n\n    <!--Upload-->\n    <!--<input class=\"form-control\"-->\n           <!--type=\"file\">-->\n\n    <!--<div class=\"btn btn-primary btn-block\">Upload Image</div>-->\n\n\n    Upload\n    <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n      <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n      <input  name=\"widgetId\" value=\"{{wgid}}\"   style=\"display: none\"/>\n      <input  name=\"websiteId\" value=\"{{wid}}\"   style=\"display: none\"/>\n      <input  name=\"pageId\" value=\"{{pid}}\"   style=\"display: none\"/>\n      <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n      <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n      <br/>\n    </form>\n\n\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteWidget(this.pid, this.wgid)\">Delete</a>\n\n  <br/>\n\n  <a class=\"btn btn-success btn-block\"\n     routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}/flickr\">Search</a>\n\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <!--<a href=\"../user/profile.view.client.html\">-->\n      <span class=\"glyphicon glyphicon-user blue\"></span>\n      <!--</a>-->\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    // inject route info in constructor
    function WidgetImageComponent(userService, websiteService, pageService, route, router, widgetService, http) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.http = http;
        this.images = [];
    }
    WidgetImageComponent.prototype.updateImage = function (name, text, url, width) {
        var _this = this;
        var newWidget = {
            name: name,
            _id: this.wgid,
            widgetType: this.widget.widgetType,
            pageId: this.pid,
            size: this.widget.size,
            text: text,
            width: width,
            url: url
        };
        this.widgetService.updateWidget(this.pid, this.wgid, newWidget)
            .subscribe(function (widgets) {
            _this.router.navigate(['profile/' + _this.userId + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
        });
    };
    WidgetImageComponent.prototype.deleteWidget = function (pageId, widgetId) {
        var _this = this;
        this.widgetService.deleteWidget(pageId, widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['profile/' + _this.userId + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
        });
    };
    // notify the changes of the route
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].baseUrl;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            // this.widgetService.findAllWidgetsForPageId(this.pid)
            //   .subscribe((widgets: Widget[]) => {
            //     this.widgets = widgets;
            //   });
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                // this.wgid = widget._id;
            });
            _this.http.get('http://localhost:3100/api/upload')
                .map(function (response) {
                return response.json();
            })
                .subscribe(function (images) {
                _this.images = images;
                console.log(images);
            });
        });
    };
    return WidgetImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__["a" /* Widget */]) === "function" && _a || Object)
], WidgetImageComponent.prototype, "widget", void 0);
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__["a" /* WidgetService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */]) === "function" && _h || Object])
], WidgetImageComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Widget Edit</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateHeader(name, text, size)\" class=\"black\">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid padding\">\n\n  Text\n  <input [(ngModel)]=\"widget.text\" class=\"form-control\"/>\n\n  Rows\n  <input [(ngModel)]=\"widget.rows\" class=\"form-control\" type=\"number\"/>\n  <label for=\"Name\">Name</label>\n  <div>\n    <input [(ngModel)]=\"widget.name\"\n           type=\"text\"\n           class=\"form-control\"\n           id=\"Name\"\n           name=\"name\"\n           placeholder=\"Name\">\n  </div>\n\n  Placeholder\n  <input [(ngModel)]=\"widget.placeholder\" class=\"form-control\" required/>\n  <p></p>\n  <div class=\"input-group\">\n    <input type=\"text\"\n           readonly\n           value=\"Formatted\"\n           class=\"form-control\"/>\n    <span class=\"input-group-addon\">\n     <input [(ngModel)]=\"widget.formatted\"\n            type=\"checkbox\"/>\n    </span>\n  </div>\n\n\n  <br/>\n\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteWidget(this.pid, this.wgid)\">Delete</a>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WidgetTextComponent = (function () {
    function WidgetTextComponent(userService, websiteService, pageService, route, widgetService, router) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetTextComponent.prototype.deleteWidget = function (pageId, widgetId) {
        var _this = this;
        this.widgetService.deleteWidget(pageId, widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['profile/' + _this.userId + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
        });
    };
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                console.log(widget);
            });
        });
    };
    return WidgetTextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], WidgetTextComponent.prototype, "widget", void 0);
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__["a" /* WidgetService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object])
], WidgetTextComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=widget-text.component.js.map

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

module.exports = "<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Widget Edit</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateYoutube(name, text, url, width)\" class=\"black\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding\">\n\n      Name\n    <input [(ngModel)]=\"name\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Name\"/>\n      Text\n    <input [(ngModel)]=\"text\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Text\"/>\n      URL\n    <input [(ngModel)]=\"url\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"url\">\n\n      Width\n    <input [(ngModel)]=\"width\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"100%\">\n\n\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteWidget(this.pid, this.wgid)\">Delete</a>\n\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <!--<a href=\"../user/profile.html\">-->\n      <span class=\"glyphicon glyphicon-user blue\"></span>\n      <!--</a>-->\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    // inject route info in constructor
    function WidgetYoutubeComponent(userService, websiteService, pageService, route, router, widgetService) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetYoutubeComponent.prototype.updateYoutube = function (name, text, url, width) {
        var _this = this;
        var newWidget = {
            name: name,
            _id: this.wgid,
            widgetType: this.widget.widgetType,
            pageId: this.pid,
            size: this.widget.size,
            text: text,
            width: width,
            url: url
        };
        this.widgetService.updateWidget(this.pid, this.wgid, newWidget)
            .subscribe(function (widgets) {
            _this.router.navigate(['profile/' + _this.userId + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
        });
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function (pageId, widgetId) {
        var _this = this;
        this.widgetService.deleteWidget(pageId, widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['profile/' + _this.userId + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
        });
    };
    // notify the changes of the route
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                console.log(widget);
            });
            console.log(_this.widget);
        });
    };
    return WidgetYoutubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__["a" /* Widget */]) === "function" && _a || Object)
], WidgetYoutubeComponent.prototype, "widget", void 0);
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_widget_service_client__["a" /* WidgetService */]) === "function" && _g || Object])
], WidgetYoutubeComponent);

var _a, _b, _c, _d, _e, _f, _g;
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

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Widgets</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget/new\"\n         class=\"black\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding-b\" >\n\n  <div *ngFor = \"let widget of widgets\" class=\"container-fluid\">\n\n    <div class=\"jpa-widget\">\n      <div class=\"jpa-toolbar\">\n        <div>\n          <span class=\"glyphicon glyphicon-menu-hamburger black pull-right\"></span>\n          <a class=\"blue\" routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page/{{pid}}/widget/{{widget._id}}\" >\n            <span class=\"glyphicon glyphicon-cog  pull-right\"></span>\n          </a>\n        </div>\n      </div>\n\n        <!--<ul routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page/{{pid}}/widget\" class=\"list-group\">-->\n          <!--<li class=\"list-group-item blue borderless\">-->\n\n            <a class=\"blue\">\n\n              <!--{{ widget.text }}-->\n\n              <!--{{ widget.widgetType }}-->\n\n              <div [ngSwitch] = \"widget.type\">\n\n                <div *ngSwitchCase = \"'HEADING'\">\n                  <h1>{{widget.text}}</h1>\n                  <br/>\n                </div>\n\n                <div *ngSwitchCase = \"'IMAGE'\">\n                  Image url:  {{ widget.url }}\n                  <img class=\"e2e-trusted-url padding-b\" width=\"100%\" src=\"{{ widget.url }}\"/>\n\n                  <br/>\n                </div>\n\n                <div *ngSwitchCase = \"'HTML'\">\n                  <!--<a href=\"{{widget.url}}\" class> <div>{{widget.text}}</div> </a>-->\n                  <h2>{{widget.text}}</h2>\n                  <br/>\n                </div>\n\n                <!--<div *ngSwitchCase = \"'INPUT'\">-->\n                  <!--&lt;!&ndash;<a href=\"{{widget.url}}\" class> <div>{{widget.text}}</div> </a>&ndash;&gt;-->\n                  <!--<h2>{{widget.text}}</h2>-->\n                  <!--<br/>-->\n                <!--</div>-->\n\n                <div *ngSwitchCase=\"'INPUT'\">\n                  <div *ngIf=\"widget.formatted\">\n                    <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n                  </div>\n                  <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                         placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n                  <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                            rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                            class=\"form-control\">{{widget.text}}</textarea>\n                </div>\n\n\n                <div *ngSwitchCase = \"'YOUTUBE'\">\n                  <div class=\"videoWrapper\">\n                    <iframe  class=\"e2e-iframe-trusted-src padding-b\" width=\"560\" height=\"315\"\n                             [src] = updateVideoUrl(widget.url) frameborder=\"0\" allowfullscreen></iframe>\n                    <br/>\n                  </div>\n                </div>\n              </div>\n            </a>\n\n      <!--{{widget.text}}-->\n\n            <!--<a class=\"pull-right\" routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page/{{pid}}/widget/{{widget._id}}\">-->\n              <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n            <!--</a>-->\n          <!--</li>-->\n        <!--</ul>-->\n\n    </div>\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-text pull-left\">\n\n      <span class=\"glyphicon glyphicon-play black\"></span>\n\n    </div>\n\n    <div class=\"navbar-text pull-left\">\n\n      <span class=\"glyphicon glyphicon-eye-open black\"></span>\n\n    </div>\n\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"blue\">\n        <span class=\"glyphicon glyphicon-user \"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
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
    function WidgetListComponent(userService, websiteService, widgetService, pageService, route, sanitizer) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.route = route;
        this.sanitizer = sanitizer;
    }
    // createWidget(pageId) {
    //   const newWidget: Widget = {
    //     _id: this.widgetService.newId(),
    //     widgetType: '',
    //     pageId: this.pid,
    //     size: 0,
    //     text: '',
    //     width: '',
    //     url: ''
    //   };
    //   this.widgetService.createWidget(pageId, newWidget)
    //     .subscribe( (widgets) => {
    //       this.widgets = widgets;
    //     });
    // }
    // sanitizer youtuber url
    WidgetListComponent.prototype.updateVideoUrl = function (url) {
        // const aurl = 'https://www.youtube.com/embed/qdA32j7_U6U';
        return this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
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
            // this.websites = this.websiteService.findWebsitesByUser(this.userId);
            // console.log(this.websites);
            // this.pages = this.pageService.findPageByWebsiteId(this.wid);
            // this.widgets = this.widgetService.findWidgetsByPageId(this.pid);
            _this.widgetService.findAllWidgetsForPageId(_this.pid)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
                console.log(_this.widgets);
            });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _f || Object])
], WidgetListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
// define widget class field and export for global use
var Widget = (function () {
    function Widget(name, _id, widgetType, pageId, size, text, width, url) {
        this.name = name;
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.width = width;
        this.url = url;
    }
    return Widget;
}());

//# sourceMappingURL=widget.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.clients.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// make class usable for all components
var FlickrService = (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '8b20a16ffcd0e29b01491639115b67d7';
        this.secret = '7daccaf4f367e9f4';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.clients.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// make class usable for all components
var PageService = (function () {
    function PageService(http) {
        this.http = http;
    }
    // adds the page parameter instance to the local pages array. The new
    // page's websiteId is set to the websiteId parameter
    PageService.prototype.newId = function () {
        return (Number(Math.floor((Math.random()) * 10000))).toString();
    };
    PageService.prototype.createPage = function (websiteId, page) {
        var url = 'http://localhost:3100/api/website/' + websiteId + '/page';
        return this.http.post(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        var url = 'http://localhost:3100/api/website/' + websiteId + '/page';
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    // retrieves the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.findPageById = function (websiteId, pageId) {
        var url = 'http://localhost:3100/api/website/' + websiteId + '/page/' + pageId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    // updates the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.updatePage = function (websiteId, pageId, page) {
        var url = 'http://localhost:3100/api/website/' + websiteId + '/page/' + pageId;
        return this.http.put(url, page).map(function (response) {
            return response.json();
        });
    };
    // removes the page from local pages array whose _id matches the pageId parameter
    PageService.prototype.deletePage = function (websiteId, pageId) {
        var url = 'http://localhost:3100/api/website/' + websiteId + '/page/' + pageId;
        return this.http.delete(url).map(function (response) {
            return response.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
// executed on client
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// make class usable for all components
var UserService = (function () {
    // users are a group of json objects, here will be user(data structure)
    // users: User[] = [
    //   {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder' },
    //   {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley' },
    //   {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' },
    //   {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi' }
    //
    // ];
    // inject http service into userService
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.newId = function () {
        return (Number(Math.floor((Math.random()) * 10000))).toString();
        // return (Number(this.users[this.users.length - 1]._id) + 1).toString();
    };
    // adds the user parameter instance to the local users array
    UserService.prototype.createUser = function (user) {
        var url = 'http://localhost:3100/api/user';
        return this.http.post(url, user).map(function (response) {
            return response.json();
        });
    };
    // updates the user in local users array whose _id matches the userId parameter
    UserService.prototype.updateUser = function (userId, user) {
        var url = 'http://localhost:3100/api/user/' + userId;
        return this.http.put(url, user).map(function (res) {
            return res.json();
        });
    };
    // returns the user whose username and password match the username and password parameters
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;
        // using http to get the url and work upon that
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    // returns the user in local users array whose _id matches the userId parameter
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    // removes the user whose _id matches the userId parameter
    UserService.prototype.deleteUser = function (userId) {
        var url = 'http://localhost:3100/api/user/' + userId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
// executed on client
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// make class usable for all components
var WebsiteService = (function () {
    function WebsiteService(http) {
        this.http = http;
    }
    // generate a number for website._id
    WebsiteService.prototype.newId = function () {
        return (Number(Math.floor((Math.random()) * 10000))).toString();
    };
    // adds the website parameter instance to the local websites array.
    // The new website's developerId is set to the userId parameter
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = 'http://localhost:3100/api/user/' + userId + '/website';
        return this.http.post(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the websites in local websites array whose developerId matches the parameter userId
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        // initiate the array
        // const webs: Website[] = [];
        var url = 'http://localhost:3100/api/user/' + userId + '/website';
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    // retrieves the website in local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.findWebsiteById = function (userId, websiteId) {
        var url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // updates the website in local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = 'http://localhost:3100/api/user/' + website._user + '/website/' + websiteId;
        return this.http.put(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    // removes the website from local websites array whose _id matches thewebsiteId parameter
    WebsiteService.prototype.deleteWebsite = function (userId, websiteId) {
        var url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// make class usable for all components
var WidgetService = (function () {
    // inject http service
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.newId = function () {
        return (Number(Math.floor((Math.random()) * 10000))).toString();
    };
    WidgetService.prototype.findAllWidgets = function () {
        // return this.widget;
        //  user http service to return all widgets on the server, dont' forget to change the components
        return this.http.get('http://localhost:3100/api/widget')
            .map(function (response) {
            return response.json();
        });
    };
    // adds the widget parameter instance to the local widgets array. The
    // new widget's pageId is set to the pageId parameter
    WidgetService.prototype.createWidget = function (pageId, newWidget) {
        var url = 'http://localhost:3100/api/page/' + pageId + '/widget';
        return this.http.post(url, newWidget)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
    WidgetService.prototype.findAllWidgetsForPageId = function (pageId) {
        var url = 'http://localhost:3100/api/page/' + pageId + '/widget';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = 'http://localhost:3100/api/widget/' + widgetId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // updates the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.updateWidget = function (pageId, widgetId, widget) {
        var url = 'http://localhost:3100/api/page/' + pageId + '/widget/' + widgetId;
        return this.http.put(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    // removes the widget from local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.deleteWidget = function (pageId, widgetId) {
        var url = 'http://localhost:3100/api/page/' + pageId + '/widget/' + widgetId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
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
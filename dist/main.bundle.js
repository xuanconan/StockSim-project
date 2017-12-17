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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_widget_widget_list_sortable_directive__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_widget_widget_list_order_by_pipe_pipe__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/order-by-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_widget_google_finance_google_stock_buy_google_stock_buy_component__ = __webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-buy/google-stock-buy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_widget_google_finance_google_stock_edit_google_stock_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-edit/google-stock-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_widget_google_finance_google_stock_list_google_stock_list_component__ = __webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-list/google-stock-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_googleFinance_service_client__ = __webpack_require__("../../../../../src/app/services/googleFinance.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_widget_google_finance_google_stock_news_google_stock_news_component__ = __webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-news/google-stock-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_user_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/user/admin/admin.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_widget_widget_list_sortable_directive__["a" /* SortableDirective */],
            __WEBPACK_IMPORTED_MODULE_36__components_widget_widget_list_order_by_pipe_pipe__["a" /* OrderByPipe */],
            __WEBPACK_IMPORTED_MODULE_37__components_widget_google_finance_google_stock_buy_google_stock_buy_component__["a" /* GoogleStockBuyComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_widget_google_finance_google_stock_edit_google_stock_edit_component__["a" /* GoogleStockEditComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_widget_google_finance_google_stock_list_google_stock_list_component__["a" /* GoogleStockListComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_widget_google_finance_google_stock_news_google_stock_news_component__["a" /* GoogleStockNewsComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_user_admin_admin_component__["a" /* AdminComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_27__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_32_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // inject it into any constructors
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_20__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_22__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_23__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_26__services_test_service_client__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_29__services_flickr_service_clients__["a" /* FlickrService */],
            __WEBPACK_IMPORTED_MODULE_33__services_shared_service_client__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_34__services_authentication_service_client__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_40__services_googleFinance_service_client__["a" /* GoogleFinanceServiceClient */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_google_finance_google_stock_buy_google_stock_buy_component__ = __webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-buy/google-stock-buy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_google_finance_google_stock_list_google_stock_list_component__ = __webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-list/google-stock-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_google_finance_google_stock_edit_google_stock_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-edit/google-stock-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_google_finance_google_stock_news_google_stock_news_component__ = __webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-news/google-stock-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/user/admin/admin.component.ts");






















// config route default constants
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_14__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'profile/:userId', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    // go to profile if canActivate
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/:pid/widget/:wgid/flickr', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/:pid/widget/google/list/buy', component: __WEBPACK_IMPORTED_MODULE_17__components_widget_google_finance_google_stock_buy_google_stock_buy_component__["a" /* GoogleStockBuyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/:pid/widget/google/list', component: __WEBPACK_IMPORTED_MODULE_18__components_widget_google_finance_google_stock_list_google_stock_list_component__["a" /* GoogleStockListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/:pid/widget/google/list/:stockid/edit',
        component: __WEBPACK_IMPORTED_MODULE_19__components_widget_google_finance_google_stock_edit_google_stock_edit_component__["a" /* GoogleStockEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/:pid/widget/google/news', component: __WEBPACK_IMPORTED_MODULE_20__components_widget_google_finance_google_stock_news_google_stock_news_component__["a" /* GoogleStockNewsComponent */] },
    { path: 'user/admin', component: __WEBPACK_IMPORTED_MODULE_21__components_user_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_20__components_widget_google_finance_google_stock_news_google_stock_news_component__["a" /* GoogleStockNewsComponent */] },
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

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"\">\n  <meta name=\"author\" content=\"\">\n  <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n\n  <title>Dujia Guo's Personal Website </title>\n\n  <!-- Bootstrap core CSS -->\n  <link href=\"../../../assets/css/bootstrap.css\" rel=\"stylesheet\">\n\n\n  <!-- Custom styles for this template -->\n  <link href=\"../../../assets/css/main.css\" rel=\"stylesheet\">\n\n  <script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script>\n\n  <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n  <!--[if lt IE 9]>\n  <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n  <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n  <![endif]-->\n</head>\n\n<body>\n\n<!-- Static navbar -->\n<div class=\"navbar navbar-inverse navbar-static-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\">DUJIA GUO</a>\n    </div>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"about.html\">About</a></li>\n        <li><a href=\"work.html\">Projects</a></li>\n        <li><a href=\"work.html\">Video</a></li>\n\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</div>\n\n<!-- +++++ Welcome Section +++++ -->\n<div id=\"ww\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-lg-offset-2 centered\">\n        <img src=\"../../../assets/img/mypic.png\" alt=\"\">\n        <h1>About Me</h1>\n        <p>Hello everybody. I'm Dujia, a computer science student at Northeastern University. Love coding,\n          building websites and aspiring to become a software developer. Enjoy playing badminton, travelling and\n          visiting museums in my spare time.  </p>\n\n      </div><!-- /col-lg-8 -->\n    </div><!-- /row -->\n  </div> <!-- /container -->\n</div><!-- /ww -->\n\n\n<!-- +++++ Information Section +++++ -->\n\n<div class=\"container pt\">\n  <div class=\"row mt centered\">\n    <div class=\"col-lg-4\">\n      <span class=\"glyphicon glyphicon-book\"></span>\n      <p>Pursuing a computer science masters degree, expecting to graduate by May 2019. </p>\n    </div>\n\n    <div class=\"col-lg-4\">\n      <span class=\"glyphicon glyphicon-fire\"></span>\n      <p>Have a passion for programming and building websites. </p>\n    </div>\n\n    <div class=\"col-lg-4\">\n      <span class=\"glyphicon glyphicon-globe\"></span>\n      <p>Located in Boston, MA. </p>\n    </div>\n  </div><!-- /row -->\n\n  <!--\t\t<div class=\"row mt\">\n              <div class=\"col-lg-6\">\n                  <h4>THE THINKING</h4>\n                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>\n              </div>&lt;!&ndash; /colg-lg-6 &ndash;&gt;\n              -->\n  <div class=\"col-lg-12\">\n    <h4>SKILLS</h4>\n    Mongodb\n    <div class=\"progress\">\n      <div class=\"progress-bar progress-bar-theme\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n        <span class=\"sr-only\">60% Complete</span>\n      </div>\n    </div>\n\n    Angular\n    <div class=\"progress\">\n      <div class=\"progress-bar progress-bar-theme\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n        <span class=\"sr-only\">80% Complete</span>\n      </div>\n    </div>\n\n    HTML + CSS\n    <div class=\"progress\">\n      <div class=\"progress-bar progress-bar-theme\" role=\"progressbar\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n        <span class=\"sr-only\">95% Complete</span>\n      </div>\n    </div>\n\n  </div><!-- /col-lg-6 -->\n</div><!-- /row -->\n\n\n\n<!-- +++++ Projects Section +++++ -->\n\n<div class=\"container pt\">\n  <div class=\"row mt\">\n    <div class=\"col-lg-6 col-lg-offset-3 centered\">\n      <h3>My Projects</h3>\n      <hr>\n      <p>Previous projects in Web Development. Please click to see github code. </p>\n    </div>\n  </div>\n  <div class=\"row mt\">\n    <div class=\"col-lg-6\">\n      <a class=\"zoom green\" href=\"work01.html\"><img class=\"img-responsive\" src=\"../../../assets/img/portfolio/port07.png\" alt=\"\" width=\"50%\" height=\"50%\"/></a>\n      <p>Stock Sim</p>\n    </div>\n    <div class=\"col-lg-6\">\n      <a class=\"zoom green\" href=\"work01.html\"><img class=\"img-responsive\" src=\"../../../assets/img/angular.jpeg\" alt=\"\" width=\"50%\" height=\"50%\" /></a>\n      <p>AppBuilder</p>\n    </div>\n    <!--\t\t\t<div class=\"col-lg-4\">\n                    <a class=\"zoom green\" href=\"work01.html\"><img class=\"img-responsive\" src=\"assets/img/portfolio/port03.jpg\" alt=\"\" /></a>\n                    <p>DEMO Video</p>\n                </div>-->\n  </div><!-- /row -->\n  <br>\n\n  <div class=\"row mt\">\n    <div class=\"col-lg-6 col-lg-offset-3 centered\">\n      <h3>Demo Video</h3>\n      <hr>\n      <p>Demo video for the stock sim project </p>\n      <iframe  class=\"e2e-iframe-trusted-src\" width=\"560\" height=\"315\"\n               src = \"https://www.youtube.com/embed/SkmhNMEGg_U\" allowfullscreen></iframe>\n    </div>\n  </div>\n</div><!-- /container -->\n\n\n\n\n<!-- +++++ Footer Section +++++ -->\n\n<div id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <h4>My Email</h4>\n        <p>\n          dujia.guo2015@gmail.com\n        </p>\n      </div><!-- /col-lg-4 -->\n\n      <div class=\"col-lg-4\">\n        <h4>My Links</h4>\n        <p>\n          <a href=\"#\">LinkedIn</a><br/>\n          <a href=\"#\">Github</a>\n        </p>\n      </div><!-- /col-lg-4 -->\n\n\n    </div>\n\n  </div>\n</div>\n\n\n<!-- Bootstrap core JavaScript\n================================================== -->\n<!-- Placed at the end of the document so the pages load faster -->\n<script src=\"assets/js/bootstrap.min.js\"></script>\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function HomeComponent(router) {
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    HomeComponent.prototype.goLogin = function () {
        alert('Please login to trade!');
        this.router.navigate(['login']);
    };
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
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

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/website/{{wid}}/page\" class=\"navbar-link black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick\">\n        <b>Edit Portfolio</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"update(name, title)\"\n         class=\"navbar-link black\">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding\">\n\n  <b>Name</b>\n\n    <input [(ngModel)]=\"this.page.name\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"page name\">\n\n  <b>Description</b>\n\n    <input [(ngModel)]=\"this.page.description\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"page title\">\n\n    <a class=\"btn btn-danger btn-block\"\n       (click)=\"deletePage(this.wid, this.pid)\"\n       routerLink=\"/user/website/{{wid}}/page\" >Delete</a>\n\n\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <b class=\"navbar-text pull-left\">\n      StockSim\n    </b>\n    <p class=\"navbar-text pull-right\">\n      <a\n        routerLink=\"/profile\" class=\"blue\">\n        <span class=\"glyphicon glyphicon-user \"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function PageEditComponent(userService, websiteService, pageService, router, route, sharedService) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
    }
    PageEditComponent.prototype.getUser = function () {
        // this.user = JSON.parse(localStorage.getItem("user"));
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    PageEditComponent.prototype.update = function () {
        var _this = this;
        if (!((this.user._id === this.page.owner) || (this.user.role === 'ADMIN'))) {
            alert("Only admin can modify other's portfolio.");
        }
        else {
            if (!this.page.name) {
                alert('Please input portfolio name.');
            }
            else {
                var newPage = {
                    _id: this.pid,
                    name: this.page.name,
                    websiteId: this.userId,
                    description: this.page.description
                };
                this.pageService.updatePage(this.wid, this.pid, newPage)
                    .subscribe(function (pages) {
                    // this.pages = pages;
                    _this.router.navigate(['user', 'website', _this.wid, 'page']);
                });
            }
        }
    };
    // deletePage(pageId) {
    //   this.pageService.deletePage(pageId);
    // }
    PageEditComponent.prototype.deletePage = function (websiteId, pageId) {
        var _this = this;
        if (!((this.user._id === this.page.owner) || (this.user.role === 'ADMIN'))) {
            alert("Only admin can modify other's portfolio.");
        }
        else {
            this.pageService.deletePage(websiteId, pageId)
                .subscribe(function (pages) {
                _this.pages = pages;
            });
        }
    };
    // notify the changes of the route
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
        this.pageService.findPageById(this.wid, this.pid)
            .subscribe(function (page) {
            _this.page = page;
        });
        this.pageService.findPagesByWebsiteId(this.wid)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
        this.getUser();
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _g || Object])
], PageEditComponent);

var _a, _b, _c, _d, _e, _f, _g;
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

module.exports = "\n<nav class=\"navbar navbar-tiffany navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/website\" class=\"black\">\n        <span class=\"white glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n\n        <b class = white>Class {{this.website.name}} portfolio dashboard</b>\n\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-brand pull-right \">\n      <a (click)= createPortfolio() class=\"white \" >\n        <b>Create</b>\n        <!--<span class=\"glyphicon glyphicon-plus \"></span>-->\n        <!--<button class=\"btn btn-primary\">Create a portfolio</button>-->\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid padding\"></div>\n<label class ='letter-tiffany paddingleft'>Welcome to StockSim, &nbsp;{{user.firstName}}!&nbsp; Role: {{user.role}}</label>\n\n<div *ngFor = \"let page of pages\" class=\"container-fluid \">\n  <ul  class=\"list-group\">\n    <li class=\"list-group-item blue \">\n\n      <a routerLink=\"/user/website/{{ wid }}/page/{{page._id}}/widget/google/list\" class=\"thick\">\n       <b> {{ page.name }} &nbsp;&nbsp;（ Portfolio manager: {{page.ownername}} ）</b>\n      </a>\n\n      <!--<a class=\"pull-right\" routerLink=\"/user/website/{{ wid }}/page/{{page._id}}\">-->\n        <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n      <!--</a>-->\n      <button class=\"pull-right btn-primary \" routerLink=\"/user/website/{{ wid }}/page/{{page._id}}\">\n        Edit portfolio\n      </button>\n\n    </li>\n  </ul>\n</div>\n\n\n<nav class=\"navbar navbar-tiffany navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <b class=\"navbar-text pull-left white\">\n      StockSim\n    </b>\n\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\" class=\"blue\">\n        <span class=\"white glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function PageListComponent(userService, websiteService, pageService, route, sharedService, router) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
        this.sharedService = sharedService;
        this.router = router;
    }
    PageListComponent.prototype.createPortfolio = function () {
        if (this.user.role === 'TA') {
            alert('TA cannot create portfolios.');
        }
        else {
            this.router.navigate(['user', 'website', this.wid, 'page', 'new']);
        }
    };
    PageListComponent.prototype.getUser = function () {
        // this.user = JSON.parse(localStorage.getItem("user"));
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    // notify the changes of the route
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.wid = params['wid'];
        });
        this.getUser();
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
            console.log(websites);
        });
        this.websiteService.findWebsiteById(this.userId, this.wid)
            .subscribe(function (website) {
            _this.website = website;
        });
        this.pageService.findPagesByWebsiteId(this.wid)
            .subscribe(function (data) {
            _this.pages = data;
            console.log(data);
        });
        this.userService.findUserById(this.userId).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
        // this.pages = this.pageService.findPageByWebsiteId(this.wid);
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _g || Object])
], PageListComponent);

var _a, _b, _c, _d, _e, _f, _g;
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

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/website/{{wid}}/page\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"black\">\n        <b>New Portfolio</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"create(pagename, description)\"\n        class=\"black\">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding\" >\n\n    <label>Portfolio Name</label>\n    <input [(ngModel)]=\"pagename\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Portfolio Name\"/>\n\n    <label>Description</label>\n    <input [(ngModel)]=\"description\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Description\"/>\n\n\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <b class=\"navbar-text pull-left \">\n      StockSim\n    </b>\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\" class=\"blue\">\n        <span class=\"glyphicon glyphicon-user \"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function PageNewComponent(userService, websiteService, pageService, route, router, sharedService) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
    }
    PageNewComponent.prototype.getUser = function () {
        // this.user = JSON.parse(localStorage.getItem("user"));
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    PageNewComponent.prototype.create = function (name, description) {
        var _this = this;
        if (!name) {
            alert('Please input portfolio name');
        }
        else {
            var newPage = {
                _id: this.websiteService.newId(),
                name: name,
                websiteId: this.wid,
                description: description,
                owner: this.user._id,
                ownername: this.user.username
            };
            this.pageService.createPage(this.wid, newPage).subscribe(function (pages) {
                _this.pages = pages;
                _this.router.navigate(['user', 'website', _this.wid, 'page']);
            });
        }
    };
    // notify the changes of the route
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            // alert('userId: ' + this.userId);
            // this.websites = this.websiteService.findWebsitesByUser(this.userId);
            console.log(_this.websites);
        });
        this.getUser();
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _g || Object])
], PageNewComponent);

var _a, _b, _c, _d, _e, _f, _g;
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

/***/ "../../../../../src/app/components/user/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-tiffany navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile\" class=\"white\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-brand pull-left\">\n      <!--<a class=\"thick white nounderline \" href=\"../page/page-list.html\">-->\n      <b class=\"white\">Admin Dashboard</b>\n      <!--</a>-->\n    </div>\n\n    <!--tick mark-->\n\n  </div>\n</nav>\n\n<div class=\"padding padding-b\">\n  <div *ngFor = \"let user of users\" class=\"container-fluid\">\n    <ul  class=\"list-group\">\n      <li class=\"list-group-item blue \">\n\n        <b >\n          username: {{ user.username }}   &nbsp;&nbsp;&nbsp;    Name:&nbsp;{{user.lastName}}.{{user.firstName}} &nbsp;&nbsp;&nbsp;\n          Role: {{user.role}} &nbsp;&nbsp;&nbsp;     Class: {{user.className}} &nbsp;&nbsp;&nbsp; Competition: {{user.competitionName}}\n        </b>\n\n        <button (click)=deleteUser(user._id) class=\"pull-right btn-danger \" >\n          Delete User\n        </button>\n\n      </li>\n    </ul>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-tiffany navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <b class=\"navbar-text pull-left white\">\n      StockSim\n    </b>\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminComponent = (function () {
    function AdminComponent(userService, activatedRoute, sharedService, router, sanitizer) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    AdminComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.username = this.user['username'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.email = this.user['email'];
        this.userId = this.user['_id'];
        this.class = this.user.class;
    };
    AdminComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId).subscribe(function (status) {
            console.log(status);
            alert('User ' + _this.user.username + ' deleted!');
            window.location.reload(false); // reload page
        });
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.getUser();
        // invoke a function that can pass the value of the parameters
        // this.activatedRoute.params.subscribe((params) => {
        //   this.userId = params['userId'];
        // });
        // this.user = this.userService.findUserById(this.userId);
        this.userService.findUserById(this.userId).subscribe(function (user) {
            _this.user = user;
            // console.log(this.user);
        });
        this.userService.findAllUsers().subscribe(function (users) {
            _this.users = users;
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/components/user/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _e || Object])
], AdminComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=admin.component.js.map

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

module.exports = "<nav class=\"navbar navbar-tiffany navbar-fixed-top\" xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-brand pull-left\">\n      <b class=\"white\">StockSim</b>\n    </div>\n\n\n\n  </div>\n</nav>\n\n<div class=\"container padding40 \">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-8 hidden-xs padding-b\">\n\n      <!--<h1 >World Finance</h1>-->\n\n        <h3 >World Finance: Bloomberg Live News</h3>\n        <div class=\"videoWrapper\">\n          <iframe  class=\"e2e-iframe-trusted-src\" width=\"560\" height=\"315\"\n                   src = 'https://www.youtube.com/embed/Ga3maNZ0x0w?autoplay=1&cc_load_policy=1&controls=0' frameborder=\"0\" allowfullscreen>\n          </iframe>\n          <br/>\n          <br/>\n        </div>\n      <br/>\n\n      <a routerLink=\"/news\">\n        <h3>Search Stock News</h3>\n        <!--<span class=\"glyphicon glyphicon-plus \"></span>-->\n      </a>\n      <br/>\n      <br/>\n\n      <!--<div class=\"padding\"></div>-->\n      <!--<ul *ngFor = \"let website of websites\"  class=\"list-group \">-->\n        <!--<li class=\"list-group-item blue borderless\">-->\n\n          <!--&lt;!&ndash;<a routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page\">&ndash;&gt;-->\n          <!--{{ website.name }}-->\n          <!--&lt;!&ndash;</a>&ndash;&gt;-->\n\n          <!--<a class=\"pull-right\" >-->\n            <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n          <!--</a>-->\n        <!--</li>-->\n      <!--</ul>-->\n\n    </div>\n\n    <div class=\"col-sm-4\">\n      <div class=\"container-fluid padding\">\n        <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n          <input ngModel\n                 placeholder=\"username\"\n                 name=\"username\"\n                 class=\"form-control\"\n                 type=\"text\"\n                 required\n                 #username = \"ngModel\"/>\n\n          <input ngModel\n                 placeholder=\"password\"\n                 name=\"password\"\n                 class=\"form-control\"\n                 type=\"password\"\n                 required\n                 #password=\"ngModel\"/>\n\n          <button class=\"btn btn-primary btn-block form-control\"\n                  type=\"submit\"\n                  [disabled]=\"!f.valid\"\n          >Login</button>\n          <!--(click)=\"login()\"-->\n\n          <button class=\"btn btn-success btn-block form-control\"\n                  routerLink=\"/register\">Register</button>\n\n          <a  href=\"https://webdev-conan-xuan.herokuapp.com/facebook/login\" class=\"btn btn-primary btn-block\">\n            <!--<a  href=\"http://localhost:9000/facebook/login\" class=\"btn btn-primary btn-block\">-->\n            <!--<button class=\"btn btn-primary btn-block\" [routerLink]=\"['/login']\" type=\"button\">-->\n            <span class=\"fa fa-facebook\"></span>\n            Facebook Login\n          </a>\n        </form>\n\n\n\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n\n<nav class=\"navbar navbar-tiffany navbar-fixed-bottom\">\n  <div class=\"navbar-text pull-left\">\n    <a routerLink=\"\" class=\"white\">\n      <span class=\"glyphicon glyphicon-home gi-1x\"></span>\n    </a>\n\n  </div>\n  <div class=\"container-fluid\">\n    <b class=\"navbar-text pull-right white\">\n        Join and start your trading simulation now!\n    </b>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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







// below is an angular component
var LoginComponent = (function () {
    // privately declared variable
    function LoginComponent(userService, router, sharedService, sanitizer) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.sanitizer = sanitizer;
        this.hello = 'Hello from the component';
        this.errorMsg = 'Invalid user name or password！';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
    }
    LoginComponent.prototype.updateVideoUrl = function () {
        // const aurl = 'https://www.youtube.com/embed/qdA32j7_U6U';
        return this.youtubeUrl = this.sanitizer
            .bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Ga3maNZ0x0w?autoplay=1&cc_load_policy=1&controls=0');
    };
    // api function for login
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        console.log('data', this.username);
        // calling client side userservice to send login information
        this.userService
            .login(this.username, this.password)
            .subscribe(function (data) {
            // store current logged in user in SharedService
            _this.sharedService.user = data;
            _this.router.navigate(['/profile']);
        }, function (error) {
            console.log(error);
            alert('Invalid username or password');
        });
        // calling and subscribe dynamic result from the http function located in user.service.client
        // this.userService.findUserByCredentials(this.username, this.password)
        //   .subscribe((user: User) => {
        //     if (user) {
        //       // alert(user._id);
        //       this.router.navigate(['/profile/', user._id]);
        //     } else {
        //       this.errorFlag = true;
        //       this.errorMsg = 'Error';
        //       alert('wrong username or password');
        //     }
        // });
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "\n\n<!--<input value = \"{{user.username}}\"/>-->\n<!--<br/>-->\n\n<!--<input value = \"{{user.firstName}}\"/>-->\n\n\n<nav class=\"navbar navbar-tiffany navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-brand pull-left\">\n      <!--<a class=\"thick white nounderline \" href=\"../page/page-list.html\">-->\n      <b class=\"white\">Profile</b>\n      <!--</a>-->\n    </div>\n\n    <div class=\"navbar-text pull-right\">\n      <a (click)= \"update ()\" class=\"white \">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n    <!--tick mark-->\n\n  </div>\n</nav>\n\n\n<!--<form id=\"updateForm\" (ngSubmit) = \"update()\" #f=\"ngForm\">-->\n  <div class=\"container padding40 \">\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-8 hidden-xs padding-b\">\n\n        <h3 >World Finance: Bloomberg Live News</h3>\n\n        <div class=\"videoWrapper\">\n          <iframe  class=\"e2e-iframe-trusted-src\" width=\"560\" height=\"315\"\n                   src = 'https://www.youtube.com/embed/Ga3maNZ0x0w?autoplay=1&cc_load_policy=1&controls=0' frameborder=\"0\" allowfullscreen>\n          </iframe>\n          <br/>\n        </div>\n        <br/>\n\n        <a routerLink=\"/news\">\n          <h3>Search Stock News</h3>\n          <!--<span class=\"glyphicon glyphicon-plus \"></span>-->\n        </a>\n        <br/>\n        <br/>\n\n        <!--<div class=\"padding\"></div>-->\n        <!--<ul *ngFor = \"let website of websites\"  class=\"list-group \">-->\n        <!--<li class=\"list-group-item blue borderless\">-->\n\n        <!--&lt;!&ndash;<a routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page\">&ndash;&gt;-->\n        <!--{{ website.name }}-->\n        <!--&lt;!&ndash;</a>&ndash;&gt;-->\n\n        <!--<a class=\"pull-right\" >-->\n        <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n        <!--</a>-->\n        <!--</li>-->\n        <!--</ul>-->\n\n      </div>\n\n      <div class=\"col-sm-4  padding40 padding-b\">\n\n        <!--<label class = 'blue'>Welcome to StockSim, {{user.firstName}} !</label>-->\n\n        <b class ='letter-tiffany '>Welcome to StockSim, &nbsp;{{user.firstName}}!&nbsp; Role: {{user.role}}</b>\n        <br/>\n        <b class ='letter-tiffany'>My class:&nbsp; {{this.user.classname}}</b>\n        <br/>\n        <b class ='letter-tiffany'>My competition:&nbsp; {{this.user.competitionName}}</b>\n        <br/>\n\n          <form #f=\"ngForm\">\n              <div class=\"form-group \">\n                <label class = 'blue'>Username</label>\n                <input [(ngModel)] = \"username\"\n                       name=\"username\"\n                       type=\"email\" class=\"form-control\"\n                       placeholder=\"alice\"\n                       required>\n              </div>\n\n\n              <div class=\"form-group\">\n                <label class = 'blue'>Email address</label>\n                <input [(ngModel)] = \"email\"\n                       name=\"email\"\n                       type=\"email\" class=\"form-control\"\n                       placeholder=\"a@unicorn.com\"\n                       required>\n              </div>\n\n\n              <div class=\"form-group\">\n                <label class = 'blue'>First Name </label>\n                <input [(ngModel)] = \"firstName\"\n                       name=\"firstName\"\n                       type=\"text\"\n                       class=\"form-control\"\n                       placeholder = \"firstName\"\n                       required>\n              </div>\n\n\n\n              <div class=\"form-group\">\n                <label class = 'blue'>Last Name</label>\n                <input [(ngModel)] = \"lastName\"\n                       name=\"lastName\"\n                       type=\"text\"\n                       class=\"form-control\"\n                       placeholder = \"lastName\"\n                       required>\n              </div>\n          </form>\n\n          <a class=\"btn btn-primary btn-block\"\n             [routerLink]=\"['/user', 'website']\">Class list</a>\n\n          <a class=\"btn btn-danger btn-block \"\n             (click)=\"logout()\" >Logout</a>\n\n          <a (click)=\"deleteUser()\"\n            class=\"btn btn-danger btn-block \" routerLink=\"/login\" >Delete User</a>\n\n          <a class=\"btn btn-info btn-block \" (click)=gotoAdmin() >Admin</a>\n          <br/>\n      </div>\n    </div>\n\n  </div>\n<!--</form>-->\n\n<!-- Footer -->\n<nav class=\"navbar navbar-tiffany navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <b class=\"navbar-text pull-left white\">\n      StockSim\n    </b>\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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








var ProfileComponent = (function () {
    // inject route info in constructor
    function ProfileComponent(userService, activatedRoute, sharedService, router, sanitizer) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    ProfileComponent.prototype.updateVideoUrl = function () {
        // const aurl = 'https://www.youtube.com/embed/qdA32j7_U6U';
        return this.youtubeUrl = this.sanitizer
            .bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Ga3maNZ0x0w?autoplay=1&cc_load_policy=1&controls=0');
    };
    ProfileComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.username = this.user['username'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.email = this.user['email'];
        this.userId = this.user['_id'];
        this.class = this.user.class;
    };
    // issue a logout request to the server. On successful logout, set the currentUser to null.
    // Use the code below as an example.
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['']);
        });
    };
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
            lastName: this.lastName,
            email: this.email,
            class: this.class
        };
        console.log(updatedUser);
        this.userService.updateUser(this.userId, updatedUser).
            subscribe(function (newuser) {
            // console.log(status);
            _this.user = newuser;
            console.log(_this.user);
            window.location.reload(false); // reload page
        });
    };
    ProfileComponent.prototype.deleteUser = function () {
        this.userService.deleteUser(this.userId).subscribe(function (status) {
            console.log(status);
        });
    };
    ProfileComponent.prototype.gotoAdmin = function () {
        if (this.user.role !== 'ADMIN') {
            alert('Access forbidden');
        }
        else {
            this.router.navigate(['user', 'admin']);
        }
    };
    // notify the changes of the route
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.sharedService.user);
        this.user = this.sharedService.user;
        this.getUser();
        // invoke a function that can pass the value of the parameters
        // this.activatedRoute.params.subscribe((params) => {
        //   this.userId = params['userId'];
        // });
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _f || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "<nav class=\"navbar navbar-tiffany navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-brand pull-left\">\n      <!--<a class=\"thick white nounderline \" href=\"../page/page-list.html\">-->\n      <b class=\"white\">Register</b>\n      <!--</a>-->\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container padding\">\n\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n    <input ngModel\n           placeholder=\"username\"\n           name=\"username\"\n           class=\"form-control\"\n           type=\"text\"\n           required\n           #username = \"ngModel\"/>\n\n    <input ngModel\n           placeholder=\"password\"\n           name=\"password\"\n           class=\"form-control\"\n           type=\"password\"\n           required\n           #password=\"ngModel\"/>\n\n    <input ngModel\n           placeholder=\"verify password\"\n           name=\"passwordvalid\"\n           class=\"form-control\"\n           type=\"password\"\n           required\n           #passwordvalid=\"ngModel\"/>\n\n      <b> Pick your role: </b>\n      <input [(ngModel)]=\"role\" type=\"radio\" name = \"role\" value=\"ADMIN\"  required class=\"form-control\">Admin\n      <input [(ngModel)]=\"role\" type=\"radio\" name = \"role\" value=\"PROFESSOR\" required class=\"form-control\">Professor\n      <input [(ngModel)]=\"role\" type=\"radio\" name = \"role\" value=\"STUDENT\" required class=\"form-control\">Student\n      <input [(ngModel)]=\"role\" type=\"radio\" name = \"role\" value=\"TA\" required class=\"form-control\">TA\n      <input [(ngModel)]=\"role\" type=\"radio\" name = \"role\" value=\"ORGANIZER\" required class=\"form-control\">Competition Organizer\n\n\n    <button class=\"btn btn-primary btn-block\"\n            type = \"submit\"\n            [disabled]=\"!f.valid\">Register</button>\n\n    <button class=\"btn btn-danger btn-block\" routerLink=\"/login\">Cancel</button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    // function to be call from register
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.passwordvalid = this.registerForm.value.passwordvalid;
        if (!this.role) {
            alert('Please select your role!');
        }
        else {
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
                        lastName: '',
                        role: _this.role,
                        class: null,
                        classname: null,
                        competition: null,
                        competitionName: null
                    };
                    console.log(newUser);
                    // this.userService.createUser(newUser).subscribe((auser) => {
                    //   this.user = auser;
                    //   console.log(this.user);
                    //   this.router.navigate(['profile', this.user._id]);
                    // });
                    _this.userService
                        .register(_this.username, _this.password, _this.role)
                        .subscribe(function (auser) {
                        _this.sharedService.user = auser;
                        // passport will save user information so no need to include userId in router
                        _this.router.navigate(['/profile']);
                        console.log(auser);
                    }, function (error) {
                        _this.error = error._body;
                    });
                }
            });
        }
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
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

module.exports = "\n<!--Top navbar -->\n<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-tiffany navbar-fixed-top\">\n\n    <!--<div class=\"navbar-text pull-left\">-->\n    <!--<span class=\"glyphicon glyphicon-chevron-left white pull-left\"></span>-->\n    <!--</div>-->\n\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <div class=\"navbar-text pull-left\">\n          <a routerLink=\"/user/website\" class=\"white\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3 hidden-xs\">\n\n        <div class=\"navbar-brand pull-left\">\n          <!--<a href=\"website-new.html\" class=\"white\">-->\n          <b class=\"white\">Class list</b>\n          <!--</a>-->\n        </div>\n\n        <div class=\"navbar-text pull-right\">\n          <span class=\"glyphicon glyphicon-plus white \"></span>\n        </div>\n        <!--</p>-->\n\n      </div>\n\n      <div class=\"col-sm-8\">\n\n        <!--heading on the nav bar-->\n        <div class=\"navbar-brand pull-left\">\n          <div class=\"thick white\">\n            <b>Class Information</b>\n          </div>\n        </div>\n        <!--tick mark-->\n        <div class=\"navbar-text pull-right\">\n          <a (click)=\"update()\" class=\"white\">\n            <span class=\"glyphicon glyphicon-ok \"></span>\n          </a>\n        </div>\n\n      </div>\n\n    </div>\n  </nav>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n      <div class=\"padding\"></div>\n      <label class ='letter-tiffany '>Welcome to StockSim, {{user.firstName}}! Role: {{user.role}}</label>\n\n      <ul *ngFor = \"let website of websites\"  class=\"list-group \">\n        <li class=\"list-group-item blue borderless \">\n\n          <!--<a routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page\">-->\n          <b>  {{ website.name }}         (Professor: {{ website._user.username}} )</b>\n          <!--</a>-->\n\n          <!--<a class=\"pull-right\" >-->\n            <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n          <!--</a>-->\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-sm-8 padding\">\n      <div class=\"container-fluid\">\n\n        <b class ='blue'>My class: &nbsp;{{this.user.classname}}</b>\n        <br/>\n        <b class ='blue'>My competition:&nbsp; {{this.user.competitionName}}</b>\n        <br/>\n\n\n        <b class ='blue'>Class Name</b>\n\n        <input [(ngModel)]=\"this.website.name\"\n                class=\"form-control\"\n                type=\"text\"\n                placeholder='name'>\n\n        <b class ='blue'>Class Description</b>\n\n\n        <textarea [(ngModel)]=\"this.website.description\"\n                  class=\"form-control\"\n                   type=\"text\"\n                   placeholder='description'\n                   rows=\"6\"></textarea>\n\n          <!--<b class ='blue'>Class Description</b>-->\n\n        <!--<div class=\"form-group\">-->\n          <!--<quill-editor [(ngModel)]=\"website.description\" name=\"text\"></quill-editor>-->\n        <!--</div>-->\n\n        <!--<textarea class=\"form-control\" placeholder=\"Description\" rows=\"6\"></textarea>-->\n\n        <a (click)=goToMyPortfolio()\n           class=\"btn btn-primary btn-block\" >\n          Go to my portfolio\n        </a>\n\n        <a (click)=\"joinClass()\"\n           class=\"btn btn-success btn-block\" >\n          Join Class\n        </a>\n\n        <a (click)=\"dropClass()\"\n           class=\"btn btn-warning btn-block\" >\n          Drop Class\n        </a>\n\n\n        <a (click)=\"deleteWebsite()\"\n          class=\"btn btn-danger btn-block\" >\n          Delete (Admin & Professors only)\n        </a>\n\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-tiffany navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <b class=\"navbar-text pull-left white\">\n      StockSim\n    </b>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user \"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WebsiteEditComponent(websiteService, route, router, activatedRoute, sharedService, userService) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.userService = userService;
    }
    WebsiteEditComponent.prototype.getUser = function () {
        // this.user = JSON.parse(localStorage.getItem("user"));
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    // findClassName(classID) {
    //   this.websiteService.findWebsiteById(this.userId, classID)
    //     .subscribe((website) => {
    //       this.websitename = website.name;
    //     });
    // }
    WebsiteEditComponent.prototype.update = function () {
        var _this = this;
        if (this.user.role === 'STUDENT') {
            alert('Students cannot modify class information.');
        }
        else if (this.user.role === 'TA') {
            alert('TA cannot modify class information.');
        }
        else if ((this.user.role === 'PROFESSOR') && (this.user._id !== this.website._user)) {
            alert('Professors can only modify own class information.');
        }
        else if ((this.user.role === 'ORGANIZER') && (this.user._id !== this.website._user)) {
            alert('Organizer can only modify own class information.');
        }
        else {
            console.log();
            if (!this.website.name) {
                alert('Please input class name');
            }
            else {
                var newWebsite = {
                    _id: this.wid,
                    name: this.website.name,
                    developerId: this.userId,
                    description: this.website.description,
                };
                this.websiteService.updateWebsite(this.wid, newWebsite)
                    .subscribe(function (status) {
                    console.log(status);
                    _this.router.navigate(['user', 'website']);
                });
            }
        }
    };
    WebsiteEditComponent.prototype.joinClass = function () {
        var _this = this;
        console.log(this.user);
        if ((!this.user.class) || (!this.user.competition)) {
            if ((this.website.competition === 0)) {
                this.updatedUser = {
                    _id: this.userId,
                    username: this.user.username,
                    password: this.user.password,
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    email: this.user.email,
                    class: this.wid,
                    classname: this.website.name,
                    competition: this.user.competition,
                    competitionName: this.user.competitionName
                };
            }
            else if ((this.website.competition === 1)) {
                this.updatedUser = {
                    _id: this.userId,
                    username: this.user.username,
                    password: this.user.password,
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    email: this.user.email,
                    class: this.user.class,
                    classname: this.user.classname,
                    competition: this.wid,
                    competitionName: this.website.name
                };
            }
            console.log(this.updatedUser);
            this.userService.updateUser(this.userId, this.updatedUser).subscribe(function (newuser) {
                // console.log(status);
                _this.user = newuser;
                console.log(_this.user);
                alert('Welcome to class "' + _this.website.name + '"');
                window.location.reload(false); // reload page
            });
        }
        else {
            alert('You are currently enrolled in an investment class. You can only enroll one each semester.');
        }
    };
    WebsiteEditComponent.prototype.dropClass = function () {
        var _this = this;
        if ((this.user.class === '') || ((this.user.class !== this.wid) && (this.user.competition !== this.wid))) {
            alert('You are currently not enrolled in this class or competition.');
        }
        else {
            if (this.website.competition === 0) {
                this.updatedUser = {
                    _id: this.userId,
                    username: this.user.username,
                    password: this.user.password,
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    email: this.user.email,
                    class: null,
                    classname: null,
                    competition: this.user.competition,
                    competitionName: this.user.competitionName
                };
            }
            else {
                this.updatedUser = {
                    _id: this.userId,
                    username: this.user.username,
                    password: this.user.password,
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    email: this.user.email,
                    class: this.user.class,
                    classname: this.user.classname,
                    competition: null,
                    competitionName: null
                };
            }
            console.log(this.updatedUser);
            this.userService.updateUser(this.userId, this.updatedUser).subscribe(function (newuser) {
                // console.log(status);
                _this.user = newuser;
                console.log(_this.user);
                alert('You have dropped class/competition "' + _this.website.name + '"');
                _this.router.navigate(['user', 'website']);
            });
        }
    };
    WebsiteEditComponent.prototype.goToMyPortfolio = function () {
        if ((this.user.role === 'ORGANIZER') && (this.website.competition === 0)) {
            alert('Competition organizers cannot check portfolios in normal classes.');
        }
        else if ((this.user.role === 'STUDENT') && ((this.user.class !== this.website._id) &&
            (this.user.competition !== this.website._id))) {
            alert('Student may only check portfolios of its own class or competition.');
        }
        else {
            this.router.navigate(['user', 'website', this.wid, 'page']);
        }
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        if (this.user.role === 'STUDENT') {
            alert('Student cannot delete classes!');
        }
        else if (this.user.role === 'TA') {
            alert('TA cannot delete classes!');
        }
        else if ((this.user.role === 'PROFESSOR') && (this.user._id !== this.website._user)) {
            alert('Professors can only delete own class.');
        }
        else if ((this.user.role === 'ORGANIZER') && (this.user._id !== this.website._user)) {
            alert('Competition organizer can only delete own competitions.');
        }
        else {
            this.websiteService.deleteWebsite(this.userId, this.wid)
                .subscribe(function (websites) {
                _this.router.navigate(['user', 'website']);
            });
        }
    };
    // notify the changes of the route
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.wid = params['wid'];
        });
        this.getUser();
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
        // this.websiteService.findWebsitesByUser(this.userId)
        //   .subscribe((websites) => {
        //     this.websites = websites;
        //   });
        this.websiteService.findAllClasses()
            .subscribe(function (classes) {
            _this.websites = classes;
            console.log(classes);
        });
        this.websiteService.findWebsiteById(this.userId, this.wid)
            .subscribe(function (website) {
            _this.website = website;
        });
        this.userService.findUserById(this.userId).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "updateForm", void 0);
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _g || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d, _e, _f, _g;
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

module.exports = "\n<nav class=\"navbar navbar-tiffany navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile\" class=\"white\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </p>\n\n    <div class=\"navbar-brand pull-left\">\n      <b class=\"white\">Class list</b>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-brand pull-right\">\n      <a (click) = addclass() class=\"white \">\n        <b>Add class</b>\n        <!--<span class=\"glyphicon glyphicon-plus \"></span>-->\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\" container-fluid padding\"></div>\n\n<label class ='letter-tiffany paddingleft'>Welcome to StockSim, {{user.firstName}}! Role: {{user.role}}</label>\n<br/>\n<label class ='letter-tiffany paddingleft'>My class:&nbsp; {{this.user.classname}}</label>\n<br/>\n<label class ='letter-tiffany paddingleft'>My competition:&nbsp; {{this.user.competitionName}}</label>\n<br/>\n<div *ngFor = \"let website of websites\" class=\"container-fluid \">\n  <ul  class=\"list-group\">\n    <li class=\"list-group-item blue \">\n\n      <b >\n        {{ website.name }}    &nbsp;&nbsp;     (Class owner: &nbsp;{{ website._user.username}})\n      </b>\n\n      <button class=\"pull-right btn-primary \" routerLink=\"/user/website/{{ website._id }}\">\n        Go to my class\n      </button>\n\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-tiffany navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <b class=\"navbar-text pull-left white\">\n      StockSim\n    </b>\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WebsiteListComponent(websiteService, route, userService, sharedService, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
    }
    WebsiteListComponent.prototype.addclass = function () {
        if (this.user.role === 'STUDENT') {
            alert('Student cannot create classes');
        }
        else if (this.user.role === 'TA') {
            alert('TA cannot create classes');
        }
        else {
            this.router.navigate(['user', 'website', 'new']);
        }
    };
    WebsiteListComponent.prototype.getUser = function () {
        // this.user = JSON.parse(localStorage.getItem("user"));
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    // notify the changes of the route
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
        // this.websiteService.findWebsitesByUser(this.userId)
        // .subscribe((websites) => {
        //   this.websites = websites;
        //   console.log(websites);
        // });
        this.websiteService.findAllClasses()
            .subscribe(function (classes) {
            _this.websites = classes;
            console.log(classes);
        });
        this.userService.findUserById(this.userId).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
        console.log(this.websites);
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], WebsiteListComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "\n<!--Top navbar -->\n<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-tiffany navbar-fixed-top\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <div class=\"navbar-text pull-left\">\n          <a routerLink=\"/user/website\" class=\"white\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"col-sm-3 hidden-xs\">\n        <div class=\"navbar-brand pull-left\">\n          <!--<a href=\"../page/page-list.html\" class=\"white\">-->\n          <b class=\"white\">Class list</b>\n          <!--</a>-->\n        </div>\n        <div  class=\"navbar-text pull-right white\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </div>\n        <!--</p>-->\n      </div>\n\n      <div class=\"col-sm-8\">\n        <!--heading on the nav bar-->\n        <div class=\"navbar-brand pull-left\">\n          <div class=\"thick white\">\n            <b>New Class</b>\n          </div>\n        </div>\n        <!--tick mark-->\n        <div class=\"navbar-text pull-right\">\n          <a (click)=\"create()\"  class=\"white\" >\n            <span class=\"glyphicon glyphicon-ok \"></span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n  </nav>\n</div>\n\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <div class=\"padding\"></div>\n      <ul *ngFor = \"let website of websites\"  class=\"list-group \">\n        <li class=\"list-group-item blue borderless\">\n\n          <!--<a routerLink=\"/profile/{{ userId }}/website/{{ wid }}/page\">-->\n          {{ website.name }}   (Professor: {{ website._user.username}} )\n          <!--</a>-->\n\n          <!--<a class=\"pull-right\" >-->\n            <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n          <!--</a>-->\n        </li>\n      </ul>\n\n    </div>\n\n\n    <div class=\"col-sm-8 padding\">\n      <form (ngSubmit) = \"create()\" #f=\"ngForm\">\n        <div class=\"container-fluid\">\n\n            <b class=\"blue\">Name</b>\n\n          <input ngModel\n                 placeholder=\"Class name\"\n                 name=\"websitename\"\n                 class=\"form-control\"\n                 type=\"text\"\n                 required\n                 #websitename = \"ngModel\"/>\n\n            <b class=\"blue\">Description</b>\n\n\n\n          <textarea ngModel\n                    class=\"form-control\"\n                    type=\"text\"\n                    placeholder='Description'\n                    rows=\"6\"\n                    name=\"description\"\n                    #description = \"ngModel\"></textarea>\n\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-tiffany navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <b class=\"navbar-text pull-left white\">\n      StockSim\n    </b>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WebsiteNewComponent(websiteService, route, router, sharedService) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
    }
    WebsiteNewComponent.prototype.getUser = function () {
        // this.user = JSON.parse(localStorage.getItem("user"));
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    WebsiteNewComponent.prototype.create = function () {
        var _this = this;
        this.websitename = this.createForm.value.websitename;
        this.description = this.createForm.value.description;
        if (this.websitename === "") {
            alert('Please input class name');
        }
        else {
            if (this.user.role !== 'ORGANIZER') {
                this.newWebsite = {
                    _id: this.websiteService.newId(),
                    name: this.websitename,
                    developerId: this.userId,
                    description: this.description,
                    competition: 0
                };
            }
            else {
                this.newWebsite = {
                    _id: this.websiteService.newId(),
                    name: this.websitename + ' (Trading Competition)',
                    developerId: this.userId,
                    description: this.description,
                    competition: 1
                };
            }
            this.websiteService.createWebsite(this.userId, this.newWebsite)
                .subscribe(function (websites) {
                // this.websites = websites;
                _this.router.navigate(['user', 'website']);
            });
            console.log(this.newWebsite);
        }
    };
    // notify the changes of the route
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.wid = params['wid'];
        });
        this.getUser();
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
        this.websiteService.findAllClasses()
            .subscribe(function (classes) {
            _this.websites = classes;
            console.log(classes);
        });
        // this.websiteService.findWebsitesByUser(this.userId)
        //   .subscribe((websites) => {
        //     this.websites = websites;
        //   });
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _e || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/google-finance/google-stock-buy/google-stock-buy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/google-finance/google-stock-buy/google-stock-buy.component.html":
/***/ (function(module, exports) {

module.exports = "<!--&lt;!&ndash;Navigation Bar&ndash;&gt;-->\n<nav class=\"navbar navbar-tiffany navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/website/{{wid}}/page/{{pid}}/widget/google/list\" class=\"white\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </p>\n\n    <div class=\"navbar-brand pull-left\">\n      <b class=\"white\">Trade Stocks</b>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-brand pull-right\">\n      <a routerLink=\"./new\" class=\"white \">\n        <b>Buy New</b>\n        <!--<span class=\"glyphicon glyphicon-plus \"></span>-->\n      </a>\n    </div>\n  </div>\n</nav>\n<!--<div class=\"nav-bar\">-->\n  <!--<div class=\"container-fluid nav-container\">-->\n    <!--<div class=\"row nav-row\">-->\n      <!--<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 nav-full\">-->\n        <!--<div class=\"row\">-->\n          <!--<div class=\"nav-left-left pull-left\">-->\n            <!--<a routerLink=\"/user/website/{{wid}}/page/{{pid}}/widget/google/list\">-->\n              <!--<button class=\"glyphicon glyphicon-chevron-left nav-back pull-left website-nav-btn\">-->\n              <!--</button>-->\n            <!--</a>-->\n          <!--</div>-->\n          <!--<div class=\"nav-left-center col-xs-10\">-->\n            <!--<p class=\"nav-p\">Websites</p>-->\n          <!--</div>-->\n          <!--<div class=\"nav-left-right nav-ok pull-right\" >-->\n            <!--<a routerLink=\"new\">-->\n              <!--<button class=\"glyphicon glyphicon-plus nav-plus pull-right website-nav-btn\" >-->\n              <!--</button>-->\n            <!--</a>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n<!--Content-->\n<div class=\" container container-fluid content website-content padding50 padding-b\">\n  <h1>Buy stock</h1>\n  <label>Stock symbol</label>\n  <input #companyName>\n  <label>Shares</label>\n  <input #number>\n  <button\n    class=\"btn btn-primary\"\n    (click)=\"searchCompanyHistoricals(companyName.value)\">\n    search\n  </button>\n  <button\n    class=\"btn btn-primary\"\n    (click)=\"buyStock2(companyName.value, number.value)\">\n    buy\n  </button>\n  <br/>\n  <br/>\n  <div >\n    <ul *ngFor=\"let companyHistorical of companyHistoricals\">\n      <div class=\"result-row\">\n        <p>\n          Date: {{companyHistorical['date'].substring(0,19)}}\n        </p>\n        <p>\n          Open: {{companyHistorical['open']}}\n        </p>\n        <p>\n          High: {{companyHistorical['high']}}\n        </p>\n        <p>\n          Low: {{companyHistorical['low']}}\n        </p>\n        <p>\n          Close: {{companyHistorical['close']}}\n        </p>\n      </div>\n    </ul>\n  </div>\n</div>\n\n<!--Bottom Bar-->\n<nav class=\"navbar navbar-tiffany navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <b class=\"navbar-text pull-left white\">\n      StockSim\n    </b>\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/google-finance/google-stock-buy/google-stock-buy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleStockBuyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_googleFinance_service_client__ = __webpack_require__("../../../../../src/app/services/googleFinance.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleStockBuyComponent = (function () {
    //
    function GoogleStockBuyComponent(activatedRoute, googleFinanceService, sharedService) {
        this.activatedRoute = activatedRoute;
        this.googleFinanceService = googleFinanceService;
        this.sharedService = sharedService;
    }
    GoogleStockBuyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.time = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }).slice(0, 10);
        console.log(this.time);
        this.userId = this.sharedService.user['_id'];
        console.log(this.userId);
        this.activatedRoute.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
    };
    //
    GoogleStockBuyComponent.prototype.searchCompanyHistoricals = function (companyName) {
        var _this = this;
        var from = this.time;
        var to = this.time;
        if (companyName.length === 0 || from.length === 0 || to.length === 0) {
            alert('missing info');
            return;
        }
        this.googleFinanceService.searchCompanyHistoricals(companyName, from, to)
            .subscribe(function (companyHistoricals) {
            _this.companyHistoricals = companyHistoricals;
            var yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            var timeY = yesterday.toLocaleString('en-US', { timeZone: 'America/New_York' }).slice(0, 10);
            if (_this.companyHistoricals === null || _this.companyHistoricals.length === 0) {
                _this.googleFinanceService.searchCompanyHistoricals(companyName, timeY, timeY)
                    .subscribe(function (companyHistoricalsY) {
                    _this.companyHistoricals = companyHistoricalsY;
                });
            }
            console.log(companyHistoricals);
        });
    };
    GoogleStockBuyComponent.prototype.updateStockNumberPriceDate = function (stock, companyName, number, price, date) {
        console.log(stock);
        var newPrice = (parseFloat(stock['price']) * parseInt(stock['number'], 10)
            + parseFloat(price) * parseInt(number, 10))
            / (parseInt(stock['number'], 10) + parseInt(number, 10));
        var newNumber = parseInt(stock['number'], 10) + parseInt(number, 10);
        console.log(newPrice);
        console.log(newNumber);
        var newStock = {
            userId: this.userId,
            pid: this.pid,
            name: companyName,
            number: newNumber,
            price: newPrice,
            date: date
        };
        this.googleFinanceService.updateStockNumberPriceDate(newStock)
            .subscribe(function (returnstock) {
            console.log(returnstock);
        });
    };
    // buyStock(companyName, number) {
    //   const time = this.time;
    //
    //   if (companyName.length === 0 || time.length === 0 || number.length === 0) {
    //     alert('missing info');
    //     return;
    //   }
    //   this.googleFinanceService.findStockForUserandCompany(this.userId, companyName)
    //     .subscribe((findstock) => {
    //       console.log('findstock');
    //       console.log(findstock);
    //       this.googleFinanceService.searchCompanyHistoricals(companyName, time, time)
    //         .subscribe((companyHistoricals) => {
    //           this.companyHistoricals = companyHistoricals;
    //           if (this.companyHistoricals === null || this.companyHistoricals.length === 0) {
    //             alert('the stock not existed');
    //           }else {
    //             const stock = this.companyHistoricals[0];
    //             const newStock = {
    //               userId: this.userId,
    //               pid: this.pid,
    //               name: stock['symbol'],
    //               number: parseInt(number, 10),
    //               price: parseFloat((stock['open']).toString()),
    //               date: stock['date']
    //             };
    //             if (findstock === null) {
    //               console.log('null');
    //               this.googleFinanceService.addStock(newStock)
    //                 .subscribe((getStock) => {
    //                   this.newStock = getStock;
    //                   console.log('successful');
    //                   console.log(getStock);
    //                 });
    //             } else {
    //               console.log('notnull');
    //               const newPrice = newStock['price'];
    //               const newNumber = newStock['number'];
    //               const newDate = newStock['date'];
    //               console.log(newPrice);
    //               console.log(newNumber);
    //               console.log(newDate);
    //               this.updateStockNumberPriceDate(findstock, companyName, newNumber, newPrice, newDate);
    //             }
    //           }
    //         });
    //
    //     });
    // }
    GoogleStockBuyComponent.prototype.buyStock2 = function (companyName, number) {
        var _this = this;
        var time = this.time;
        if (companyName.length === 0 || time.length === 0 || number.length === 0) {
            alert('missing info');
            return;
        }
        this.googleFinanceService.findStockForPortandCompany(this.pid, companyName)
            .subscribe(function (findstock) {
            console.log('findstock');
            console.log(findstock);
            _this.googleFinanceService.searchCompanyHistoricals(companyName, time, time)
                .subscribe(function (companyHistoricals) {
                _this.companyHistoricals = companyHistoricals;
                if (_this.companyHistoricals === null || _this.companyHistoricals.length === 0) {
                    var yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    var timeY = yesterday.toLocaleString('en-US', { timeZone: 'America/New_York' }).slice(0, 10);
                    _this.googleFinanceService.searchCompanyHistoricals(companyName, timeY, timeY)
                        .subscribe(function (companyHistoricalsY) {
                        _this.companyHistoricals = companyHistoricalsY;
                        if (_this.companyHistoricals === null || _this.companyHistoricals.length === 0) {
                            alert('Stock does not exist or market not open.');
                        }
                        else {
                            var stock = _this.companyHistoricals[0];
                            var newStock = {
                                userId: _this.userId,
                                pid: _this.pid,
                                name: stock['symbol'],
                                number: parseInt(number, 10),
                                price: parseFloat((stock['open']).toString()),
                                date: stock['date']
                            };
                            if (findstock === null) {
                                console.log('null');
                                _this.googleFinanceService.addStock(newStock)
                                    .subscribe(function (getStock) {
                                    _this.newStock = getStock;
                                    console.log('successful');
                                    console.log(getStock);
                                });
                            }
                            else {
                                console.log('notnull');
                                var newPrice = newStock['price'];
                                var newNumber = newStock['number'];
                                var newDate = newStock['date'];
                                console.log(newPrice);
                                console.log(newNumber);
                                console.log(newDate);
                                _this.updateStockNumberPriceDate(findstock, companyName, newNumber, newPrice, newDate);
                            }
                        }
                    });
                }
                else {
                    var stock = _this.companyHistoricals[0];
                    var newStock = {
                        userId: _this.userId,
                        pid: _this.pid,
                        name: stock['symbol'],
                        number: parseInt(number, 10),
                        price: parseFloat((stock['open']).toString()),
                        date: stock['date']
                    };
                    if (findstock === null) {
                        console.log('null');
                        _this.googleFinanceService.addStock(newStock)
                            .subscribe(function (getStock) {
                            _this.newStock = getStock;
                            console.log('successful');
                            console.log(getStock);
                        });
                    }
                    else {
                        console.log('notnull');
                        var newPrice = newStock['price'];
                        var newNumber = newStock['number'];
                        var newDate = newStock['date'];
                        console.log(newPrice);
                        console.log(newNumber);
                        console.log(newDate);
                        _this.updateStockNumberPriceDate(findstock, companyName, newNumber, newPrice, newDate);
                    }
                }
            });
        });
    };
    return GoogleStockBuyComponent;
}());
GoogleStockBuyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-google-stock-buy',
        template: __webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-buy/google-stock-buy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-buy/google-stock-buy.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_googleFinance_service_client__["a" /* GoogleFinanceServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_googleFinance_service_client__["a" /* GoogleFinanceServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], GoogleStockBuyComponent);

var _a, _b, _c;
//# sourceMappingURL=google-stock-buy.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/google-finance/google-stock-edit/google-stock-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/google-finance/google-stock-edit/google-stock-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-tiffany navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/website/{{wid}}/page/{{pid}}/widget/google/list\" class=\"white\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick white\">\n        <b>Stock Edit</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <!--<div class=\"navbar-text pull-right\">-->\n      <!--<a class=\"white\">-->\n        <!--<span class=\"glyphicon glyphicon-ok \"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding padding-b\">\n  <b>Current holding</b>\n  <div class=\"result-row\">\n    <p>\n      Stock symbol: {{stock['name']}}\n    </p>\n    <p>\n      Shares: {{stock['number']}}\n    </p>\n    <p>\n      Price: {{stock['price']}}\n    </p>\n    <p>\n      Date: {{stock['date']}}\n    </p>\n  </div>\n  <button\n    class=\"btn btn-primary\"\n    (click)=\"searchCompanyHistoricals()\">\n    Search current price\n  </button>\n  <br/>\n  <br/>\n\n  <div >\n    <ul *ngFor=\"let companyHistorical of companyHistoricals2\">\n      <li class=\"result-row\">\n        <p>\n          Date: {{companyHistorical['date']}}\n        </p>\n        <p>\n          Open: {{companyHistorical['open']}}\n        </p>\n        <p>\n          High: {{companyHistorical['high']}}\n        </p>\n        <p>\n          Low: {{companyHistorical['low']}}\n        </p>\n        <p>\n          Close: {{companyHistorical['close']}}\n        </p>\n      </li>\n    </ul>\n  </div>\n\n  <button\n    class=\"btn btn-primary\"\n    (click)=\"sellStock(number.value)\">\n  Sell\n  </button>\n  <input #number>\n  <label>Shares</label>\n\n  <br/>\n  <br/>\n  <button\n    class=\"btn btn-primary\"\n    (click)=\"buyStock2(number2.value)\">\n    Buy\n  </button>\n  <input #number2>\n  <label>Shares</label>\n\n\n\n\n</div>\n\n<nav class=\"navbar navbar-tiffany navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <b class=\"navbar-text pull-left white\">\n      StockSim\n    </b>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user \"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<!--<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">-->\n  <!--<div class=\"container-fluid\">-->\n    <!--<div class=\"navbar-text pull-right\">-->\n      <!--&lt;!&ndash;<a href=\"../user/profile.view.client.html\">&ndash;&gt;-->\n      <!--<span class=\"glyphicon glyphicon-user blue\"></span>-->\n      <!--&lt;!&ndash;</a>&ndash;&gt;-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</nav>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/google-finance/google-stock-edit/google-stock-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleStockEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_googleFinance_service_client__ = __webpack_require__("../../../../../src/app/services/googleFinance.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleStockEditComponent = (function () {
    function GoogleStockEditComponent(activatedRoute, googleFinanceService, sharedService) {
        this.activatedRoute = activatedRoute;
        this.googleFinanceService = googleFinanceService;
        this.sharedService = sharedService;
    }
    GoogleStockEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.time = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }).slice(0, 10);
        console.log(this.time);
        this.userId = this.sharedService.user['_id'];
        console.log(this.userId);
        this.activatedRoute.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.stockid = params['stockid'];
        });
        this.googleFinanceService.findStockByStockId(this.stockid)
            .subscribe(function (stock) {
            _this.stock = stock;
            console.log(stock);
            _this.companyName = stock['name'];
        });
    };
    GoogleStockEditComponent.prototype.updateStockNumberPriceDateSell = function (stock, companyName, number, price, date) {
        var _this = this;
        if (number > stock['number']) {
            alert('sell more stocks than have');
            return null;
        }
        var newPrice = (parseFloat(stock['price']) * parseInt(stock['number'], 10)
            - parseFloat(price) * parseInt(number, 10))
            / (parseInt(stock['number'], 10) - parseInt(number, 10));
        var newNumber = parseInt(stock['number'], 10) - parseInt(number, 10);
        var newStock = {
            userId: this.userId,
            pid: this.pid,
            name: companyName,
            number: newNumber,
            price: newPrice,
            date: date
        };
        this.googleFinanceService.updateStockNumberPriceDate(newStock)
            .subscribe(function (any) {
            _this.googleFinanceService.findStockByStockId(_this.stockid)
                .subscribe(function (returnstock) {
                _this.stock = returnstock;
                console.log(returnstock);
            });
            // location.reload();
        });
    };
    GoogleStockEditComponent.prototype.sellStock = function (number) {
        var _this = this;
        var time = this.time;
        if (time.length === 0 || number.length === 0) {
            alert('missing info');
            return;
        }
        number = parseInt(number, 10);
        this.googleFinanceService.findStockForPortandCompany(this.pid, this.companyName)
            .subscribe(function (findstock) {
            console.log('findstock');
            console.log(findstock);
            if (findstock === null) {
                alert('the stock not existed');
            }
            else {
                _this.googleFinanceService.searchCompanyHistoricals(_this.companyName, time, time)
                    .subscribe(function (companyHistoricals) {
                    _this.companyHistoricals = companyHistoricals;
                    if (_this.companyHistoricals === null || _this.companyHistoricals.length === 0) {
                        var yesterday = new Date();
                        yesterday.setDate(yesterday.getDate() - 1);
                        var timeY = yesterday.toLocaleString('en-US', { timeZone: 'America/New_York' }).slice(0, 10);
                        _this.googleFinanceService.searchCompanyHistoricals(_this.companyName, timeY, timeY)
                            .subscribe(function (companyHistoricalsY) {
                            _this.companyHistoricals = companyHistoricalsY;
                            if (_this.companyHistoricals === null || _this.companyHistoricals.length === 0) {
                                alert('the stock not existed');
                            }
                            else {
                                var stock = _this.companyHistoricals[0];
                                var newStock = {
                                    userId: _this.userId,
                                    pid: _this.pid,
                                    name: stock['symbol'],
                                    number: parseInt(number, 10),
                                    price: parseFloat((stock['open']).toString()),
                                    date: stock['date']
                                };
                                if (findstock === null) {
                                    console.log('null');
                                    return;
                                }
                                else {
                                    console.log('notnull');
                                    var newPrice = newStock['price'];
                                    var newNumber = newStock['number'];
                                    var newDate = newStock['date'];
                                    console.log(newPrice);
                                    console.log(newNumber);
                                    console.log(newDate);
                                    _this.updateStockNumberPriceDateSell(findstock, _this.companyName, newNumber, newPrice, newDate);
                                }
                            }
                        });
                    }
                    else {
                        var stock = _this.companyHistoricals[0];
                        var newStock = {
                            userId: _this.userId,
                            name: stock['symbol'],
                            number: parseInt(number, 10),
                            price: parseFloat((stock['open']).toString()),
                            date: stock['date']
                        };
                        if (findstock === null) {
                            console.log('null');
                            return;
                        }
                        else {
                            console.log('notnull');
                            var newPrice = newStock['price'];
                            var newNumber = newStock['number'];
                            var newDate = newStock['date'];
                            console.log(newPrice);
                            console.log(newNumber);
                            console.log(newDate);
                            _this.updateStockNumberPriceDateSell(findstock, _this.companyName, newNumber, newPrice, newDate);
                        }
                    }
                });
            }
        });
    };
    GoogleStockEditComponent.prototype.searchCompanyHistoricals = function () {
        var _this = this;
        var companyName = this.companyName;
        var from = this.time;
        var to = this.time;
        if (companyName.length === 0 || from.length === 0 || to.length === 0) {
            alert('missing info');
            return;
        }
        this.googleFinanceService.searchCompanyHistoricals(companyName, from, to)
            .subscribe(function (companyHistoricals) {
            _this.companyHistoricals2 = companyHistoricals;
            console.log(companyHistoricals);
        });
    };
    // buyStock(number) {
    //   const time = this.time;
    //   const companyName = this.companyName;
    //   if (companyName.length === 0 || time.length === 0 || number.length === 0) {
    //     alert('missing info');
    //     return;
    //   }
    //   this.googleFinanceService.findStockForUserandCompany(this.userId, companyName)
    //     .subscribe((findstock) => {
    //       console.log('findstock');
    //       console.log(findstock);
    //       this.googleFinanceService.searchCompanyHistoricals(companyName, time, time)
    //         .subscribe((companyHistoricals) => {
    //           this.companyHistoricals = companyHistoricals;
    //           if (this.companyHistoricals === null || this.companyHistoricals.length === 0) {
    //             alert('the stock not existed');
    //           }else {
    //             const stock = this.companyHistoricals[0];
    //             const newStock = {
    //               userId: this.userId,
    //               name: stock['symbol'],
    //               number: parseInt(number, 10),
    //               price: parseFloat((stock['open']).toString()),
    //               date: stock['date']
    //             };
    //             if (findstock === null) {
    //               console.log('null');
    //               this.googleFinanceService.addStock(newStock)
    //                 .subscribe((getStock) => {
    //                   this.stock = getStock;
    //                   console.log('successful');
    //                   console.log(getStock);
    //                 });
    //             } else {
    //               console.log('notnull');
    //               const newPrice = newStock['price'];
    //               const newNumber = newStock['number'];
    //               const newDate = newStock['date'];
    //               console.log(newPrice);
    //               console.log(newNumber);
    //               console.log(newDate);
    //               this.updateStockNumberPriceDate(findstock, companyName, newNumber, newPrice, newDate);
    //             }
    //           }
    //         });
    //
    //     });
    // }
    GoogleStockEditComponent.prototype.buyStock2 = function (number) {
        var _this = this;
        var time = this.time;
        var companyName = this.companyName;
        if (number.length === 0) {
            alert('missing info');
            return;
        }
        this.googleFinanceService.findStockForPortandCompany(this.pid, companyName)
            .subscribe(function (findstock) {
            console.log('findstock');
            console.log(findstock);
            _this.googleFinanceService.searchCompanyHistoricals(companyName, time, time)
                .subscribe(function (companyHistoricals) {
                _this.companyHistoricals = companyHistoricals;
                if (_this.companyHistoricals === null || _this.companyHistoricals.length === 0) {
                    var yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    var timeY = yesterday.toLocaleString('en-US', { timeZone: 'America/New_York' }).slice(0, 10);
                    _this.googleFinanceService.searchCompanyHistoricals(companyName, timeY, timeY)
                        .subscribe(function (companyHistoricalsY) {
                        _this.companyHistoricals = companyHistoricalsY;
                        if (_this.companyHistoricals === null || _this.companyHistoricals.length === 0) {
                            alert('the stock not existed');
                        }
                        else {
                            var stock = _this.companyHistoricals[0];
                            var newStock = {
                                userId: _this.userId,
                                pid: _this.pid,
                                name: stock['symbol'],
                                number: parseInt(number, 10),
                                price: parseFloat((stock['open']).toString()),
                                date: stock['date']
                            };
                            if (findstock === null) {
                                console.log('null');
                                _this.googleFinanceService.addStock(newStock)
                                    .subscribe(function (getStock) {
                                    _this.stock = getStock;
                                    console.log('successful');
                                    console.log(getStock);
                                });
                            }
                            else {
                                console.log('notnull');
                                var newPrice = newStock['price'];
                                var newNumber = newStock['number'];
                                var newDate = newStock['date'];
                                console.log(newPrice);
                                console.log(newNumber);
                                console.log(newDate);
                                _this.updateStockNumberPriceDate(findstock, companyName, newNumber, newPrice, newDate);
                            }
                        }
                    });
                }
                else {
                    var stock = _this.companyHistoricals[0];
                    var newStock = {
                        userId: _this.userId,
                        pid: _this.pid,
                        name: stock['symbol'],
                        number: parseInt(number, 10),
                        price: parseFloat((stock['open']).toString()),
                        date: stock['date']
                    };
                    if (findstock === null) {
                        console.log('null');
                        _this.googleFinanceService.addStock(newStock)
                            .subscribe(function (getStock) {
                            _this.stock = getStock;
                            console.log('successful');
                            console.log(getStock);
                        });
                    }
                    else {
                        console.log('notnull');
                        var newPrice = newStock['price'];
                        var newNumber = newStock['number'];
                        var newDate = newStock['date'];
                        console.log(newPrice);
                        console.log(newNumber);
                        console.log(newDate);
                        _this.updateStockNumberPriceDate(findstock, companyName, newNumber, newPrice, newDate);
                    }
                }
            });
        });
    };
    GoogleStockEditComponent.prototype.updateStockNumberPriceDate = function (stock, companyName, number, price, date) {
        var _this = this;
        console.log(stock);
        var newPrice = (parseFloat(stock['price']) * parseInt(stock['number'], 10)
            + parseFloat(price) * parseInt(number, 10))
            / (parseInt(stock['number'], 10) + parseInt(number, 10));
        var newNumber = parseInt(stock['number'], 10) + parseInt(number, 10);
        console.log(newPrice);
        console.log(newNumber);
        var newStock = {
            userId: this.userId,
            pid: this.pid,
            name: companyName,
            number: newNumber,
            price: newPrice,
            date: date
        };
        this.googleFinanceService.updateStockNumberPriceDate(newStock)
            .subscribe(function (any) {
            _this.googleFinanceService.findStockByStockId(_this.stockid)
                .subscribe(function (returnstock) {
                _this.stock = returnstock;
                console.log(returnstock);
            });
        });
    };
    return GoogleStockEditComponent;
}());
GoogleStockEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-google-stock-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-edit/google-stock-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-edit/google-stock-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_googleFinance_service_client__["a" /* GoogleFinanceServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_googleFinance_service_client__["a" /* GoogleFinanceServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], GoogleStockEditComponent);

var _a, _b, _c;
//# sourceMappingURL=google-stock-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/google-finance/google-stock-list/google-stock-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/google-finance/google-stock-list/google-stock-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-tiffany navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/website/{{wid}}/page\" class=\"white\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </p>\n\n    <div class=\"navbar-brand pull-left\">\n      <b class=\"white\">My Stocks</b>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-brand pull-right\">\n      <a (click)=gotoBuy()\n\n         class=\"white \">\n        <b>Buy New</b>\n        <!--<span class=\"glyphicon glyphicon-plus \"></span>-->\n      </a>\n    </div>\n  </div>\n</nav>\n\n<!--Content-->\n<div class=\"container container-fluid content website-content padding50 padding-b\">\n  <br/>\n  <b class ='letter-tiffany '>\"The stock market is filled with individuals who know the price of everything,\n    but the value of nothing.\" - Phillip Fisher</b>\n  <br/>\n  <h3>All holdings</h3>\n  <br/>\n\n  <div class=\"container container-fluid\">\n    <ul *ngFor=\"let stock of stocks\">\n      <div class=\"jpa-toolbar\">\n        <a routerLink=\"{{stock['_id']}}/edit\" >\n          <a class=\"black glyphicon glyphicon-usd\">BUY/SELL</a>\n        </a>\n        <!--<button class=\"widget-toolbar-btn glyphicon glyphicon-align-justify\"></button>-->\n      </div>\n      <li class=\"result-row\">\n        <b>\n          Stock symbol: {{stock['name']}} &nbsp; &nbsp; &nbsp; &nbsp; Shares: {{stock['number']}}\n        <!--</p>-->\n        <!--<p>-->\n          <!--Number: {{stock['number']}}-->\n        <!--</p>-->\n        <!--<p>-->\n          &nbsp; &nbsp; &nbsp; &nbsp;  Purchase price: {{stock['price']}} &nbsp; &nbsp; Current price: {{stock['currentPrice']}}\n        <!--</p>-->\n        <!--<p>-->\n          <!--Current price: {{stock['currentPrice']}}-->\n        <!--</p>-->\n        <!--<p>-->\n          &nbsp; &nbsp; &nbsp; &nbsp; Profit: {{(stock['currentPrice'] - stock['price']) * stock['number'] | number: '1.2-2'}}\n        <!--</p>-->\n        <!--<p>-->\n          &nbsp; &nbsp; &nbsp; &nbsp;\n          Date: {{stock['date'].substring(0,10)}}\n        </b>\n        <br/>\n        <br/>\n      </li>\n    </ul>\n  </div>\n\n\n  <div class=\"container-fluid padding padding-b \" >\n\n\n    <div class=\"widget-list\">\n\n      <div *ngFor = \"let widget of widgets \" >\n\n        <div [ngSwitch] = \"widget.type\" >\n\n          <div class=\"jga-widget \">\n\n            <div class=\"jpa-toolbar\">\n              <div>\n                <span class=\"glyphicon glyphicon-menu-hamburger black pull-right\"></span>\n                <a class=\"blue\" routerLink=\"/user/website/{{ wid }}/page/{{pid}}/widget/{{widget._id}}\" >\n                  <span class=\"glyphicon glyphicon-cog  pull-right\"></span>\n                </a>\n              </div>\n            </div>\n\n            <!--<div *ngSwitchCase=\"'HEADING'\" class=\"padding-b\">-->\n              <!--<div [ngSwitch]=\"widget.size\">-->\n                <!--<h1 *ngSwitchCase=\"1\">{{widget.text}}</h1>-->\n                <!--<h2 *ngSwitchCase=\"2\">{{widget.text}}</h2>-->\n                <!--<h3 *ngSwitchCase=\"3\">{{widget.text}}</h3>-->\n                <!--<h4 *ngSwitchCase=\"4\">{{widget.text}}</h4>-->\n                <!--<h5 *ngSwitchCase=\"5\">{{widget.text}}</h5>-->\n                <!--<h6 *ngSwitchCase=\"6\">{{widget.text}}</h6>-->\n              <!--</div>-->\n            <!--</div>-->\n\n            <!--<div *ngSwitchCase = \"'IMAGE'\" class=\"padding-b\">-->\n              <!--Image url: \"{{widget.url}}\"-->\n              <!--<br/>-->\n              <!--<img class=\"img-responsive\" [src] = updateImageUrl(widget.url) [style.width] =  \"widget.width\" />-->\n              <!--<br/>-->\n            <!--</div>-->\n\n            <div *ngSwitchCase = \"'HTML'\" [innerHTML]=\"widget.text\" class=\"black pull-right\"> </div>\n            <!--<a href=\"{{widget.url}}\" class> <div>{{widget.text}}</div> </a>-->\n\n            <!--<div *ngSwitchCase=\"'INPUT'\" class=\"padding-b\" >-->\n              <!--Text Input Name: {{widget.name}}-->\n              <!--<div *ngIf=\"widget.formatted\">-->\n                <!--<quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>-->\n              <!--</div>-->\n              <!--<input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"-->\n                     <!--placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>-->\n\n              <!--<textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"-->\n                        <!--rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"-->\n                        <!--class=\"form-control\">{{widget.text}}</textarea>-->\n            <!--</div>-->\n\n            <!--<div *ngSwitchCase = \"'YOUTUBE'\" class=\"padding-b\">-->\n              <!--Video Name: {{widget.name}}-->\n              <!--<div class=\"videoWrapper\">-->\n                <!--<iframe  class=\"e2e-iframe-trusted-src\" width=\"560\" height=\"315\"-->\n                         <!--[src] = updateVideoUrl(widget.url) frameborder=\"0\" allowfullscreen></iframe>-->\n                <!--<br/>-->\n              <!--</div>-->\n            <!--</div>-->\n\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <button class='butten btn-primary white pull-right'>\n    <a (click) = \"createWidget('')\">\n      <b class='white '>Comment</b>\n    </a>\n  </button>\n</div>\n\n\n<!--Bottom Bar-->\n<nav class=\"navbar navbar-tiffany navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <b class=\"navbar-text pull-left white\">\n      StockSim\n    </b>\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/google-finance/google-stock-list/google-stock-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleStockListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_googleFinance_service_client__ = __webpack_require__("../../../../../src/app/services/googleFinance.service.client.ts");
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






var GoogleStockListComponent = (function () {
    function GoogleStockListComponent(widgetService, activatedRoute, router, sharedService, googleFinanceSerice, pageService) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.googleFinanceSerice = googleFinanceSerice;
        this.pageService = pageService;
        this.comment = {
            name: '',
            _id: this.widgetService.newId(),
            type: 'HTML',
            pageId: this.pid,
            size: 0,
            text: '',
            width: '100%',
            url: '',
            placeholder: '',
            rows: 0,
            fomatted: false
        };
    }
    GoogleStockListComponent.prototype.gotoBuy = function () {
        if (!((this.user._id === this.page.owner) || (this.user.role === 'ADMIN'))) {
            alert('Only portfolio owner and Admin can modify stocks.');
        }
        else {
            this.router.navigate(['user' + '/website/' + this.wid + '/page/' + this.pid + '/widget/google/list/buy']);
        }
    };
    GoogleStockListComponent.prototype.createWidget = function () {
        var _this = this;
        this.widget = this.comment;
        this.widget.text = 'User ' + this.user.username + ' said: ' + this.comment.text;
        this.widgetService.createWidget(this.pid, this.widget)
            .subscribe(function (newWidget) {
            _this.widget = newWidget;
            _this.wid = newWidget._id;
            _this.router.navigate(['user' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/' + _this.wid]);
        }, function (error) { return console.log(error); });
    };
    GoogleStockListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.time = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }).slice(0, 10);
        this.activatedRoute.params.subscribe(function (params) {
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
        console.log('pid');
        console.log(this.pid);
        this.user = this.sharedService.user;
        console.log(this.user);
        this.userId = this.user['_id'];
        this.googleFinanceSerice.findAllstocksForPort(this.pid)
            .subscribe(function (stocks) {
            var _loop_1 = function (stock) {
                console.log(stock);
                _this.googleFinanceSerice.searchCompanyHistoricals(stock['name'], _this.time, _this.time)
                    .subscribe(function (companyHistoricals) {
                    if (companyHistoricals === null || companyHistoricals.length === 0) {
                        // alert('the stock not existed');
                        var yesterday = new Date();
                        yesterday.setDate(yesterday.getDate() - 1);
                        var timeY = yesterday.toLocaleString('en-US', { timeZone: 'America/New_York' }).slice(0, 10);
                        _this.googleFinanceSerice.searchCompanyHistoricals(stock['name'], timeY, timeY)
                            .subscribe(function (companyHistoricalsY) {
                            if (companyHistoricalsY === null || companyHistoricalsY.length === 0) {
                                console.log('the stock not existed');
                            }
                            else {
                                var getstock = companyHistoricalsY[0];
                                stock['currentPrice'] = getstock['close'];
                            }
                        });
                    }
                    else {
                        var getstock = companyHistoricals[0];
                        stock['currentPrice'] = getstock['open'];
                        // console.log('curr');
                        // console.log(getstock);
                        // console.log(stock['currentPrice']);
                    }
                });
            };
            for (var _i = 0, stocks_1 = stocks; _i < stocks_1.length; _i++) {
                var stock = stocks_1[_i];
                _loop_1(stock);
            }
            _this.stocks = stocks;
        });
        this.activatedRoute.params.subscribe(function (params) {
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
        this.pageService.findPageById(this.wid, this.pid)
            .subscribe(function (page) {
            _this.page = page;
        });
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
        this.widgetService.findAllWidgetsForPageId(this.pid)
            .subscribe(function (data) {
            _this.widgets = data;
            console.log(_this.widgets);
        });
    };
    return GoogleStockListComponent;
}());
GoogleStockListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-google-stock-list',
        template: __webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-list/google-stock-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-list/google-stock-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_googleFinance_service_client__["a" /* GoogleFinanceServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_googleFinance_service_client__["a" /* GoogleFinanceServiceClient */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */]) === "function" && _f || Object])
], GoogleStockListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=google-stock-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/google-finance/google-stock-news/google-stock-news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/google-finance/google-stock-news/google-stock-news.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Navigation Bar-->\n\n<nav class=\"navbar navbar-tiffany navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/login\" class=\"white\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </p>\n\n    <div class=\"navbar-brand pull-left\">\n      <b class=\"white\">News</b>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container padding40 padding-b\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-8 hidden-sm padding-b\">\n\n      <!--<h2 >World Finance</h2>-->\n\n      <h3>    Bloomberg Live News</h3>\n      <div class=\"videoWrapper\">\n        <iframe  class=\"e2e-iframe-trusted-src\" width=\"560\" height=\"315\"\n                 src = 'https://www.youtube.com/embed/Ga3maNZ0x0w?autoplay=1&cc_load_policy=1&controls=0' frameborder=\"0\" allowfullscreen>\n        </iframe>\n        <br/>\n        <br/>\n      </div>\n      <br/>\n    </div>\n<!--Content-->\n    <div class=\"col-sm-4 container container-fluid\">\n\n    <div class=\"container container-fluid content website-content  padding-b\">\n     <h2>Search Company News</h2>\n    <input #companyName\n    placeholder=\"stock symbol\">\n    <button (click)=\"searchCompany(companyName.value)\">\n      <span class=\"glyphicon glyphicon-search\"></span>\n    </button>\n        <div class=\"container container-fluid\">\n          <ul *ngFor=\"let companynew of companyNews\">\n            <li class=\" container container-fluid\">\n              <div>\n                News title: {{companynew['title']}}\n              </div>\n              <div>\n                News summary: {{companynew['summary']}}\n              </div>\n              <div>\n                News description: {{companynew['description']}}\n              </div>\n              <div>\n                News date: {{companynew['date']}}\n              </div>\n              <div>\n                News link: <a href=\"{{companynew['link']}}\">{{companynew['link']}}</a>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<!--Bottom Bar-->\n<nav class=\"navbar navbar-tiffany navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <b class=\"navbar-text pull-left white\">\n      StockSim\n    </b>\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/google-finance/google-stock-news/google-stock-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleStockNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_googleFinance_service_client__ = __webpack_require__("../../../../../src/app/services/googleFinance.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleStockNewsComponent = (function () {
    function GoogleStockNewsComponent(googleFinanceService) {
        this.googleFinanceService = googleFinanceService;
    }
    GoogleStockNewsComponent.prototype.ngOnInit = function () {
        // this.googleFinanceService.searchSomeNews()
        //   .subscribe((companyNews) => {
        //     this.companyNews = companyNews;
        //     console.log(companyNews);
        //   });
    };
    GoogleStockNewsComponent.prototype.searchCompany = function (companyName) {
        var _this = this;
        this.googleFinanceService.searchCompanyNews(companyName)
            .subscribe(function (companyNews) {
            _this.companyNews = companyNews;
            console.log(companyNews);
        });
    };
    return GoogleStockNewsComponent;
}());
GoogleStockNewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-google-stock-news',
        template: __webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-news/google-stock-news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/google-finance/google-stock-news/google-stock-news.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_googleFinance_service_client__["a" /* GoogleFinanceServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_googleFinance_service_client__["a" /* GoogleFinanceServiceClient */]) === "function" && _a || Object])
], GoogleStockNewsComponent);

var _a;
//# sourceMappingURL=google-stock-news.component.js.map

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

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/website/{{wid}}/page/{{pid}}/widget/\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Choose Widget</b>\n      </div>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group padding \">\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      <a (click) = \"createWidget('HEADING')\">\n         Header\n      </a>\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      <a (click) = \"createWidget('IMAGE')\">\n         Image\n      </a>\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      <a (click) = \"createWidget('YOUTUBE')\">\n         YouTube\n      </a>\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      <a (click) = \"createWidget('HTML')\">\n        Html\n      </a>\n    </li>\n\n    <li class=\"list-group-item blue nounderline borderless\">\n      <a (click) = \"createWidget('INPUT')\">\n        Text Input\n      </a>\n    </li>\n\n  </ul>\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <!--<a href=\"profile.view.client.html\">-->\n      <span class=\"glyphicon glyphicon-user blue\"></span>\n      <!--</a>-->\n    </div>\n  </div>\n</nav>\n\n"

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
                type: 'HEADING',
                pageId: this.pid,
                size: 0,
                text: '',
                width: '100%',
                url: '',
                placeholder: '',
                rows: 0,
                fomatted: false
            },
            'IMAGE': {
                name: '',
                _id: this.widgetService.newId(),
                type: 'IMAGE',
                pageId: this.pid,
                size: 0,
                text: '',
                width: '100%',
                url: '',
                placeholder: '',
                rows: 0,
                fomatted: false
            },
            'YOUTUBE': {
                name: '',
                _id: this.widgetService.newId(),
                type: 'YOUTUBE',
                pageId: this.pid,
                size: 0,
                text: '',
                width: '100%',
                url: '',
                placeholder: '',
                rows: 0,
                fomatted: false
            },
            'HTML': {
                name: '',
                _id: this.widgetService.newId(),
                type: 'HTML',
                pageId: this.pid,
                size: 0,
                text: '',
                width: '100%',
                url: '',
                placeholder: '',
                rows: 0,
                fomatted: false
            },
            'INPUT': {
                name: '',
                _id: this.widgetService.newId(),
                type: 'INPUT',
                pageId: this.pid,
                size: 0,
                text: '',
                width: '100%',
                url: '',
                placeholder: '',
                rows: 0,
                formatted: false
            }
        };
    }
    WidgetChooserComponent.prototype.createHeader = function (pageId) {
        var _this = this;
        var newWidget = {
            name: '',
            _id: this.widgetService.newId(),
            type: 'HEADING',
            pageId: this.pid,
            size: 0,
            text: 'text',
            width: '100%',
            url: 'url'
        };
        this.widgetService.createWidget(pageId, newWidget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['user' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/' + newWidget._id]);
        });
    };
    WidgetChooserComponent.prototype.createImage = function (pageId) {
        var _this = this;
        var newWidget = {
            name: '',
            _id: this.widgetService.newId(),
            type: 'IMAGE',
            pageId: this.pid,
            size: 0,
            text: 'text',
            width: '100%',
            url: 'url'
        };
        this.widgetService.createWidget(pageId, newWidget)
            .subscribe(function (widgets) {
            _this.router.navigate(['user' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/' + newWidget._id]);
        });
    };
    WidgetChooserComponent.prototype.createYoutube = function (pageId) {
        var _this = this;
        var newWidget = {
            name: '',
            _id: this.widgetService.newId(),
            type: 'YOUTUBE',
            pageId: this.pid,
            size: 0,
            text: 'text',
            width: '100%',
            url: 'undefined'
        };
        this.widget = newWidget;
        this.widgetService.createWidget(pageId, newWidget)
            .subscribe(function (widgets) {
            _this.router.navigate(['user' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/' + newWidget._id]);
        });
    };
    WidgetChooserComponent.prototype.createWidget = function (type) {
        var _this = this;
        this.widget = this.defaultWidgetValues[type];
        this.widgetService.createWidget(this.pid, this.widget)
            .subscribe(function (newWidget) {
            _this.widget = newWidget;
            _this.wid = newWidget._id;
            _this.router.navigate(['user' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/' + _this.wid]);
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

module.exports = "\n<!--<nav class=\"navbar navbar-light2 navbar-fixed-top\">-->\n  <!--<div class=\"container-fluid\">-->\n\n    <!--&lt;!&ndash;heading on the nav bar&ndash;&gt;-->\n    <!--<div class=\"navbar-text pull-left\">-->\n      <!--<a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget\" class=\"black\">-->\n        <!--<span class=\"glyphicon glyphicon-chevron-left \"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n\n    <!--<div class=\"navbar-brand pull-left\">-->\n      <!--<div class=\"thick grey\">-->\n        <!--<b>Widget Edit</b>-->\n      <!--</div>-->\n    <!--</div>-->\n\n    <!--&lt;!&ndash;tick mark&ndash;&gt;-->\n    <!--<div class=\"navbar-text pull-right\">-->\n      <!--<a routerLink=\"/profile/{{userId}}/website/{{wid}}/page/{{pid}}/widget\" class=\"black\">-->\n        <!--<span class=\"glyphicon glyphicon-ok\"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n\n  <!--</div>-->\n<!--</nav>-->\n\n\n<div class=\"container-fluid \">\n\n  <!--<div [ngSwitch] = \"widget.widgetType\">-->\n\n    <!--<div *ngSwitchCase = \"'HEADING'\">-->\n      <!--{{widget.text}}-->\n      <app-widget-header *ngIf=\"widget.type ==='HEADING'\"></app-widget-header>\n    <!--</div>-->\n\n    <!--<div *ngSwitchCase = \"'IMAGE'\">-->\n      <!--{{widget.size}}-->\n      <app-widget-image *ngIf=\"widget.type ==='IMAGE'\"></app-widget-image>\n    <!--</div>-->\n\n    <!--<div *ngSwitchCase = \"'HTML'\">-->\n      <app-widget-html *ngIf=\"widget.type ==='HTML'\"></app-widget-html>\n    <!--</div>-->\n\n    <!--<div *ngSwitchCase = \"'YOUTUBE'\">-->\n      <!--{{widget.url}}-->\n      <app-widget-youtube *ngIf=\"widget.type ==='YOUTUBE'\"></app-widget-youtube>\n    <!--</div>-->\n\n      <app-widget-text *ngIf=\"widget.type ==='INPUT'\"></app-widget-text>\n\n  <!--</div>-->\n</div>\n\n<!--<div [ngSwitch]=\"widget.type\">-->\n\n  <!--<div *ngSwitchCase='HEADING'>-->\n    <!--<app-widget-header></app-widget-header>-->\n  <!--</div>-->\n\n  <!--<div *ngSwitchCase='IMAGE'>-->\n    <!--<app-widget-image></app-widget-image>-->\n  <!--</div>-->\n\n  <!--<div *ngSwitchCase='YOUTUBE'>-->\n    <!--<app-widget-youtube></app-widget-youtube>-->\n  <!--</div>-->\n\n  <!--<div *ngSwitchCase='HTML'>-->\n    <!--<app-widget-html></app-widget-html>-->\n  <!--</div>-->\n\n  <!--<div *ngSwitchCase='TEXT'>-->\n    <!--<app-widget-text></app-widget-text>-->\n  <!--</div>-->\n\n\n<!--</div>-->\n\n\n<!--<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">-->\n  <!--<div class=\"container-fluid\">-->\n    <!--<div class=\"navbar-text pull-right\">-->\n      <!--&lt;!&ndash;<a href=\"../user/profile.view.client.html\">&ndash;&gt;-->\n      <!--<span class=\"glyphicon glyphicon-user blue\"></span>-->\n      <!--&lt;!&ndash;</a>&ndash;&gt;-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</nav>-->\n"

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
        this.HEADING = 'HEADING';
        this.YOUTUBE = 'YOUTUBE';
        this.TEXT = 'TEXT';
        this.HTML = 'HTML';
        this.IMAGE = 'IMAGE';
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.widget.type = widget.type;
                console.log(widget);
                console.log(widget.type);
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

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/website/{{wid}}/page/{{pid}}/widget\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Widget Edit</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateHeader()\" class=\"black\">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding\">\n\n      Name\n      <input [(ngModel)]=\"widget.name\"\n             class=\"form-control\"\n             type=\"text\"\n             placeholder=\"Name\"/>\n\n     Text\n      <input [(ngModel)]=\"widget.text\"\n             class=\"form-control\"\n             type=\"text\"\n             placeholder=\"Text\"/>\n\n      Size\n      <input [(ngModel)]=\"widget.size\"\n             class=\"form-control\"\n             type=\"Number\"\n             placeholder=\"Size\"/>\n\n\n    <a class=\"btn btn-danger btn-block\"\n       (click)=\"deleteWidget(this.pid, this.wgid)\">Delete</a>\n\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <!--<a href=\"../user/profile.view.client.html\">-->\n      <span class=\"glyphicon glyphicon-user blue\"></span>\n      <!--</a>-->\n    </div>\n  </div>\n</nav>\n\n\n"

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
    WidgetHeaderComponent.prototype.updateHeader = function () {
        var _this = this;
        if (!this.widget.name) {
            alert('Please input widget name');
        }
        else {
            var newWidget = {
                name: this.widget.name,
                _id: this.wgid,
                type: this.widget.type,
                pageId: this.pid,
                size: this.widget.size,
                text: this.widget.text,
                width: this.widget.url,
                url: this.widget.url,
                placeholder: '',
                rows: 0,
                formatted: false
            };
            this.widgetService.updateWidget(this.pid, this.wgid, newWidget)
                .subscribe(function (widgets) {
                _this.router.navigate(['user' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
            });
        }
    };
    WidgetHeaderComponent.prototype.deleteWidget = function (pageId, widgetId) {
        var _this = this;
        this.widgetService.deleteWidget(pageId, widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['user' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
        });
    };
    // notify the changes of the route
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
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

module.exports = "<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/website/{{wid}}/page/{{pid}}/widget/google/list\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Your comment</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateWidget()\" class=\"black\">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid padding\">\n  <div *ngIf=\"flag\"\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetText\">Title</label>\n      <input [(ngModel)] = \"widgetname\"\n             name = \"widgetText\"\n             placeholder=\"Title\"\n             type=\"text\"\n             id=\"widgetText\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <quill-editor [(ngModel)]=\"widgettext\" name=\"text\"></quill-editor>\n  </div>\n\n\n  <br/>\n\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteWidget(this.pid, this.wgid)\">Delete</a>\n\n</div>\n\n"

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








var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(userService, websiteService, pageService, route, widgetService, router) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.widgetNew = { name: '', text: '' };
        this.flag = false;
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
    WidgetHtmlComponent.prototype.updateWidget = function () {
        var _this = this;
        if (!this.widgetname) {
            alert('Please input comment title');
        }
        else {
            this.widget.text = this.widgettext;
            this.widget.name = this.widgetname;
            this.widgetService.updateWidget(this.pid, this.wgid, this.widget)
                .subscribe(function (data) { return _this.router.navigate(['user' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/google/list']); }, function (error) { return console.log(error); });
        }
    };
    WidgetHtmlComponent.prototype.deleteWidget = function (pageId, widgetId) {
        var _this = this;
        this.widgetService.deleteWidget(pageId, widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['user' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/google/list']);
        });
    };
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.error = 'Enter the name of the widget';
        this.alert = '* Enter the widget name';
        this.route.params.subscribe(function (params) {
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
        });
        this.widgetService.findWidgetById(this.wgid)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.name = _this.widget.name;
            _this.widgettext = _this.widget.text;
            _this.widgetname = _this.widget.name;
            console.log(widget);
        });
    };
    return WidgetHtmlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], WidgetHtmlComponent.prototype, "widgetNew", void 0);
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_widget_service_client__["a" /* WidgetService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object])
], WidgetHtmlComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\" class=\"white\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </p>\n\n    <div class=\"navbar-brand pull-left\">\n      <b class=\"white\">Search Flickr</b>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid padding\">\n\n\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\"\n           type=\"text\" class=\"form-control\"\n           placeholder=\"Let's see!\">\n    <span class=\"input-group-btn padding-b\">\n           <a (click)=\"searchPhotos(searchText)\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n           </a>\n   </span>\n  </div>\n\n\n  <div class=\"row\">\n    <div *ngFor = \"let pic of photos['photo']\"\n         class=\"col-xs-4\">\n      <img    (click)=\"selectPhoto(pic)\"\n              width=\"100%\"\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"/>\n      <p></p>\n    </div>\n  </div>\n\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\" class=\"white\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

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
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = {
            websiteId: this.wid,
            pageId: this.pid,
            url: url,
            size: 1,
            name: 'Flickr',
            rows: 0,
            placeholder: '',
            formatted: false
        };
        this.widgetService
            .updateWidget(this.pid, this.wgid, widget)
            .subscribe(function (data) {
            var result = data;
            if (result) {
                _this.router.navigate(['/user/' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
            }
            else {
                _this.error = 'failed!';
            }
        });
    };
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
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

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/website/{{wid}}/page/{{pid}}/widget\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Widget Edit</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateImage() \" class=\"black\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding\">\n\n    Name\n    <input [(ngModel)]=\"widget.name\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Name\"/>\n\n    Text\n    <input [(ngModel)]=\"widget.text\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"text\"/>\n\n    URL\n    <input [(ngModel)]=\"widget.url\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"url\">\n\n    Width%\n    <input [(ngModel)]=\"widget.width\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"100\"/>\n\n    Upload\n    <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n      <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n      <input  name=\"widgetId\" value=\"{{wgid}}\"   style=\"display: none\"/>\n      <input  name=\"websiteId\" value=\"{{wid}}\"   style=\"display: none\"/>\n      <input  name=\"pageId\" value=\"{{pid}}\"   style=\"display: none\"/>\n      <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n      <button type=\"submit\" class=\"btn btn-primary btn-block \">Upload Image</button>\n      <br/>\n    </form>\n\n\n\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteWidget(this.pid, this.wgid)\">Delete</a>\n  <br/>\n\n  <a class=\"btn btn-success btn-block\"\n     routerLink=\"/user/website/{{wid}}/page/{{pid}}/widget/{{wgid}}/flickr\">Search</a>\n\n\n  <br/>\n  <div class=\"padding-b\">\n    <b class=\"blue\">Page preview</b>\n      <img [attr.src]= updateImageUrl(widget.url)  [style.width] =  \"widget.width\" />\n    <br/>\n    <br/>\n  </div>\n\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <!--<a href=\"../user/profile.view.client.html\">-->\n      <span class=\"glyphicon glyphicon-user blue\"></span>\n      <!--</a>-->\n    </div>\n  </div>\n</nav>\n\n"

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
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetImageComponent.prototype.updateImageUrl = function (string) {
        var newurl = '';
        if (string.substring(1, 4) === 'ass') {
            newurl = this.baseUrl + string;
        }
        else {
            newurl = string;
        }
        return newurl;
    };
    WidgetImageComponent.prototype.updateImage = function () {
        var _this = this;
        if (!this.widget.name) {
            alert('Please input widget name');
        }
        else {
            var newWidget = {
                name: this.widget.name,
                _id: this.wgid,
                type: this.widget.type,
                pageId: this.pid,
                size: this.widget.size,
                text: this.widget.text,
                width: this.widget.width,
                url: this.widget.url,
                placeholder: '',
                rows: 0,
                formatted: false
            };
            this.widgetService.updateWidget(this.pid, this.wgid, newWidget)
                .subscribe(function (widgets) {
                _this.router.navigate(['user' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
            });
        }
    };
    WidgetImageComponent.prototype.deleteWidget = function (pageId, widgetId) {
        var _this = this;
        this.widgetService.deleteWidget(pageId, widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['user' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
        });
    };
    // notify the changes of the route
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].baseUrl;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            // this.widgetService.findAllWidgetsForPageId(this.pid)
            //   .subscribe((widgets: Widget[]) => {
            //     this.widgets = widgets;
            //   });
        });
        this.widgetService.findWidgetById(this.wgid)
            .subscribe(function (widget) {
            _this.widget = widget;
            // this.url = widget.url;
        });
        // this.http.get(this.baseUrl + '/api/upload')
        //   .map((response: Response) => {
        //     return response.json();
        //   })
        //   .subscribe((images) => {
        //     this.images = images;
        //     console.log(images);
        //   });
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

module.exports = "<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/website/{{wid}}/page/{{pid}}/widget\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Widget Edit</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateWidget()\" class=\"black\">\n        <span class=\"glyphicon glyphicon-ok \"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid padding\">\n  <!--<div *ngIf=flag-->\n       <!--class=\"alert alert-danger\">-->\n    <!--{{error}}-->\n  <!--</div>-->\n\n  Text\n  <input [(ngModel)]=\"widget.text\" class=\"form-control\"/>\n\n  Rows\n  <input [(ngModel)]=\"widget.rows\" class=\"form-control\" type=\"number\"/>\n  <label for=\"Name\">Name</label>\n  <div>\n    <input [(ngModel)]=\"widget.name\"\n           type=\"text\"\n           class=\"form-control\"\n           id=\"Name\"\n           name=\"name\"\n           placeholder=\"Name\">\n  </div>\n\n  Placeholder\n  <input [(ngModel)]=\"widget.placeholder\" class=\"form-control\" required/>\n  <p></p>\n  <div class=\"input-group\">\n    <input type=\"text\"\n           readonly\n           value=\"Formatted\"\n           class=\"form-control\"/>\n    <span class=\"input-group-addon\">\n     <input [(ngModel)]=\"widget.formatted\"\n            type=\"checkbox\"/>\n    </span>\n  </div>\n\n\n  <br/>\n\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteWidget(this.pid, this.wgid)\">Delete</a>\n\n</div>\n\n"

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
        this.flag = false;
    }
    WidgetTextComponent.prototype.updateWidget = function () {
        var _this = this;
        console.log(this.widget.name);
        if (!this.widget.name) {
            // this.flag = true;
            alert('Please input widget name');
        }
        else {
            this.widgetService.updateWidget(this.pid, this.wgid, this.widget)
                .subscribe(function (data) { return _this.router.navigate(['/user', 'website', _this.wid, 'page', _this.pid, 'widget']); }, function (error) { return console.log(error); });
        }
    };
    WidgetTextComponent.prototype.deleteWidget = function (pageId, widgetId) {
        var _this = this;
        this.widgetService.deleteWidget(pageId, widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['user' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
        });
    };
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
        });
        this.widgetService.findWidgetById(this.wgid)
            .subscribe(function (widget) {
            _this.widget = widget;
            console.log(widget);
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

module.exports = "<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/website/{{wid}}/page/{{pid}}/widget\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick grey\">\n        <b>Widget Edit</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateYoutube()\" class=\"black\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding\">\n\n      Name\n    <input [(ngModel)]=\"widget.name\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Name\"/>\n      Text\n    <input [(ngModel)]=\"widget.text\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Text\"/>\n      URL\n    <input [(ngModel)]=\"widget.url\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Please user embeded url\">\n\n      Width\n    <input [(ngModel)]=\"widget.width\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"100\">\n\n\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteWidget(this.pid, this.wgid)\">Delete</a>\n\n</div>\n\n\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <!--<a href=\"../user/profile.html\">-->\n      <span class=\"glyphicon glyphicon-user blue\"></span>\n      <!--</a>-->\n    </div>\n  </div>\n</nav>\n"

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
    WidgetYoutubeComponent.prototype.updateYoutube = function () {
        var _this = this;
        if (!this.widget.name) {
            alert('Please input widget name');
        }
        else {
            var newWidget = {
                name: this.widget.name,
                _id: this.wgid,
                type: this.widget.type,
                pageId: this.pid,
                size: this.widget.size,
                text: this.widget.text,
                width: this.widget.width,
                url: this.widget.url,
                rows: 0,
                formatted: false,
                placeholder: ''
            };
            this.widgetService.updateWidget(this.pid, this.wgid, newWidget)
                .subscribe(function (widgets) {
                _this.router.navigate(['user' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
            });
        }
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function (pageId, widgetId) {
        var _this = this;
        this.widgetService.deleteWidget(pageId, widgetId)
            .subscribe(function (widgets) {
            _this.router.navigate(['user' + '/website/' + _this.wid + '/page/' + _this.pid + '/widget/']);
        });
    };
    // notify the changes of the route
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
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

/***/ "../../../../../src/app/components/widget/widget-list/order-by-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a.position < b.position) {
                return -1;
            }
            else if (a.position > b.position) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'orderBy'
    })
], OrderByPipe);

//# sourceMappingURL=order-by-pipe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
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

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "newIndexes", void 0);
SortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

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

module.exports = "\n<nav class=\"navbar navbar-light2 navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/website/{{wid}}/page\" class=\"black\">\n        <span class=\"glyphicon glyphicon-chevron-left \"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-brand pull-left\">\n      <div class=\"thick\">\n        <b>Portfolio {{this.page.name}}</b>\n      </div>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/website/{{wid}}/page/{{pid}}/widget/new\"\n         class=\"black\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid padding padding-b \" >\n  <label class ='letter-tiffany paddingleft'>\"The stock market is filled with individuals who know the price of everything,\n    but the value of nothing.\" - Phillip Fisher</label>\n\n  <div class=\"widget-list\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n\n    <div *ngFor = \"let widget of widgets | orderBy\" >\n\n      <div [ngSwitch] = \"widget.type\" >\n\n        <div class=\"jga-widget \">\n\n          <div class=\"jpa-toolbar\">\n            <div>\n              <span class=\"glyphicon glyphicon-menu-hamburger black pull-right\"></span>\n              <a class=\"blue\" routerLink=\"/user/website/{{ wid }}/page/{{pid}}/widget/{{widget._id}}\" >\n                <span class=\"glyphicon glyphicon-cog  pull-right\"></span>\n              </a>\n            </div>\n          </div>\n\n          <div *ngSwitchCase=\"'HEADING'\" class=\"padding-b\">\n            <div [ngSwitch]=\"widget.size\">\n              <h1 *ngSwitchCase=\"1\">{{widget.text}}</h1>\n              <h2 *ngSwitchCase=\"2\">{{widget.text}}</h2>\n              <h3 *ngSwitchCase=\"3\">{{widget.text}}</h3>\n              <h4 *ngSwitchCase=\"4\">{{widget.text}}</h4>\n              <h5 *ngSwitchCase=\"5\">{{widget.text}}</h5>\n              <h6 *ngSwitchCase=\"6\">{{widget.text}}</h6>\n            </div>\n          </div>\n\n          <div *ngSwitchCase = \"'IMAGE'\" class=\"padding-b\">\n            Image url: \"{{widget.url}}\"\n            <br/>\n            <img class=\"img-responsive\" [src] = updateImageUrl(widget.url) [style.width] =  \"widget.width\" />\n            <br/>\n          </div>\n\n          <div *ngSwitchCase = \"'HTML'\" [innerHTML]=\"widget.text\" class=\"padding-b\"> </div>\n            <!--<a href=\"{{widget.url}}\" class> <div>{{widget.text}}</div> </a>-->\n\n          <div *ngSwitchCase=\"'INPUT'\" class=\"padding-b\" >\n            Text Input Name: {{widget.name}}\n            <div *ngIf=\"widget.formatted\">\n              <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n            </div>\n            <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                   placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n            <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                      rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                      class=\"form-control\">{{widget.text}}</textarea>\n          </div>\n\n          <div *ngSwitchCase = \"'YOUTUBE'\" class=\"padding-b\">\n            Video Name: {{widget.name}}\n            <div class=\"videoWrapper\">\n              <iframe  class=\"e2e-iframe-trusted-src\" width=\"560\" height=\"315\"\n                       [src] = updateVideoUrl(widget.url) frameborder=\"0\" allowfullscreen></iframe>\n              <br/>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-light2 navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n    <b class=\"navbar-text pull-left\">\n      StockSim\n    </b>\n\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile\" class=\"blue\">\n        <span class=\"glyphicon glyphicon-user \"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    // testwidth: String;
    // inject route info in constructor
    function WidgetListComponent(userService, websiteService, widgetService, pageService, route, sanitizer) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.widgets = [];
        this.widget = { type: '', width: '' };
    }
    // sanitizer youtuber url
    WidgetListComponent.prototype.updateVideoUrl = function (url) {
        // const aurl = 'https://www.youtube.com/embed/qdA32j7_U6U';
        return this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    WidgetListComponent.prototype.updateImageUrl = function (string) {
        var newurl = '';
        if (string.substring(1, 4) === 'ass') {
            newurl = this.baseUrl + string;
        }
        else {
            newurl = string;
        }
        return newurl;
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pid)
            .subscribe(function (data) { return console.log(data); }
        // console.log(this.widgets);
        );
        console.log(this.widgets);
    };
    // notify the changes of the route
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // width = str.substring(0, str.length - 1);
        // this.testwidth = '80%';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl;
        // invoke a function that can pass the value of the parameters
        this.route.params.subscribe(function (params) {
            // this.user = this.userService.findUserById(this.userId);
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
        this.pageService.findPageById(this.wid, this.pid)
            .subscribe(function (page) {
            _this.page = page;
        });
        this.widgetService.findAllWidgetsForPageId(this.pid)
            .subscribe(function (data) {
            _this.widgets = data;
            console.log(_this.widgets);
        });
        this.userService.findUserById(this.userId).subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
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
        this.type = widgetType;
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

/***/ "../../../../../src/app/services/authentication.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        this.userService = userService;
    }
    // check if allow the user pass through
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.client.js.map

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

/***/ "../../../../../src/app/services/googleFinance.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleFinanceServiceClient; });
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




var GoogleFinanceServiceClient = (function () {
    function GoogleFinanceServiceClient(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    GoogleFinanceServiceClient.prototype.searchCompanyNews = function (companyName) {
        var url = this.baseUrl + '/api/search/news/' + companyName;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    GoogleFinanceServiceClient.prototype.searchCompanyHistoricals = function (companyName, from, to) {
        var url = this.baseUrl + '/api/search/historicals/' + companyName + '/time?from=' + from + '&to=' + to;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    GoogleFinanceServiceClient.prototype.addStock = function (stock) {
        var url = this.baseUrl + '/api/add/stock';
        console.log(stock);
        return this.http.post(url, stock)
            .map(function (response) {
            return response.json();
        });
    };
    // findAllstocksForUser(userId) {
    //   const url = this.baseUrl + '/api/stock/' + userId;
    //   return this.http.get(url)
    //     .map((response: Response) => {
    //       return response.json();
    //     });
    // }
    GoogleFinanceServiceClient.prototype.findAllstocksForPort = function (pid) {
        var url = this.baseUrl + '/api/port/' + pid;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // findStockForUserandCompany(userId, companyName) {
    //   console.log(userId);
    //   console.log(companyName);
    //   const url = this.baseUrl + '/api/stock/find/stock?userId=' + userId + '&companyName=' + companyName;
    //   // const url = this.baseUrl + '/api/stock/find';
    //   return this.http.get(url)
    //     .map((response: Response) => {
    //       return response.json();
    //     });
    // }
    GoogleFinanceServiceClient.prototype.findStockForPortandCompany = function (pid, companyName) {
        console.log(pid);
        console.log(companyName);
        var url = this.baseUrl + '/api/stock/find/pc?pid=' + pid + '&companyName=' + companyName;
        // const url = this.baseUrl + '/api/stock/find';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    GoogleFinanceServiceClient.prototype.updateStockNumberPriceDate = function (stock) {
        var url = this.baseUrl + '/api/stock/update';
        return this.http.put(url, stock)
            .map(function (response) {
            return response.json();
        });
    };
    GoogleFinanceServiceClient.prototype.findStockByStockId = function (stockid) {
        var url = this.baseUrl + '/api/stock/find/stockid/' + stockid;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return GoogleFinanceServiceClient;
}());
GoogleFinanceServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GoogleFinanceServiceClient);

var _a;
//# sourceMappingURL=googleFinance.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
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
var PageService = (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // adds the page parameter instance to the local pages array. The new
    // page's websiteId is set to the websiteId parameter
    PageService.prototype.newId = function () {
        return (Number(Math.floor((Math.random()) * 10000))).toString();
    };
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.post(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    // retrieves the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.findPageById = function (websiteId, pageId) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page/' + pageId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    // updates the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.updatePage = function (websiteId, pageId, page) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page/' + pageId;
        return this.http.put(url, page).map(function (response) {
            return response.json();
        });
    };
    // removes the page from local pages array whose _id matches the pageId parameter
    PageService.prototype.deletePage = function (websiteId, pageId) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page/' + pageId;
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

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
// a service for maintaining current information of the user
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        // ba able to track the currently logged in user
        this.user = {};
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        // Creates a request options object to be optionally provided when instantiating a Request
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    // used by authentication service to verify loggedin user
    UserService.prototype.loggedIn = function () {
        var _this = this;
        var url = this.baseUrl + '/api/loggedIn';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                alert('Please login first');
                return false;
            }
        });
    };
    // add a logout API to post a logout request to the server. The API should return an observable
    // for the component to register a callback and receive a server response.
    UserService.prototype.logout = function () {
        var url = this.baseUrl + '/api/logout';
        this.options.withCredentials = true;
        return this.http.post(url, {}, this.options)
            .map(function (response) {
            return response; // not return a json object
        });
    };
    // posting a register request to the server.
    UserService.prototype.register = function (username, password, role) {
        var url = this.baseUrl + '/api/register';
        // create an object to keep track of the username and password
        var credentials = {
            username: username,
            password: password,
            role: role
        };
        // turn on credentials to make sure the communication is secure
        this.options.withCredentials = true;
        // post the url and other staff to passport and convert back with json object
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = this.baseUrl + '/api/login';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        // post the body encrypted
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.newId = function () {
        return (Number(Math.floor((Math.random()) * 10000))).toString();
        // return (Number(this.users[this.users.length - 1]._id) + 1).toString();
    };
    // adds the user parameter instance to the local users array
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user';
        return this.http.post(url, user).map(function (response) {
            return response.json();
        });
    };
    // updates the user in local users array whose _id matches the userId parameter
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user).map(function (res) {
            return res.json();
        });
    };
    // returns the user whose username and password match the username and password parameters
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
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
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findAllUsers = function () {
        var url = this.baseUrl + '/api/user/all';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
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
var WebsiteService = (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // generate a number for website._id
    WebsiteService.prototype.newId = function () {
        return (Number(Math.floor((Math.random()) * 10000))).toString();
    };
    // adds the website parameter instance to the local websites array.
    // The new website's developerId is set to the userId parameter
    WebsiteService.prototype.findAllClasses = function () {
        var url = this.baseUrl + '/api/allClasses';
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the websites in local websites array whose developerId matches the parameter userId
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        // initiate the array
        // const webs: Website[] = [];
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    // retrieves the website in local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.findWebsiteById = function (userId, websiteId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // updates the website in local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.baseUrl + '/api/user/' + website._user + '/website/' + websiteId;
        return this.http.put(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    // removes the website from local websites array whose _id matches thewebsiteId parameter
    WebsiteService.prototype.deleteWebsite = function (userId, websiteId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId;
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
        return this.http.get(this.baseUrl + '/api/widget')
            .map(function (response) {
            return response.json();
        });
    };
    // adds the widget parameter instance to the local widgets array. The
    // new widget's pageId is set to the pageId parameter
    WidgetService.prototype.createWidget = function (pageId, newWidget) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.post(url, newWidget)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
    WidgetService.prototype.findAllWidgetsForPageId = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // updates the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.updateWidget = function (pageId, widgetId, widget) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget/' + widgetId;
        return this.http.put(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    // removes the widget from local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.deleteWidget = function (pageId, widgetId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget/' + widgetId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '')
            .map(function (res) {
            return res.json();
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
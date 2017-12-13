import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
import {HomeComponent} from './components/home/home.component';
import {TestComponent} from './components/test/test.component';
import {ModuleWithProviders} from '@angular/core';
import {FlickrImageSearchComponent} from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {AuthenticationService} from './services/authentication.service.client';
import {GoogleStockBuyComponent} from './components/widget/google-finance/google-stock-buy/google-stock-buy.component';
import {GoogleStockListComponent} from './components/widget/google-finance/google-stock-list/google-stock-list.component';
import {GoogleStockEditComponent} from './components/widget/google-finance/google-stock-edit/google-stock-edit.component';
import {GoogleStockNewsComponent} from './components/widget/google-finance/google-stock-news/google-stock-news.component';
import {AdminComponent} from './components/user/admin/admin.component';
// config route default constants
const appRoutes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'widget', component: WidgetListComponent},
  {path: 'profile/:userId', component: ProfileComponent},
  // go to profile if canActivate
  {path: 'profile', component: ProfileComponent, canActivate: [AuthenticationService]},
  {path: 'user/admin', component: AdminComponent, canActivate: [AuthenticationService]},
  {path: 'user/website', component: WebsiteListComponent, canActivate: [AuthenticationService]},
  {path: 'user/website/new', component: WebsiteNewComponent, canActivate: [AuthenticationService]},
  {path: 'user/website/:wid', component: WebsiteEditComponent, canActivate: [AuthenticationService]},
  {path: 'user/website/:wid/page', component: PageListComponent, canActivate: [AuthenticationService]},
  {path: 'user/website/:wid/page/new', component: PageNewComponent, canActivate: [AuthenticationService]},
  {path: 'user/website/:wid/page/:pid', component: PageEditComponent, canActivate: [AuthenticationService]},
  {path: 'user/website/:wid/page/:pid/widget', component: WidgetListComponent, canActivate: [AuthenticationService]},
  {path: 'user/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent, canActivate: [AuthenticationService]},
  {path: 'user/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent, canActivate: [AuthenticationService]},
  {path: 'user/website/:wid/page/:pid/widget/:wgid/flickr', component: FlickrImageSearchComponent, canActivate: [AuthenticationService]},
  {path: 'user/website/:wid/page/:pid/widget/google/list/buy', component: GoogleStockBuyComponent, canActivate: [AuthenticationService]},
  {path: 'user/website/:wid/page/:pid/widget/google/list', component: GoogleStockListComponent, canActivate: [AuthenticationService]},
  {path: 'user/website/:wid/page/:pid/widget/google/list/:stockid/edit',
    component: GoogleStockEditComponent, canActivate: [AuthenticationService]},
  {path: 'user/website/:wid/page/:pid/widget/google/news', component: GoogleStockNewsComponent},
];

// use appRoutes to config router module and export it as an constant variable that
// that can be imported else where
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

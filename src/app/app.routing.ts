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


// config route default constants
const appRoutes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'widget', component: WidgetListComponent},
  // navigate pass certain userID 显示在地址栏上
  {path: 'profile/:userId', component: ProfileComponent},
  {path: 'profile/:userId/website', component: WebsiteListComponent},
  {path: 'profile/:userId/website/new', component: WebsiteNewComponent},
  {path: 'profile/:userId/website/:wid', component: WebsiteEditComponent},
  {path: 'profile/:userId/website/:wid/page', component: PageListComponent},
  {path: 'profile/:userId/website/:wid/page/new', component: PageNewComponent},
  {path: 'profile/:userId/website/:wid/page/:pid', component: PageEditComponent},
  {path: 'profile/:userId/website/:wid/page/:pid/widget', component: WidgetListComponent},
  {path: 'profile/:userId/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent},
  {path: 'profile/:userId/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent},
  // {path: 'user/:uid/website WebsiteComponent'}

];


// use appRoutes to config router module and export it as an constant variable that
// that can be imported else where
export const routing = RouterModule.forRoot(appRoutes);

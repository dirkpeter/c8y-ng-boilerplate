import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  CumulocityService,
  BrandingService,
  AssetService
} from './_services';

import {
  GroupListComponent,
  GroupListItemComponent,
} from './group-list';
import {
  PageNotFoundComponent,
  PageGroupDetailsComponent
} from './pages';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';


@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    GroupListItemComponent,
    PageNotFoundComponent,
    PageGroupDetailsComponent,
    LoginComponent,
    DashboardComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CumulocityService,
    BrandingService,
    AssetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

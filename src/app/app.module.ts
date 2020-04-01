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
  GroupDetailsComponent,
  DashboardComponent
} from './pages';
import {
  LoginComponent,
  LoadingIndicatorComponent
} from './common';


@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    GroupListItemComponent,
    PageNotFoundComponent,
    GroupDetailsComponent,
    DashboardComponent,
    LoginComponent,
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

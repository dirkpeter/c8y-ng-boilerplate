import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CumulocityService, BrandingService } from './_services';

import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { GroupListItemComponent } from './group-list-item/group-list-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';


@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    GroupDetailsComponent,
    PageNotFoundComponent,
    LoginComponent,
    GroupListItemComponent,
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
    BrandingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

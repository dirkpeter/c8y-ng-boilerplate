import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {
  PageNotFoundComponent,
  PageGroupDetailsComponent
} from './pages';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'groups/:groupId', component: PageGroupDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

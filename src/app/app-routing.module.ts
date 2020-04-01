import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  PageNotFoundComponent,
  GroupDetailsComponent,
  DashboardComponent
} from './pages';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'groups/:groupId', component: GroupDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

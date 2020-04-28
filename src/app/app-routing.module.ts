import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChartComponent } from './pages/chart/chart.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'groups/:groupId', component: GroupDetailsComponent },
  { path: 'chart', component: ChartComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

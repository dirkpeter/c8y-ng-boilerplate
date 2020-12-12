import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevSpaceComponent } from './dev-space-component/dev-space.component';

const devSpaceRoutes: Routes = [
  {
    path: '',
    component: DevSpaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(devSpaceRoutes)],
  exports: [RouterModule]
})
export class DevSpaceRoutingModule {}

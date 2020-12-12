import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevSpaceRoutingModule } from './dev-space-routing.module';
import { SharedComponentsModule } from '@shared/shared-components.module';
import { TranslateModule } from '@ngx-translate/core';
import { DevSpaceComponent } from './dev-space-component/dev-space.component';

@NgModule({
  providers: [],
  declarations: [DevSpaceComponent],
  imports: [CommonModule, DevSpaceRoutingModule, SharedComponentsModule, TranslateModule.forChild({})],
  exports: [DevSpaceComponent]
})
export class DevSpaceModule {}

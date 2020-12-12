import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupListItemComponent } from './components/group-list-item/group-list-item.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { ClickOutsideDirective } from './directives/clickoutside.directive';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    GroupDetailsComponent,
    GroupListComponent,
    GroupListItemComponent,
    LoadingIndicatorComponent,
    ClickOutsideDirective,
    ButtonComponent
  ],
  imports: [CommonModule, RouterModule, TranslateModule.forChild({})],
  exports: [
    GroupDetailsComponent,
    GroupListComponent,
    GroupListItemComponent,
    LoadingIndicatorComponent,
    ButtonComponent
  ]
})
export class SharedComponentsModule {}

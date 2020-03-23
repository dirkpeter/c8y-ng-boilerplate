import { Component } from '@angular/core';
import { CumulocityService, BrandingService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'c8y-ng-boilerplate';

  constructor(
    public Cumulocity: CumulocityService,
    public Branding: BrandingService
  ) {
    this.Branding.fetch();
  }

  logout() {
    this.Cumulocity.logout();
  }
}

import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BrandingService } from '@services/branding.service';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'c8y-ng-boilerplate';
  loading = true;
  routerEventSubscription: Subscription = null;

  constructor(private router: Router, Translate: TranslateService, public Branding: BrandingService) {
    this.Branding.fetch();
    Translate.addLangs(['en', 'de']);
    Translate.setDefaultLang('en');
    this.routerEventSubscription = this.router.events.subscribe((routerEvent: RouterEvent) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.loading = false;
      this.unsubscribeFromRouterEvents();
    }
  }

  unsubscribeFromRouterEvents() {
    if (this.routerEventSubscription) {
      this.routerEventSubscription.unsubscribe();
      this.routerEventSubscription = null;
    }
  }
}

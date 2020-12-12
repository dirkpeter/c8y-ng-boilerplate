import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  // only loads the module if the user is logged in
  canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    return Promise.resolve(true);
  }

  // prevents unauthorized users from accessing
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return Promise.resolve(true);
  }
}

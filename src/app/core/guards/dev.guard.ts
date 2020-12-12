import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DevGuard implements CanActivate, CanLoad {
  canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    return Promise.resolve(true);
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return Promise.resolve(true);
  }
}

import { EventEmitter, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  response: any;
  hiddenMenuEmitter = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.routeConfig?.path == 'login') {
      try {
        await this.authService.isAuth();
        this.hiddenMenuEmitter.emit(true);
        this.router.navigateByUrl('');
        return true;
      } catch (e) {
        this.hiddenMenuEmitter.emit(false);
        return true;
      }
    } else {
      try {
        await this.authService.isAuth();
        this.hiddenMenuEmitter.emit(true);
        return true;
      } catch (e) {
        this.router.navigateByUrl('login');
        this.hiddenMenuEmitter.emit(false);
        return false;
      }
    }
  }

  logout() {
    this.hiddenMenuEmitter.emit(false);
    localStorage.clear();
    this.router.navigate(['login']);
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthgardGuard implements CanActivate {
  constructor(private authService: AuthService, public router: Router) {}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
      console.log('CanActivate called');
    const isLoggedIn = this.authService.isAuthenticated();
    if (isLoggedIn){
      this.router.navigate(['home']);
      return true;
    } else {
      this.router.navigate(['home/login']);
      return false;
    }
}
}

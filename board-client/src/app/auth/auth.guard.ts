import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router: Router, private apiService : ApiService, private authService : AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const token = this.apiService.getLoginToken();
      if (!token && this.apiService.isLoginTokenExpired(token)) {
        this.router.navigate(['login']);
        this.authService.isLogedIn = false;
        return false;
      } 
      this.authService.isLogedIn = true;
      return true;
  }
}

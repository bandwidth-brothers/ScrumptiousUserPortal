import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    console.log("Act" + this.authService.isLoggedIn())
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl("/auth/login")
    }
    return this.authService.isLoggedIn();
  }

  // canLoad(): boolean {
  //   console.log("Load" + this.authService.isLoggedIn())
  //   if (this.authService.isLoggedIn()) {
  //     this.router.navigateByUrl("home")
  //   }
  //   return !this.authService.isLoggedIn();
  // }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    if (!this.isUserLogin()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  public isUserLogin(): boolean {
    const userDetails: any = JSON.parse(sessionStorage.getItem("user-details"));
    return (userDetails && !isNullOrUndefined(userDetails.key) && userDetails.key !== "")
  }
}

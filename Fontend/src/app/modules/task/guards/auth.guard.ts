import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){

    let tokenExist =!!localStorage.getItem('token')
console.log(tokenExist)
if(!tokenExist){
  this.router.navigateByUrl('/user/dashboard')
}
    return true;
  }
  
}

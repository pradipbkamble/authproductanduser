import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  constructor(private _rout:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userrole:string=localStorage.getItem('UserRole')!
    let userrolearray:Array<string>=route.data['UserRole']

    if (userrolearray.includes(userrole)) {
    return true
    }
    else{
      let urltree:UrlTree= this._rout.createUrlTree(['Home'])
      return urltree
    }
  }
  
}

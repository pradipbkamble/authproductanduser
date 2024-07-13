import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Candeactivate } from '../models/product-interface';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<Candeactivate> {
  canDeactivate(
    component: Candeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
    ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
   return component.canDeactive()
    }
    } 


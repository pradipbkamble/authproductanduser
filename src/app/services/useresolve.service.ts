import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iuser } from '../models/user-interface';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UseresolveService implements Resolve<Iuser>{

  constructor(private _userservice:UserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iuser> | Promise<Iuser> | Iuser {
   let userId=route.params['userid'] 
   return this._userservice.fetchsingleuser(userId)
  }
}

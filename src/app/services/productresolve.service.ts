import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iproduct } from '../models/product-interface';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductresolveService implements Resolve<Iproduct> {

  constructor(private _productservice:ProductService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iproduct> | Promise<Iproduct> | Iproduct {
   let productobj=route.data['productid']
   return this._productservice.fetchsingleproduct(productobj)
   
  }
}

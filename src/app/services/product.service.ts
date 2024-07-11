import { Injectable } from '@angular/core';
import { Iproduct } from '../models/product-interface';
import { mobileProducts } from '../const/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
productarray:Array<Iproduct>=mobileProducts
  constructor() { }

fetchproduct(){
  return this.productarray
}

fetchsingleproduct(id:string):Iproduct{
return this.productarray.find(resid=>resid.pId===id) as Iproduct
}

fetchupd(updatepro:Iproduct){
let updproduct=this.productarray.findIndex(res=>res.pId===updatepro.pId)
 this.productarray[updproduct]=updatepro
}

fetchproductadd(addpro:Iproduct){
  this.productarray.push(addpro)
}

fetchprodelete(dltid:string){
let dltobj=this.productarray.findIndex(dlt=>dlt.pId===dltid)
this.productarray.splice(dltobj,1)
}


}

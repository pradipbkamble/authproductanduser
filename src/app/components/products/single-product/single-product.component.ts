import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/product-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  productid!:string
  productobj!:Iproduct
  constructor( private _productservice:ProductService , private _rout:ActivatedRoute, private _router:Router) {
    this._rout.data.subscribe(res=>{
      this.productobj=res['productinfo']
    })
   }

  ngOnInit(): void {
//    this._rout.params
//    .subscribe((res:Params)=>{
// this.productid=res['productid']

// if(this.productid){
//   this.productobj=this._productservice.fetchsingleproduct(this.productid)
// }
//    })
  }

  updateproduct(){
this._router.navigate(['edtproduct'],
{relativeTo:this._rout,
  queryParamsHandling:'preserve'
}
)
  }
  deleteproject(id:string){
this._productservice.fetchprodelete(id)
this._router.navigate(['products'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/product-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
productobj!:Array<Iproduct>
selectproduct!:string
  constructor( private _productservice:ProductService) { }

  ngOnInit(): void {
this.productobj=this._productservice.fetchproduct()
  }
  clickproductlist(selectid:string){
    this.selectproduct=selectid
  }

}

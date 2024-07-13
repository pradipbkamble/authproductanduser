import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/product-interface';
import { ProductService } from 'src/app/services/product.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  formedtinputs!:FormGroup;
  isUpdate:boolean=false;
  productobj!:Iproduct;
  productId!:string
  constructor( private _productservice:ProductService , private _route:ActivatedRoute , private _router:Router, private _uuid:UuidService) { }

  ngOnInit(): void {
    this.formcontrols()
    this._route.params.subscribe((res:Params)=>{
      this.productId=res['productid']
      if(this.productId){
        this.isUpdate=true
        this.productobj=this._productservice.fetchsingleproduct(this.productId)
        this.formedtinputs.patchValue(this.productobj)
      }
    })
  }

formcontrols(){
  this.formedtinputs=new FormGroup({
    pname:new FormControl(null),
    feature:new FormControl(null),
    pstatus:new FormControl(null),
  })
}

  onsubmitform(){
if(this.formedtinputs.valid){
  let newobj={...this.formedtinputs.value, pId:this._uuid.uuid()}
this._productservice.fetchproductadd(newobj)
this.formedtinputs.reset()
this._router.navigate(['products'])
}

  }

  updatepro(){
let updatepro={...this.formedtinputs.value, pId:this.productId}
this._productservice.fetchupd(updatepro);
this.formedtinputs.reset()
this.isUpdate=false
  }

  canDeactive(){
    if(this.formedtinputs.dirty){
      return confirm('are you sure to leave the page')
    }
    return true
  }



}

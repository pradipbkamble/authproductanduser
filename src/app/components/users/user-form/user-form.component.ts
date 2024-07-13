import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/models/user-interface';
import { UserService } from 'src/app/services/user.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  formedtinputs!:FormGroup;
  isUpdate:boolean=false;
  userobj!:Iuser;
  userId!:string
  constructor( private _userser:UserService , private _route:ActivatedRoute , private _router:Router, private _uuid:UuidService) { }

  ngOnInit(): void {
    this.formcontrols()
    this._route.params.subscribe((res:Params)=>{
      this.userId=res['userid']
      if(this.userId){
        this.isUpdate=true
        this.userobj=this._userser.fetchsingleuser(this.userId)
        this.formedtinputs.patchValue(this.userobj)
      }
    })
  }

formcontrols(){
  this.formedtinputs=new FormGroup({
    userName:new FormControl(null),
    userRole:new FormControl(null),
   
  })
}

  onsubmitform(){
if(this.formedtinputs.valid){
  let newobj={...this.formedtinputs.value, userId:this._uuid.uuid()}
this._userser.adduserobjfetch(newobj)
this.formedtinputs.reset()
this._router.navigate(['users'])
}

  }

  updateuser(){
let updatepro={...this.formedtinputs.value, userId:this.userId}
this._userser.updfetch(updatepro)
this.formedtinputs.reset()
this.isUpdate=false
  }

  canDeactive(){
    if(this.formedtinputs.dirty){
      return alert('are you sure to leave from this form')
    }
    return true
  }



}


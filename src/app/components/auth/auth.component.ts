import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginforminputs!:FormGroup;
  signupforminputs!:FormGroup
  isloginform:boolean=true;
  staf=['staf','HOD']
  constructor(private _authser:AuthService) { }

  ngOnInit(): void {
    this.loginform();
    this.signupform()
  }
loginform(){
  this.loginforminputs=new FormGroup({
    gmail:new FormControl(null),
    password:new FormControl(null)
  })
}

signupform(){
this.signupforminputs=new FormGroup({
  fname:new FormControl(null),
  Lname: new FormControl(null),
  contact:new FormControl(null),
  gmail:new FormControl(null),

})
}


  onloinsubmit(){
let obj=this.loginforminputs.value
this._authser.Login(obj)
  }
  onsignups(){
    this.signupforminputs.value
  }
}

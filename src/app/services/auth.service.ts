import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginstatus:boolean=false

private $loginsubject:BehaviorSubject<boolean>=new BehaviorSubject(false);
subjectobservable=this.$loginsubject.asObservable()
  constructor(private _route:Router) {
    localStorage.setItem('Token','JWT Token')
   }
 
isAthenticate():Promise<boolean>{
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(localStorage.getItem('Token')){
      this.loginstatus=true
    }
    else{
      this.loginstatus=false
      this.$loginsubject.next(false)
      this._route.navigate(['Home'])
    }
    resolve(this.loginstatus)
  },100)
})
}

Login(logingmail:any){
  this.loginstatus=true
  if(logingmail.gmail==='user@gmail.com'){

localStorage.setItem('UserRole','user')
localStorage.setItem('Token','JWT Token')
this.$loginsubject.next(this.loginstatus)
this._route.navigate(['Home'])
  }
  else if(logingmail.gmail==='admin@gmail.com'){
    
    localStorage.setItem('UserRole','Admin')
    localStorage.setItem('Token','JWT Token')
    this.$loginsubject.next(true)
    this._route.navigate(['Home'])
  }
  else if(logingmail.gmail==='superadmin@gmail.com'){
    localStorage.setItem('UserRole','SuperAdmin')
    localStorage.setItem('Token','JWT Token')
   
    this.$loginsubject.next(true)
    this._route.navigate(['Home'])
  }
}

logout(){
  this.loginstatus=false
  localStorage.removeItem('Token')
  localStorage.removeItem('UserRole')
  this._route.navigate([''])
  this.$loginsubject.next(false)
}

}

import { Injectable } from '@angular/core';
import { user } from '../const/user';
import { Iuser } from '../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userarray:Array<Iuser>=user
  constructor() { }

fetchuser(){
  return this.userarray
}

fetchsingleuser(id:string):Iuser{
return this.userarray.find(res=>res.userId===id) as Iuser
}

updfetch(obj:Iuser){
let updobj=this.userarray.findIndex(res=>res.userId===obj.userId)
this.userarray[updobj]=obj
}

adduserobjfetch(user:Iuser){
  this.userarray.push(user)
}

dltuser(id:string){
  let getindex=this.userarray.findIndex(res=>res.userId===id)
  this.userarray.splice(getindex,1)
}





}

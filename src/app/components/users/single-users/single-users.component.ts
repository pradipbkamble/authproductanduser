import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/models/user-interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-single-users',
  templateUrl: './single-users.component.html',
  styleUrls: ['./single-users.component.scss']
})
export class SingleUsersComponent implements OnInit {
  userid!:string;
  userobj!:Iuser
  constructor( private _rout:Router ,private _router:ActivatedRoute, private _userservice:UserService, ) {
this._router.data.subscribe(res=>
  this.userobj=res['userinfo']
)
   }

  ngOnInit(): void {
//     this._router.params
//    .subscribe((res:Params)=>{
// this.userid=res['userid']

// if(this.userid){
//   this.userobj=this._userservice.fetchsingleuser(this.userid)
// }
//    })
  }

  updateuser(){
this._rout.navigate(['useredt'],{
  relativeTo:this._router,
  queryParamsHandling:'preserve'
})

  }
  deleteproject(id:string){
this._userservice.dltuser(id)
this._rout.navigate(['users'])
  }

  }



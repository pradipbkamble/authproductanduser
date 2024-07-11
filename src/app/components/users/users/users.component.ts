import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/user-interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userobj!:Array<Iuser>
  userlogin!:string
  constructor(private _userservice:UserService) { }

  ngOnInit(): void {
    this.userobj=this._userservice.fetchuser()
  }
  clickobj(id:any){
this.userlogin=id
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  islogins!:boolean
  title = 'authproductanduser';
  constructor(private _authservice:AuthService){}
  ngOnInit(): void {
    this._authservice.subjectobservable.subscribe(res=>{
      this.islogins=res
    })
  }
}

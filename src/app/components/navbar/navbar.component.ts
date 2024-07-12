import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
GetUserRole!:string
  constructor(private _authservice:AuthService) { }

  ngOnInit(): void {
    this.GetUserRole=localStorage.getItem('UserRole')!
  }
  logout(){
   this._authservice.logout() 
  }
}

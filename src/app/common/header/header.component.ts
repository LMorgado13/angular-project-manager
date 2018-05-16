import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/common/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _route:Router ,public _authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout (){
    this._authService.logout();
    this._route.navigate (['/login']);
  }
}

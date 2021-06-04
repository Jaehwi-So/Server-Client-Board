import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin : boolean;
  nick : string;
  constructor(private apiService : ApiService, private authService : AuthService) { 
    this.isLogin = false;
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  ngOnInit() {
    const token = this.apiService.getLoginToken();
    if(token && this.apiService.isLoginTokenExpired(token)){
      let tokenInfo = this.getDecodedAccessToken(token); // decode token
      this.isLogin = true;
      this.nick = tokenInfo.nick; // get token expiration dateTime
    }
    else{
      this.isLogin = false;
      this.nick = "";
    }
  }



}

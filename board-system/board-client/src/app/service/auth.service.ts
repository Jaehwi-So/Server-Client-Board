import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogedIn : boolean;
  nick : string;

  constructor() { 
    this.isLogedIn = false;
    this.nick = "";
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  loginSet(token : string){
    this.isLogedIn = true;
    const decodedToken = this.getDecodedAccessToken(token);
    this.nick = decodedToken.nick;
  }

  logoutSet(){
    this.isLogedIn = false;
    this.nick = "";
  }
}

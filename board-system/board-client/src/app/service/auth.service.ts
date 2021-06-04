import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogedIn : boolean

  constructor() { 
    this.isLogedIn = false;
  }
}

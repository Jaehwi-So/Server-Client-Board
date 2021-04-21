import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { concat, Observable, Observer } from 'rxjs';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserRequestModel } from '../models/UserModel';
import ResponseModel from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiHost: string;
  TOKEN_NAME = 'jwtauthToken';
  LOGIN_TOKEN = 'loginAuthToken'

  constructor(private http : HttpClient, private jwtHelper: JwtHelperService) {
    this.apiHost = environment.apiHost;
    this.http = http;
    console.log(this.apiHost);
  }

  //토큰 발급
  token_signin() {
    console.log('발급', this.apiHost);
    return this.http.post<ResponseModel>(`${this.apiHost}/auth/token`, {
        'origin': environment.clientHost,
        'clientSecret': environment.clientSecret,
    });
  }
  //클라이언트 단에 저장된 토큰 GET
  getToken(): string {
    console.log("getToken()", localStorage.getItem(this.TOKEN_NAME));
    return localStorage.getItem(this.TOKEN_NAME);
  }

  //클라이언트 단에 토큰 SET
  setToken(token: string) {
    console.log('setToken()');
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  //클라이언트 단의 토큰 DELETE
  removeToken() {
    console.log('removeToken()');
    localStorage.removeItem(this.TOKEN_NAME);
  }

  //클라이언트 단의 토큰 유효기간 체크
  isTokenExpired(token: string) {
    console.log("tokenExpired");
    return this.jwtHelper.isTokenExpired(token);
  }


  public get_api_request<T> (url : string) : Observable<T>{
    try{
      if(this.getToken() == undefined || this.getToken() == null || this.isTokenExpired(this.getToken())){
        return new Observable<T>((observer: Observer<T>) => {
          this.token_signin() //1. 토큰 발급
          .subscribe((tokenAuth : ResponseModel) => {  //2. 토큰 발급 완료 시 토큰 세팅
            this.setToken(tokenAuth.data);
            this.http.get<T>(url, { //3. 서버에 HTTP 요청
              headers: {Authorization: `Bearer ${this.getToken() || ''}`}
            }).subscribe((resultModel : T) => { 
              observer.next(resultModel); //4. 요청 완료 시 observer를 반응시킴(값 변환시점)
              observer.complete();
            })
          })
        });
      }
      return this.http.get<T>(url, {
        headers: {authorization: `Bearer ${this.getToken() || ''}`}
      });
    }
    catch(error){
      if(error.status === 419){
        console.log("토큰 만료", error);
        return this.get_api_request(url);
      }
      else{
        console.log("서버 오류 or 유효하지 않은 사용자", error);
        return error.response;
      }
    }
  }

  public post_api_request<T> (url : string, data) : Observable<T>{
    try{
      if(this.getToken() == undefined || this.getToken() == null || this.isTokenExpired(this.getToken())){
        return new Observable<T>((observer: Observer<T>) => {
          this.token_signin() //1. 토큰 발급
          .subscribe((tokenAuth : ResponseModel) => {  //2. 토큰 발급 완료 시 토큰 세팅
            this.setToken(tokenAuth.data);
            this.http.post<T>(url, data, { //3. 서버에 HTTP 요청
              headers: {Authorization: `Bearer ${this.getToken() || ''}`}
            }).subscribe((resultModel : T) => { 
              observer.next(resultModel); //4. 요청 완료 시 observer를 반응시킴(값 변환시점)
              observer.complete();
            })
          })
        });
      }
      return this.http.post<T>(url, data, {
        headers: {Authorization: `Bearer ${this.getToken() || ''}`}
      });
    }
    catch(error){
      if(error.status === 419){
        console.log("토큰 만료", error);
        return this.post_api_request(url, data);
      }
      else{
        console.log("서버 오류 or 유효하지 않은 사용자", error);
        return error.response;
      }
    }
  }


  //로그인 토큰 발급
  login_signin(user : UserRequestModel) {
    console.log('발급', this.apiHost);
    return this.http.post<ResponseModel>(`${this.apiHost}/auth/login`, {
        'email': user.email,
        'password': user.password,
    });
  }

  //클라이언트 단에 저장된 토큰 GET
  getLoginToken(): string {
    console.log("getToken()", localStorage.getItem(this.LOGIN_TOKEN));
    return localStorage.getItem(this.LOGIN_TOKEN);
  }

  //클라이언트 단에 토큰 SET
  setLoginToken(token: string) {
    console.log('setToken()', token);
    localStorage.setItem(this.LOGIN_TOKEN, token);
  }

  //클라이언트 단의 토큰 DELETE
  removeLoginToken() {
    console.log('removeToken()');
    localStorage.removeItem(this.LOGIN_TOKEN);
  }

  //클라이언트 단의 토큰 유효기간 체크
  isLoginTokenExpired(token: string) {
    console.log("tokenExpired");
    return this.jwtHelper.isTokenExpired(token);
  }

  public login_api (user : UserRequestModel) : Observable<ResponseModel>{
    try{
      return new Observable<ResponseModel>((observer: Observer<ResponseModel>) => {
        this.login_signin(user) //1. 토큰 발급
        .subscribe((result : ResponseModel) => {  //2. 토큰 발급 완료 시 토큰 세팅
          this.setLoginToken(result.data);            
          observer.next(result); //4. 요청 완료 시 observer를 반응시킴(값 변환시점)
          observer.complete();
        }, (error) => {                         
          observer.next(error);
          observer.complete();
        });
      });      
    }
    catch(error){
      console.log("인증 실패", error);
      return new Observable<ResponseModel>((observer: Observer<ResponseModel>) => {      
        observer.next({
          success : false
        } as ResponseModel); 
        observer.complete();
      });
    }
  }

  

  /*
  public async get_api_promise<T> (url : string) : Promise<T>{
    try{
      //클라이언트 단에 토큰이 없거나 유효기간 만료시 재발급
      if(this.getToken() == undefined || this.getToken() == null || this.isTokenExpired(this.getToken())){
          this.removeToken();
          const result_token = await this.token_signin().toPromise();
          await this.setToken(result_token.token);
      }
      //토큰을 헤더에 넣어 요청
      return this.http.get<T>(url, {
        headers: {authorization: this.getToken()}
      }).toPromise();    
    }
    catch(error){
      //토큰 만료 에러시 재요청
      if(error.status === 419){
        console.log("토큰 만료", error);
        return this.get_api_promise<T>(url);
      }
      else{
        console.log("서버 오류", error);
        return error.response;
      }
    }
  }
  */
}

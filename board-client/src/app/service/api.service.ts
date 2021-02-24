import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { concat, Observable, Observer } from 'rxjs';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiHost: string;
  TOKEN_NAME = 'token';

  constructor(private http : HttpClient, private jwtHelper: JwtHelperService) {
    this.apiHost = environment.apiHost;
    this.http = http;
  }

  //토큰 발급
  token_signin() {
    console.log('발급');
    return this.http.post<TokenAuthModel>(`${this.apiHost}/auth/token`, {
        'origin': environment.clientHost,
        'clientSecret': environment.clientSecret,
    });
  }
  //클라이언트 단에 저장된 토큰 GET
  getToken(): string {
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
    return this.jwtHelper.isTokenExpired(token);
  }


  public get_api_request<T> (url : string) : Observable<T>{
    try{
      if(this.getToken() == undefined || this.getToken() == null || this.isTokenExpired(this.getToken())){
        return new Observable<T>((observer: Observer<T>) => {
          this.token_signin() //1. 토큰 발급
          .subscribe((tokenAuth : TokenAuthModel) => {  //2. 토큰 발급 완료 시 토큰 세팅
            this.setToken(tokenAuth.token);
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
          .subscribe((tokenAuth : TokenAuthModel) => {  //2. 토큰 발급 완료 시 토큰 세팅
            this.setToken(tokenAuth.token);
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
        headers: {authorization: this.getToken()}
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

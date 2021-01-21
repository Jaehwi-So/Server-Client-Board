import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ApiService } from './service/api.service';
import { JwtModule } from '@auth0/angular-jwt';
import { BoardComponent } from './views/board/board.component';
import { CommonModule } from '@angular/common';
import { BoardModule } from './views/board/board.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [ //컴포넌트, 디렉티브, 파이프의 리스트를 선언. 모듈에 선언된 구성요소는 모듈 내에서 사용 가능하다.
    AppComponent,
    TestComponent,
  ],
  imports: [  //의존 관계의 앵귤러 라이브러리 모듈, 기능 모듈(하위 모듈), 라우팅 모듈, 서브 파티 모듈 등을 선언한다.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        // tokenGetter: () => {
        //   return localStorage.getItem('access_token');
        // },
        // whitelistedDomains: ['localhost:4200'],
        // blacklistedRoutes: []
      }
    }),
    /* */
    BoardModule,  
    SharedModule
  ],
  providers: [  //providers : 서비스(Injectable object)의 리스트 선언. 루트 모듈에 선언된 서비스는 애플리케이션 전역에서 사용 가능하다.
    ApiService,
  ],
  bootstrap: [AppComponent] //루트 모듈에서 사용하는 프로퍼티. 진입점인 루트 컴포넌트를 설정
})
export class AppModule { }

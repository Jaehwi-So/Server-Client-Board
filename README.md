# Tsoa를 이용한 Node.js 서버 구축 및 클라이언트 연동

# 목적
- Node.js와 Express 기반의 서버 구축 시 필요한 요소들을 모아 API 서버 구축과 클라이언트 연동의 기반 프로젝트 제작 목적
- CRUD, 파일 처리, 인증 기능을 가진 심플한 게시판 제작.

-----

# 실행 방법

## 패키지 전역 설치
+ npm install -g @angular/cli@7.3.9
+ npm install -g @node/gyp@7.1.2
+ npm install -g ts-node@9.1.1
+ npm install -g nodemon@2.0.6
+ npm install -g express@4.17.1

## 클라이언트 빌드 (board-client)
1. 패키지 설치
    - npm install
2. 환경 변수 설정
    - /board-client/environment.ts && /board-client/environment.prod.ts환경변수 설정
3. 클라이언트 빌드
    - npm run prod-deploy

## 서버 빌드 (board-server-tsoa)
1. 패키지 설치
    - npm install
2. 환경 변수 설정
    - /board-server-tsoa/.env && /board-server-tsoa/.env.production 환경변수 설정
3. 클라이언트 빌드 후 /board-server-tsoa/src/www 디렉터리에 클라이언트에서 빌드한 Webpack 결과물 확인
4. 서버 실행
    - npm start
5. 서버 빌드 및 Webpack 번들링
    - npm run prod-deploy

## Webpack 결과물 실행 (board-server-webpack-dist)
1. 클라이언트 빌드 및 서버 빌드 과정
2. 패키지 설치
    - npm install
3. 일반 실행
    - npm run webpack-start
4. 클러스터링 모드 실행
    - npm run pm2-start
5. 클러스터링 모드 종료
    - npm run pm2-exit

## Dockerlizing
- 추가 예정

-----



# 서버
- TSOA (TypeScript OpenAPI) 
    * REST API 서버를 만들기 위해 TSOA 오픈소스 사용.
- Node.js, Express
    * Node.js와 Express 기반의 프로젝트
- Typescript
    * Typescript를 이용하여 에러를 줄여보자
- Swagger 
    * Tsoa를 이용하여 Swagger 장착, API 문서 자동화
- 인증
    * API Secret Key을 통한 토큰 인증 후 API 이용 기능
    * JWT 토큰 기반의 로그인 인증 기능
- 데이터베이스
    * MariaDB
    * ORM으로 Sequelize 사용
- phpMyAdmin
    * 데이터베이스 편집 UI 제공
- Socket.io
    * 양방향 통신을 위한 Socket.io 연결
- 멀티 프로세싱
    * 클러스터링 : 싱글 스레드의 한계점 보완을 위해 pm2를 이용하여 멀티 프로세싱 및 서버 무중단 운영
    * Redis : 클러스터링에 따른 세션, 소켓등의 공유와 빠른 리소스 로딩 역할을 위해서 Redis DB 추가
- 로깅
    * Winston을 이용하여 로그 파일 형태로 저장
- 파일 관리
    * morgan과 File Stream을 이용하여 리소스 관리
- Webpack
    * Webpack을 통한 모듈 번들링
- Docker
    * 배포를 위한 이미지 Dockerlizing
- Monitoring
    * (Grafana : 서버 모니터링을 위해 추가 예정)
    * (Prometheus : 서버 모니터링을 위해 추가 예정)
- Nginx
    * 리버스 프록시 역할

# 클라이언트
- Angular
    * Angular을 이용하여 컴포넌트 기반의 클라이언트 어플리케이션 제작
- Typescript
    * 앵귤러와 타입스크립트는 짝궁
- Bootstrap, CoreUI
    * 디자인에 자신이 없다면 부트스트랩 짱

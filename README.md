# Tsoa를 이용한 Node.js 서버 구축 및 클라이언트 연동

# 목적
- Node.js와 Express 기반의 서버 구축 시 필요한 요소들을 모아 API 서버 구축과 클라이언트 연동의 기반 프로젝트 제작 목적
- CRUD, 파일 처리, 인증 기능을 가진 심플한 게시판 제작.

# 실행 방법
```
```

# 서버
- TSOA (TypeScript OpenAPI) 
    * REST Open API 서버를 만들기 위해 TSOA 오픈소스 사용.
- Node.js, Express
    * Node.js와 Express 기반의 프로젝트
- Typescript
    * Typescript를 이용하여 에러를 줄여보자
- Swagger 
    * Tsoa를 이용하여 Swagger 장착, Open API 문서 자동화
- 인증
    * JWT 토큰을 통한 인증 후 Open API 이용 가능
    * (세션 기반의 인증 방식 추가 예정)
- 데이터베이스
    * MariaDB
    * ORM으로 Sequelize 사용
- 멀티 프로세싱
    * (클러스터링 : 싱글 스레드의 한계점 보완을 위해 pm2를 이용하여 멀티 프로세싱을 가능하도록 할 것임. 추가 예정)
    * (Redis : 클러스터링에 따른 세션 공유와 빠른 리소스 로딩 역할을 위해서 Redis DB 추가 예정)
- 로깅
    * Winston을 이용하여 로그 파일 형태로 저장
- 파일 관리
    * morgan과 File Stream을 이용하여 리소스 관리
- Webpack
    * (Webpack을 통한 모듈 압축 예정)
- Docker
    * (배포를 위한 이미지 Dockerlizing 예정)
- Monitoring
    * (Grafana : 서버 모니터링을 위해 추가 예정)
    * (Prometheus : 서버 모니터링을 위해 추가 예정)
- Nginx
    * (더 적은 자원을 이용한 서비스를 목적으로 하는 프록시 역할을 위해 추가 예정)

# 클라이언트
- Angular
    * Angular을 이용하여 컴포넌트 기반의 클라이언트 어플리케이션 제작
- Typescript
    * 앵귤러와 타입스크립트는 짝궁
- Bootstrap, CoreUI
    * 디자인에 자신이 없다면 부트스트랩 짱
- Webpack
    * (Webpack을 통한 모듈 압축 예정)
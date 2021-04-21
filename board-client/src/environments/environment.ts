// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiHost: 'http://172.30.1.34:8080/api/v1',  //API 루트 경로
  apiHost: 'http://172.30.1.34:8080/api/v1',  //http://172.30.1.58:8080/api/v1
  clientHost: '172.30.1.34:4200', //클라이언트 서버 주소
  clientSecret: '27418175-4c00-42da-85ec-c1bc70cff130'  //API Key //c3f1fa75-335f-42f7-92bf-5f0cdb3780e2
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

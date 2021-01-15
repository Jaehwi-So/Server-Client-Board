import App from "./app";

/* 라우터들 import */
import PageRouter from "./routes/router.page"
import DomainRouter from "./routes/router.domain"
import BoardRouter from "./routes/router.board"
import MiddlewareRouter from "./routes/router.middlewares"
import AuthRouter from "./routes/router.auth"

/* 애플리케이션 초기화 */
const application = new App(
  [
    /* router init */
    new PageRouter(),
    new DomainRouter(),
    new BoardRouter(),
    new AuthRouter(),
    new MiddlewareRouter(),
  ]
);

/* 서버 실행 */
if(process.env.NODE_ENV === 'development'){
  const server = application.app.listen(application.app.get('port'), () => {
    console.log(`Running on ${application.app.get('port')}`);
  });
}
else{
  const server = application.app.listen(application.app.get('port'), application.app.get('host'), () => {
    console.log(`Running on ${application.app.get('host')} : ${application.app.get('port')}`);
  });
}




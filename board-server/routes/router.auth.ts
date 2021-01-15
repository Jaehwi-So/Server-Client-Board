import AuthController from '../controller/controller.auth';
import { Router } from 'express';
import Route from './router.impl';
import { Request } from 'express';

class AuthRoute implements Route {
    public router  = Router();
    public url = "/auth";
    constructor() {
        this.routerInit();
    }

    private routerInit = () => {
        this.router.post(`${this.url}/token`, AuthController.token_issue);  //메인 페이지 이동 = GET:/  (*/view)
    }
}

export default AuthRoute;
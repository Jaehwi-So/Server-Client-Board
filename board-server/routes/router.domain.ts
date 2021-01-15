import DomainController from '../controller/controller.domain';
import { Router } from 'express';
import Route from './router.impl';
import { Request } from 'express';

class PageRoute implements Route {
    public router  = Router();
    public url = "/domain";
    constructor() {
        this.routerInit();
    }

    private routerInit = () => {
        this.router.post(`${this.url}/`, DomainController.insert_domain);  //메인 페이지 이동 = GET:/  (*/view)
    }
}

export default PageRoute;
import PageController from '../controller/controller.page';
import { Router } from 'express';
import Route from './router.impl';
import { Request } from 'express';

class PageRoute implements Route {
    public router  = Router();
    public url = "/";
    constructor() {
        this.routerInit();
    }

    private routerInit = () => {
        this.router.get('/', PageController.go_main_page);  //메인 페이지 이동 = GET:/  (*/view)
    }
}

export default PageRoute;
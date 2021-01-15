import BoardController from '../controller/controller.board';
import { Router } from 'express';
import Route from './router.impl';
import { Request } from 'express';
import cors from 'cors';

class PageRoute implements Route {
    public router  = Router();
    public url = "/board";
    constructor() {
        this.routerInit();
    }
    
    private routerInit = () => {
        this.router.use(cors({
            credentials: true,
        }));

        this.router.get(`${this.url}`, BoardController.test);  //메인 페이지 이동 = GET:/  (*/view)
    }
}

export default PageRoute;
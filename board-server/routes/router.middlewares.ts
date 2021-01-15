import PageController from '../controller/controller.page';
import { Router } from 'express';
import Route from './router.impl';
import { Request } from 'express';
import cors from 'cors';

class MiddlewareRoute implements Route {
    public router = Router();
    public url = "/";
    constructor() {
        this.routerInit();
    }

    private routerInit = () => {

    }
}

export default MiddlewareRoute;
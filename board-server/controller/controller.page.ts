import { RequestHandler, ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import Controller from './controller.impl';
import passport from 'passport';


class PageController implements Controller {
    constructor() {

    }
    /* 메인 페이지 렌더링 */
    public go_main_page  = (req: Request, res: Response, next: NextFunction) => {
        res.render('main', {});
    };

   
}

export default new PageController();
import { RequestHandler, ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import Controller from './controller.impl';
import passport from 'passport';
import Domain from '../models/domain';
import { v4 as uuid } from 'uuid';


class DomainController implements Controller {
    constructor() {

    }
    public insert_domain  = async (req: Request, res: Response, next: NextFunction) => {
        const { host } = req.body;
        try {
            const exist = await Domain.findOne({ where: { host: host } });
            if (exist) {  //중복 존재시
                return res.json({ res: 'exist' });
            }
           const secret : string = uuid();
            await Domain.create({   
                host,
                clientSecret : secret
            });
            return res.json({ res: 'success' });    
        } 
        catch (error) {
            console.error(error);
            return res.json({ res: 'error' });  
        }
    };

   
}

export default new DomainController();
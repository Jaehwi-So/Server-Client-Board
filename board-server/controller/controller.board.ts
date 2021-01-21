import { RequestHandler, ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import Controller from './controller.impl';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import Domain from '../models/domain';
import { v4 as uuid } from 'uuid';
import { userInfo } from 'os';
import dotenv from 'dotenv';


class BoardController implements Controller {
    constructor() {

    }
    public test  = async (req: Request, res: Response, next: NextFunction) => {
        console.log('test');
        return res.json({
            result : 'success'
        });
    };

    /*
    public insert_board = async (req: Request, res: Response, next: NextFunction) => {
        req.body
        console.log('test');
        return res.json({
            result : 'success'
        });
    };
    */

   
}

export default new BoardController();
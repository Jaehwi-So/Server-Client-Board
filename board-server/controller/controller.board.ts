import { RequestHandler, ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import Controller from './controller.impl';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import Domain from '../models/domain';
import { v4 as uuid } from 'uuid';
import { userInfo } from 'os';
import dotenv from 'dotenv';
import Board from '../models/board';


class BoardController implements Controller {
    constructor() {

    }
    public test = async (req: Request, res: Response, next: NextFunction) => {
        console.log('test');
        return res.json({
            result : 'success'
        });
    };

    public insert_board = async (req: Request, res: Response, next: NextFunction) => {
        console.log('insert', req.file);
        const url = `/img/${req.file.filename}`
        console.log(url);
        const { title, content, nick } = req.body;
        console.log(url, title, content, nick);
        try {
            await Board.create({   //insert
                title : title,
                content : content,
                nick : nick,
                photo : url
            });
            return res.json({ success: true, message: '게시 완료' });    //가입완료
        } 
        catch (error) {
            console.error(error);
            return res.json({ success: false, message: '게시 실패' }); 
        }
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
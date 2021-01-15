import { RequestHandler, ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import Controller from './controller.impl';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import Domain from '../models/domain';
import { v4 as uuid } from 'uuid';
import { userInfo } from 'os';
import dotenv from 'dotenv';


class AuthController implements Controller {
    constructor() {

    }
    public token_issue  = async (req: Request, res: Response, next: NextFunction) => {
        const { clientSecret } = req.body;
        try {
            const domain = await Domain.findOne({
                where : { clientSecret },
            });
            if(!domain){
                return res.status(401).json({
                    code: 401,
                    message: `등록되지 않은 도메인`
                });
            }
            let secret : jwt.Secret;
            secret = process.env.JWT_SECRET!;
            const token = jwt.sign(
                {name : "sjh"},
                secret,
                {
                expiresIn: '1m', // 1분
                issuer: 'nodebird',
            });
            return res.json({
                code: 200,
                message: '토큰이 발급되었습니다',
                token,
            });
        } 
        catch (error) {
            console.error(error);
            return res.status(500).json({
                code: 500,
                message: '서버 에러'
            })
        }
    };

   
}

export default new AuthController();
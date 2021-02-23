// src/users/usersService.ts
import { User } from "../model/user.model";

// A post request should not contain an id.
import { RequestHandler, ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export class MiddlewareService {
  public verify_token = (req : Request, res: Response, next: NextFunction) => {
    try{
        let authorization : string;
        authorization = req.headers.authorization!;
        let secret : jwt.Secret;
        secret = process.env.JWT_SECRET!;
        (<any>req).decoded = jwt.verify(authorization, secret);
        return next();
    }
    catch(error){
        if(error.name == 'TokenExpiredError'){
            return res.status(419).json({
                code: 419,
                message: '토큰 만료',
            });
        }
        return res.status(401).json({
            code: 401,
            message: '유효하지 않은 토큰입니다.',
        });
    }
  };
}
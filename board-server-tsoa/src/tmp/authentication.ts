import * as express from 'express';
import jwt from 'jsonwebtoken';

export function expressAuthentication(req: express.Request, securityName: string, scopes?: string[]): Promise<any> {
    // console.log('test', securityName, 'scopes', scopes);
    const response = req.res as express.Response;
    console.log(`[expressAuth] [validate] Current security type ${securityName}`);
    switch (securityName) {
        case 'jwt':
            return jwtAuthentication(req, response, scopes);
        default:
            return Promise.reject({});
    }
};

export const jwtAuthentication = (req : express.Request, res: express.Response, scopes?: string[]) : Promise<any> => {
    return new Promise((resolve, reject) => {
        try{
            let authorization : string;
            authorization = req.headers.authorization!;
            let secret : jwt.Secret;
            secret = process.env.JWT_SECRET!;
            const decoded = jwt.verify(authorization, secret);
            resolve(decoded);
        }
        catch(error){
            reject(error);
        }
    })
    .catch(err => {
        if(err.name == 'TokenExpiredError'){
            res.status(419);
            res.send({
                code: 419,
                message: '토큰 만료',
            });
        }
        res.status(401);
        res.send({
            code: 401,
            message: '유효하지 않은 토큰',
        });
    })
    
};
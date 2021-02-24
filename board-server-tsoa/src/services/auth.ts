import express from "express";
import jwt from 'jsonwebtoken';
import DefineCode from "../enum/defineCode";
import HttpStatusCode from "../enum/httpStatusCode";
import ResponseModel from "../models/responseModel";

/**
 * Is called before each request to a protected api-resource.
 * @param req The request.
 * @param name The name of the wanted security from the securityDefinitions.
 * @param scopes The required scopes.
 * @see https://github.com/lukeautry/tsoa#authentication
 */
export function expressAuthentication(req: express.Request, securityName: string, scopes?: string[]): Promise<any> {
    const res = req.res as express.Response;
    switch (securityName) {
        case 'jwt':
            return jwtAuth(req, res, scopes);
        default:
            return noneAuth(req, res);
    }
}

export const jwtAuth = (req: express.Request, res: express.Response, scopes?: string[], _token?: string) => {
    return new Promise<any>((resolve, reject) => {
        try{
            console.log(req.get('Authorization'));
            console.log(req.get('Bearer '));
            const token = (req.get('Authorization') || 'Bearer ').split('Bearer ')[1] || (_token as string);
            console.log('1', token);
            const secret = `${process.env.JWT_SECRET}`;
            console.log('2', secret);
            const decoded = jwt.verify(token, secret);
            
            console.log('토큰', token, secret, decoded);
            if(decoded){
                console.log('인증 성공', decoded);
                resolve({});
            }
            else{
                console.log('인증 실패');
                reject(new Error(`${DefineCode.ERROR_CODE_AUTH_FAILED}Empty decoded refresh token.`));
            }
        }
        catch(error){
            console.log('인증 실패!');
            console.log(error);
            reject(error);
        }
    })
    .catch(error => {
        if(error.name == 'TokenExpiredError'){
            res.status(419);
            res.send({
                success: false,
                message: error.message,
                code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
            } as ResponseModel)
            return;
        }
        res.status(HttpStatusCode.UNAUTHORIZED);
        res.send({
            success: false,
            message: error.message,
            code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
        } as ResponseModel)
    })    
}

export const noneAuth = (req: express.Request, res: express.Response) => {
    return new Promise<any>((resolve, reject) => {
        resolve({});
    })
    .catch(err => {
        res.status(HttpStatusCode.UNAUTHORIZED)
        res.send({
            success: false,
            message: err.message,
            code: err.message.match(/(\[[0-9]{3}\])(\w+)/) && err.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? err.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
        } as ResponseModel)
    });
}
    
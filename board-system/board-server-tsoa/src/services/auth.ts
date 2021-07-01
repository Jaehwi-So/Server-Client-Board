import express from "express";
import jwt from 'jsonwebtoken';
import winston from "winston/lib/winston/config";
import logger from "../config/winston";
import DefineCode from "../enum/defineCode";
import HttpStatusCode from "../enum/httpStatusCode";
import ResponseModel from "../models/responseModel";
import { generate_login_token } from "./token";

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
        case 'login':
            return jwtLoginAuth(req, res, scopes);
        default:
            return noneAuth(req, res);
    }
}

export const jwtAuth = (req: express.Request, res: express.Response, scopes?: string[], _token?: string) => {
    return new Promise<any>((resolve, reject) => {
        try{
            const token = (req.get('Authorization') || 'Bearer ').split('Bearer ')[1] || (_token as string);
            const secret = `${process.env.JWT_SECRET}`;
            const decoded = jwt.verify(token, secret);
            
            if(decoded){
                logger.info(`Token Auth Success : ${token}`)
                resolve({});
            }
            else{
                reject(new Error(`${DefineCode.ERROR_CODE_AUTH_FAILED}Empty decoded refresh token.`));
            }
        }
        catch(error){
            console.log(error);
            reject(error);
        }
    })
    .catch(error => {
        if(error.name == 'TokenExpiredError'){
            logger.info(`Token Auth Faild, Token Expired : ${error.message}`)
            res.status(419);
            res.send({
                success: false,
                message: error.message,
                code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
            } as ResponseModel)
            return;
        }
        logger.warn(`Token Auth Faild, Unauthorized : ${error.message}`)
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

export const jwtLoginAuth = (req: express.Request, res: express.Response, scopes?: string[], _token?: string) => {
    return new Promise<any>(async (resolve, reject) => {
        try{
            const token = (req.get('Authorization') || 'Bearer ').split('Bearer ')[1] || (_token as string);
            const secret = `${process.env.LOGIN_SECRET}`;
            const decoded = jwt.verify(token, secret) as any;
            if(decoded){
                
                const expireTime = decoded.exp * 1000;
                const todayTime = Date.now();
                //console.log(expireTime, todayTime);

                //만료시간까지 Time gap보다 적게 남았으며 현재 시간이 아직 만료 시간에 도달하지 않아 유효한 경우
                if (expireTime - DefineCode.TokenRefreshTimeGap <= todayTime && todayTime < expireTime) {
                    console.log('===== update token! ====');
                    decoded.accessToken = await generate_login_token(decoded.id, decoded.email, decoded.nick);  //decoded 속성으로 새로운 토큰을 보낸다.
                }
                logger.info(`Token Auth Success : ${token}`)
                
                resolve(decoded);
            }
            else{
                reject(new Error(`${DefineCode.ERROR_CODE_AUTH_FAILED}Empty decoded refresh token.`));
            }
        }
        catch(error){
            console.log('error!' , error);
            reject(error);
        }
    })
    .catch(error => {
        if(error.name == 'TokenExpiredError'){
            logger.info(`Token Auth Faild, Token Expired : ${error.message}`)
            res.status(419);
            res.send({
                success: false,
                message: error.message,
                code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
            } as ResponseModel)
            return;
        }
        logger.warn(`Token Auth Faild, Unauthorized : ${error.message}`)
        res.status(HttpStatusCode.UNAUTHORIZED);
        res.send({
            success: false,
            message: error.message,
            code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
        } as ResponseModel)
    })    
}

    
import Domain from "../models/domain";
import HttpStatusCode from "../enum/httpStatusCode";
import jwt from 'jsonwebtoken';
import { JwtAuthModel, LoginAuthModel } from "../models/jwtAuth";
import User, { UserReqModel } from "../models/user";
import bcrypt from 'bcrypt';

export const get_token = async (clientSecret : string): Promise<JwtAuthModel>=> {
    return new Promise(async (resolve, reject) => {
        try{
            const domain = await Domain.findOne({
                where : { clientSecret },
            });
            if(!domain){
                resolve({
                    code: HttpStatusCode.UNAUTHORIZED,
                    message: '토큰 발급 실패',
                } as JwtAuthModel);
            }
            let secret : jwt.Secret;
            secret = process.env.JWT_SECRET!;
            const token = jwt.sign({
                name : "sjh"
                }, secret, {
                expiresIn: process.env.TOKEN_EXPIRED_TIME || '1m', // 1분
                issuer: 'board-service',
            });
            resolve({
                code: HttpStatusCode.OK,
                message: '토큰이 발급되었습니다',
                token: token,
            } as JwtAuthModel);
        } 
        catch (error) {
            console.error(error);
            reject(error)
        }        
    })
    
}

export const get_token_login = async (userForm : UserReqModel): Promise<JwtAuthModel>=> {
    return new Promise(async (resolve, reject) => {
        try{
            const user = await User.findOne({
                where : { 
                    email : userForm.email, 
                },
            });
            if(!user){
                resolve({
                    result: true,
                    code: HttpStatusCode.UNAUTHORIZED,
                    message: '일치하지 않는 계정',
                } as JwtAuthModel);
            }
            else{
                const result = await bcrypt.compare(userForm.password, user.password);
                if(result){
                    let secret : jwt.Secret;
                    secret = process.env.JWT_SECRET!;
                    const token = jwt.sign({
                        email : user.email,
                        nick : user.nick
                        }, secret, {
                        expiresIn: process.env.TOKEN_EXPIRED_TIME || '10m', // 1분
                        issuer: 'board-service',
                    });
                    resolve({
                        result: true,
                        code: HttpStatusCode.OK,
                        message: '로그인 토큰이 발급되었습니다',
                        token: token,
                    } as JwtAuthModel);
                }
                else{
                    resolve({
                        result: true,
                        code: HttpStatusCode.UNAUTHORIZED,
                        message: '로그인 토큰 발급 실패',
                    } as JwtAuthModel);
                }
            }
        } 
        catch (error) {
            console.error(error);
            reject(error)
        }        
    })
    
}
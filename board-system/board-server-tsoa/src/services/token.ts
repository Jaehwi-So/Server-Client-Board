import Domain from "../models/domain";
import HttpStatusCode from "../enum/httpStatusCode";
import jwt from 'jsonwebtoken';
import { JwtAuthModel, LoginAuthModel } from "../models/jwtAuth";
import User, { UserReqModel } from "../models/user";
import bcrypt from 'bcrypt';

/* API 토큰 발급 */
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
                return;
            }
            let secret : jwt.Secret;
            secret = process.env.JWT_SECRET!;
            const token = jwt.sign({
                name : "sjh"
                }, secret, {
                expiresIn: process.env.TOKEN_EXPIRED_TIME || '5m', // 1분
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

/* 로그인 토큰 생성 */
export const generate_login_token = async (id : number, email : string, nick : string) => {
    let secret : jwt.Secret;
    secret = process.env.LOGIN_SECRET!;
    const token = jwt.sign({
        id : id,
        email : email,
        nick : nick
        }, secret, {
        expiresIn: process.env.LOGIN_EXPIRED_TIME || '30m', // 1분
        issuer: 'board-service',
    });
    return token;
}

/* 로그인 토큰 발급 */
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
                    const token = await generate_login_token(user.id, user.email, user.nick);
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
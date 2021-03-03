import Domain from "../models/domain";
import HttpStatusCode from "../enum/httpStatusCode";
import jwt from 'jsonwebtoken';
import { JwtAuthModel } from "../models/jwtAuth";

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
                expiresIn: '1m', // 1분
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
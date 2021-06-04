import ResponseModel from "../models/responseModel";
import { v4 as uuid } from 'uuid';
import { PageModel } from "../models/page";
import HttpStatusCode from "../enum/httpStatusCode";
import User, { UserModel, UserReqModel } from "../models/user";
import bcrypt from 'bcrypt';

export const insertUser = async (user : UserReqModel): Promise<ResponseModel>=> {
    return new Promise(async (resolve, reject) => {
        try{
            const data = await User.findOne({ where: { email: user.email } });
            if(data){
                resolve({
                    success : false,
                    message : "이미 존재하는 이메일",
                    data : null,
                    code : HttpStatusCode.BAD_REQUEST
                } as ResponseModel);
            }

            const hash : string = await bcrypt.hash(user.password, 12); //비밀번호 평문 암호화
            const res = await User.create({
                email: user.email,   
                password: hash,  
                nick : user.nick
            })
            if(res){
                resolve({
                    success : true,
                    message : "회원 등록 성공",
                    code : HttpStatusCode.OK
                } as ResponseModel);       
            }

        } catch(error){
            reject(error);       
        }
    });
}
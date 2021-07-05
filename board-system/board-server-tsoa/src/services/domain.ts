import Domain from "../models/domain";
import ResponseModel from "../models/responseModel";
import { v4 as uuid } from 'uuid';
import HttpStatusCode from "../enum/httpStatusCode";

export const insertDomain = async (host : string): Promise<ResponseModel>=> {
    return new Promise(async (resolve, reject) => {
        try {
            const exist = await Domain.findOne({ where: { host: host } });
            console.log(exist);
            if (exist) {  //중복 존재시             
                resolve({     
                    success: false,
                    message: 'Exist Host',
                    code: 412,
                } as ResponseModel);
                return;
            }
            const secret : string = uuid();
            await Domain.create({   
                host,
                clientSecret : secret
            });
            resolve({     
                success: true,
                message: 'Insert Host Complete',
                code: 200,
            } as ResponseModel);
        } 
        catch (error) {
            console.error(error);
            reject(error)
        }
    })
    
}

export const selectAllDomain = async (): Promise<ResponseModel>=> {
    return new Promise(async (resolve, reject) => {
        try{
            const data = await Domain.findAll({
            });
            resolve({
                success : true,
                message : "도메인 목록을 불러왔습니다.",
                data : {
                    list : data,
                },
                code : HttpStatusCode.OK
            } as ResponseModel);       
        } catch(error){
            reject(error);       
        }
    });
}
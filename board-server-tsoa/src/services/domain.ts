import Domain from "../models/domain";
import ResponseModel from "../models/responseModel";
import { v4 as uuid } from 'uuid';

export const insertDomain = async (host : string): Promise<ResponseModel>=> {
    return new Promise(async (resolve, reject) => {
        try {
            const exist = await Domain.findOne({ where: { host: host } });
            if (exist) {  //중복 존재시
                reject({});
            }
            const secret : string = uuid();
            console.log('이까지 댐', secret);
            await Domain.create({   
                host,
                clientSecret : secret
            });
            resolve({     
                success: true,
                message: 'Insert Host Complete',
                data: "",
                code: "200",
            } as ResponseModel);
        } 
        catch (error) {
            console.error(error);
            reject(error)
        }
    })
    
}
import Domain from "../models/domain";
import ResponseModel from "../models/responseModel";
import { v4 as uuid } from 'uuid';
import Board, { BoardModel } from "../models/board";
import { PageModel } from "../models/page";
import HttpStatusCode from "../enum/httpStatusCode";
import Resource, { ResourceModel } from "../models/resource";
import DefineCode from "../enum/defineCode";
import multer from "multer";

export const insertResource = async (resource : ResourceModel): Promise<ResponseModel>=> {
    return new Promise(async (resolve, reject) => {
        try{
            const res = await Resource.create({   //insert
                path : resource.path,
                originName : resource.originName,
                savedFileName : resource.savedFileName,
                fileSize : resource.fileSize,
                mimeType : resource.mimeType
            });
            resolve({
                success : true,
                message : "리소스 저장 성공",
                data : {
                    id : res.id,
                },
                code : HttpStatusCode.OK
            } as ResponseModel);       
        } catch(error){
            reject(error);       
        }
    });
}

export const handleFile = (request: any): Promise<any> => {
    console.log('handling');
    return new Promise<any>((resolve, reject) => {
        try {
            const file = multer({
                dest: DefineCode.RESOURCE_PATH,
                limits: {
                    fileSize: DefineCode.RESOURCE_MAX_SIZE
                },
                // storage: multer.memoryStorage(),
            } as multer.Options).single('file');
            file(request, undefined as any, async (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve({
                    form: request.body,
                    resource: request.file
                });
            })
        }
        catch (err) {
            reject(err);
        }
    })
    .catch(err => err);
}

export const selectOne = async (id : number): Promise<ResponseModel>=> {
    return new Promise(async (resolve, reject) => {
        try{
            const data = await Resource.findOne({
                where: { id : id }
            });
            if(data){
                resolve({
                    success : true,
                    message : "불러오기 성공",
                    data : data,
                    code : HttpStatusCode.OK
                } as ResponseModel);
                return;
            }
            resolve({
                success : false,
                message : "결과가 존재하지 않습니다.",
                data : null,
                code : HttpStatusCode.NO_CONTENT
            } as ResponseModel);
        } catch(error){
            reject(error);       
        }
    });
}

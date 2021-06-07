import Domain from "../models/domain";
import ResponseModel from "../models/responseModel";
import { v4 as uuid } from 'uuid';
import Board, { BoardFormModel, BoardModel } from "../models/board";
import { PageModel } from "../models/page";
import HttpStatusCode from "../enum/httpStatusCode";
import { request } from "express";

export const selectList = async (page : PageModel): Promise<ResponseModel>=> {
    return new Promise(async (resolve, reject) => {
        const curPage = page.page || 1;
        const skipSize = (curPage - 1) * page.pageSize;
        const collectionSize = await Board.count();
        try{
            const data = await Board.findAll({
                order:[['createdAt', 'DESC']],
                limit: page.pageSize,
                offset: skipSize
            });
            if(data.length <= 0){
                resolve({
                    success : true,
                    message : "결과가 존재하지 않습니다.",
                    data : null,
                    code : HttpStatusCode.NO_CONTENT,
                } as ResponseModel);
            }
            resolve({
                success : true,
                message : "게시물 목록을 불러왔습니다.",
                data : {
                    list : data,
                    pager : {
                        collectionSize : collectionSize,
                        page : curPage,
                        maxSize : page.maxSize,
                        pageSize : page.pageSize,
                    } as PageModel
                },
                code : HttpStatusCode.OK,
            } as ResponseModel);       
        } catch(error){
            reject(error);       
        }
    });
}

export const selectOne = async (id : number): Promise<ResponseModel>=> {
    return new Promise(async (resolve, reject) => {
        try{
            const data = await Board.findOne({
                where: { id : id }
            });
            if(data){
                console.log(data);
                resolve({
                    success : true,
                    message : "불러오기 성공",
                    data : data,
                    code : HttpStatusCode.OK
                } as ResponseModel);
            }
            resolve({
                success : true,
                message : "결과가 존재하지 않습니다.",
                data : null,
                code : HttpStatusCode.NO_CONTENT
            } as ResponseModel);
        } catch(error){
            reject(error);       
        }
    });
}

export const insert = async (form : BoardFormModel): Promise<ResponseModel>=> {
    return new Promise(async (resolve, reject) => {
        try {
            const { title, content, nick, ridx } = form;
            await Board.create({   //insert
                title : title,
                content : content,
                nick : nick,
                ridx : ridx
            });
            resolve({
                success : true,
                message : "게시 성공",
                data : null,
                code : HttpStatusCode.OK
            } as ResponseModel);
        } 
        catch (error) {
            console.error(error);
            reject(error)
        }
    });
    
}

export const update = async (form : BoardFormModel, id : number): Promise<ResponseModel>=> {
    return new Promise(async (resolve, reject) => {
        try {
            const { title, content, nick, ridx } = form;
            const target = await Board.findOne({where : {id : id}})
            if(target){
                await target.update({
                    title : title,
                    content : content,
                    nick : nick,
                    ridx : ridx
                });
                resolve({
                    success : true,
                    message : "업데이트 성공",
                    data : null,
                    code : HttpStatusCode.OK
                } as ResponseModel);
            }
            else{
                resolve({
                    success : false,
                    message : "업데이트 실패, 해당 ID를 찾을 수 없음",
                    data : null,
                    code : HttpStatusCode.OK
                } as ResponseModel);
            }
        } 
        catch (error) {
            console.error(error);
            reject(error)
        }
    });
    
}

export const remove = async (id : number): Promise<ResponseModel>=> {
    return new Promise(async (resolve, reject) => {
        try {
            const target = await Board.destroy({
                where : {id : id}
            })
            if(target){
                resolve({
                    success : true,
                    message : "삭제 성공",
                    data : null,
                    code : HttpStatusCode.OK
                } as ResponseModel);
            }
            else{
                resolve({
                    success : false,
                    message : "삭제 실패, 해당 ID를 찾을 수 없음",
                    data : null,
                    code : HttpStatusCode.OK
                } as ResponseModel);
            }
        } 
        catch (error) {
            console.error(error);
            reject(error)
        }
    });
    
}


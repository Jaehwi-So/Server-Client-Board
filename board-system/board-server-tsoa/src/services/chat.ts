import Domain from "../models/domain";
import ResponseModel from "../models/responseModel";
import { v4 as uuid } from 'uuid';
import Board, { BoardFormModel, BoardModel } from "../models/board";
import { PageModel } from "../models/page";
import HttpStatusCode from "../enum/httpStatusCode";
import { request } from "express";
import Chat, { ChatFormModel } from "../models/chat";
import User from "../models/user";
import SocketIO from "socket.io";


export const selectList = async (start: number, end: number): Promise<ResponseModel>=> {
    return new Promise(async (resolve, reject) => {
        start = start || 0;
        end = end || 1000;
        const dataSize = end - start + 1
        let skipIdx = start - 1
        if(skipIdx < 0){
            skipIdx = 0;
        }
        try{
            const data = await Chat.findAll({
                order:[['createdAt', 'DESC']],
                limit: dataSize,
                offset: skipIdx,
                include: [{
                    model: User,
                    as: 'User',  //as를 일치시켜줘야함.
                    attributes: ['nick', 'email']
                }]
            });
            if(data.length <= 0){
                resolve({
                    success : true,
                    message : "결과가 존재하지 않습니다.",
                    data : null,
                    code : HttpStatusCode.NO_CONTENT,
                } as ResponseModel);
                return;
            }
            resolve({
                success : true,
                message : "채팅 목록을 불러왔습니다.",
                data : data,
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
            const data = await Chat.findOne({
                where: { id : id },
                include: [{
                    model: User,
                    as: 'User',  //as를 일치시켜줘야함.
                    attributes: ['nick', 'email']
                }]
            });
            if(data){
                console.log(data);
                resolve({
                    success : true,
                    message : "조회 성공",
                    data : data,
                    code : HttpStatusCode.OK
                } as ResponseModel);
                return;
            }
            resolve({
                success : true,
                message : "조회 실패.",
                data : null,
                code : HttpStatusCode.NO_CONTENT
            } as ResponseModel);
        } catch(error){
            reject(error);       
        }
    });
}

export const insert = async (req: any, form : ChatFormModel, roomId : number): Promise<ResponseModel>=> {
    return new Promise(async (resolve, reject) => {
        try {           
            const { content, uid } = form;
            const chat = await Chat.create({   //insert
                content : content,
                uid : uid
            });
            const res = req.app.get('io').emit('chat', chat);
            console.log(res);
            resolve({
                success : true,
                message : "채팅 입력 성공",
                data : process.pid,
                code : HttpStatusCode.OK
            } as ResponseModel);
        } 
        catch (error) {
            console.error(error);
            reject(error)
        }
    });
    
}

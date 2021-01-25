import { RequestHandler, ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import Controller from './controller.impl';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import Domain from '../models/domain';
import { v4 as uuid } from 'uuid';
import { userInfo } from 'os';
import dotenv from 'dotenv';
import Board from '../models/board';
import HttpStatusCode from '../enum/httpStatusCode';
import ResponseModel from '../models/responseModel';
import { CLIENT_RENEG_LIMIT } from 'tls';
import PageModel from '../models/pageModel';


class BoardController implements Controller {
    constructor() {

    }
    public select_list = async (req: Request, res: Response, next: NextFunction) => {

        const page : number = Number(req.query.page);
        const pageSize : number = Number(req.query.pageSize);
        const maxSize : number = Number(req.query.maxSize);
        const curPage = page || 1;
        const skipSize = (curPage - 1) * pageSize;
        const collectionSize = await Board.count();
        try{
            const data = await Board.findAll({
                order:[['createdAt', 'DESC']],
                limit: pageSize,
                offset: skipSize
            });
            if(data.length <= 0){
                return res.status(HttpStatusCode.NO_CONTENT).json({
                    success : true,
                    message : "결과가 존재하지 않습니다.",
                    data : null,
                } as ResponseModel);
            }
            return res.json({
                success : true,
                message : "게시물 목록을 불러왔습니다.",
                data : {
                    list : data,
                    pager : {
                        collectionSize : collectionSize,
                        page : curPage,
                        maxSize : maxSize,
                        pageSize : pageSize,
                    } as PageModel
                },
            } as ResponseModel);       
        } catch(error){
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                success : false,
                message : "서버 에러",
                code : error.message
            } as ResponseModel);       
        }
    };
    public select_one = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const data = await Board.findOne({
                where: { id : req.params.id }
            });
            if(data){
                console.log(data);
                return res.json({
                    success : true,
                    message : "불러오기 성공",
                    data : data,
                } as ResponseModel);
            }
            return res.status(HttpStatusCode.NO_CONTENT).json({
                success : false,
                message : "결과가 존재하지 않습니다.",
                data : null,
            } as ResponseModel);    
        } catch(error){
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                success : false,
                message : "서버 에러",
                code : error.message
            } as ResponseModel);       
        }
    };

    public insert_board = async (req: Request, res: Response, next: NextFunction) => {
        console.log('insert', req.file);
        const url = `/img/${req.file.filename}`
        console.log(url);
        const { title, content, nick } = req.body;
        console.log(url, title, content, nick);
        try {
            await Board.create({   //insert
                title : title,
                content : content,
                nick : nick,
                photo : url
            });
            return res.json({ 
                success: true, 
                message: '게시 완료',
                data: null
            } as ResponseModel);    //가입완료
        } 
        catch (error) {
            console.error(error);
            return res.json({ 
                success: false, message: '게시 실패' 
            } as ResponseModel); 
        }
    };


   
}

export default new BoardController();
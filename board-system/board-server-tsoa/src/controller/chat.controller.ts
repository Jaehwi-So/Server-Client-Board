import { Route, Tags, Controller, Request, Security, Get, Put, Post, Delete, Body, Query, SuccessResponse, Path } from "tsoa";
import ResponseModel from "../models/responseModel";
import { insert, selectList, selectOne } from "../services/chat";
import { PageModel } from "../models/page";
import HttpStatusCode from "../enum/httpStatusCode";
import DefineCode from "../enum/defineCode";
import logger from "../config/winston";
import { ChatFormModel } from "../models/chat";

 
@Route("chat")
export class ChatController extends Controller {

    @Security('login', [])
    @Get()
    public select_chatList(@Request() req: any, @Query() start: number, @Query() end: number) : Promise<ResponseModel> {  
        return new Promise<ResponseModel>((resolve, reject) => {
            selectList(start, end)
            .then(result => {
                logger.info(`[GET] [board] select list`);
                //result.token = req.user.accessToken || null
                resolve(result as ResponseModel);
            })
            .catch(error => {
                reject(error);
            })
        })
        .catch(error => {
            logger.error(`[GET] [board] Failed to select list: ${error.message}`);
            this.setStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
            return {
                success: false,
                message : error.message,
                code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER,
                //token: req.user.accessToken || null
            } as ResponseModel
        })
    }

    @Security('login', [])
    @Get("{id}")
    public select_chatSingle(@Request() req: any, @Path() id: number) : Promise<ResponseModel> {
        return new Promise<ResponseModel>((resolve, reject) => {
            selectOne(id)
            .then(result => {
                logger.info(`[GET] [chat] [${id}] select one`);
                result.token = req.user.accessToken || null
                resolve(result as ResponseModel);
            })
            .catch(error => {
                reject(error);
            })
        })
        .catch(error => {
            logger.error(`[GET] [chat] [${id}] Failed to select one: ${error.message}`);
            this.setStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
            return {
                success: false,
                message : error.message,
                code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER,
                //token: req.user.accessToken
            } as ResponseModel
        })
    }

    @Security('login', [])
    @Post("{roomId}")
    public insert_chat(@Request() req: any, @Path() roomId: number, @Body() form: ChatFormModel) : Promise<ResponseModel> {
        return new Promise<ResponseModel>(async (resolve, reject) => {
            insert(req, form, roomId)
            .then(result => {
                logger.info(`[POST] [chat] insert chat`);
                result.token = req.user.accessToken || null
                resolve(result as ResponseModel);
            })
            .catch(error => {
                reject(error);
            })
        })
        .catch(error => {
            logger.error(`[POST] [chat] Failed to insert chat: ${error.message}`);
            this.setStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
            return {
                success: false,
                message : error.message,
                code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER,
                token: req.user.accessToken || null
            } as ResponseModel
        })
    }
}

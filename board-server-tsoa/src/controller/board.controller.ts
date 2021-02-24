import { Route, Tags, Controller, Request, Security, Get, Put, Post, Delete, Body, Query, SuccessResponse, Path } from "tsoa";
import ResponseModel from "../models/responseModel";
import { insert, selectList, selectOne } from "../services/board";
import { PageModel } from "../models/page";
import { BoardModel } from "../models/board";
import HttpStatusCode from "../enum/httpStatusCode";
import DefineCode from "../enum/defineCode";

 
@Route("board")
export class BoardController extends Controller {

    @Security('jwt', [])
    @Get()
    public select_list(@Request() req: any, @Query() page: number, @Query() pageSize: number, @Query() maxSize: number) : Promise<ResponseModel> {
        return new Promise<ResponseModel>((resolve, reject) => {
            selectList({page : page, pageSize : pageSize, maxSize : maxSize} as PageModel)
            .then(result => {
                resolve(result as ResponseModel);
            })
            .catch(error => {
                reject(error);
            })
        })
        .catch(error => {
            this.setStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
            return {
                success: false,
                message : error.message,
                code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
            } as ResponseModel
        })
    }

    @Security('jwt', [])
    @Get("{id}")
    public select_one(@Request() req: any, @Path() id: number,) : Promise<ResponseModel> {
        return new Promise<ResponseModel>((resolve, reject) => {
            selectOne(id)
            .then(result => {
                resolve(result as ResponseModel);
            })
            .catch(error => {
                reject(error);
            })
        })
        .catch(error => {
            this.setStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
            return {
                success: false,
                message : error.message,
                code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
            } as ResponseModel
        })
    }

    @Security('jwt', [])
    @Post()
    public insert_board(@Request() req: any, @Body() form: BoardModel) : Promise<ResponseModel> {
        return new Promise<ResponseModel>(async (resolve, reject) => {
            //const fileUploadResult = await UploadUtil.single_upload.single('file')
            //const url = `/img/${req.file.filename}`
            const url = `/img/1234`
            console.log(url);
            insert(form, url)
            .then(result => {
                resolve(result as ResponseModel);
            })
            .catch(error => {
                reject(error);
            })
        })
        .catch(error => {
            this.setStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
            return {
                success: false,
                message : error.message,
                code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
            } as ResponseModel
        })
    }
}

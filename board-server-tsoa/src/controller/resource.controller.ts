import { Route, Tags, Controller, Request, Security, Get, Put, Post, Delete, Body, Query, SuccessResponse, Path } from "tsoa";
import ResponseModel from "../models/responseModel";
import HttpStatusCode from "../enum/httpStatusCode";
import DefineCode from "../enum/defineCode";
import express from "express";
import { handleFile, insertResource, selectOne } from "../services/resource";
import { ResourceModel } from "../models/resource";
import fs from 'fs';
import logger from "../config/winston";

 
@Route("resource")
export class ResourceController extends Controller {

    @Post("single")
    public insert (@Request() req: any) : Promise<ResponseModel> {
        return new Promise<ResponseModel>(async (resolve, reject) => {
            const fileUploadResult = await handleFile(req);
            console.log(fileUploadResult.resource);
            const path = `${fileUploadResult.resource.path}`
            const originFileName = `${fileUploadResult.resource.originalname}`
            const fileSize = fileUploadResult.resource.size
            const savedFileName = `${fileUploadResult.resource.filename}`
            const mimeType = `${fileUploadResult.resource.mimetype}`
            insertResource({
                originName : originFileName,
                fileSize : fileSize,
                savedFileName : savedFileName,
                path : path,
                mimeType : mimeType
            } as ResourceModel)
            .then(result => {
                logger.info(`[POST] [resource] [single] insert resource`);
                resolve(result as ResponseModel);
            })
            .catch(error => {
                console.log(error);
                reject(error);
            });       
        })
        .catch(error => {
          logger.error(`[POST] [resource] [single] Faild to insert resource : ${error.message}`);
          return {
              success: false,
              message : error.message,
              code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
          } as ResponseModel
        });
    };

    

    @Get('/image')
    public getImage(@Request() request: any, @Query() id: number): Promise<any> {
        return new Promise<ResponseModel>(async (resolve, reject) => {
            selectOne(id)
            .then(async (result) => {
                if(result.success == false){
                    reject(`${DefineCode.ERROR_CODE_DATA_NOT_EXIST}File not exist.`)
                    return;
                }
                const path = result.data.path;
                const imgMime = result.data.mimeType;
                const response = request.res as express.Response;
                response.setHeader('Content-Type', imgMime);
                response.setHeader('Content-Disposition', `attachment; filename=${encodeURI(result.data.originName)}`);
                const filestream = fs.createReadStream(path);
                filestream.pipe(response);        
                return await filestream.on('end', () => {
                    logger.info(`[GET] [resource] [image] [id : ${id}] get image resource`);
                    response.end();
                    return;
                })     
            })
            .catch(error => {
                console.log(error);
                reject(error);
                return;
            });       
        })
        .catch(error => {
            logger.error(`[GET] [resource] [image] [id : ${id}] Faild to get image resource : ${error.message}`);
            this.setStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
            return {
                success: false,
                message : error.message,
                code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
            } as ResponseModel
        });
    }
}
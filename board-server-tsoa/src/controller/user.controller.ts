import { Route, Tags, Controller, Request, Security, Get, Put, Post, Delete, Body, Query, SuccessResponse, Path } from "tsoa";
import ResponseModel from "../models/responseModel";
import HttpStatusCode from "../enum/httpStatusCode";
import DefineCode from "../enum/defineCode";
import express from "express";
import { handleFile, insertResource, selectOne } from "../services/resource";
import { ResourceModel } from "../models/resource";
import fs from 'fs';
import logger from "../config/winston";
import { UserModel, UserReqModel } from "../models/user";
import { insertUser } from "../services/user";

 
@Route("user")
export class UserController extends Controller {

    @Post()
    public insert_user (@Request() req: any, @Body() form: UserReqModel) : Promise<ResponseModel> {
        return new Promise<ResponseModel>(async (resolve, reject) => {
            insertUser(form)
            .then(result => {
                logger.info(`[POST] [user] insert user`);
                resolve(result as ResponseModel);
            })
            .catch(error => {
                console.log(error);
                reject(error);
            });       
        })
        .catch(error => {
          logger.error(`[POST] [user] Faild to insert user : ${error.message}`);
          return {
              success: false,
              message : error.message,
              code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
          } as ResponseModel
        });
    };

    
}
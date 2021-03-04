import { Route, Tags, Controller, Request, Security, Get, Put, Post, Delete, Body, Query, SuccessResponse, Path } from "tsoa";
import { insertDomain } from "../services/domain";
import ResponseModel from "../models/responseModel";
import { DomainModel } from "../models/domain";
import HttpStatusCode from "../enum/httpStatusCode";
import DefineCode from "../enum/defineCode";
import logger from "../config/winston";

 
@Route("domain")
export class DomainController extends Controller {

    @Post()
    public insert (@Request() req: any, @Body() form: DomainModel) : Promise<ResponseModel> {
        return new Promise<ResponseModel>((resolve, reject) => {
            const { host } = form;
            insertDomain(host)
            .then(result => {
                logger.info(`[POST] [domain] insert domain`);
                resolve(result as ResponseModel);
            })
            .catch(error => {
                console.log(error);
                reject(error);
            });       
        })
        .catch(error => {
          logger.error(`[POST] [domain] Failed to insert domain: ${error.message}`);
          return {
              success: false,
              message : error.message,
              code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
          } as ResponseModel
        });
    };

}

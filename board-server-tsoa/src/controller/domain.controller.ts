import { Route, Tags, Controller, Request, Security, Get, Put, Post, Delete, Body, Query, SuccessResponse, Path } from "tsoa";
import { insertDomain } from "../services/domain";
import ResponseModel from "../models/responseModel";
import { DomainModel } from "../models/domain";

 
@Route("domain")
export class DomainController extends Controller {

  @Post()
  public insert (@Request() req: any, @Body() form: DomainModel) : Promise<ResponseModel> {
      return new Promise<ResponseModel>((resolve, reject) => {
        const { host } = form;
        insertDomain(host)
        .then(result => {
            resolve(result as ResponseModel);
        })
        .catch(error => {
            reject(error);
        })       
      })
      .catch(error => {
          return {
              success: false,
              message : error.message,
              data : "Data",
              code : "401"
          } as ResponseModel
      })
  };

}

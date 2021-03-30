import { Route, Tags, Controller, Request, Security, Get, Put, Post, Delete, Body, Query, SuccessResponse, Path } from "tsoa";
import ResponseModel from "../models/responseModel";
import { get_token } from "../services/token";
import HttpStatusCode from "../enum/httpStatusCode";
import { JwtAuthModel } from "../models/jwtAuth";
import DefineCode from "../enum/defineCode";
import logger from "../config/winston";

 
@Route("auth")
export class AuthController extends Controller {

    @Post("token")
    public token_issue(@Request() req: any, @Body() body: any) : Promise<JwtAuthModel> {
        return new Promise<JwtAuthModel>((resolve, reject) => {
            const { clientSecret } = body;
            get_token(clientSecret)
            .then(result => {
                console.log(result);
                if(result.code === HttpStatusCode.UNAUTHORIZED){
                    this.setStatus(HttpStatusCode.UNAUTHORIZED);
                }
                resolve(result);
            })
            .catch(error => {
                console.log(error);
                reject(error);
            })
        })
        .catch(error => {
            logger.error(`[POST] [auth] [token] Failed to get token: ${error.message}`);
            return {
                success: false,
                message : error.message,
                code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
            } as ResponseModel
        });
    }

    
}

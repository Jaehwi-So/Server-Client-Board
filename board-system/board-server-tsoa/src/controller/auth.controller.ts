import { Route, Tags, Controller, Request, Security, Get, Put, Post, Delete, Body, Query, SuccessResponse, Path } from "tsoa";
import ResponseModel from "../models/responseModel";
import { get_token, get_token_login } from "../services/token";
import HttpStatusCode from "../enum/httpStatusCode";
import { AuthReqModel, JwtAuthModel, LoginAuthModel } from "../models/jwtAuth";
import DefineCode from "../enum/defineCode";
import logger from "../config/winston";
import { UserReqModel } from "../models/user";

 
@Route("auth")
export class AuthController extends Controller {

    @Post("token")
    public token_issue(@Request() req: any, @Body() body: AuthReqModel) : Promise<ResponseModel> {
        return new Promise<ResponseModel>((resolve, reject) => {
            const { clientSecret } = body;
            get_token(clientSecret)
            .then(result => {
                console.log(result);
                if(result.code === HttpStatusCode.UNAUTHORIZED){
                    this.setStatus(HttpStatusCode.UNAUTHORIZED);
                }
                resolve({
                    success: true,
                    data: result.token,
                    message : result.message,
                    code: result.code
                } as ResponseModel);
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

    @Post("login")
    public login_user(@Request() req: any, @Body() body: UserReqModel) : Promise<ResponseModel> {
        return new Promise<ResponseModel>((resolve, reject) => {
            get_token_login(body)
            .then(result => {
                console.log(result);
                if(result.code === HttpStatusCode.UNAUTHORIZED){
                    this.setStatus(HttpStatusCode.UNAUTHORIZED);
                }
                resolve({
                    success: true,
                    data: result.token,
                    message : result.message,
                    code: result.code
                } as ResponseModel);
            })
            .catch(error => {
                console.log(error);
                reject(error);
            })
        })
        .catch(error => {
            logger.error(`[POST] [auth] [token] Failed to get login token: ${error.message}`);
            return {
                success: false,
                message : error.message,
                code: error.message.match(/(\[[0-9]{3}\])(\w+)/) && error.message.match(/(\[[0-9]{3}\])(\w+)/).length === 3 ? error.message.match(/(\[[0-9]{3}\])(\w+)/)[1] : DefineCode.ERROR_CODE_OTHER
            } as ResponseModel
        });
    }

    
}

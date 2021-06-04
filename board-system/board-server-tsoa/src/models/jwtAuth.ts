export interface JwtAuthModel{
    code: number,
    message: string,
    token?: any,
}  

export interface AuthReqModel{
    clientSecret : string
}  

export interface LoginAuthModel{
    code: number,
    message: string,
    loginToken?: any,
}  
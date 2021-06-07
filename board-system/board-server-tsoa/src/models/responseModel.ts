interface ResponseModel {
    success: boolean;
    message: string;
    data: any;
    code: number;
    token? : string;
}
export default ResponseModel
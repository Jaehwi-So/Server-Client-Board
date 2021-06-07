interface ResponseModel {
    success: boolean;
    message: string;
    data: any;
    code: string;
    token?: string;
}
export default ResponseModel
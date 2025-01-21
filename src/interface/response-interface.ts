import { ResponseStatus } from "../constant/enum";
import { IDoctor } from "./entity-interface";

export interface IResponse {
    status: ResponseStatus,
    message: string
}
export interface ICreateUserResponse extends IResponse {
    data: {
        token: string
    }
}
export interface IGetProfileResponse extends IResponse {
    data: {
        doctor: IDoctor
    }
}


export interface ICreateOTPResponse extends IResponse{
    data:{
        otp:number
    }
}
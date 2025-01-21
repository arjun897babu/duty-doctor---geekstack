import { JwtPayload } from "jsonwebtoken"
import { TokenType } from "../constant/enum"
import { ICreateOTPResponse, ICreateUserResponse, IGetProfileResponse, IResponse } from "./response-interface"
import { ICreateDoctorPayload, IOTPPayload } from "./payload"

export interface IJWTService {
    generateToken(payload: JwtPayload, tokenType: TokenType): string
    verifyToken(token: string, tokenType: TokenType): JwtPayload | string
}

export interface IDoctorService {
    create(payload: ICreateDoctorPayload): Promise<ICreateUserResponse>
    logIn(email: string): Promise<IResponse>
    getProfile(userId: string): Promise<IGetProfileResponse>
}
export interface IMailService {
    sendMail(email: string): Promise<IResponse>
    verifyEmail(payload: IOTPPayload): Promise<IResponse>
}
export interface IOTPService {
    create(email: string): Promise<ICreateOTPResponse>
    verifyOTP(payload: IOTPPayload): Promise<IResponse>
}
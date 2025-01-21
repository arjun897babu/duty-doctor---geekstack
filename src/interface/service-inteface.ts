import { JwtPayload } from "jsonwebtoken"
import { TokenType } from "../constant/enum"

export interface IBcryptService {
    hash(plainPassword: string): Promise<string>
    compare(plainPassword: string, hashedPassword: string): Promise<boolean>
}

export interface IJWTService {
    generateToken(payload: JwtPayload, tokenType: TokenType): string
    verifyToken(token: string, tokenType: TokenType): JwtPayload | string
}

export interface IDoctorService {

}
export interface IMailService {

}

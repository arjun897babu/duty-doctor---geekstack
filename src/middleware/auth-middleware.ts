import { NextFunction, Request, Response } from "express";
import { IJWTService } from "../interface/service-inteface";
import { CustomError } from "../utils/custom-error";
import { HttpStatusCode, TokenType } from "../constant/enum";
import { JwtPayload } from "jsonwebtoken";

export class AuthMiddleWare {
    private jwtService: IJWTService;
    constructor(jwtService: IJWTService) {
        this.jwtService = jwtService
    }

    async isAuth(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('authentication middle ware is called')
            const token = this.extractToken(req);
            const decoded = this.verifyAndDecode(token);
            req.params.userId = decoded.uId;
            return next();

        } catch (error) {
            next(error)
        }
    }

    private extractToken(req: Request): string {
        try {
            const token = req.headers["authorization"]?.split(" ")[1];
            if (token) {
                return token
            }
            throw new CustomError('unauthorized:Token not found', HttpStatusCode.UNAUTHORIZED, 'token')
        } catch (error) {
            throw error
        }
    }

    private verifyAndDecode(token: string): JwtPayload {
        try {
            const decoded = this.jwtService.verifyToken(token,TokenType.ACCESS) as JwtPayload;
            if (decoded && decoded.role === 'user') {
                return decoded
            }
            throw new CustomError('forebidden: invalid token ', HttpStatusCode.FORBIDDEN, 'token')
        } catch (error) {
            throw error
        }
    }

}
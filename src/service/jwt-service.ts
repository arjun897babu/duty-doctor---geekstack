import { JwtPayload, sign, TokenExpiredError, verify } from "jsonwebtoken";
import { CustomError } from "../utils/custom-error";
import { HttpStatusCode, TokenType } from "../constant/enum";
import { serverConfig } from "../constant/env-variables";
import { IJWTService } from "../interface/service-inteface";

export class JWTService implements IJWTService {

    generateToken(payload: JwtPayload, tokenType: TokenType) {
        try {
            return sign(
                payload,
                this.getToken(tokenType).secret,
                { expiresIn: this.getToken(tokenType).expire }
            );
        } catch (error) {
            throw new CustomError(
                "Failed to generate token",
                HttpStatusCode.INTERNAL_SERVER_ERROR,
                "token"
            );
        }
    }
    verifyToken(token: string, tokenType: TokenType) {
        try {
            return verify(token, this.getToken(tokenType).secret);
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                throw new CustomError(error.message, HttpStatusCode.UNAUTHORIZED, 'token')
            } else {
                throw new CustomError('invalid token', HttpStatusCode.FORBIDDEN, 'token')
            }
        }
    }

    private getToken(tokenType: TokenType) {
        return serverConfig.jwt[tokenType]
    }

}
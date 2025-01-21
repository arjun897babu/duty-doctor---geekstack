import { HttpStatusCode } from "../constant/enum";
import { ErrorObj } from "../constant/types";

export class CustomError extends Error {
    statusCode: HttpStatusCode
    field?: string
    err?: ErrorObj
    constructor(
        message: string,
        statusCode: HttpStatusCode,
        field?: string,
        err?: ErrorObj
    ) {
        super(message);
        this.statusCode = statusCode
        this.field = field
        this.err = err
    }
}
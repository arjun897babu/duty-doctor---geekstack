import { NextFunction, Request, Response } from "express";
import { HttpStatusCode, ResponseStatus } from "../constant/enum";
import { CustomError } from "../utils/custom-error";

export const errorMiddleWare = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof CustomError) {
        const err = error.field ? { [error.field]: error.message } : error.err
        return res.status(error.statusCode).json({
            status: ResponseStatus.ERROR,
            message: error.message,
            err
        })
    } else {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            status: ResponseStatus.ERROR,
            message: 'unknow error'
        })
    }
}

export const wildCardMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    return res.status(HttpStatusCode.NOT_FOUND).json({
        status: ResponseStatus.ERROR,
        message: 'the requested url is not found'
    })
}
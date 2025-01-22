import { NextFunction, Request, Response } from "express";
import { IMailService } from "../interface/service-inteface";
import { HttpStatusCode } from "../constant/enum";
import { convertToNumber } from "../utils/helper";

export class MailController {
    private mailService: IMailService
    constructor(mailService: IMailService) {
        this.mailService = mailService
    }

    async sendMail(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.body
            const response = await this.mailService.sendMail(email)
            return res.status(HttpStatusCode.OK).json(response)
        } catch (error) {
            next(error)
        }
    }
    async verifyMail(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, otp } = req.body
            const response = await this.mailService.verifyEmail({ email, otp:convertToNumber(otp) })
            return res.status(HttpStatusCode.OK).json(response)
        } catch (error) {
            next(error)
        }
    }
}
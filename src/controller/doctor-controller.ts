import { NextFunction, Request, Response } from "express";
import { IDoctorService } from "../interface/service-inteface";
import { HttpStatusCode, NODE_APP, ResponseStatus } from "../constant/enum";
import { convertToNumber } from "../utils/helper";
import { serverConfig } from "../constant/env-variables";

export class DoctorController {
    private doctorService
    constructor(doctorService: IDoctorService) {
        this.doctorService = doctorService
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { firstName, lastName, email, ...rest } = req.body;
            const response = await this.doctorService.create({ email, firstName, lastName, education: rest });
            this.setCokkie(res, response.data.token)
            return res.status(HttpStatusCode.CREATED).json(response)
        } catch (error) {
            next(error)
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, otp } = req.body;
            const response = await this.doctorService.logIn({ email, otp:convertToNumber(otp) });
            this.setCokkie(res, response.data.token)
            return res.status(HttpStatusCode.OK).json(response)
        } catch (error) {
            next(error)
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const { doctorId } = req.params;
            this.clearCookie(res)
            return res.status(HttpStatusCode.OK).json({ status: ResponseStatus.SUCCESS, message: 'logged out completed successfully' })
        } catch (error) {
            next(error)
        }
    }

    async getProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const { doctorId } = req.params
            const response = await this.doctorService.getProfile(doctorId)
            return res.status(HttpStatusCode.OK).json(response)
        } catch (error) {
            next(error)
        }
    }

    async getOTP(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.body
            const response = await this.doctorService.getOTP(email)
            return res.status(HttpStatusCode.OK).json(response)
        } catch (error) {
            next(error)
        }
    }

    private setCokkie(res: Response, token: string): Response {
        res.cookie(NODE_APP.DUTY_DOCTOR, token, { httpOnly: true, maxAge: 15 * 60 * 1000,secure:serverConfig.node==='production' })
        return res
    };

    private clearCookie(res: Response): Response {
        res.clearCookie(NODE_APP.DUTY_DOCTOR, { httpOnly: true })
        return res
    }

}
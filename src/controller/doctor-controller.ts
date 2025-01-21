import { NextFunction, Request, Response } from "express";
import { IDoctorService } from "../interface/service-inteface";
import { HttpStatusCode } from "../constant/enum";

export class DoctorController {
    private doctorService
    constructor(doctorService: IDoctorService) {
        this.doctorService = doctorService
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { education, firstName, lastName, email } = req.body;
            const response = await this.doctorService.create({ email, firstName, lastName, education });
            return res.status(HttpStatusCode.CREATED).json(response)
        } catch (error) {
            next(error)
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.body;
            const response = await this.doctorService.logIn(email)
        } catch (error) {
            next(error)
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (error) {
            next(error)
        }
    }

    async getProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId } = req.params
            const response = await this.doctorService.getProfile(userId)
            return res.status(HttpStatusCode.OK).json(response)
        } catch (error) {
            next(error)
        }
    }

}
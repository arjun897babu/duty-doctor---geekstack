import { NextFunction, Request, Response } from "express";
import { IDoctorService } from "../interface/service-inteface";

class DoctorController {
    private doctorService
    constructor(doctorService: IDoctorService) {
        this.doctorService = doctorService
    }

    async signUp(req: Request, response: Response, next: NextFunction) {
        try {

        } catch (error) {
            next(error)
        }
    }
    async login(req: Request, response: Response, next: NextFunction) {
        try {

        } catch (error) {
            next(error)
        }
    }
    async logout(req: Request, response: Response, next: NextFunction) {
        try {

        } catch (error) {
            next(error)
        }
    }
    async getProfile(req: Request, response: Response, next: NextFunction) {
        try {

        } catch (error) {
            next(error)
        }
    }
    async refresh(req: Request, response: Response, next: NextFunction) {
        try {

        } catch (error) {
            next(error)
        }
    }

}
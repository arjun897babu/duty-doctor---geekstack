import { HttpStatusCode, ResponseStatus, TokenType } from "../constant/enum";
import { ICreateDoctorPayload } from "../interface/payload";
import { ICreateUserResponse, IGetProfileResponse, IResponse } from "../interface/response-interface";
import { IDoctorService, IJWTService, IMailService } from "../interface/service-inteface";
import { Doctors } from "../model/doctor-model";
import { CustomError } from "../utils/custom-error";

export class DoctorService implements IDoctorService {
    private jwtService
    private mailService
    constructor(jwtService: IJWTService, mailService: IMailService) {
        this.jwtService = jwtService
        this.mailService = mailService

    }
    async create(payload: ICreateDoctorPayload): Promise<ICreateUserResponse> {
        try {
            const newDoctor = await Doctors.create(payload)
            const token = this.jwtService.generateToken({ uId: newDoctor.uId }, TokenType.ACCESS)
            return {
                status: ResponseStatus.SUCCESS,
                message: 'account created successfully',
                data: {
                    token
                }
            };

        } catch (error) {
            throw error
        }
    }
    async logIn(email: string): Promise<IResponse> {
        try {

            return {
                status: ResponseStatus.SUCCESS,
                message: 'user logged  successfully',
            }

        } catch (error) {
            throw error
        }
    };
    



    async getProfile(userId: string): Promise<IGetProfileResponse> {
        try {
            const doctor = await Doctors.findOne({ uId: userId }).lean();
            if (!doctor) {
                throw new CustomError('user not found', HttpStatusCode.NOT_FOUND, 'email')
            };

            return {
                status: ResponseStatus.SUCCESS,
                message: 'data fetched successfully',
                data: {
                    doctor
                }
            }

        } catch (error) {
            throw error
        }
    }
}
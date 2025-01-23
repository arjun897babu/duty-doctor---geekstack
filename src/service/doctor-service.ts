import { HttpStatusCode, ResponseStatus, TokenType } from "../constant/enum";
import { ICreateDoctorPayload, IOTPPayload } from "../interface/payload";
import { IDoctorAuthResponse, IGetProfileResponse, IResponse } from "../interface/response-interface";
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
    async create(payload: ICreateDoctorPayload): Promise<IDoctorAuthResponse> {
        try {
            const newDoctor = await Doctors.create(payload)
            const token = this.jwtService.generateToken({ uId: newDoctor.uId,role:'doctor' }, TokenType.ACCESS)
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
    };

    async logIn(payload: IOTPPayload): Promise<IDoctorAuthResponse> {
        try {
            console.log(payload)
            const doctor = await Doctors.findOne({ email: payload.email }).lean()
            if (!doctor) {
                throw new CustomError('account not found', HttpStatusCode.NOT_FOUND, 'email')
            }

            await this.mailService.verifyEmail(payload);
            const token = this.jwtService.generateToken({ uId: doctor.uId,role:'doctor' }, TokenType.ACCESS)
 
            return {
                status: ResponseStatus.SUCCESS,
                message: 'user logged  successfully',
                data: {
                    token
                }
            }

        } catch (error) {
            throw error
        }
    };

    async getOTP(email: string): Promise<IResponse> {
        const doctor = await Doctors.findOne({ email }).lean()
        if (!doctor) {
            throw new CustomError('account not found', HttpStatusCode.NOT_FOUND, 'email')
        }

        await this.mailService.sendMail(email);
        return {
            status: ResponseStatus.SUCCESS,
            message: 'otp send to the mail successfully '
        }
    }

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
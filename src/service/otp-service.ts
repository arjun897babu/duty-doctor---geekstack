import { randomInt } from "node:crypto";
import { HttpStatusCode, ResponseStatus } from "../constant/enum";
import { IOTPPayload } from "../interface/payload";
import { ICreateOTPResponse, IResponse } from "../interface/response-interface";
import { IOTPService, } from "../interface/service-inteface";
import { OTP } from "../model/otp-model";
import { CustomError } from "../utils/custom-error";

export class OTPService implements IOTPService {

    async create(email: string): Promise<ICreateOTPResponse> {
        try {
            const otp = this.generateOTP()
            await OTP.create({ email, otp })
            return {
                status: ResponseStatus.SUCCESS,
                message: 'OTP created successfully',
                data: {
                    otp
                }
            }
        } catch (error) {
            throw error
        }
    };

    async verifyOTP(payload: IOTPPayload): Promise<IResponse> {
        try {
            const exist = await OTP.findOne({ email: payload.email }).lean();
            if (!exist) {
                throw new CustomError('OTP expired', HttpStatusCode.NOT_FOUND, 'OTP')
            }
            if (exist.otp !== payload.otp) {
                throw new CustomError('Invalid OTP', HttpStatusCode.BAD_REQUEST, 'OTP')

            };
            return {
                status: ResponseStatus.SUCCESS,
                message: 'OTP verification completed'
            }
        } catch (error) {
            throw error
        }
    }

    private generateOTP(): number {
        return randomInt(100000, 1000000)
    }
}
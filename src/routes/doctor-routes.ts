import express from 'express'
import { DoctorController } from '../controller/doctor-controller'
import { DoctorService } from '../service/doctor-service';
import { JWTService } from '../service/jwt-service';
import { MailService } from '../service/mail-service';
import { OTPService } from '../service/otp-service';
import { doctorEndpoints } from '../constant/endpoint';

const jwtService = new JWTService()
const otpService = new OTPService()
export const mailService = new MailService(otpService)
const doctorService = new DoctorService(jwtService, mailService)
const doctorController = new DoctorController(doctorService)
const doctorRoutes = express.Router()

doctorRoutes.post(doctorEndpoints.login, doctorController.login.bind(doctorController));
doctorRoutes.post(doctorEndpoints.signUp, doctorController.create.bind(doctorController));
doctorRoutes.post(doctorEndpoints.logout, doctorController.logout.bind(doctorController));
doctorRoutes.get(doctorEndpoints.getProfile, doctorController.getProfile.bind(doctorController));

export default doctorRoutes
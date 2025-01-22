import express from 'express'
import { DoctorController } from '../controller/doctor-controller'
import { DoctorService } from '../service/doctor-service';
import { JWTService } from '../service/jwt-service';
import { MailService } from '../service/mail-service';
import { OTPService } from '../service/otp-service';
import { doctorEndpoints } from '../constant/endpoint';
import { AuthMiddleWare } from '../middleware/auth-middleware';
import { validationMiddleWare } from '../middleware/validation-middleware';
import { emailSchema, OTPSchema, registerSchema2 } from '../utils/zod-schema';

const jwtService = new JWTService()
const otpService = new OTPService()
const authMiddleWare = new AuthMiddleWare(jwtService)
export const mailService = new MailService(otpService)
const doctorService = new DoctorService(jwtService, mailService)
const doctorController = new DoctorController(doctorService)
const doctorRoutes = express.Router()

doctorRoutes.post(doctorEndpoints.login, validationMiddleWare(OTPSchema), doctorController.login.bind(doctorController));
doctorRoutes.post(doctorEndpoints.register, validationMiddleWare(registerSchema2), doctorController.create.bind(doctorController));
doctorRoutes.post(doctorEndpoints.logout, authMiddleWare.isAuth.bind(authMiddleWare), doctorController.logout.bind(doctorController));
doctorRoutes.post(doctorEndpoints.getOTP, validationMiddleWare(emailSchema), doctorController.getOTP.bind(doctorController));
doctorRoutes.get(doctorEndpoints.getProfile, authMiddleWare.isAuth.bind(authMiddleWare), doctorController.getProfile.bind(doctorController));

export default doctorRoutes
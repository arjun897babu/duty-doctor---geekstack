import express from 'express'
import { mailEndpoints } from '../constant/endpoint'
import { MailController } from '../controller/mail-controller'
import { mailService } from './doctor-routes'
import { OTPSchema, registerSchema } from '../utils/zod-schema';
import { validationMiddleWare } from '../middleware/validation-middleware';

const mailController = new MailController(mailService);

const mailRoutes = express.Router();

mailRoutes.post(mailEndpoints.sendMail, validationMiddleWare(registerSchema), mailController.sendMail.bind(mailController))
mailRoutes.post(mailEndpoints.verifyMail, validationMiddleWare(OTPSchema), mailController.verifyMail.bind(mailController))

export default mailRoutes
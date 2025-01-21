import express from 'express'
import { mailEndpoints } from '../constant/endpoint'
import { MailController } from '../controller/mail-controller'
import { mailService } from './doctor-routes'

const mailController = new MailController(mailService);

const mailRoutes = express.Router();

mailRoutes.post(mailEndpoints.sendMail, mailController.sendMail.bind(mailController))
mailRoutes.post(mailEndpoints.verifyMail, mailController.verifyMail.bind(mailController))

export default mailRoutes
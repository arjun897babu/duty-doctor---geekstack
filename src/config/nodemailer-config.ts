import { createTransport } from "nodemailer";
import { serverConfig } from "../constant/env-variables";

const isProduction = serverConfig.node === 'production'
const transporter = createTransport({
    host: serverConfig.nodemailer.host,
    port: isProduction ? 465 : 587,
    secure: isProduction,
    auth: {
        user: serverConfig.nodemailer.email,
        pass: serverConfig.nodemailer.password
    }

})

export default transporter
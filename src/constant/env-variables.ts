import { TokenType } from "./enum";
import { config } from 'dotenv'
config()
export const serverConfig = Object.freeze({
    database: {
        uri: process.env.MONGO_URI!
    },
    server: {
        port: process.env.PORT!
    },
    origin: process.env.ORIGIN!,
    jwt: {
        [TokenType.ACCESS]: {
            secret: process.env.JWT_REFRESH_EXPIRE!,
            expire: process.env.JWT_ACCESS_EXPIRE!,
        },
        [TokenType.REFRESH]: {
            secret: process.env.JWT_REFRESH_EXPIRE!,
            expire: process.env.JWT_REFRESH_EXPIRE!
        }
    },
    node:process.env.NODE_ENV,
    nodemailer:{
        password:process.env.GOOGLE_PASSWORD,
        email:process.env.GOOGLE_EMAIL,
        host:process.env.GOOGLE_HOST,
    }
})
import morgan from 'morgan'
import express from 'express'
import Cors from 'cors'
import { serverConfig } from '../constant/env-variables'
import cookieParser from 'cookie-parser'
import { errorMiddleWare, wildCardMiddleWare } from '../middleware/error-middleware'
import doctorRoutes from '../routes/doctor-routes'

const App = express();

App.use(cookieParser())

App.use(
    Cors({
        origin: serverConfig.origin,
        methods: ["GET", "POST"],
        credentials: true,
    })
);

App.use(express.json())
App.use(express.urlencoded({ extended: false }))

App.use(morgan('dev'));
App.use('/doctor', doctorRoutes)
App.use(errorMiddleWare)
App.use('*', wildCardMiddleWare)

export default App

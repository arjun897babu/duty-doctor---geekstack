import { IBcryptService, IDoctorService, IJWTService, IMailService } from "../interface/service-inteface";

export class DoctorService implements IDoctorService {
    private jwtService
    private bcryptService
    private mailService
    constructor(jwtService: IJWTService, bcryptService: IBcryptService, mailService: IMailService) {
        this.bcryptService = bcryptService
        this.jwtService = jwtService
        this.mailService = mailService
    }
}
import { IBcryptService } from "../interface/service-inteface";
import bcrypt from 'bcryptjs'

export class BcryptService implements IBcryptService {
    private salt: number = parseInt(process.env.BCRYPT_SALT!, 10);
    async compare(plainPassword: string, hashedPassword: string): Promise<boolean> {
        try {
            const isTrue = await bcrypt.compare(plainPassword, hashedPassword);
            return isTrue;
        } catch (error) {
            throw error;
        }
    }
    async hash(plainPassword: string): Promise<string> {
        try {
            const hashedPassword = await bcrypt.hash(plainPassword, this.salt);
            return hashedPassword;
        } catch (error) {
            throw error;
        }
    }



}
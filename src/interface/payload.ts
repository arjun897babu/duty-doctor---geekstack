import { IDoctor, IOTP } from "./entity-interface";

export type ICreateDoctorPayload = Pick<IDoctor, 'email' | 'firstName' | 'lastName' | 'education'>
export type IOTPPayload = Pick<IOTP, 'email' | 'otp'>
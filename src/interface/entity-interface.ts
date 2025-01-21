import { Document } from "mongoose";
import { DoctorDegree } from "../constant/enum";

export interface IOTP extends Document {
    email: string,
    otp: number,
    expireAt: Date
}

export interface IEduCommon {
    degree: DoctorDegree,
    country: string;
    instituationName: string;
    courseCompleted: boolean,
}

export interface IEduSpecific {
    pgDegree: string; //for degree = pg
    speciality: string;//for degree = pg
    fellowShip: string; //for degree = fellow ship
    superSpeciality: string // for degree = super speciality
    MedicalRegistrationNumber: string,//for completed degree
    year: number;// for uncompleted degree
}

export interface IEducation extends IEduCommon, Partial<IEduSpecific> {}

export interface IDoctor extends Document {
    firstName: string,
    lastName: string,
    email: string,
    education: IEducation
    uId?: string
    profilePic?: string | null;
}
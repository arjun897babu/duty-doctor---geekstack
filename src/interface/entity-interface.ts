import { Document } from "mongoose";
import { DoctorDegree } from "../constant/enum";

export interface IOTP extends Document {
    email: string,
    otp: number,
    createdAt: Date
}

export interface IEduCommon {
    degree: DoctorDegree,
    country: string;
    instituteName: string;
    completion: string,
}

export interface IEduSpecific {
    speciality: string;
    fellowShip: string; //for degree = fellow ship
    MedicalRegistrationNumber: string,//for completed degree
    year: string;// for uncompleted degree
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
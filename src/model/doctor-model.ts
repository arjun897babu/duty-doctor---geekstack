import { model, Schema } from "mongoose";
import { IDoctor, IEducation } from "../interface/entity-interface";
import { DoctorDegree } from "../constant/enum";

const educationSchema = new Schema<IEducation>({
    degree: {
        type: String,
        enum: Object.values(DoctorDegree),
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    completion: {
        type: String,
        required: true,
    },
    fellowShip: {
        type: String,
    },
    instituteName: {
        type: String,
        required: true,
    },
    MedicalRegistrationNumber: {
        type: String,
    },

    speciality: {
        type: String,
    },
    year: {
        type: String,
    }
});

const doctorSchema = new Schema<IDoctor>({
    firstName: {
        type: String,
        trim: true,
        lowercase: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    profilePic: {
        type: String,
        default: null
    },
    education: educationSchema
});

export const Doctors = model('Doctors', doctorSchema);

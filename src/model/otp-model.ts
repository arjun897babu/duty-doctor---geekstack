import { model, Schema } from "mongoose";
import { IOTP } from "../interface/entity-interface";

const otpSchema = new Schema<IOTP>({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    otp: {
        type: Number,
        required: true,
    },
    expireAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 60 * 2
    }
}, { timestamps: false });

export const OTP = model<IOTP>('OTP', otpSchema)
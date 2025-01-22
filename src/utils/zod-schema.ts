import { z } from 'zod'
import { generateInvalid, generateIsRequired } from './helper'

export const emailSchema = z.object({
    email: z
        .string()
        .nonempty(generateIsRequired("email"))
        .regex(
            /^(?=.{11,100}$)([a-zA-Z\d]+([.-_]?[a-zA-Z\d]+)*)\@[a-zA-Z\d-]{2,}\.[a-zA-Z]{2,}$/,
            generateInvalid("email")
        ),
});
const nameSchema = z
    .string()
    .nonempty(generateIsRequired("name"))
    .regex(/^.{3,15}$/, "min 3-5 character needed")
    .regex(/^[a-zA-Z]*$/, generateInvalid("name"))


const nameSchema2 = (field: string) => {
    return z
        .string()
        .nonempty(generateIsRequired(field))
        .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, generateInvalid(field))
}

const dropDownValueSchema = (field: string) => {
    return z
        .string()
        .nonempty(generateIsRequired(field))
}
const educationSchema = z.object({
    degree: dropDownValueSchema('degree'),
    country: dropDownValueSchema('country'),
    instituteName: z
        .string()
        .nonempty(generateIsRequired('institute name'))
        .regex(/^.{3,150}$/,generateInvalid('institute name'))
        .regex(/^[a-zA-Z0-9.']+(?: [a-zA-Z0-9.']+)*$/, generateInvalid('institute name')),
    completion: dropDownValueSchema('completion'),
    year: dropDownValueSchema('year').optional(),
    fellowShip: dropDownValueSchema('fellowShip').optional(),
    speciality: dropDownValueSchema('speciality').optional(),
    MedicalRegistrationNumber: z
        .string()
        .nonempty(generateIsRequired('registration number'))
        .regex(/^.{5,20}$/,generateInvalid('registration number'))
        .regex(/^[a-zA-Z0-9-./]+(?:[a-zA-Z0-9-./]+)*$/, generateInvalid('registration number'))
        .optional()
});

//
export const registerSchema = z.object({
    firstName: nameSchema,
    lastName: nameSchema,
}).merge(emailSchema)



export const OTPSchema = z.object({
    otp: z
        .string()
        .regex(/^\d{6}$/, "invalid otp")
        .length(6, "OTP must be exactly 6 digits")
}).merge(emailSchema);

export const registerSchema2 = z.object({}).merge(educationSchema).merge(registerSchema)
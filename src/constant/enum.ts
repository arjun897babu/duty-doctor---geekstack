export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    CONFLICT = 409,
    CONTENT_TOO_LARGE = 413
}
export enum NODE_APP{
    DUTY_DOCTOR='dutyDoctor'
}

export enum Role {
    DOCTOR = 'doctor',
    student = 'student'
}
export enum TokenType {
    ACCESS = 'access',
    REFRESH = 'refresh'
}

export enum ResponseStatus {
    SUCCESS = 'Success',
    ERROR = 'Error',
}

export enum DoctorDegree {
    MBBS = 'MBBS',
    PG = 'PG',
    SUPER_SPECIALITY = "Super Speciality",
    FELLOWSHIP = 'Fellowship'
}
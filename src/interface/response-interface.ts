import { ResponseStatus } from "../constant/enum";

export interface Response {
    status:ResponseStatus,
    message: string
}
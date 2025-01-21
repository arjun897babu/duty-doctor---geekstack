import { randomInt, randomUUID } from "node:crypto";

export const generateUUID = () => randomUUID()

export const generateIsRequired = (field: string): string => `${field} is required`;
export const generateInvalid = (field: string): string => `Invalid ${field}`;

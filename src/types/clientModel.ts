import { AuditModel } from "./AuditModel";

export interface ClientModel extends AuditModel {
    name: string;
    region: string;
    country: string;
    language: string;
    isActive: boolean;
}



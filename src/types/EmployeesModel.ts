import { AuditModel } from "./AuditModel";


export interface EmployeesModel extends AuditModel {
    clientId: number;
    name: string;
    isActive: boolean;
}

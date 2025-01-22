import { AuditModel } from "./AuditModel";


export interface WorkDayPeriodModel extends AuditModel {
    clientId: string;
    employeeId: string;
    effectiveFrom: Date;
    effectiveTo: Date;
}


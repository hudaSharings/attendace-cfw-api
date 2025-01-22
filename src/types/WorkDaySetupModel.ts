import { AuditModel } from "./AuditModel";


export interface WorkDaySetupModel extends AuditModel {
    clientId: string;
    employeeId: string;
    workdayPeriodID: number;
    shiftID: number;
    weekday: string;
    isActive: boolean;
}

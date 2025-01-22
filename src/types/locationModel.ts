import { AuditModel } from "./AuditModel";

export interface LocationModel extends AuditModel {
    clientId: string;
    employeeId: string;
    name: string;
    latlong: string;
    range: number;
    isActive: boolean;
    isMain: boolean;
  }
  
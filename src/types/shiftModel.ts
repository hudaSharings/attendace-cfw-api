import { AuditModel } from "./AuditModel";

export interface ShiftModel extends AuditModel {
    clientId: string;
    name: string;
    fromTime: string;
    toTime: string;
    tolerance: string;
    expectedHours: string;
    isSplit: boolean;
    isActive: boolean;
  }
  
 export interface ShiftSplitModel extends AuditModel {
    shiftId: number;
    fromTime: string;
    toTime: string;
    expectedHours: string;
    isActive: string;
  }



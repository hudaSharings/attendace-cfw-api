export interface AuditModel {
    id: number;
    createdOn: Date;
    createdBy: string;
    updatedOn?: Date;
    updatedBy?: string;
    orgId: string;
}

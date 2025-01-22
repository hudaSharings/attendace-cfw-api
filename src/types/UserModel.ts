import { AuditModel } from "./AuditModel";



export interface UserModel extends AuditModel {
    userName: string;
    name: string;
    email: string;
    mobileNumber: string;
    password: string;
    userType: string;
}

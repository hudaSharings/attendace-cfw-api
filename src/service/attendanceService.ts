import  ServiceBase  from "./ServiceBase";

class AttendanceService extends ServiceBase {
    dbConStr: string="";
    setConStr(dbConStr: string) {
       this.dbConStr = dbConStr;
       return this;
    }
}

export const  attendanceService =  new AttendanceService();
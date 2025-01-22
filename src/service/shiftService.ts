import  ServiceBase  from "./ServiceBase";

class ShiftService extends ServiceBase {
    dbConStr: string="";
    setConStr(dbConStr: string) {
       this.dbConStr = dbConStr;
       return this;
    }
}

export const  shiftService =  new ShiftService();
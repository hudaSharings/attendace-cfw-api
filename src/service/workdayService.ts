import  ServiceBase  from "./ServiceBase";

 class WorkdayService extends ServiceBase {
    dbConStr: string="";
    setConStr(dbConStr: string) {
       this.dbConStr = dbConStr;
       return this;
    }
}

export const workdayService = new WorkdayService();
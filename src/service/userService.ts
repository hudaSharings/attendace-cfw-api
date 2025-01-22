import  ServiceBase  from "./ServiceBase";

 class UserService extends ServiceBase {
    dbConStr: string="";
    setConStr(dbConStr: string) {
       this.dbConStr = dbConStr;
       return this;
    }
}

export const userService = new UserService();
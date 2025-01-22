import  ServiceBase  from "./ServiceBase";

class LocationService extends ServiceBase {
    dbConStr: string="";
    setConStr(dbConStr: string) {
       this.dbConStr = dbConStr;
       return this;
    }
}

export const  locationService =  new LocationService();
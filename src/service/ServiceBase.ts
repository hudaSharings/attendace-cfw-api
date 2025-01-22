
abstract class ServiceBase {
    abstract dbConStr: string ;
    abstract setConStr(dbConStr: string): void;
    
}

export default ServiceBase;
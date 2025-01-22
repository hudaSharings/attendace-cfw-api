import { date, pgTable, uuid } from "drizzle-orm/pg-core";
import { auditSchema } from "./audit";


export const tableName = 'workDayPeriods';

export const tableDefinition = {
    ClientId: uuid('clientId'),
    EmployeeId: uuid('employeeId'),
    EfecctiveFrom: date('effectiveFrom'),
    EffectiveTo: date('effectiveTo')    
}

export const workDayPeriod = pgTable(tableName, {
    ...tableDefinition,
    ...auditSchema
})

export default workDayPeriod
import { boolean, integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { auditSchema } from "./audit";


export const tableName = 'workDaySetups';

export const tableDefinition = {
    ClientId: integer('clientId'),
    EmployeeId: integer('employeeId'),
    WorkdayPeriodID:integer('workdayPeriodId'),
    ShiftID:integer('shiftId'),
    Weekday:text('weekday'),
    IsActive:boolean('isActive')
}

export const workDaySetup = pgTable(tableName, {
    ...tableDefinition,
    ...auditSchema
})

export default workDaySetup
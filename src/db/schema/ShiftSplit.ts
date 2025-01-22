import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";
import { auditSchema } from "./audit";

export const tableName = 'shiftSplits';

export const tableDefinition = {
    shiftId: integer('shiftId'),
    FromTime:text('fromTime'),
    ToTime:text('toTime'),
    ExpectedHours:text('expectedHours'),    
    IsActive: boolean('isActive'),
}

export const shiftSplit = pgTable(tableName, {
    ...tableDefinition,
    ...auditSchema,
});

export default shiftSplit
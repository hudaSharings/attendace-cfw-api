import { boolean, integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { auditSchema } from "./audit";

export const tableName = 'locations';

export const tableDefinition = {
    clientId: integer('clientId'),
    employeeId: integer('employeeId'),
    name:text('name'),
    latlong:text('latlong'),
    range:integer('range'),
    isActive:boolean('isActive'),
    isMain:boolean('isMain')  
};

export const location = pgTable(tableName,{
    ...tableDefinition ,
    ...auditSchema
});

export default location
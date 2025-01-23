import { boolean, integer, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { auditSchema } from './audit';

export const tableName = 'employees';

export const tableDefinition = {
    clientId: integer('clientId'),
	name: text('name'),	
	isActive: boolean('isActive')
};

export const client = pgTable(tableName, {
	...tableDefinition,
	...auditSchema,
});

export default client
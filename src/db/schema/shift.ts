import { boolean, integer, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { auditSchema } from './audit';

export const tableName = 'shifts';

export const tableDefinition = {
	ClientId: integer('clientId'),
	Name: text('name'),
	FromTime: text('fromTime'),
	ToTime: text('toTime'),
	Tolerance: text('tolerance'),
	ExpectedHours: text('expectedHours'),
	IsSplit: boolean('isSplit'),
	IsActive: boolean('isActive'),
};

export const shift = pgTable(tableName, {
	...tableDefinition,
	...auditSchema,
});

export default shift
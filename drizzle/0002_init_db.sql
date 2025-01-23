CREATE TABLE "clients" (
	"name" text,
	"region" text,
	"country" text,
	"language" text,
	"isActive" boolean,
	"id" serial PRIMARY KEY NOT NULL,
	"createdOn" timestamp DEFAULT now(),
	"createdBy" text,
	"updatedOn" date,
	"updatedby" text,
	"orgId" text
);
--> statement-breakpoint
CREATE TABLE "employees" (
	"clientId" integer,
	"name" text,
	"isActive" boolean,
	"id" serial PRIMARY KEY NOT NULL,
	"createdOn" timestamp DEFAULT now(),
	"createdBy" text,
	"updatedOn" date,
	"updatedby" text,
	"orgId" text
);
--> statement-breakpoint
ALTER TABLE "locations" DROP COLUMN "clientId";
ALTER TABLE "locations" ADD COLUMN "clientId" integer;--> statement-breakpoint
ALTER TABLE "locations" DROP COLUMN "employeeId";
ALTER TABLE "locations" ADD COLUMN "employeeId" integer;--> statement-breakpoint
ALTER TABLE "shifts" DROP COLUMN "clientId";
ALTER TABLE "shifts" ADD COLUMN "clientId" integer;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "employeeId";
ALTER TABLE "users" ADD COLUMN "employeeId" integer;--> statement-breakpoint
ALTER TABLE "workDayPeriods" DROP COLUMN "clientId";
ALTER TABLE "workDayPeriods" ADD COLUMN "clientId" integer;--> statement-breakpoint
ALTER TABLE "workDayPeriods" DROP COLUMN "employeeId";
ALTER TABLE "workDayPeriods" ADD COLUMN "employeeId" integer;--> statement-breakpoint
ALTER TABLE "workDaySetups" DROP COLUMN "clientId";
ALTER TABLE "workDaySetups" ADD COLUMN "clientId" integer;--> statement-breakpoint
ALTER TABLE "workDaySetups" DROP COLUMN "employeeId";
ALTER TABLE "workDaySetups" ADD COLUMN "employeeId" integer;
CREATE TABLE "locations" (
	"clientId" uuid,
	"employeeId" uuid,
	"name" text,
	"latlong" text,
	"range" integer,
	"isActive" boolean,
	"isMain" boolean,
	"id" serial PRIMARY KEY NOT NULL,
	"createdOn" timestamp DEFAULT now(),
	"createdBy" text,
	"updatedOn" date,
	"updatedby" text,
	"orgId" text
);
--> statement-breakpoint
CREATE TABLE "shifts" (
	"clientId" uuid,
	"name" text,
	"fromTime" text,
	"toTime" text,
	"tolerance" text,
	"expectedHours" text,
	"isSplit" boolean,
	"isActive" boolean,
	"id" serial PRIMARY KEY NOT NULL,
	"createdOn" timestamp DEFAULT now(),
	"createdBy" text,
	"updatedOn" date,
	"updatedby" text,
	"orgId" text
);
--> statement-breakpoint
CREATE TABLE "shiftSplits" (
	"shiftId" integer,
	"fromTime" text,
	"toTime" text,
	"expectedHours" text,
	"isActive" boolean,
	"id" serial PRIMARY KEY NOT NULL,
	"createdOn" timestamp DEFAULT now(),
	"createdBy" text,
	"updatedOn" date,
	"updatedby" text,
	"orgId" text
);
--> statement-breakpoint
CREATE TABLE "workDayPeriods" (
	"clientId" uuid,
	"employeeId" uuid,
	"effectiveFrom" date,
	"effectiveTo" date,
	"id" serial PRIMARY KEY NOT NULL,
	"createdOn" timestamp DEFAULT now(),
	"createdBy" text,
	"updatedOn" date,
	"updatedby" text,
	"orgId" text
);
--> statement-breakpoint
CREATE TABLE "workDaySetups" (
	"clientId" uuid,
	"employeeId" uuid,
	"workdayPeriodId" integer,
	"shiftId" integer,
	"weekday" text,
	"isActive" boolean,
	"id" serial PRIMARY KEY NOT NULL,
	"createdOn" timestamp DEFAULT now(),
	"createdBy" text,
	"updatedOn" date,
	"updatedby" text,
	"orgId" text
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "employeeId" uuid;
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
// import dbConnectionString from '../../dbconnectionString';
// console.log(dbConnectionString)
/*
import { config } from 'dotenv';

config({ path: '.dev.vars' });
// Ensure DATABASE_URL exists
if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined in the environment variables");
  }
export const sql = neon(process.env.DATABASE_URL!);*/

const DbConnection = (connectionURL: string) => {
  if (connectionURL === undefined|| connectionURL === null|| connectionURL === "") {
    throw new Error("connectionURL is Not Found");
  }
	const sql = neon(connectionURL);
	const db = drizzle(sql);
	let con = {sql,db,};
	return con;
};
export default DbConnection;


import { config } from 'dotenv';
config({ path: '.env' });
const dbConnectionString = `${process.env.DATABASE_URL}`
export default dbConnectionString
console.log(dbConnectionString)

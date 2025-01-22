import GetDbConnection from '../db';
import { tables } from '../db/drizzle';
import { eq } from 'drizzle-orm';
import  ServiceBase  from './ServiceBase';

class AuthService extends ServiceBase {
     dbConStr: string="";    
    setConStr(dbConStr: string) {
        this.dbConStr = dbConStr;
        return this;
     }
	async login(email: string, password: string) {
		const { db } = GetDbConnection(this.dbConStr);
		const user = await db.select().from(tables.users).where(eq(tables.users.email, email));
		if (user.length === 0) {
			throw new Error('User not found');
		}
		const [firstUser] = user;
		if (firstUser.password !== password) {
			throw new Error('Invalid password');
		}
		return firstUser;
	}
}

export const authService = new AuthService();


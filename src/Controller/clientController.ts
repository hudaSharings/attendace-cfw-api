import appHono from "../honoApp";
import DbConnection from "../db";
import { successResponse } from "../utils/apiResponce";

const app = appHono.basePath('/auth').basePath('/clients')

app.get('/', async (c) => {    
    const {sql} = await DbConnection(c.env.DATABASE_URL!);
    const users = await sql`select * from users`;
    return  c.json(successResponse(users,'',{pageIndex:1,pageSize:10,totalCount:users.length})); 
}
);

export default app
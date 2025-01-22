import appHono from "../honoApp";
import { authService } from "../service/authService";
import { successResponse } from "../utils/apiResponce";
import { signToken } from "../utils/jwt";

 
const app = appHono;

app.post('/login', async (c) => {
    const { email, password } = await c.req.json();
    const user = await authService.setConStr(c.env.DATABASE_URL!).login(email, password);
    if (!user) {
        return c.json({ message: 'Invalid credentials' }, 401);
    }
    const token = await signToken(user);    
    return  c.json(successResponse({ user, token })); 
}
);

export default app
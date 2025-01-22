import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { Env } from '../worker-configuration';

const appHono = new Hono<{Bindings:Env}>().basePath('/api')
appHono.use('/*',cors())
// appHono.use('/auth/*',authenticateJWT);
// appHono.use('*', errorHandler); 
appHono.onError((err,c)=>{
    const status = c.res.status || 500;
    const message = err.message || 'Internal Server Error';    
  
    return c.json({
      status: 'error',
      message,
    });
   
})

export default appHono
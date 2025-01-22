import { sign, verify } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";

const SECRET_KEY = "secretekey1";

export const signToken = async (user: any) => {
  const _payload = {
    sub: user.name,
    userid:user.Id,
    username:user.userName,
    role: user.userType,
    org: "testOrg",
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // Token expires in 60 minutes 
  };
  const token = await sign(_payload, SECRET_KEY);
  console.log(token);
  return token;
};

export const verifyToken = async (token: string):Promise<JWTPayload|boolean>=> {
  try {   
     const _token = await verify(token, SECRET_KEY);
     return _token;
  } catch (err) {
    return false;
    //throw new Error("Invalid token");
  }
};
import { sign } from 'jsonwebtoken';
import { AuthToken, AuthTokenType, User } from '../types';

class AuthService {
  /**
  * Creates the JWT auth tokens
  * @param User
  */
  createAuthTokens(user: User): AuthToken {
   try {
     const access_token = sign(
       { user, sub: user.email }, 
       String(process.env.JWT_SECRET), 
       { expiresIn: process.env.JWT_EXPIRATION }, // refresh_token expires in 15 minutes          
     );
     console.log('access_token', access_token)
     const refresh_token = sign(
       { user, sub: user.email }, 
       String(process.env.JWT_REFRESH_SECRET), 
       { expiresIn: process.env.JWT_REFRESH_EXPIRATION }, // refresh_token expires in 60 days          
     );
     console.log('refresh_token', refresh_token)
     return {
       access_token,
       expires_in: Number(process.env.JWT_EXPIRATION), // access_token expires in 15 min
       refresh_token,
       token_type: AuthTokenType.BEARER,
     };
   } catch (e: any) {
     throw new Error(e.message);
   }
  }
  
  /**
  * Verifies JWT auth
  * @param User
  */
  verifyAuthTokens(user: User): AuthToken | void {
   try {
     //
   } catch (e: any) {
     throw new Error(e.message);
   }
  }
}


export default new AuthService;

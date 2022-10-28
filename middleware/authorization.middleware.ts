import { NextFunction, Request, Response } from 'express';

/**
* Checks if the user has access to requested endpoint
* @param req - Express Request Object
* @param response - Express Response Object
* @param next - Express Next Function
* 
* @returns next Function or Throws an Error if user is not authenticated
*/
const isUserAuthorized = (roles: String[]) => {
  return (req: Request, res: Response, next: NextFunction): NextFunction | void => {
    console.log('roles', roles)
    console.log('req.user.role', req.user.role)
    if (!roles.includes(req.user.role)) {
      return next(new Error(`Role(${req.user.role}) is not allowed to access this resource.`))
    }
    console.log('user is authorized!')
    next();
  }
}

export default isUserAuthorized;

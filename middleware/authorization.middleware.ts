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
    if (!roles.includes(req.user.role)) {
      res.status(400).json(`Role(${req.user.role}) is not allowed to access this resource.`);
    }
    next();
  }
}

export default isUserAuthorized;

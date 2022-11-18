"use strict";
// exports.__esModule = true;
/**
* Checks if the user has access to requested endpoint
* @param req - Express Request Object
* @param response - Express Response Object
* @param next - Express Next Function
*
* @returns next Function or Throws an Error if user is not authenticated
*/
var isUserAuthorized =  (roles) =>{
    return  (req, res, next) =>{
        if (!roles.includes(req.user.role)) {
            res.status(400).json("Role(".concat(req.user.role, ") is not allowed to access this resource."));
        }
        next();
    };
};
module.exports =  isUserAuthorized;

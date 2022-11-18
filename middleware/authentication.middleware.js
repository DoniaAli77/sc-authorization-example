"use strict";
// exports.__esModule = true;
const jsonwebtoken = require("jsonwebtoken");
/**
* Checks if the incoming request is for an authenticated user
* @param req - Express Request Object
* @param response - Express Response Object
* @param next - Express Next Function
*
* @returns next Function or Throws an Error if user is not authenticated
*/
var isAuthenticatedUser = function (req, res, next) {
    try {
        let token ;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }
        if (!token) {
            throw new Error('Login first to access this resource.');
        }
        const decoded = jsonwebtoken.verify(token, String(process.env.JWT_SECRET));
        req.user = decoded.user;
        next();
    }
    catch (e) {
        res.status(400).json(e.message);
    }
};
module.exports =  isAuthenticatedUser;

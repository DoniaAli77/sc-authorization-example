"use strict";
// exports.__esModule = true;
var jsonwebtoken = require("jsonwebtoken");
var types = require("../types");
class AuthService {
  /**
   * Creates the JWT auth tokens
   * @param User
   */
  createAuthTokens(user) {
    try {
      var access_token = jsonwebtoken.sign(
        { user: user, sub: user.email },
        String(process.env.JWT_SECRET),
        { expiresIn: process.env.JWT_EXPIRATION }
      );
      var refresh_token = jsonwebtoken.sign(
        { user: user, sub: user.email },
        String(process.env.JWT_REFRESH_SECRET),
        { expiresIn: process.env.JWT_REFRESH_EXPIRATION }
      );
      return {
        access_token: access_token,
        expires_in: Number(process.env.JWT_EXPIRATION),
        refresh_token: refresh_token,
        token_type: types.AuthTokenType.BEARER,
      };
    } catch (e) {
      throw new Error(e.message);
    }
  }
  /**
   * Verifies JWT auth
   * @param User
   */
  verifyAuthTokens(user) {
    try {
      //
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
module.exports =  new AuthService();

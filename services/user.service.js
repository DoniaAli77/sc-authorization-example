"use strict";
// exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();

var auth_service = require("./auth.service");
var users = {
  amrdesoukyemployee: {
    id: "1",
    username: "amrdesoukyemployee",
    name: "Amr Desouky",
    password: "employee!",
    email: "amr.desouky@giu-uni.de",
    role: "employee",
  },
  amrdesoukymanager: {
    id: "2",
    username: "amrdesoukymanager",
    name: "Amr Desouky",
    password: "manager!",
    email: "amr.desouky@giu-uni.de",
    role: "manager",
  },
};
class UserService {
  /**
   * Creates the JWT auth tokens
   * @param user
   *
   * @returns AuthToken
   */
  login(user) {
    try {
      var userExists = users[user.username];
      if (!userExists) {
        throw new Error("user does not exist");
      }
      if (user.password !== userExists.password) {
        throw new Error("password does not match");
      }
      return auth_service.createAuthTokens(userExists);
    } catch (e) {
      throw new Error(e);
    }
  }
  /**
   * Fetches User object
   * @param user
   *
   * @returns User Object
   */
  getUser(user) {
    try {
      var userExists = users[user.username];
      if (!userExists) {
        throw new Error("user does not exist");
      }
      return userExists;
    } catch (e) {
      throw new Error(e);
    }
  }
  /**
   * Updates User object
   * @param user
   *
   * @returns User Object
   */
  updateUser(user) {
    try {
      var userExists = users[user.username];
      if (!userExists) {
        throw new Error("user does not exist");
      }
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports =  new UserService();

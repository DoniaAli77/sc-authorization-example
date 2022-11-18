"use strict";
// exports.__esModule = true;
const dotenv = require("dotenv");
dotenv.config();
const user_service = require("../services/user.service");
class UserController {
  /**
   * Creates the JWT auth tokens
   * @param user
   *
   * @returns AuthToken
   */
  login(req, res) {
    const { username, password } = req.body;
    console.log(req.body)
    if (!username || !password) {
      return res.status(400).json("Username & Password is required for login");
    }
    try {
      return res.status(200).json(user_service.login(req.body));
    } catch (e) {
      return res.status(400).json(e.message);
    }
  }
  /**
   * Fetches User object
   * @param user
   *
   * @returns User Object
   */
  getUser(req, res) {
    const { username } = req.params;
    try {
      return res.status(200).json(user_service.getUser({ username: username }));
    } catch (e) {
      return res.status(400).json(e.message);
    }
  }
  /**
   * Updates User object
   * @param user
   *
   * @returns User Object
   */
  updateUser(req, res) {
    try {
      return res.status(200).json(user_service.updateUser(req.body));
    } catch (e) {
      return res.status(400).json(e.message);
    }
  }
}
module.exports =  new UserController;

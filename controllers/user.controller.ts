import * as dotenv from "dotenv";
dotenv.config();
import { AuthToken, User } from '../types';
import userService from "../services/user.service";
import { Request, Response } from "express";

class UserController {
  /**
   * Creates the JWT auth tokens
   * @param user
   * 
   * @returns AuthToken
   */
  login(req: Request, res: Response):  Response<AuthToken> {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error('Username & Password is required for login');
    }
    return res.json(userService.login(req.body));
  }

  /**
   * Fetches User object
   * @param user
   * 
   * @returns User Object
   */
   getUser(req: Request, res: Response): Response<User> {
    const { username } = req.params;
    return res.json(userService.getUser({ username }))
  }  

  /**
   * Updates User object
   * @param user
   * 
   * @returns User Object
   */
   updateUser(req: Request, res: Response): Response<User> {
    return res.json(userService.updateUser(req.body));
  }  
};

export default new UserController;
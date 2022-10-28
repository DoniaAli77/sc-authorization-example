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
      return res.status(400).json('Username & Password is required for login');
    }
    try {
      return res.status(200).json(userService.login(req.body));
    } catch (e: any) {
      return res.status(400).json(e.message);
    }    
  }

  /**
   * Fetches User object
   * @param user
   * 
   * @returns User Object
   */
   getUser(req: Request, res: Response): Response<User> {
    const { username } = req.params;
    try {
      return res.status(200).json(userService.getUser({ username }))
    } catch (e: any) {
      return res.status(400).json(e.message);
    }
  }  

  /**
   * Updates User object
   * @param user
   * 
   * @returns User Object
   */
   updateUser(req: Request, res: Response): Response<User> {
    try {
      return res.status(200).json(userService.updateUser(req.body));
    } catch (e: any) {
      return res.status(400).json(e.message);
    }    
  }  
};

export default new UserController;
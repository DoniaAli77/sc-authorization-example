import * as dotenv from "dotenv";
dotenv.config();
import { UserDto, AuthToken, User, UserLookup } from '../types';
import authService from "./auth.service";

const users: UserLookup = {
  amrdesoukyemployee: {
    id: '1',
    username: 'amrdesoukyemployee',
    name: 'Amr Desouky',
    password: 'employee!',
    email: 'amr.desouky@giu-uni.de',
    role: 'employee'
  },
  amrdesoukymanager: {
    id: '2',
    username: 'amrdesoukymanager',
    name: 'Amr Desouky',
    password: 'manager!',
    email: 'amr.desouky@giu-uni.de',
    role: 'manager'
  }
};

class UserService {
  /**
   * Creates the JWT auth tokens
   * @param user
   * 
   * @returns AuthToken
   */
  login(user: UserDto): AuthToken {
    try {
      const userExists: User = users[user.username];
      if (!userExists) {
        throw new Error('user does not exist');
      }
      if (user.password !== userExists.password) {
        throw new Error('password does not match');
      }

      return authService.createAuthTokens(userExists);
    } catch (e: any) {
      throw new Error(e);
    }
  }

  /**
   * Fetches User object
   * @param user
   * 
   * @returns User Object
   */
   getUser(user: UserDto): User {
    console.log(user.username);
    try {
      const userExists: User = users[user.username];
      if (!userExists) {
        throw new Error('user does not exist');
      }
      return userExists;
    } catch (e: any) {
      throw new Error(e);
    }
  }  

  /**
   * Updates User object
   * @param user
   * 
   * @returns User Object
   */
   updateUser(user: User): User {
    try {
      const userExists: User = users[user.username];
      if (!userExists) {
        throw new Error('user does not exist');
      }
      return user;
    } catch (e: any) {
      throw new Error(e);
    }
  }  
};

export default new UserService;
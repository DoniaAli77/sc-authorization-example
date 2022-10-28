import express from 'express';
const router = express.Router();

import userController from '../controllers/user.controller';
import isAuthenticatedUser from '../middleware/authentication.middleware';
import isUserAuthorized from '../middleware/authorization.middleware';

// Manager & employee accessible routes
router.route('/login').post(userController.login);

router.use(isAuthenticatedUser);

// Manager & employee accessible routes
router.route('/user/:username').get(isUserAuthorized(['manager', 'employee']), userController.getUser);

// Manager only routes
router.route('/user/:username').patch(isUserAuthorized(['manager']), userController.updateUser);

export default router;
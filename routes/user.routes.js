"use strict";
// exports.__esModule = true;

var express = require("express");
var router = express.Router();

var user_controller = require("../controllers/user.controller");
var authentication_middleware = require("../middleware/authentication.middleware");
var authorization_middleware = require("../middleware/authorization.middleware");
// Manager & employee accessible routes


router.route('/login').post(user_controller.login);


router.use(authentication_middleware);
// Manager & employee accessible routes

router.route('/user/:username').get( authorization_middleware(['manager', 'employee']), user_controller.getUser);
// Manager only routes

router.route('/user/:username').patch( authorization_middleware(['manager']), user_controller.updateUser);

module.exports = router;

"use strict";
// exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();

var body_parser = require("body-parser");
var express = require("express");
var user_routes = require("./routes/user.routes");

const app = express();

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use('/api/v1', user_routes);
/**
 * Starts the Express HTTP Server
 * @params {Number} - The web server port number
 */
app.listen(3000, function () {
    return console.log('Auth app listening on port 3000');
});

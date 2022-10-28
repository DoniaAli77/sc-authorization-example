import * as dotenv from "dotenv";
dotenv.config();

import bodyParser from 'body-parser';
import express from 'express';
import userRoutes from './routes/user.routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1', userRoutes);

/**
 * Starts the Express HTTP Server
 * @params {Number} - The web server port number
 */
app.listen(3000, () =>
  console.log('Auth app listening on port 3000'),
);
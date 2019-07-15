// Imports needed to run the app. (npms)
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';
import logger from 'morgan';
import passport from 'passport';
import cors from 'cors';
import {connect} from './config/db';
import {restRouter} from './api';
import {configJWTStrategy} from './api/middelwares/passport-jwt';
import {} from 'dotenv/config';

const app = express();

// For handling Cross-Origin Resource Sharing. 
app.use(cors()); 

// For handling Connection to mongo db Database. 
connect();

// For development end only "to check errors at code"   
app.use(logger('common')); 
// app.use(logger('dev'));

/**
 *  Express setup to encode the data provided to the server.
 */

app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));


//* We are using jwt tokens to secure our app check the token and verify the user.
app.use(passport.initialize()); 
configJWTStrategy(); 

// Api Router which will accept all the APIs from frontend to process. 
app.use('/api', restRouter); 

// We are using passport js to validate the user by checking user request.

/**
 * this is done for error handling.   
 */
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler());
}

process.on('uncaughtException', (err) => {
  console.log("Uncaught Exception", err)
  Debug('Caught exception: %j', err);
  process.exit(1);
});


app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});

//Exporting app to use it at any level of app. 
export default app;
import express from 'express';
import userController from './user.controller';
import passport from 'passport';

export const userRouter = express.Router();

userRouter.get('/signup', userController.signup);

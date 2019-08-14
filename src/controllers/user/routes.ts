import * as express from 'express';
import UserController from './controller';
import validation from '../validation';
import { validationHandler } from '../../libs';
 import  authMiddleware from '../../libs/routes/authMiddleWare';

const userRouter = express.Router();
console.log(" we are at where auth aplied on routes");
userRouter.route('/login').post( authMiddleware('getUsers', 'read'),validationHandler(validation.login),UserController.login);




export default userRouter;
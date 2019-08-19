import * as express from 'express';
import UserController from './controller';
import validation from '../validation';
import { validationHandler } from '../../libs';
 import  authMiddleware from '../../libs/routes/authMiddleWare';

const userRouter = express.Router();
userRouter.route('/login')
.post( authMiddleware('getUsers', 'read'),validationHandler(validation.login),UserController.login);


userRouter.route('/me').get(authMiddleware('getUsers', 'read'),UserController.getUser);




export default userRouter;
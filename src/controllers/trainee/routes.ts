import * as express from 'express';
import TraineeController from './controller';
import validation from '../validation';
import { validationHandler } from '../../libs';
 import  authMiddleware from '../../libs/routes/authMiddleWare';

const traineeRouter = express.Router();

traineeRouter.route('/').get(authMiddleware('getUsers', 'read') , TraineeController.get);
// .get(validationHandler(validation.get), TraineeController.get)
// .post(validationHandler(validation.create),TraineeController.create)
// .put(TraineeController.update)
// .delete(TraineeController.delete);




export default traineeRouter;
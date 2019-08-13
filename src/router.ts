import * as express from 'express';
import {traineeRouter} from './controllers';
import {userRouter} from './controllers';

const router = express.Router();
// console.log('in router after database',userRouter);
router.use('/trainee',traineeRouter);
router.use('/user',userRouter);
export default router;
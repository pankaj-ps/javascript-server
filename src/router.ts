import * as express from 'express';
import {traineeRouter} from './controllers';

const router = express.Router();
console.log('in router after database',router);
router.use('/trainee',traineeRouter);

export default router;
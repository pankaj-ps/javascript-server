import * as jwt from 'jsonwebtoken';
import hasPermission from '../../../extraTs/utils/permissions';
import { config } from '../../config1';

 const authMiddleWare = (moduleName,permissionType) => ( req, res, next ) => {

 console.log(req.headers);

}
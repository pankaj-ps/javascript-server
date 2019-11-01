// import * as jwt from 'jsonwebtoken';
// import hasPermission from '../../../extraTs/utils/permissions';
// import { config } from '../../config1';

//  const authMiddleWare = (moduleName,permissionType) => ( req, res, next ) => {

//  console.log(req.headers);

// }

// export default authMiddleWare;

import * as jwt from 'jsonwebtoken';
import hasPermission from '../../../extraTs/utils/permissions';
import { config } from '../../config1';
export default (moduleName, permissionType) => (req , res , next) => {
// console.log('config is ::::',moduleName,permissionType);
// console.log('Header is ::::',req.headers('authorization'));
// try {
    console.log('module is ::::::::::::::::',typeof(moduleName));
    console.log('PermissionType is ::::::::::::::::',typeof(permissionType));
    console.log('authorization', req.headers);
    const token = req.headers['authorization'];
    console.log('Token::::', req.headers['authorization']);
    console.log('secret key', config.secret_key);
    const userInfo = jwt.verify(token,config.secret_key);
    console.log(' for the just try >>>>>>>>>',userInfo);
   // const userInfo = jwt.verify(token, config.secret_key);
    const role = userInfo.role;
    //console.log('Token is:', role);
//     hasPermission(moduleName,permissionType,role);
    //console.log('User info decoded', userInfo);
//     next();
// } catch(err) {
//     console.log('Error is::::',err);
//     next('Unauthorised Access');
// }
    if (hasPermission(moduleName, role, permissionType)) {
    next();
    }
      else {
      console.log('Error is::::');
      next('Unauthorised Access');
      }
};

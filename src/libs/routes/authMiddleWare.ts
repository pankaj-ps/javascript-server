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
import UserRepository from '../../repositories/user/UserRepository';

const userRepository= new UserRepository();

export default (moduleName, permissionType) => (req, res, next) => {
    // console.log('config is ::::',moduleName,permissionType);
    // console.log('Header is ::::',req.headers('authorization'));
    // try {
    const token = req.headers['authorization'];
    const userInfo = jwt.verify(token, config.secret_key);
    // const userInfo = jwt.verify(token, config.secret_key);
    const role = userInfo.role;

   

    // DB 
    userRepository.findOne({_id:userInfo.id}).then(user=>{
        if(!user){
            // console.log('User Not Found');
        }
        // console.log(" user is !!!!!!!!!!!!!!!!!!!!!!!!!!",user);
    })


    if (hasPermission(moduleName, role, permissionType)) {
        next();
    }
    else {
        console.log('Error is::::');
        next('Unauthorised Access');
    }
};

// import { permissions } from '.././constants';
// export default function hasPermission(moduleName, role, permissionType) {
// const isAllowed = permissions[moduleName]['all'].includes(role)
//                 || permissions[moduleName][permissionType].includes(role);
// return isAllowed ? console.log('True') : console.log('False');
// }
import { permissions  } from '../constants' ;
export default function  hasPermission( moduleName: string, role: string, permissionType: string): boolean {
    console.log(" hello we are in hasPermission>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    if (!permissions.hasOwnProperty(moduleName)) {
        console.log(" hello we are in hasPermission 1>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        return false;
    }
    else if (!permissions[moduleName].hasOwnProperty(permissionType)) {
        console.log(" hello we are in hasPermission 2>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        return false;
    }
    else if (!permissions[moduleName][permissionType].includes(role)) {
        console.log(" hello we are in hasPermission 3>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        return false;
    }
    else {
        console.log(" hello we are in hasPermission 4>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        return true;
    }}

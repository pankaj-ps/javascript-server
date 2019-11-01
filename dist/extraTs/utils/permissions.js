"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { permissions } from '.././constants';
// export default function hasPermission(moduleName, role, permissionType) {
// const isAllowed = permissions[moduleName]['all'].includes(role)
//                 || permissions[moduleName][permissionType].includes(role);
// return isAllowed ? console.log('True') : console.log('False');
// }
const constants_1 = require("../constants");
function hasPermission(moduleName, role, permissionType) {
    console.log(" hello we are in hasPermission>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    if (!constants_1.permissions.hasOwnProperty(moduleName)) {
        console.log(" hello we are in hasPermission 1>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        return false;
    }
    else if (!constants_1.permissions[moduleName].hasOwnProperty(permissionType)) {
        console.log(" hello we are in hasPermission 2>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        return false;
    }
    else if (!constants_1.permissions[moduleName][permissionType].includes(role)) {
        console.log(" hello we are in hasPermission 3>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        return false;
    }
    else {
        console.log(" hello we are in hasPermission 4>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        return true;
    }
}
exports.default = hasPermission;
//# sourceMappingURL=permissions.js.map
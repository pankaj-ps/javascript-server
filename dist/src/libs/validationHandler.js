"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validationHandler = (config) => (req, res, next) => {
    console.log(" we are in validationHandler ");
    // console.log('config is ', config);
    if (config) {
        // console.log(req['body']);
        // console.log('config is >>>>>>>>>>>>>>>>>>>>',Object.keys(config));
    }
    next();
};
// const validationHandler = function (config) {
//     return function (req, res, next) {
//         console.log('config is ', config);
//         next();
//     };
// }
exports.default = validationHandler;
//# sourceMappingURL=validationHandler.js.map
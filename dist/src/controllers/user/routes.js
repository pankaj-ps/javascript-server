"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("./controller");
const validation_1 = require("../validation");
const libs_1 = require("../../libs");
const authMiddleWare_1 = require("../../libs/routes/authMiddleWare");
const userRouter = express.Router();
console.log(" we are at where auth aplied on routes");
userRouter.route('/login').post(authMiddleWare_1.default('getUsers', 'read'), libs_1.validationHandler(validation_1.default.login), controller_1.default.login);
exports.default = userRouter;
//# sourceMappingURL=routes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("./controller");
const userRouter = express.Router();
console.log(" we are at where auth aplied on routes");
userRouter.route('/login').post(controller_1.default.login);
exports.default = userRouter;
//# sourceMappingURL=routes.js.map
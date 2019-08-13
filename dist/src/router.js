"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = require("./controllers");
const controllers_2 = require("./controllers");
const router = express.Router();
// console.log('in router after database',userRouter);
router.use('/trainee', controllers_1.traineeRouter);
router.use('/user', controllers_2.userRouter);
exports.default = router;
//# sourceMappingURL=router.js.map
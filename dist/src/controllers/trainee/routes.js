"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("./controller");
const validation_1 = require("../validation");
const libs_1 = require("../../libs");
const traineeRouter = express.Router();
console.log(" we are at where auth aplied on routes");
traineeRouter.route('/') //.get(authMiddleware('getUsers', 'read') , TraineeController.get);
    //.get(validationHandler(validation.get), TraineeController.get)
    .post(libs_1.validationHandler(validation_1.default.create), controller_1.default.create);
// .put(TraineeController.update)
// .delete(TraineeController.delete);
exports.default = traineeRouter;
//# sourceMappingURL=routes.js.map
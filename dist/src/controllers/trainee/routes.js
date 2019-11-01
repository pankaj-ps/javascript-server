"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("./controller");
const authMiddleWare_1 = require("../../libs/routes/authMiddleWare");
const traineeRouter = express.Router();
traineeRouter.route('/').get(authMiddleWare_1.default('getUsers', 'read'), controller_1.default.get);
// .get(validationHandler(validation.get), TraineeController.get)
// .post(validationHandler(validation.create),TraineeController.create)
// .put(TraineeController.update)
// .delete(TraineeController.delete);
exports.default = traineeRouter;
//# sourceMappingURL=routes.js.map
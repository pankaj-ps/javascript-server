"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = require("./controllers");
const router = express.Router();
router.use('/trainee', controllers_1.traineeRouter);
exports.default = router;
//# sourceMappingURL=router.js.map
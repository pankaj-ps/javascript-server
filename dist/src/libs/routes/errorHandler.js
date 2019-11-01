"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(req, res, next) {
    console.log(" Error in handlling request");
    res.send("Error in handling in request");
}
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map
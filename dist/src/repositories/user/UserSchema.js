"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class UserSchema extends mongoose.Schema {
    constructor(options) {
        const baseSchema = {
            name: {
                required: true,
                type: String
            },
            email: {
                required: true,
                type: String,
                unique: true,
            },
            password: {
                required: true,
                type: String,
            }
        };
        super(baseSchema, options);
    }
    ;
}
exports.default = UserSchema;
//# sourceMappingURL=UserSchema.js.map
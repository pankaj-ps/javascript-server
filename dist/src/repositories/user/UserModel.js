"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserSchema_1 = require("./UserSchema");
const mongoose = require("mongoose");
const toConvert = {
    transform: (doc, ret) => {
        ret.id = ret.id;
        delete ret.id;
        delete ret.v;
    },
    virtuals: true,
};
exports.UserSchema1 = new UserSchema_1.default({
    collection: 'User',
    toJSON: toConvert,
    toObject: toConvert,
});
exports.UserModel = mongoose.model('User', exports.UserSchema1, 'Users', true);
//# sourceMappingURL=UserModel.js.map
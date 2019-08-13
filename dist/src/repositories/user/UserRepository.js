"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("./UserModel");
class UserRepository {
    constructor() {
        this.UserModel = UserModel_1.UserModel;
    }
    get(query, projection, options) {
        return UserModel_1.UserModel.find(query, projection, options);
    }
    create(data) {
        return UserModel_1.UserModel.create(data);
    }
    findOne(query) {
        return UserModel_1.UserModel.findOne(query).lean();
    }
    count(data) {
        return UserModel_1.UserModel.count(data);
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map
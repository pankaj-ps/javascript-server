"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = require("../repositories/user/UserRepository");
exports.default = () => {
    const userRepository = new UserRepository_1.default();
    const user = {
        name: 'User2',
        email: 'User1@gmail.com',
    };
    userRepository.create(user).then((res) => {
        console.log(' USer Is ', res);
    }).catch((err) => {
        console.log(' Error is ', err);
    });
    userRepository.get({ name: 'user2' }, undefined, undefined).then(res => {
        console.log('Get User List   ', res['name']);
    }).catch(err => {
        console.log(' Err in get is ', err);
    });
};
//# sourceMappingURL=seedData.js.map
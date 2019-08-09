"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = {
    getUsers: {
        all: ['head-trainer'],
        delete: [],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
    },
};
exports.users = [
    {
        reviewerEmail: 'reviewer1@successive.tech', traineeEmail: 'trainee@successive.tech'
    },
    {
        reviewerEmail: 'reviewer21@successive.tech', traineeEmail: '*trainee2@successive.tech'
    },
    {
        reviewerEmail: '%reviewer1@successive.tech', traineeEmail: 'trainee@successive22.tech'
    },
];
//# sourceMappingURL=constants.js.map
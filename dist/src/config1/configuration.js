"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const envVars = process.env;
const configuration = Object.freeze({
    port: envVars.PORT,
    secret_key: envVars.SECRET_KEY,
    mongo_uri: envVars.MONGO_URL
});
//console.log("Config is :::::::::::", configuration);
exports.default = configuration;
//# sourceMappingURL=configuration.js.map
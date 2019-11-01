"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const notFoundRoute_1 = require("./libs/routes/notFoundRoute");
const errorHandler_1 = require("./libs/routes/errorHandler");
const router_1 = require("./router");
const bodyParser = require("body-parser");
const libs_1 = require("./libs");
//import config from './config';
class Server {
    constructor(config) {
        this.config = config;
        console.log("Inside Express Js File");
        this.app = express();
    }
    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this.app;
    }
    initBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    setupRoutes() {
        console.log(" inside");
        const { app } = this;
        app.use('/api', router_1.default);
        // app.use('/', (req,res,next)=>{
        //  console.log(" i am in API Route");
        //  res.send(' in API ');
        // });
        // app.get('/app',function(req,res ,next){
        //      console.log(" we are in app ");
        //      res.send(" we play ")
        //  });
        app.get('/pankaj', (req, res) => {
            console.log(" I Am Pankaj");
            res.send('I Am pankaj');
        });
        app.use('/redirected-url1', (req, res) => {
            console.log(' we are in redirected-url');
            res.send("The URL gets Redirected !");
        });
        app.use('/redirected-url', (req, res) => {
            console.log(' we are in redirected-url');
            res.send("The URL gets Redirected !");
        });
        app.get('/health-check', function (req, res, next) {
            console.log(" I Am Ok");
            res.send('I Am Ok');
        });
        app.use(notFoundRoute_1.default);
        app.use(errorHandler_1.default);
        this.run();
    }
    run() {
        const { config: { port, mongo_uri } } = this;
        // const port = 3000;
        const database = new libs_1.Database();
        database.open(mongo_uri);
        //Database.open(mongoUri);
        // console.log(typeof(Database.open()));
        // console.log(mongo_uri);
        console.log('Port is :', port);
        const server = this.app.listen(port, () => {
            const message = `|| App is running in '${port}' in mode ||`;
            console.log(message);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map
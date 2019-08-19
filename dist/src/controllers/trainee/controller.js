"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TraineeController {
    get(req, res) {
        console.log("inside trainee controller get function!!!!!!!!!!!!!!");
        res.send([{
                name: 'fake response',
            }]);
    }
    create(req, res) {
        console.log("inside trainee controller create function !!!!!!!!!!!!!!");
        res.send([{
                status: 'ok',
                message: 'trainee created successfully',
                data: {
                    id: 'trainee',
                    name: 'pankaj'
                }
            }]);
    }
    update(req, res) {
        console.log("inside trainee controller update function!!!!!!!!!!!!!!");
        res.send([{
                status: 'ok',
                message: 'trainee update successfully',
                data: {
                    name: 'trainee',
                    id: 1,
                }
            }]);
    }
    delete(req, res) {
        console.log("inside trainee controller delete function !!!!!!!!!!!!!!");
        res.send([{
                status: 'ok',
                message: 'trainee delete successfully',
                data: {
                    name: 'trainee',
                    id: 1,
                }
            }]);
    }
}
exports.default = new TraineeController;
//# sourceMappingURL=controller.js.map
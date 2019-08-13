import { Request, Response } from 'express';

class TraineeController {
    get(req: Request, res: Response) {
        console.log("inside trainee controller get function!!!!!!!!!!!!!!");

        res.send([{
            name: 'fake response',
        }]);

    }
    create(req: Request, res: Response) {
        console.log("inside trainee controller create function !!!!!!!!!!!!!!");

        res.send([{
            status: 'ok',
            message: 'trainee created successfully',
            data: {
                id: 'trainee',
                name:'pankaj'
               
            }
        }]);

    }
    update(req: Request, res: Response) {
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
    delete(req: Request, res: Response) {
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

export default new TraineeController;
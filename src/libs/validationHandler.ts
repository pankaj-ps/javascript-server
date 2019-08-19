const validationHandler = (config) => (req, res, next) => {


    // console.log('config is ', config);
    // if(config){


    // console.log('config is >>>>>>>>>>>>>>>>>>>>', Object.keys(config));
    // }


    for (const key in config) {
        if (req.method === 'POST') {

            if (key in req['body'] && key === 'id') {
                console.log('key is ', key);
                if (typeof req['body']['id'] === 'string') {
                    console.log('Yes ID is string');
                }
                else {
                    console.log('No ID is not string');
                    next({
                        error: 'Wrong type',
                        message: 'ID should be string only',
                        status: 400,
                    });
                }
            }
            else if (key in req['body'] && key === 'name') {
                const regexs = new RegExp(config['name']['regex']);

                if (regexs.test(req['body']['name'])) {
                    console.log('Name is corrrect');
                } else {
                    next({
                        error: 'Wrong type',
                        message: 'name can only be alphanumeric',
                        status: 400,
                    });
                    console.log('Error in name');
                }
            }
            //first
            else if (key in req['body'] && key === 'email') {

                if (typeof req['body']['email'] === 'string') {
                    console.log('Yes Email is string');
                }
                else {
                    console.log('No Email is not string');
                    next({
                        error: 'Wrong type',
                        message: 'ID should be string only',
                        status: 400,
                    });
                }
            }
            else if (key in req['body'] && key === 'password') {
                //const regexs = new RegExp(config['name']['regex']);
                if (typeof req['body']['password'] === 'string') {
                    console.log('Yes Password is string');
                }
                else {
                    console.log('No Password is not string');
                    next({
                        error: 'Wrong type',
                        message: 'Password should be string only',
                        status: 400,
                    });
                }
            }




            //last
            else {
                console.log('Error');
                next({
                    error: 'Wrong Input',
                    message: 'ID and name both should be given',
                    status: 404,
                });
            }
        }
        // for Get Request
        if (req.method === 'GET') {

            if (key in req['body'] && key === 'id') {
                console.log('key is ', key);
                if (typeof req['body']['id'] === 'string') {
                    console.log('Yes ID is string');
                }
                else {
                    console.log('No ID is not string');
                    next({
                        error: 'Wrong type',
                        message: 'ID should be string only',
                        status: 400,
                    });
                }
            }
            else if (key in req['body'] && key === 'name') {
                const regexs = new RegExp(config['name']['regex']);

                if (regexs.test(req['body']['name'])) {
                    console.log('Name is corrrect');
                } else {
                    next({
                        error: 'Wrong type',
                        message: 'name can only be alphanumeric',
                        status: 400,
                    });
                    console.log('Error in name');
                }
            }
            //first
            else if (key in req['body'] && key === 'email') {

                if (typeof req['body']['email'] === 'string') {
                    console.log('Yes Email is string');
                }
                else {
                    console.log('No Email is not string');
                    next({
                        error: 'Wrong type',
                        message: 'ID should be string only',
                        status: 400,
                    });
                }
            }
            else if (key in req['body'] && key === 'password') {
                //const regexs = new RegExp(config['name']['regex']);
                if (typeof req['body']['password'] === 'string') {
                    console.log('Yes Password is string');
                }
                else {
                    console.log('No Password is not string');
                    next({
                        error: 'Wrong type',
                        message: 'Password should be string only',
                        status: 400,
                    });
                }
            }




            //last
            else {
                console.log('Error');
                next({
                    error: 'Wrong Input',
                    message: 'ID and name both should be given',
                    status: 404,
                });
            }
        }



    }


    next();
}


// const validationHandler = function (config) {
//     return function (req, res, next) {
//         console.log('config is ', config);
//         next();
//     };
// }
export default validationHandler;




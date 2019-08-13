const validationHandler=(config)=>(req,res,next)=>{

    console.log(" we are in validationHandler ");
   // console.log('config is ', config);
// if(config){
//     console.log(req['body']);

    console.log('config is >>>>>>>>>>>>>>>>>>>>',Object.keys(config));
// }


     for (const key in config) {
        if (req.method === 'POST') {
            console.log('Inside Post');
            console.log('type of req body',typeof(req['body']['id']));
            console.log('Key1 is ',key);
            if (key in req['body'] && key === 'id') {
                console.log('key is ',key);
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




import { Request, Response } from 'express';
import UserRepository from './../../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { config } from '../../config1';

const userRepository = new UserRepository();

class UserController {

    login(req: Request, res: Response, next) {
        console.log("inside User controller get function!!!!!!!!!!!!!!");
        const { email, password } = req.body;

        // userRepository.findOne({email:req['body']['email']}).then(user=>{
        //     console.log('User Is ',user);
        // });

        userRepository.findOne({ email }).then(user => {
            // console.log('User Is ',user)
            if (!user) {
                return next('User Not found');
            }
            console.log("USER INFO IS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.......>>>>>>>>>.................", user);
            //   userRepository.get(email,undefined,undefined).then(res=>);
            // console.log(" PASSWORD  IS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>",test['password'])
            // const { password: hashPassword } = user;
            if (!bcrypt.compareSync(password, user.password)) {
                return next('Password is Wrong');
            }
            console.log('User Is ', user);
            const token = jwt.sign(user, config.secret_key);
            console.log('Token is ', token);
            res.send({
                status: 'Ok',
                massage: 'Login succesfully',
                token
            });
        })




    }
}

export default new UserController;
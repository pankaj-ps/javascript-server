import { Request, Response } from 'express';
import UserRepository from './../../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { config } from '../../config1';

const userRepository = new UserRepository();

class UserController {

    login(req: Request, res: Response, next) {
       
        const { email, password } = req.body;

        // userRepository.findOne({email:req['body']['email']}).then(user=>{
        //     console.log('User Is ',user);
        // });

        userRepository.findOne({ email }).then(user => {
            
          

            if (!user) {
                return next('User Not found');
            }
            //   userRepository.get(email,undefined,undefined).then(res=>);
            // console.log(" PASSWORD  IS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>",test['password'])
            // const { password: hashPassword } = user;
            if (!bcrypt.compareSync(password, user.password)) {
                return next('Password is Wrong');
            }
            const token = jwt.sign(user, config.secret_key);
            res.send({
                status: 'Ok',
                massage: 'Login succesfully',
                token
            });
        })




    }

    getUser(req,res){
         res.send(" User");
    }
}

export default new UserController;
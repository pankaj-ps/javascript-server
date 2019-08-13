"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = require("./../../repositories/user/UserRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config1_1 = require("../../config1");
const userRepository = new UserRepository_1.default();
class UserController {
    login(req, res, next) {
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
            const token = jwt.sign(user, config1_1.config.secret_key);
            console.log('Token is ', token);
            res.send({
                status: 'Ok',
                massage: 'Login succesfully',
                token
            });
        });
    }
}
exports.default = new UserController;
//# sourceMappingURL=controller.js.map
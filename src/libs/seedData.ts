import * as bcrypt from 'bcrypt';
import UserRepository from '../repositories/user/UserRepository';


export default () => {
    const userRepository = new UserRepository();


    const saltRounds = 10;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync('Training@123', salt);
    const user = {
        name: 'User2',
        email: 'head.trainer@successive.tech',
        password: hash,
    }

  

    userRepository.create(user).then((res) => {
        console.log(' USer Is ', res);
    }).catch((err) => {
        console.log("Error is ", err)
    })
    userRepository.get({ name: 'user2' }, undefined, undefined).then(res => {
        console.log('Get User List   ', res['name']);
    }).catch(err => {
        console.log(' Err in get is ', err);
    });

    userRepository.count(user).then(res => {
        console.log('Count Succesfull>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', res);
    }).catch((err) => {
        console.log('Errr in count ', err);
    });

    //console.log('love to count ',userRepository.count(user));

}
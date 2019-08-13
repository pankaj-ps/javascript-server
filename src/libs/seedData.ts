import UserRepository from '../repositories/user/UserRepository';

export default () => {
    const userRepository = new UserRepository();

    const user = {
        name: 'User2',
        email: 'User1@gmail.com',
    }

    userRepository.create(user).then((res) => {
        console.log(' USer Is ', res);
    }).catch((err) => {
        console.log(' Error is ', err)
    })
      userRepository.get({ name:'user2'},undefined,undefined).then(res => {
          console.log('Get User List   ',res['name']);
      }).catch(err => {
          console.log(' Err in get is ',err);
      });
   

}
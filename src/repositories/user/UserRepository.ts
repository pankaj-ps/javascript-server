// import * as mongoose from 'mongoose'; 
import { IQueryGet } from './entities';
import { UserModel } from './UserModel';
import IUserModel from './IUserModel';

export default class UserRepository {
  UserModel;


  constructor() {
    this.UserModel = UserModel;
  }
  get(query: IQueryGet, projection, options) {
    return UserModel.find(query, projection, options)
  }
  create(data) {
    return UserModel.create(data);
  }

  findOne(query) {
    return UserModel.findOne(query).lean();
  }

  count(data) {
    return UserModel.count(data);
  }

} 
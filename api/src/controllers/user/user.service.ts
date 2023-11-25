import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async createUser(body: Record<string, any>) {
    try {
      let created = await this.userModel.create(body)
      if(created) {
        return {message:"Record Created Successfully"}
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async getUser(query:Record<string,any>) {
    try {
      let page  = Number(query.page) || 1
      let limit = Number(query.perPage) || 3
      let skip = (page-1) * limit
      let data = await this.userModel.find().skip(skip).limit(limit);
      if(data) {
        return {message:"Success", data}
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}

import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User, UserDocument} from "./schema/user.schema";
import {CreateUserDto} from "./dto/user.dto";


Injectable()

export class UsersServices {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async create(dto: CreateUserDto): Promise<User> {
      const user = await this.userModel.create({...dto})
      return user
    }

    async getAll(): Promise<User[]> {
      const users = await this.userModel.find()
      return users
    }


    async update() {

    }

    async delete() {

    }

}
import {ForbiddenException, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {User, UserDocument} from "./schema/user.schema";
import {CreateUserDto} from "./dto/user.dto";
import {signInDto} from "../auth/dto/signIn.dto";

Injectable()
export class UsersServices {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}



    async getAll(): Promise<User[]|undefined> {
      const users = await this.userModel.find()
      return users
    }

    async create(dto: CreateUserDto): Promise<User> {
        return await this.userModel.create({...dto})
    }

    async checkEmail(dto: signInDto): Promise<User| undefined>{
        return this.userModel.findOne({ email: dto.email })
    }

    async update(id: ObjectId, dto: CreateUserDto): Promise<User> {
        await this.userModel.updateOne({_id: id}, {$set : {...dto}})
        return this.userModel.findById({_id: id})
    }

    async delete(id: ObjectId): Promise<ObjectId> {
          const user = await this.userModel.findByIdAndDelete(id)
          return user.id
    }

}
import {ForbiddenException, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User, UserDocument} from "./schema/user.schema";
import {CreateUserDto} from "./dto/user.dto";
import {signInDto} from "../auth/dto/signIn.dto";


Injectable()

export class UsersServices {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async create(dto: CreateUserDto): Promise<User> {
      const check = await this.checkEmail(dto)
      if(check) throw new ForbiddenException()



      const user = await this.userModel.create({...dto})
      return user
    }

    async getAll(): Promise<User[]|undefined> {
      const users = await this.userModel.find()
      return users
    }

    async checkEmail(dto: signInDto): Promise<User| undefined>{
        return this.userModel.findOne({ email: dto.email })
    }

    async update() {

    }

    async delete() {

    }

}
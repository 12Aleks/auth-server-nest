import {Controller, Get, Post, Body} from "@nestjs/common";
import {UsersServices} from "./users.services";
import {CreateUserDto} from "./dto/user.dto";
import {signInDto} from "../auth/dto/signIn.dto";

@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersServices) {}


    @Post()
    create(@Body() dto: CreateUserDto) {
         return this.usersService.create(dto)
    }



    @Get()
    getAll() {
       return this.usersService.getAll()
    }


    update() {

    }

    delete() {

    }
}
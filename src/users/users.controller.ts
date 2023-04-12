import {Controller, Get, Post, Body, UseGuards} from "@nestjs/common";
import {UsersServices} from "./users.services";
import {CreateUserDto} from "./dto/user.dto";
import {signInDto} from "../auth/dto/signIn.dto";
import {AuthGuard} from "../auth/auth.guard";

@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersServices) {}


    @Post()
    create(@Body() dto: CreateUserDto) {
         return this.usersService.create(dto)
    }


    @UseGuards(AuthGuard)
    @Get()
    getAll() {
       return this.usersService.getAll()
    }


    update() {

    }

    delete() {

    }
}
import {Controller, Get, Post, Body, UseGuards, SetMetadata} from "@nestjs/common";
import {UsersServices} from "./users.services";
import {CreateUserDto} from "./dto/user.dto";
import {signInDto} from "../auth/dto/signIn.dto";
import {AuthGuard} from "../auth/auth.guard";
import {RolesGuard} from "../auth/roles.guard";

@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersServices) {}


    @Post()
    create(@Body() dto: CreateUserDto) {
         return this.usersService.create(dto)
    }


    // @UseGuards(RolesGuard)
    @Get()
    getAll() {
       return this.usersService.getAll()
    }


    update() {

    }

    delete() {

    }
}
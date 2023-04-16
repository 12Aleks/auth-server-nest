import {Controller, Get, Post, Body, UseGuards} from "@nestjs/common";
import {UsersServices} from "./users.services";
import {CreateUserDto} from "./dto/user.dto";
import {Roles} from "../auth/roles.decorator";
import {Role} from "../auth/role.enums";
import {RolesGuard} from "../auth/roles.guard";
import {AuthGuard} from "../auth/auth.guard";


@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersServices) {}


    @Post()
    create(@Body() dto: CreateUserDto) {
         return this.usersService.create(dto)
    }

    @UseGuards(AuthGuard, RolesGuard)
    @Get()
    @Roles(Role.User)
    getAll() {
       return this.usersService.getAll()
    }


    update() {

    }

    delete() {

    }
}
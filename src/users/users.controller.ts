import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from "@nestjs/common";
import {UsersServices} from "./users.services";
import {CreateUserDto} from "./dto/user.dto";
import {Roles} from "../auth/roles.decorator";
import {Role} from "../auth/role.enums";
import {RolesGuard} from "../auth/roles.guard";
import {AuthGuard} from "../auth/auth.guard";
import {ObjectId} from "mongoose";


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

    @UseGuards(AuthGuard, RolesGuard)
    @Put(':id')
    @Roles(Role.Admin)
    update(@Param('id') id: ObjectId, @Body() dto: CreateUserDto) {
        return this.usersService.update(id, dto)
    }

    @UseGuards(AuthGuard, RolesGuard)
    @Delete(':id')
    @Roles(Role.Admin)
    delete(@Param('id') id: ObjectId) {
        return this.usersService.delete(id)
    }
}
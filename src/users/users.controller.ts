import {Controller, Get, Post, Body} from "@nestjs/common";
import {UsersServices} from "./users.services";
import {CreateUserDto} from "./dto/user.dto";
import {JwtService} from "@nestjs/jwt";

@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersServices, private jwtService: JwtService) {}


    @Post()
    create(@Body() dto: CreateUserDto) {
         return this.usersService.create(dto)
    }



    @Get()
    getAll() {
       return this.usersService.getAll()
    }

    getOne() {

    }

    update() {

    }

    delete() {

    }
}
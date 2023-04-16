import {Controller, HttpStatus, HttpCode, Post, Get, Request, Body, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import { AuthGuard } from './auth.guard';
import {signInDto} from "./dto/signIn.dto";
import {CreateUserDto} from "../users/dto/user.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() dto: signInDto ){
       return this.authService.signIn({...dto})
    }

    @Post('registration')
    registration(@Body() dto: CreateUserDto){
        return this.authService.registration(dto)
    }


    @Get('profile')
    getProfile(@Request()req){
        return req.user
    }
}

import {Controller, HttpStatus, HttpCode, Post, Get, Request, Body, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import { AuthGuard } from './auth.guard';
import {signInDto} from "./dto/signIn.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)

    @Post('login')
    signIn(@Body() dto: signInDto ){
       return this.authService.signIn({...dto})
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request()req){
        return req.user
    }
}

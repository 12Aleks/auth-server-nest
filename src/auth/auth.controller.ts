import { Controller, HttpStatus, HttpCode, Post, Body } from '@nestjs/common';
import {AuthService} from "./auth.service";
import {signInDto} from "./dto/signIn.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)

    @Post('login')
    signIn(@Body() dto: signInDto ){
       return this.authService.signIn({...dto})
    }
}

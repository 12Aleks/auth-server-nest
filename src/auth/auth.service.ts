import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersServices} from "../users/users.services";
import {signInDto} from "./dto/signIn.dto";
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersServices,
        private jwtService: JwtService
    ) {
    }

    async signIn(dto: signInDto): Promise<{ access_token: string }> {
        const user = await this.userService.checkEmail({...dto})
        if (!user) throw new UnauthorizedException()


        const payload = {username: user.name, userRole: user.role};
        return {
           access_token: await this.jwtService.signAsync(payload)
        }
    }
}

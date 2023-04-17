import {ForbiddenException, Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersServices} from "../users/users.services";
import {signInDto} from "./dto/signIn.dto";
import {JwtService} from '@nestjs/jwt';
import {CreateUserDto} from "../users/dto/user.dto";
import {User} from "../users/schema/user.schema";
import {comparePasswords, encodePassword} from "../utils/bcrypt";

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersServices,
        private jwtService: JwtService
    ) {
    }

    async registration(dto: CreateUserDto): Promise<User> {
        const check = await this.userService.checkEmail(dto)
        if(check) throw new ForbiddenException()

        const hashPassword = encodePassword(dto.password)

        return await this.userService.create({...dto, password: hashPassword})
    }

    async signIn(dto: signInDto): Promise<{ access_token: string }> {
        const user = await this.userService.checkEmail({...dto})
        if (!user) throw new UnauthorizedException()

        const comparePassword = comparePasswords(dto.password, user.password);
        if(!comparePassword) throw new ForbiddenException("The password was entered incorrectly")

        const payload = {username: user.name, userRole: user.role};

        return {
           access_token: await this.jwtService.signAsync(payload)
        }
    }

}

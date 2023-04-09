import { Injectable } from '@nestjs/common';
import {UsersServices} from "../users/users.services";

@Injectable()
export class AuthService {
    constructor(private userService: UsersServices) {}
    async signIn(){

    }
}

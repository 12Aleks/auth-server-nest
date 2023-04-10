import {Injectable, CanActivate, ExecutionContext} from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';

//protect
@Injectable()
export class AuthGuard implements CanActivate {
 constructor(private jwtService: JwtService) {}
    async canActivate(context: ExecutionContext): Promise<boolean>{
      return true
    }
}
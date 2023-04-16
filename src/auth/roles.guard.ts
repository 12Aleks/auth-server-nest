import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import { Reflector } from '@nestjs/core';
import {ROLES_KEY} from "./roles.decorator";
import {Role} from "./role.enums";


@Injectable()

export class RolesGuard implements CanActivate{
    constructor(private reflector: Reflector) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredRoles) {
            return true;
        }

        const {user} = await context.switchToHttp().getRequest();
        console.log(user)
        return requiredRoles.some((roles) => user.userRole?.includes(roles));
        return false
    }
}
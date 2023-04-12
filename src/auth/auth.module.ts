import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {UsersModule} from "../users/users.module";
import { JwtModule } from '@nestjs/jwt';
import {APP_GUARD} from "@nestjs/core";
import {AuthGuard} from "./auth.guard";

@Module({
  imports: [
      UsersModule,
      JwtModule.register({
        global: true,
        secret: process.env.SECRET_KEY,
        signOptions: {expiresIn: '60m'}
      })
  ],
  providers: [
      AuthService
  ],
  controllers: [AuthController]
})
export class AuthModule {}

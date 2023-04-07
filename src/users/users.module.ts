import {Module} from "@nestjs/common";
import {UsersController} from "./users.controller";
import {UsersServices} from "./users.services";

@Module({
      controllers: [UsersController],
      providers: [UsersServices]
})
export class UsersModule {}
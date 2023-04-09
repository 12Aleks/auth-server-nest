import {Module} from "@nestjs/common";
import {UsersController} from "./users.controller";
import {UsersServices} from "./users.services";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./schema/user.schema";


@Module({
      imports: [
          MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
      ],
      controllers: [UsersController],
      providers: [UsersServices],
      exports: [UsersServices],
})
export class UsersModule {}
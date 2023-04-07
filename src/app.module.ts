import {Module} from "@nestjs/common";
import {UsersModule} from "./users/users.module";
import {MongooseModule} from "@nestjs/mongoose";

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;


@Module({
   imports: [
       MongooseModule.forRoot(`mongodb+srv://${USER}:${PASSWORD}@cluster0.q9j5c.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`),
       UsersModule
   ]
})
export class AppModule {}
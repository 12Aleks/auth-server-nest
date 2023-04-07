import {Controller, Get} from "@nestjs/common";

@Controller('/users')
export class UsersController {
    create() {

    }



    @Get()
    getAll() {
       return 'Server working'
    }

    getOne() {

    }

    update() {

    }

    delete() {

    }
}
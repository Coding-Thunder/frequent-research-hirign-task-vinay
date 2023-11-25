import { Controller, Get,Post,Body, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: CreateUserDto) {
     return await this.userService.createUser(body);
  }

  @Get()
  async getUser(@Query() pagination:Record<string,any>) {
    return await  this.userService.getUser(pagination);
  }
}

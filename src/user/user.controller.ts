import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  @Get()
  async getUserList() {
    return 'List';
  }

  @Post()
  async createUserAccount() {
    return 'New User';
  }
}

import { Body, Controller, HttpStatus, Post, Req } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  @Post('/')
  async createUserAccount(@Body() body: any) {
    return 'xxx';
  }
}

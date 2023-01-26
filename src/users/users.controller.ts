import { Controller, Post, Body } from '@nestjs/common';
import { RegisterBodyDto } from './dto/register-body-dto';
import { UsersService } from './users.service';
@Controller('users')

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('users')
  register(@Body() body: RegisterBodyDto) {
    const { email, password, name } = body;

    
  }
}

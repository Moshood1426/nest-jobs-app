import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterBodyDto } from './dto/register-body-dto';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('users')
  register(@Body() body: RegisterBodyDto) {
    return this.authService.register(body)
  }
}

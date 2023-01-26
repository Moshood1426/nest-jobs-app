import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterBodyDto } from './dto/register-body-dto';
import { GenTokenInterceptor } from './interceptors/generateToken.interceptors';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @UseInterceptors(GenTokenInterceptor)
  @Post()
  register(@Body() body: RegisterBodyDto) {
    return this.authService.register(body)
  }
}

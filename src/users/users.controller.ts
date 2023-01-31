import {
  Controller,
  Post,
  Get,
  Body,
  UseInterceptors,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { User } from './decorator/user.decorator';
import { LoginBodyDto } from './dto/login-body-dto';
import { RegisterBodyDto } from './dto/register-body-dto';
import { GenTokenInterceptor } from './interceptors/generateToken.interceptors';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @UseInterceptors(GenTokenInterceptor)
  @Post('/register')
  register(@Body() body: RegisterBodyDto) {
    return this.authService.register(body);
  }

  @UseInterceptors(GenTokenInterceptor)
  @Post('/login')
  login(@Body() body: LoginBodyDto) {
    return this.authService.signIn(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/showUser')
  showUser(
    @Request() req: Request,
    @User() user: { userId: string; email: string },
  ) {
    const id = user.userId;
    return this.usersService.showUser(id);
  }

  @UseGuards(JwtAuthGuard)
  //authorize permissions
  deleteUser(id: string) {
    return this.usersService.deleteUser(id);
  }
}

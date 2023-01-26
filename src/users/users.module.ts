import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';


@Module({
  controllers: [UsersController],
  providers: [UsersService, AuthService],
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.lifetime},
    }),
  ],
})
export class UsersModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private readonly usersRepo: User) {}

  
  register(userObj: { email: string; password: string; name: string }) {
    const { email, password, name } = userObj

    
  }
}

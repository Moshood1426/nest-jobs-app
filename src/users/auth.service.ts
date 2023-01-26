import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly usersRepo: Repository<User>,
  ) {}

  async register(userObj: { email: string; password: string; name: string }) {
    const { email, password, name } = userObj;

    //check if user exists
    const userExists = await this.usersRepo.findOneBy({ email });
    if (userExists) {
      throw new BadRequestException('User with email exists');
    }

    //hashes password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user instance
    const user = this.usersRepo.create({
      ...userObj,
      password: hashedPassword,
    });

    return this.usersRepo.save(user)
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepo: Repository<User>,
  ) {}

  showUser(id: string) {
    return this.usersRepo.findOneBy({ id: +id });
  }

  async deleteUser(id: string) {
    const user = await this.usersRepo.findOneBy({ id: +id });

    return this.usersRepo.remove(user);
  }

  findOne(id: number) {
    return this.usersRepo.findOneBy({ id: id });
  }
}

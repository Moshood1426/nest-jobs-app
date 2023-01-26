import {
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
  Injectable,
} from '@nestjs/common';
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

    return this.usersRepo.save(user);
  }

  async signIn(userObj: { email: string; password: string }) {
    const { email, password } = userObj;
    const user = await this.usersRepo.findOneBy({ email });
    const newUser = await this.usersRepo
      .createQueryBuilder('user')
     // .select('id email')
      .where('user.email = email')
      .getOne();

    console.log(newUser)
    if (!user) {
      throw new NotFoundException('User with email does not exist');
    }

    const confirmPassword = await bcrypt.compare(password, user.password);
    if (!confirmPassword) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    return user;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job-body.dto';
import { JobEntity } from './entity/job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(JobEntity)
    private readonly jobsRepo: Repository<JobEntity>,
    private readonly usersService: UsersService,
  ) {}

  async create(body: CreateJobDto, user: User) {
    console.log({ ...body, user });
    const job = this.jobsRepo.create({ ...body });
    // const currentUser = await this.usersRepo.findOne({where : {id: user.id}})
    // job.createdBy = currentUser;
    const currentUser = await this.usersService.findOne(user.id);
    job.createdBy = currentUser;

    return this.jobsRepo.save(job);
  }

  getAll() {}
}

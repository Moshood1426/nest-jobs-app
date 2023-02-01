import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job-body.dto';
import { JobEntity } from './entity/job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(JobEntity)
    private readonly jobsRepo: Repository<JobEntity>,
  ) {}

  create(body: CreateJobDto, user: User) {
    const job = this.jobsRepo.create({ ...body });
    job.createdBy = user;
  }
}

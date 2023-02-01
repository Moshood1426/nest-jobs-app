import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/users/auth/jwt-auth.guard';
import { User } from 'src/users/decorator/user.decorator';
import { User as UserEntity } from 'src/users/entity/user.entity';
import { CreateJobDto } from './dto/create-job-body.dto';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  createJob(
    @Body() body: CreateJobDto,
    @User() user: UserEntity,
  ) {
    return this.jobsService.create(body, user);
  }
}

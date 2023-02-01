import { IsString, IsIn } from 'class-validator';

export class CreateJobDto {
  @IsString()
  company: string;

  @IsIn(['interview', 'declined', 'pending'])
  status: string;

  @IsIn(['full-time', 'part-time', 'remote', 'internship'])
  jobType: string;

  @IsString()
  position: string;

  @IsString()
  jobLocation: string;
}

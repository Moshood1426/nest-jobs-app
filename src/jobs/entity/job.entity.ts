import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entity/user.entity';

type JobStatusType = 'interview' | 'declined' | 'pending';
type JobType = 'full-time' | 'part-time' | 'remote' | 'internship';

@Entity()
export class JobEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company: string;

  @Column()
  position: string;

  @Column({
    // type: 'enum',
    // enum: ['interview', 'declined', 'pending'],
    // default: 'pending',
  })
  status: string;

  @Column({
    // type: 'enum',
    // enum: ['full-time', 'part-time', 'remote', 'internship'],
    // default: 'full-time',
  })
  jobType: string;

  @Column({ default: 'my city' })
  jobLocation: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  createdBy: User;
}

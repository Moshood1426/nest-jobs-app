import { JobEntity } from 'src/jobs/entity/job.entity';
import { PrimaryGeneratedColumn, Column, Entity, BeforeInsert, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToMany(() => JobEntity, (job) => job.createdBy)
  jobs: JobEntity[]

  // @BeforeInsert()
  // beforeInsert() {}
}

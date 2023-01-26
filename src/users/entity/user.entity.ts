import { PrimaryGeneratedColumn, Column, Entity, BeforeInsert } from 'typeorm';

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

  // @BeforeInsert()
  // beforeInsert() {}
}

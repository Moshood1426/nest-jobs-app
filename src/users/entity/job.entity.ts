import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class JobEntity {
    @PrimaryGeneratedColumn()
    id: string
}
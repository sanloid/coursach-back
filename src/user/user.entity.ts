import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn({name : 'id'})
    id: number;

    @Column({name : 'name'})
    name: string;

    @Column({name : 'password'})
    password: string;
}
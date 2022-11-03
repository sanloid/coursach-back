import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('note')
export class Note {

    @PrimaryGeneratedColumn({name : 'id'})
    id: number;

    @Column({name : 'author'})
    author: string;

    // @Column({name : 'userId'})
    // userId : number;

    @Column({name : 'title'})
    title: string;

    @Column({name : 'body'})
    body: string;
}
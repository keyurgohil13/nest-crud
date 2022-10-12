import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'employees' })

export class Employee {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name :  string;

    @Column()
    salary : number;

    @Column()
    age : number;

}
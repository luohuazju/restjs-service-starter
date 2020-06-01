import { Column, Entity, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    language: string;

    @Column({ default: true })
    isActive: boolean;
}
import { Column, Entity, ObjectIdColumn, ObjectId, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Organization {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    name: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ nullable: true })
    logoUrl?: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    // Reference to User - Store the user's ObjectId
    @Column('objectid')
    userId: ObjectId;
}
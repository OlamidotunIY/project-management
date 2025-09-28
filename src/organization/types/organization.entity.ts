import { Column, Entity, ObjectIdColumn, ObjectId, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../user/types/user.enitity";

@Entity()
export class Organization {
    @ObjectIdColumn()
    _id: ObjectId;
    
    @Column({ length: 100 })
    name: string;

    @Column('text', { nullable: true })
    description: string;

    @Column('text', { nullable: true })
    logoUrl: string;

   @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

    // Relation to User - Many organizations can belong to one user
    @Column({ nullable: true })
    ownerId?: ObjectId;
    // @ManyToOne(() => User, (user) => user.organizations, { nullable: false, onDelete: 'CASCADE' })
    // @JoinColumn({ name: 'ownerId' })
    // owner: User;

    @Column({ nullable: true })
    memberIds?: ObjectId[];
    // @ManyToMany(() => User, (user) => user.organizations)
    // @JoinTable({
    //     name: 'organization_members',
    //     joinColumn: { name: 'organizationId', referencedColumnName: '_id' },
    //     inverseJoinColumn: { name: 'userId', referencedColumnName: '_id' },
    // })
    // members?: User[];
}
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ObjectIdColumn, ObjectId } from "typeorm";
import { User } from "../../user/types/user.enitity";

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

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column('timestamp', {
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
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
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../../user/types/user.enitity";

@Entity()
export class Organization {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column('text', { nullable: true })
    description: string;

    @Column('text', { nullable: true })
    logoUrl: string;

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column('timestamp', {
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;

    // Relation to User - Many organizations can belong to one user
    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({ name: 'userId' })
    owner: User;

    @Column()
    userId: number;
}
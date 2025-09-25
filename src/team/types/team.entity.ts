import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany,
	JoinTable,
	ManyToOne,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/types/user.enitity';
import { Project } from '../../project/types/project.entity';

@Entity()
export class Team {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 100 })
	name: string;

	@Column('text', { nullable: true })
	description?: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	// Users that belong to this team
	@ManyToMany(() => User, (user) => user as any /* inverse side not declared here */)
	@JoinTable()
	members?: User[];

	// Projects this team is assigned to
	@ManyToMany(() => Project, (project) => project.teams)
	projects?: Project[];

	// Optional team lead
	@ManyToOne(() => User, { nullable: true })
	lead?: User;
}

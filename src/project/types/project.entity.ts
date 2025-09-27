import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	ManyToMany,
	JoinTable,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/types/user.enitity';
import { Organization } from '../../organization/types/organization.entity';
import { Team } from '../../team/types/team.entity';

export type projectStatus = 'active' | 'completed' | 'pending' | 'archived';

@Entity()
export class Project {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 150 })
	name: string;

	@Column('text', { nullable: true })
	description?: string;

	@Column({ length: 50, default: 'active' })
	status: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	// Optional owner of the project (a User)
	@ManyToOne(() => User, { nullable: true })
	owner?: User;

	// Optional organization this project belongs to
	@ManyToOne(() => Organization, (org) => (org as any).projects, { nullable: true })
	organization?: Organization;

	// Teams working on this project. Many teams can work on many projects.
	@ManyToMany(() => Team, (team) => team.projects, { cascade: true })
	@JoinTable()
	teams?: Team[];
}

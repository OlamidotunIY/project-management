import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../user/types/user.enitity';
import { Project } from '../../project/types/project.entity';
import { Team } from '../../team/types/team.entity';
import { TaskStatus, TaskPriority } from './taks.enum';

@Entity()
export class Task {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 200 })
	title: string;

	@Column('text', { nullable: true })
	description?: string;

	@Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.PENDING })
	status: TaskStatus;

	@Column({ type: 'enum', enum: TaskPriority, default: TaskPriority.MEDIUM })
	priority: TaskPriority;

	@Column('timestamp', { nullable: true })
	dueDate?: Date;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	// The project this task belongs to
	@ManyToOne(() => Project, (project) => (project as any).tasks, { nullable: false, onDelete: 'CASCADE' })
	project: Project;

	// The user assigned to work on this task (optional)
	@ManyToOne(() => User, { nullable: true })
	assignee?: User;

	// The user who reported/created the task (optional)
	@ManyToOne(() => User, { nullable: true })
	reporter?: User;

	// Optional team owning / working on this task
	@ManyToOne(() => Team, (team) => (team as any).tasks, { nullable: true })
	team?: Team;
}


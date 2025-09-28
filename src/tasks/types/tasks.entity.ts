import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, ObjectIdColumn, ObjectId } from 'typeorm';
import { User } from '../../user/types/user.enitity';
import { Project } from '../../project/types/project.entity';
import { Team } from '../../team/types/team.entity';
import { TaskStatus, TaskPriority } from './taks.enum';

@Entity()
export class Task {
	@ObjectIdColumn()
	_id: ObjectId;

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
	@Column({ nullable: true })
	projectId?: ObjectId;

	// The user assigned to work on this task (optional)
	@Column({ nullable: true })
	assigneeId?: ObjectId;

	// The team assigned to this task (optional)
	@Column({ nullable: true })
	teamId?: ObjectId;

	// The user who reported/created the task (optional)
	@Column({ nullable: true })
	reporterId?: ObjectId;

	// Optional team owning / working on this task
	@Column({ nullable: true })
	teamOwnerId?: ObjectId;
}


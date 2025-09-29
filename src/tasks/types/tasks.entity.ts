import { Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectIdColumn, ObjectId } from 'typeorm';
import { TaskStatus, TaskPriority } from './tasks.enum';

@Entity()
export class Task {
	@ObjectIdColumn()
	_id: ObjectId;

	@Column()
	title: string;

	@Column({ nullable: true })
	description?: string;

	@Column({ enum: TaskStatus, default: TaskStatus.PENDING })
	status: TaskStatus;

	@Column({ enum: TaskPriority, default: TaskPriority.MEDIUM })
	priority: TaskPriority;

	@Column({ nullable: true })
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


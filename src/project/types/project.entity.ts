import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ObjectIdColumn,
	ObjectId,
} from 'typeorm';

import { ProjectStatus } from './project.enum';

@Entity()
export class Project {
	@ObjectIdColumn()
	_id: ObjectId;

	@Column({ length: 150 })
	name: string;

	@Column('text', { nullable: true })
	description?: string;

	@Column({ type: 'enum', enum: ProjectStatus, default: ProjectStatus.ACTIVE, })
	status: ProjectStatus;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	// Reference to User (owner) - Store ObjectId
	@Column({ nullable: true })
	ownerId?: ObjectId;
	

	// Reference to Organization - Store ObjectId
	@Column({ nullable: true })
	organizationId?: ObjectId;

	// Array of Team ObjectIds working on this project
	@Column({ nullable: true })
	teamIds?: ObjectId[];
}

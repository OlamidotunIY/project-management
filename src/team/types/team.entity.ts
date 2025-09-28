import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ObjectIdColumn,
	ObjectId,
} from 'typeorm';

@Entity()
export class Team {
	@ObjectIdColumn()
	_id: ObjectId;

	@Column({ length: 100 })
	name: string;

	@Column('text', { nullable: true })
	description?: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	// Users that belong to this team
	@Column({nullable: true})
	memberIds?: ObjectId[];


	// Projects this team is assigned to
	@Column({ nullable: true })
	projectIds?: ObjectId[];

	// Optional team lead
	@Column({ nullable: true })
	teamLeadId?: ObjectId;
}

import { Column, Entity, OneToMany, ObjectIdColumn, CreateDateColumn, UpdateDateColumn, ObjectId } from 'typeorm';
import { Organization } from '../../organization/types/organization.entity';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({ length: 100 })
  name: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text', { select: false, nullable: false })
  password: string;

  @Column('text', { unique: true })
  username: string;

  @Column('text', { nullable: true })
  profilePictureUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relation to Organization - One user can own many organizations
  @Column({ nullable: true })
  organizationIds?: ObjectId[];
}

import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity('organizations')
export class Organization {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  logoUrl?: string;

  @Column()
  createdAt: Date = new Date();

  @Column()
  updatedAt: Date = new Date();

  @Column({ nullable: true })
  ownerId?: ObjectId;


  @Column()
  memberIds?: ObjectId[];
}

import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Organization } from '../../organization/types/organization.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  // Relation to Organization - One user can own many organizations
  @OneToMany(() => Organization, (organization) => organization.owner)
  organizations: Organization[];
}

import { User } from '../../user/types/user.enitity';
import { Organization } from '../../organization/types/organization.entity';
import { Team } from '../../team/types/team.entity';
export type projectStatus = 'active' | 'completed' | 'pending' | 'archived';
export declare class Project {
    id: number;
    name: string;
    description?: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    owner?: User;
    organization?: Organization;
    teams?: Team[];
}

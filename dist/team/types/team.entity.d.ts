import { User } from '../../user/types/user.enitity';
import { Project } from '../../project/types/project.entity';
export declare class Team {
    id: number;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
    members?: User[];
    projects?: Project[];
    lead?: User;
}

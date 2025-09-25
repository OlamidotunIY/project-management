import { User } from '../../user/types/user.enitity';
import { Project } from '../../project/types/project.entity';
import { Team } from '../../team/types/team.entity';
export type TaskStatus = 'todo' | 'in_progress' | 'done' | 'blocked';
export type TaskPriority = 'low' | 'medium' | 'high' | 'critical';
export declare class Task {
    id: number;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate?: Date;
    createdAt: Date;
    updatedAt: Date;
    project: Project;
    assignee?: User;
    reporter?: User;
    team?: Team;
}

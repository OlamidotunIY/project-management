import { Repository } from 'typeorm';
import { Task } from './types/tasks.entity';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
}
